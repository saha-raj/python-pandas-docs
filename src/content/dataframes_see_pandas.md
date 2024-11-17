---
grandParent: "Python"
grandParentOrder: 10
parent: "Storing values in memory"
parentOrder: 10
self: "DataFrames (see pandas)"
selfOrder: 50
---

## DataFrames (see pandas)
DataFrames are two-dimensional, size-mutable (can grow or shrink), and heterogeneous (contain different data types) tabular structures with labeled rows and columns. They are used for data manipulation and analysis in the `pandas` library.

```python
# creating a DataFrame
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
Access rows and columns using labels or index.

```python
# accessing a column by name
print(df["Name"])

# accessing a row by index
print(df.iloc[0])
```

```output
0    Alice
1      Bob
Name: Name, dtype: object
Name    Alice
Age         25
Name: 0, dtype: object
```
