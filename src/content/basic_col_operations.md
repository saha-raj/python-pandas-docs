---
grandParent: "Pandas"
grandParentOrder: 20
parent: "Data Transformation"
parentOrder: 40
self: "Basic Column Operations"
selfOrder: 10
---

## Adding Columns
Add new columns using direct assignment, `insert()`, or `assign()`. Each method has different benefits for different scenarios.

```python
import pandas as pd

df = pd.DataFrame({
   'name': ['John', 'Anna', 'Peter'],
   'age': [25, 30, 35]
})

# Direct assignment
df['salary'] = [50000, 60000, 75000]
print(df)
```
```output
   name  age  salary
0   John   25   50000
1   Anna   30   60000
2  Peter   35   75000
```

```python
# Using insert() to add column at specific position
df = pd.DataFrame({
   'name': ['John', 'Anna', 'Peter'],
   'age': [25, 30, 35]
})
df.insert(1, 'id', [101, 102, 103])
print(df)
```
```output
   name   id  age
0   John  101   25
1   Anna  102   30
2  Peter  103   35
```

## Removing Columns
Remove columns using `drop()` or `del`. `drop()` is more flexible and returns a new DataFrame by default.

```python
df = pd.DataFrame({
   'name': ['John', 'Anna', 'Peter'],
   'age': [25, 30, 35],
   'temp': [1, 2, 3],
   'test': ['a', 'b', 'c']
})

# Drop single column
print(df.drop('temp', axis=1))
```
```output
   name  age test
0   John   25    a
1   Anna   30    b
2  Peter   35    c
```

```python
# Drop multiple columns
print(df.drop(['temp', 'test'], axis=1))
```
```output
   name  age
0   John   25
1   Anna   30
2  Peter   35
```

## Renaming Columns
Rename columns using `rename()` or by assigning new column names. `rename()` offers more flexibility for complex renaming.

```python
df = pd.DataFrame({
   'first_name': ['John', 'Anna'],
   'last_name': ['Smith', 'Jones'],
   'DOB': ['1990-01-01', '1992-02-02']
})

# Using rename with dictionary
print(df.rename(columns={
   'DOB': 'birth_date',
   'first_name': 'fname'
}))
```
```output
  fname last_name  birth_date
0   John    Smith  1990-01-01
1   Anna    Jones  1992-02-02
```

## Reordering Columns
Change column order using either index selection or `reindex`.

```python
df = pd.DataFrame({
   'name': ['John', 'Anna'],
   'age': [25, 30],
   'city': ['NY', 'SF']
})

# Reorder using column list
new_order = ['age', 'name', 'city']
print(df[new_order])
```
```output
  age  name city
0   25  John   NY
1   30  Anna   SF
```

```python
# Reorder using reindex
print(df.reindex(columns=['city', 'name', 'age']))
```
```output
 city  name  age
0   NY  John   25
1   SF  Anna   30
```