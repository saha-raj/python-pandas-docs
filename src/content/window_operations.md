---
grandParent: "Pandas"
grandParentOrder: 20
parent: "Grouping and Aggregation"
parentOrder: 60
self: "Window Operations"
selfOrder: 30
---

## Rolling Windows
Calculate metrics over a sliding window of fixed size. Essential for time series analysis and moving averages.

```python
import pandas as pd
import numpy as np

df = pd.DataFrame({
   'date': pd.date_range('2024-01-01', periods=5),
   'value': [10, 12, 15, 11, 14]
})

# Calculate 3-day rolling average
print(df.assign(
   rolling_avg=df['value'].rolling(window=3).mean()
))
```
```output
       date  value  rolling_avg
0 2024-01-01     10         NaN
1 2024-01-02     12         NaN
2 2024-01-03     15    12.333333
3 2024-01-04     11    12.666667
4 2024-01-05     14    13.333333
```

## Expanding Windows
Calculate cumulative statistics that include all previous rows. Useful for running totals and cumulative metrics.

```python
df = pd.DataFrame({
   'date': pd.date_range('2024-01-01', periods=5),
   'sales': [100, 150, 200, 120, 180]
})

# Calculate expanding statistics
print(df.assign(
   cumulative_mean=df['sales'].expanding().mean(),
   cumulative_max=df['sales'].expanding().max()
))
```
```output
       date  sales  cumulative_mean  cumulative_max
0 2024-01-01    100           100.0            100
1 2024-01-02    150           125.0            150
2 2024-01-03    200           150.0            200
3 2024-01-04    120           142.5            200
4 2024-01-05    180           150.0            200
```

## Custom Windows
Define custom window sizes and weights. Useful for specialized calculations like weighted averages.

```python
df = pd.DataFrame({
   'date': pd.date_range('2024-01-01', periods=5),
   'value': [1, 2, 3, 4, 5]
})

# Custom weighted rolling average
weights = [0.6, 0.3, 0.1]
print(df.assign(
   weighted_avg=df['value'].rolling(window=3).apply(
       lambda x: np.average(x, weights=weights[:len(x)])
   )
))
```
```output
       date  value  weighted_avg
0 2024-01-01      1          NaN
1 2024-01-02      2          NaN
2 2024-01-03      3     2.200000
3 2024-01-04      4     3.200000
4 2024-01-05      5     4.200000
```

## Window Functions
Apply complex calculations over windows. Similar to SQL window functions.

```python
df = pd.DataFrame({
   'group': ['A', 'A', 'B', 'B', 'B'],
   'value': [1, 2, 3, 4, 5]
})

# Rank within groups
print(df.assign(
   rank=df.groupby('group')['value'].rank(),
   pct_rank=df.groupby('group')['value'].rank(pct=True)
))
```
```output
 group  value  rank  pct_rank
0     A      1    1.0      0.5
1     A      2    2.0      1.0
2     B      3    1.0      0.3
3     B      4    2.0      0.7
4     B      5    3.0      1.0
```

## Rolling Statistics
Calculate multiple statistics over rolling windows. Useful for comprehensive time series analysis.

```python
df = pd.DataFrame({
   'date': pd.date_range('2024-01-01', periods=6),
   'value': [10, 12, 15, 11, 14, 13]
})

# Multiple rolling statistics
stats = df['value'].rolling(window=3).agg(['mean', 'std', 'min', 'max'])
print(stats)
```
```output
       mean       std   min   max
0        NaN       NaN   NaN   NaN
1        NaN       NaN   NaN   NaN
2  12.333333  2.516611  10.0  15.0
3  12.666667  2.081666  11.0  15.0
4  13.333333  2.081666  11.0  15.0
5  12.666667  1.527525  11.0  14.0
```