---
grandParent: "Pandas"
grandParentOrder: 20
parent: "Data Inspection"
parentOrder: 20
self: "Column Selection"
selfOrder: 30
---

## Single Column Selection
Select single columns using either square brackets or dot notation. Square brackets work with any column name, while dot notation only works with valid Python variable names.

```python
import pandas as pd

df = pd.DataFrame({
   'user_id': [1, 2, 3],
   'first_name': ['John', 'Jane', 'Bob'],
   'last_name': ['Smith', 'Doe', 'Johnson'],
   'age': [25, 30, 35]
})

# Using square brackets (returns Series)
print(df['first_name'])
```
```output
0     John
1     Jane
2      Bob
Name: first_name, dtype: object
```

## Multiple Columns
Select multiple columns using a list of column names. The result is always a DataFrame, preserving the relationship between columns.

```python
# Select multiple columns
df = pd.DataFrame({
   'user_id': [1, 2, 3],
   'first_name': ['John', 'Jane', 'Bob'],
   'last_name': ['Smith', 'Doe', 'Johnson'],
   'age': [25, 30, 35]
})
print(df[['first_name', 'last_name']])
```
```output
 first_name last_name
0       John    Smith
1       Jane      Doe
2        Bob  Johnson
```

## Column Type Filtering
Select columns based on their data types. Useful for separating numerical and categorical data.

```python
df = pd.DataFrame({
   'A': [1, 2, 3],
   'B': ['a', 'b', 'c'],
   'C': [1.1, 2.2, 3.3],
   'D': [True, False, True]
})

# Select only numeric columns
print(df.select_dtypes(include=['number']))
```
```output
  A    C
0  1  1.1
1  2  2.2
2  3  3.3
```

## Pattern Matching
Select columns whose names match specific patterns using regex or simple string methods.

```python
df = pd.DataFrame({
   'name': ['John', 'Jane'],
   'age': [25, 30],
   'score_math': [90, 85],
   'score_english': [88, 92],
   'score_science': [85, 88]
})

# Select columns that start with 'score'
print(df.filter(regex='^score'))
```
```output
  score_math  score_english  score_science
0          90            88            85
1          85            92            88
```

## Column Reordering
Reorder columns by creating a new list of column names in the desired order.

```python
df = pd.DataFrame({
   'name': ['John', 'Jane'],
   'age': [25, 30],
   'city': ['NY', 'LA']
})

# Reorder columns
new_order = ['age', 'name', 'city']
print(df[new_order])
```
```output
  age  name city
0   25  John   NY
1   30  Jane   LA
```

## Column Renaming
Rename columns using a dictionary mapping, a function, or by assigning directly to columns attribute. Useful for cleaning up column names or making them more descriptive.

```python
df = pd.DataFrame({
   'A': [1, 2, 3],
   'First Name': ['John', 'Jane', 'Bob'],
   'DOB': ['1990-01-01', '1992-02-02', '1985-03-03']
})

# Using rename method with dictionary
print(df.rename(columns={
   'A': 'ID',
   'First Name': 'first_name',
   'DOB': 'birth_date'
}))
```
```output
  ID first_name  birth_date
0   1       John  1990-01-01
1   2       Jane  1992-02-02
2   3        Bob  1985-03-03
```

```python
# Using a function to clean all column names
df = pd.DataFrame({
   'First Name': ['John', 'Jane'],
   'Last Name': ['Doe', 'Smith'],
   'Phone #': ['555-1234', '555-5678']
})
print(df.rename(columns=lambda x: x.lower().replace(' ', '_').replace('#', 'num')))
```
```output
 first_name last_name  phone_num
0       John      Doe   555-1234
1       Jane    Smith   555-5678
```

## Data Type Filtering
Select or exclude columns based on their data types. Essential for numerical analysis or handling categorical data.

```python
df = pd.DataFrame({
   'int_col': [1, 2, 3],
   'float_col': [1.1, 2.2, 3.3],
   'str_col': ['a', 'b', 'c'],
   'bool_col': [True, False, True],
   'datetime_col': pd.date_range('2023-01-01', periods=3),
   'category_col': pd.Categorical(['x', 'y', 'z'])
})

# Select numeric columns
print("Numeric columns:")
print(df.select_dtypes(include=['number']))
```
```output
Numeric columns:
  int_col  float_col
0        1        1.1
1        2        2.2
2        3        3.3
```

```python
# Select string and categorical columns
print("String and categorical columns:")
print(df.select_dtypes(include=['object', 'category']))
```
```output
String and categorical columns:
 str_col category_col
0       a           x
1       b           y
2       c           z
```

```python
# Exclude specific types
print("All columns except datetime:")
print(df.select_dtypes(exclude=['datetime64[ns]']).columns.tolist())
```
```output
All columns except datetime:
['int_col', 'float_col', 'str_col', 'bool_col', 'category_col']
```

