---
grandParent: "Pandas"
grandParentOrder: 20
parent: "Data Transformation"
parentOrder: 40
self: "Column Calculations"
selfOrder: 20
---

## Arithmetic Operations
Perform basic math operations between columns or with constants. Operations automatically align on indexes.

```python
import pandas as pd
import numpy as np

df = pd.DataFrame({
   'A': [10, 20, 30],
   'B': [2, 4, 6]
})

# Basic arithmetic between columns
df['sum'] = df['A'] + df['B']
df['diff'] = df['A'] - df['B']
print(df)
```
```output
   A  B  sum  diff
0  10  2   12     8
1  20  4   24    16
2  30  6   36    24
```

## Mathematical Functions
Apply mathematical functions to columns. Functions can be from NumPy or custom-defined.

```python
df = pd.DataFrame({
   'value': [4, 16, 25, 36],
   'growth_rate': [0.1, 0.2, 0.15, 0.25]
})

# Apply multiple math functions
df['sqrt'] = np.sqrt(df['value'])
df['log'] = np.log(df['value'])
print(df)
```
```output
  value  growth_rate      sqrt      log
0      4        0.10  2.000000  1.386294
1     16        0.20  4.000000  2.772589
2     25        0.15  5.000000  3.218876
3     36        0.25  6.000000  3.583519
```

## Cumulative Operations
Calculate running totals, products, or other cumulative statistics.

```python
df = pd.DataFrame({
   'sales': [100, 150, 200, 250],
   'units': [10, 15, 20, 25]
})

# Calculate cumulative statistics
print(df.assign(
   cum_sales=df['sales'].cumsum(),
   cum_units=df['units'].cumsum()
))
```
```output
  sales  units  cum_sales  cum_units
0    100     10       100         10
1    150     15       250         25
2    200     20       450         45
3    250     25       700         70
```

## Rolling Calculations
Compute moving averages and other rolling window calculations.

```python
df = pd.DataFrame({
   'value': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
})

# Calculate 3-day rolling average
print(df.assign(
   rolling_avg=df['value'].rolling(window=3).mean()
))
```
```output
  value  rolling_avg
0      1         NaN
1      2         NaN
2      3    2.000000
3      4    3.000000
4      5    4.000000
5      6    5.000000
6      7    6.000000
7      8    7.000000
8      9    8.000000
9     10    9.000000
```

## Window Functions
Perform calculations over a sliding partition of data. Similar to SQL window functions.

```python
df = pd.DataFrame({
   'group': ['A', 'A', 'B', 'B', 'B'],
   'value': [1, 2, 3, 4, 5]
})

# Calculate group-wise cumulative sum
print(df.assign(
   cum_sum=df.groupby('group')['value'].cumsum()
))
```
```output
 group  value  cum_sum
0     A      1        1
1     A      2        3
2     B      3        3
3     B      4        7
4     B      5       12
```

## Percentage Changes
Calculate period-over-period changes and growth rates.

```python
df = pd.DataFrame({
   'sales': [100, 120, 150, 140, 180]
})

# Calculate percentage change
print(df.assign(
   pct_change=df['sales'].pct_change() * 100
))
```
```output
  sales  pct_change
0    100         NaN
1    120   20.000000
2    150   25.000000
3    140   -6.666667
4    180   28.571429
```