---
grandParent: "Pandas"
grandParentOrder: 20
parent: "Viewing & Selecting"
parentOrder: 20
self: "Indexing and Slicing"
selfOrder: 20
---

## loc vs iloc
Two main indexers in pandas: `loc` for label-based indexing, `iloc` for integer-based indexing. `loc` uses labels/boolean arrays, while `iloc` uses integer positions.

```python
import pandas as pd

df = pd.DataFrame({
   'A': range(1, 6),
   'B': ['a', 'b', 'c', 'd', 'e']
}, index=['row1', 'row2', 'row3', 'row4', 'row5'])
print(df)
```
```output
    A  B
row1  1  a
row2  2  b
row3  3  c
row4  4  d
row5  5  e
```

```python
# loc: label-based
# Get rows 'row1' to 'row3', columns 'A' and 'B'
print(df.loc['row1':'row3', ['A', 'B']])
```
```output
    A  B
row1  1  a
row2  2  b
row3  3  c
```

```python
# iloc: integer-based
# Get rows 0 to 2, columns 0 and 1
print(df.iloc[0:3, [0, 1]])
```
```output
    A  B
row1  1  a
row2  2  b
row3  3  c
```

## Boolean Indexing
Filter data using boolean conditions. One of the most powerful features for data selection in pandas.

```python
df = pd.DataFrame({
   'Name': ['John', 'Anna', 'Peter', 'Linda'],
   'Age': [28, 22, 35, 25],
   'City': ['NY', 'Paris', 'NY', 'London']
})

# Filter rows where Age > 25 AND City is 'NY'
print(df[(df['Age'] > 25) & (df['City'] == 'NY')])
```
```output
   Name  Age City
0   John   28   NY
2  Peter   35   NY
```


## Index Manipulation
Modify, reset, or set new indexes for your DataFrame.

```python
df = pd.DataFrame({
   'A': range(1, 4),
   'B': ['x', 'y', 'z']
}, index=['row1', 'row2', 'row3'])

# Reset index to default numeric
print("Reset index:")
print(df.reset_index())
```
```output
Reset index:
  index  A  B
0   row1  1  x
1   row2  2  y
2   row3  3  z
```

```python
# Set new index from column
df = pd.DataFrame({
   'ID': ['A1', 'A2', 'A3'],
   'Value': [1, 2, 3]
})
print("Set index from ID column:")
print(df.set_index('ID'))
```
```output
Set index from ID column:
   Value
ID      
A1      1
A2      2
A3      3
```
