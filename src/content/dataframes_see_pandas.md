---
grandParent: "Python"
grandParentOrder: 10
parent: "Storing values in memory"
parentOrder: 10
self: "DataFrames (see pandas)"
selfOrder: 50
---

## DataFrames (see pandas)
DataFrames are two-dimensional (rows and columns), size-mutable (can grow or shrink in size), and heterogeneous (can contain different data types) tabular data structures with labeled axes (rows and columns). They are primarily used for data manipulation and analysis and are available in the `pandas` library. <p>
For more detailed info on DataFrames, see the section on Pandas.

```python
import pandas as pd
data = {'Name': ['Alice', 'Bob'], 'Age': [25, 30]}
df = pd.DataFrame(data)
print(df)
```
```output
    Name  Age
0  Alice   25
1    Bob   30
```

## Accessing DataFrames
Access rows and columns in DataFrames by labels or index.

```python
print(df["Name"])      # Access column by name
print(df.iloc[0])      # Access row by index
```
```output
0    Alice
1      Bob
Name: Name, dtype: object
Name    Alice
Age         25
Name: 0, dtype: object
```
