---
grandParent: "Pandas"
grandParentOrder: 20
parent: "Transforming"
parentOrder: 40
self: "Column Transformations"
selfOrder: 30
---

## Apply Functions
Transform column data using `apply()`. Can use both built-in and custom functions, operating on each element.

```python
import pandas as pd

df = pd.DataFrame({
   'name': ['John Smith', 'Anna Johnson', 'Peter Williams'],
   'age': [25, 30, 35]
})

# Custom function
def get_last_name(full_name):
   return full_name.split()[-1]

# Apply to column
df['last_name'] = df['name'].apply(get_last_name)
print(df)
```
```output
             name  age  last_name
0       John Smith   25     Smith
1    Anna Johnson   30   Johnson
2  Peter Williams   35  Williams
```

## Map Values
Replace values using a mapping dictionary. Useful for recoding categorical data or creating lookup translations.

```python
df = pd.DataFrame({
   'grade': ['A', 'B', 'C', 'A', 'F'],
   'score': [95, 85, 75, 92, 55]
})

# Map grades to descriptive values
grade_map = {'A': 'Excellent', 'B': 'Good', 'C': 'Fair', 'F': 'Fail'}
df['grade_desc'] = df['grade'].map(grade_map)
print(df)
```
```output
 grade  score grade_desc
0     A     95  Excellent
1     B     85      Good
2     C     75      Fair
3     A     92  Excellent
4     F     55      Fail
```

## Replace Values
Replace specific values in columns, including handling missing data.

```python
df = pd.DataFrame({
   'score': [100, 999, 85, -999, 90],
   'grade': ['A', 'missing', 'B', 'unknown', 'A']
})

# Replace error codes and missing values
df['score'] = df['score'].replace({999: None, -999: None})
df['grade'] = df['grade'].replace(['missing', 'unknown'], None)
print(df)
```
```output
  score grade
0    100     A
1    NaN  None
2     85     B
3    NaN  None
4     90     A
```

## Conditional Operations
Update values based on conditions using `numpy.where()` or `pandas.select(`).

```python
df = pd.DataFrame({
   'score': [65, 75, 85, 95],
   'attendance': [80, 90, 85, 100]
})

# Create conditional column
df['status'] = np.where(
   (df['score'] >= 70) & (df['attendance'] >= 80),
   'Pass',
   'Fail'
)
print(df)
```
```output
  score  attendance status
0     65          80   Fail
1     75          90   Pass
2     85          85   Pass
3     95         100   Pass
```

## String Operations
Use string methods for text manipulation and cleaning.

```python
df = pd.DataFrame({
   'text': ['  HELLO  ', 'world  ', '  Python  ', 'DATA']
})

# Multiple string operations
df['clean_text'] = df['text'].str.strip().str.title()
print(df)
```
```output
        text clean_text
0    HELLO     Hello
1   world      World
2   Python     Python
3     DATA     Data
```

## Multiple Transformations
Chain multiple operations together for complex transformations.

```python
df = pd.DataFrame({
   'name': ['JOHN DOE', 'jane smith', '  Bob Wilson  '],
   'email': ['JOHN@email.com', 'jane@email.com', 'bob@email.com']
})

# Clean and standardize text
df['clean_name'] = (df['name']
   .str.strip()                    # Remove whitespace
   .str.title()                    # Capitalize first letters
)
print(df)
```
```output
           name           email    clean_name
0       JOHN DOE   JOHN@email.com    John Doe
1     jane smith   jane@email.com  Jane Smith
2   Bob Wilson   bob@email.com   Bob Wilson
```