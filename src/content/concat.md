---
grandParent: "Pandas"
grandParentOrder: 20
parent: "Combining"
parentOrder: 80
self: "Concatenation"
selfOrder: 20
---

## Vertical Stacking
Combine DataFrames by stacking them vertically (adding rows). Useful when combining data from multiple sources with same columns.

```python
import pandas as pd

df1 = pd.DataFrame({
   'name': ['John', 'Anna'],
   'age': [25, 30]
})

df2 = pd.DataFrame({
   'name': ['Peter', 'Linda'],
   'age': [35, 28]
})

# Simple concatenation
print(pd.concat([df1, df2], axis=0))
```
```output
   name  age
0   John   25
1   Anna   30
0  Peter   35
1  Linda   28
```

## Horizontal Joining
Combine DataFrames side by side (adding columns). Useful when data attributes are split across files.

```python
df1 = pd.DataFrame({
   'name': ['John', 'Anna', 'Peter'],
   'age': [25, 30, 35]
})

df2 = pd.DataFrame({
   'city': ['NY', 'SF', 'LA'],
   'salary': [50000, 60000, 70000]
})

print(pd.concat([df1, df2], axis=1))
```
```output
   name  age city  salary
0   John   25   NY   50000
1   Anna   30   SF   60000
2  Peter   35   LA   70000
```

## Index Handling
Control how indexes are managed during concatenation.

```python
df1 = pd.DataFrame({
   'A': [1, 2]
}, index=['a', 'b'])

df2 = pd.DataFrame({
   'A': [3, 4]
}, index=['c', 'd'])

# Concatenate with index reset
print("Reset index:")
print(pd.concat([df1, df2], ignore_index=True))
```
```output
Reset index:
  A
0  1
1  2
2  3
3  4
```

## Handling Missing Values
Deal with mismatched columns when concatenating DataFrames.

```python
df1 = pd.DataFrame({
   'A': [1, 2],
   'B': [3, 4]
})

df2 = pd.DataFrame({
   'B': [5, 6],
   'C': [7, 8]
})

# Concatenate with missing values
print(pd.concat([df1, df2]))
```
```output
    A  B  C
0  1.0  3  NaN
1  2.0  4  NaN
0  NaN  5  7.0
1  NaN  6  8.0
```

## Join Types
Specify how to handle indexes during concatenation.

```python
df1 = pd.DataFrame({
   'A': [1, 2]
}, index=['a', 'b'])

df2 = pd.DataFrame({
   'B': [3, 4]
}, index=['b', 'c'])

# Outer join (default)
print("Outer join:")
print(pd.concat([df1, df2], axis=1))
```
```output
Outer join:
    A    B
a  1.0  NaN
b  2.0  3.0
c  NaN  4.0
```

## Multi-level Indexes
Create hierarchical indexes during concatenation.

```python
df1 = pd.DataFrame({
   'A': [1, 2]
})

df2 = pd.DataFrame({
   'A': [3, 4]
})

# Add keys for multi-level index
print(pd.concat([df1, df2], keys=['group1', 'group2']))
```
```output
             A
group1 0    1
      1    2
group2 0    3
      1    4
```