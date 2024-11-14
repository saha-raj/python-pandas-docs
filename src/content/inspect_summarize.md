---
grandParent: "Pandas"
grandParentOrder: 20
parent: "Viewing"
parentOrder: 20
self: "Inspect / Summarize"
selfOrder: 10
---

## Example DataFrame
Start by creating a simple DataFrame and use methods like `.head()`, `.info()`, and `.describe()` to inspect and summarize the content.

```python
import pandas as pd

# Sample DataFrame
data = {
    "Product": ["A", "B", "C"],
    "Price": [100, 200, 150],
    "Quantity": [10, 5, 8]
}
df = pd.DataFrame(data)
print(df.head(2))      # Display first 2 rows
```
```output
  Product  Price  Quantity
0       A    100        10
1       B    200         5
```

## Summarize
`.info()` provides a summary of the DataFrame, including the number of entries, columns, non-null counts, and data types for each column.

```python
print(df.info())       # Summary of DataFrame structure
```
```output
<class 'pandas.core.frame.DataFrame'>
RangeIndex: 3 entries, 0 to 2
Data columns (total 3 columns):
 #   Column    Non-Null Count  Dtype
 0   Product   3 non-null      object
 1   Price     3 non-null      int64
 2   Quantity  3 non-null      int64
dtypes: int64(2), object(1)
memory usage: 204.0+ bytes
None
```

`.describe()` generates descriptive statistics for numeric columns, such as count, mean, standard deviation, min, and max values.

```python
print(df.describe())   # Statistical summary for numeric columns
```
```output
       Price   Quantity
count    3.0   3.000000
mean   150.0   7.666667
std     50.0   2.516611
min    100.0   5.000000
25%    125.0   6.500000
50%    150.0   8.000000
75%    175.0   9.000000
max    200.0  10.000000
```