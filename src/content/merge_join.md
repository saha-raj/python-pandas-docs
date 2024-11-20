---
grandParent: "Pandas"
grandParentOrder: 20
parent: "Combining"
parentOrder: 80
self: "Merge and Join"
selfOrder: 10
---

## Basic Merge Types
Combine DataFrames using different join types: inner, outer, left, right. Similar to SQL joins.

```python
import pandas as pd

# Create sample dataframes
df1 = pd.DataFrame({
   'id': [1, 2, 3, 4],
   'name': ['John', 'Anna', 'Peter', 'Linda']
})

df2 = pd.DataFrame({
   'id': [1, 2, 3, 5],
   'salary': [50000, 60000, 70000, 65000]
})

# Inner join
print("Inner join:")
print(pd.merge(df1, df2, on='id', how='inner'))
```
```output
Inner join:
  id   name  salary
0   1   John   50000
1   2   Anna   60000
2   3  Peter   70000
```

## Left and Right Joins
Keep all records from one DataFrame while joining with another.

```python
# Left join
print(pd.merge(df1, df2, on='id', how='left'))
```
```output
  id   name  salary
0   1   John   50000
1   2   Anna   60000
2   3  Peter   70000
3   4  Linda     NaN
```

## Multiple Keys
Join DataFrames using multiple columns as keys.

```python
df1 = pd.DataFrame({
   'dept': ['IT', 'IT', 'HR'],
   'year': [2023, 2024, 2023],
   'budget': [100000, 120000, 80000]
})

df2 = pd.DataFrame({
   'dept': ['IT', 'IT', 'HR'],
   'year': [2023, 2024, 2024],
   'employees': [10, 12, 5]
})

print(pd.merge(df1, df2, on=['dept', 'year']))
```
```output
 dept  year   budget  employees
0   IT  2023   100000        10
1   IT  2024   120000        12
```

## Join with Indicators
Track where rows came from in the join operation.

```python
df1 = pd.DataFrame({'id': [1, 2, 3], 'value': ['a', 'b', 'c']})
df2 = pd.DataFrame({'id': [2, 3, 4], 'value': ['x', 'y', 'z']})

print(pd.merge(df1, df2, on='id', how='outer', indicator=True))
```
```output
  id value_x value_y      _merge
0   1      a    None   left_only
1   2      b      x       both
2   3      c      y       both
3   4   None      z  right_only
```

## Validation
Validate merge operations to ensure data integrity.

```python
df1 = pd.DataFrame({
   'id': [1, 2, 2],  # Note: duplicate key
   'value': ['a', 'b', 'c']
})

df2 = pd.DataFrame({
   'id': [1, 2],
   'info': ['x', 'y']
})

# Merge with validation
try:
   print(pd.merge(df1, df2, on='id', validate='1:1'))
except pd.errors.MergeError as e:
   print("Merge validation failed:", str(e))
```
```output
Merge validation failed: Merge keys are not unique in left dataset; not a one-to-one merge
```

## Suffix Handling
Manage column names when joining DataFrames with overlapping columns.

```python
df1 = pd.DataFrame({
   'id': [1, 2],
   'value': ['a', 'b'],
   'info': [10, 20]
})

df2 = pd.DataFrame({
   'id': [1, 2],
   'value': ['x', 'y'],
   'info': [100, 200]
})

print(pd.merge(df1, df2, on='id', suffixes=('_left', '_right')))
```
```output
  id value_left  info_left value_right  info_right
0   1         a        10          x         100
1   2         b        20          y         200
```