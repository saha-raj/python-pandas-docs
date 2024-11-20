---
grandParent: "Pandas"
grandParentOrder: 20
parent: "Cleaning"
parentOrder: 35
self: "Missing Data"
selfOrder: 10
---

## Identifying Missing Values
Check for missing values (`NaN`, `None`) in your DataFrame. Essential first step in data cleaning.

```python
import pandas as pd
import numpy as np

df = pd.DataFrame({
   'A': [1, None, 3, None],
   'B': [4, 5, None, 7],
   'C': ['x', None, 'z', None]
})

# Count missing values per column
print(df.isnull().sum())
```
```output
A    2
B    1
C    2
dtype: int64
```

## Filling Missing Values
Replace missing values with specific values, statistics, or interpolated data.

```python
df = pd.DataFrame({
   'stock_price': [100, None, 105, None, 110],
   'category': ['A', None, 'A', 'B', 'B']
})

# Fill numeric with mean, categorical with mode
df['stock_price'] = df['stock_price'].fillna(df['stock_price'].mean())
df['category'] = df['category'].fillna(df['category'].mode()[0])
print(df)
```
```output
  stock_price category
0       100.0        A
1       105.0        A
2       105.0        A
3       105.0        B
4       110.0        B
```

## Forward/Backward Fill
Fill missing values using adjacent values. Useful for time series data.

```python
df = pd.DataFrame({
   'date': pd.date_range('2023-01-01', periods=5),
   'value': [100, None, None, 120, 125]
})

print("Forward fill:")
print(df['value'].fillna(method='ffill'))
```
```output
Forward fill:
0    100.0
1    100.0
2    100.0
3    120.0
4    125.0
Name: value, dtype: float64
```

```python
print("Backward fill:")
print(df['value'].fillna(method='bfill'))
```
```output
Backward fill:
0    100.0
1    120.0
2    120.0
3    120.0
4    125.0
Name: value, dtype: float64
```

## Interpolation
Fill missing values using various interpolation methods.

```python
df = pd.DataFrame({
   'value': [1, None, None, 4, 5]
})

# Linear interpolation
print("Linear interpolation:")
print(df['value'].interpolate(method='linear'))
```
```output
Linear interpolation:
0    1.0
1    2.0
2    3.0
3    4.0
4    5.0
Name: value, dtype: float64
```

## Dropping Missing Values
Remove rows or columns with missing values when appropriate.

```python
df = pd.DataFrame({
   'A': [1, None, 3, None],
   'B': [4, 5, None, 7],
   'C': ['x', None, 'z', None]
})

# Drop rows with any missing values
print("Drop rows with any NA:")
print(df.dropna())
```
```output
Drop rows with any NA:
Empty DataFrame
Columns: [A, B, C]
Index: []
```

```python
# Drop rows with all missing values
print("Drop rows with all NA:")
print(df.dropna(how='all'))
```
```output
Drop rows with all NA:
    A    B     C
0  1.0  4.0     x
1  NaN  5.0  None
2  3.0  NaN     z
3  NaN  7.0  None
```

## Missing Data Visualization
Visualize patterns of missing data to inform cleaning strategy.

```python
df = pd.DataFrame({
   'A': [1, None, 3, None, 5],
   'B': [None, 2, None, 4, 5],
   'C': [1, 2, None, None, 5]
})

# Calculate percentage of missing values
print("Percentage missing by column:")
print((df.isnull().sum() / len(df) * 100).round(2))
```
```output
Percentage missing by column:
A    40.00
B    40.00
C    40.00
dtype: float64
```