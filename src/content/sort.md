---
grandParent: "Pandas"
grandParentOrder: 20
parent: "Data Inspection"
parentOrder: 20
self: "Sorting"
selfOrder: 25
---

## Basic Sorting
Sort DataFrame by one or more columns using `sort_values()`. Control sort order with ascending parameter.

```python
import pandas as pd

df = pd.DataFrame({
   'name': ['John', 'Anna', 'Peter', 'Linda'],
   'age': [28, 22, 35, 25],
   'salary': [50000, 45000, 65000, 48000]
})

# Sort by single column
print(df.sort_values('age'))
```
```output
   name  age  salary
1   Anna   22   45000
3  Linda   25   48000
0   John   28   50000
2  Peter   35   65000
```

## Multi-Column Sorting
Sort by multiple columns, specifying different sort orders for each. Later columns are used as tiebreakers.

```python
df = pd.DataFrame({
   'dept': ['IT', 'Sales', 'IT', 'Sales'],
   'salary': [60000, 65000, 55000, 65000],
   'name': ['John', 'Anna', 'Peter', 'Linda']
})

# Sort by dept ascending, then salary descending
print(df.sort_values(['dept', 'salary'], ascending=[True, False]))
```
```output
   dept  salary   name
0    IT   60000   John
2    IT   55000  Peter
1  Sales  65000   Anna
3  Sales  65000  Linda
```

## Index Sorting
Sort by index using `sort_index()`. Useful for time series data or hierarchical indexes.

```python
df = pd.DataFrame({
   'value': [1, 2, 3, 4]
}, index=['D', 'B', 'A', 'C'])

print("Sort by index:")
print(df.sort_index())
```
```output
Sort by index:
  value
A      3
B      2
C      4
D      1
```

## Ranking
Assign ranks to values using `rank()`. Choose different methods for handling ties.

```python
df = pd.DataFrame({
   'score': [85, 90, 85, 95, 85]
})

print("Default ranking (average):")
print(df['score'].rank())
```
```output
Default ranking (average):
0    2.0
1    4.0
2    2.0
3    5.0
4    2.0
Name: score, dtype: float64
```

```python
scores = pd.Series([85, 90, 85, 95, 85])
print("Average ranking:")
print(scores.rank(method='average'))
```
```output
Average ranking:
0    2.0
1    4.0
2    2.0
3    5.0
4    2.0
dtype: float64
```

```python
print("Min ranking (lowest rank for ties):")
print(scores.rank(method='min'))
```
```output
Min ranking (lowest rank for ties):
0    1.0
1    4.0
2    1.0
3    5.0
4    1.0
dtype: float64
```

```python
print("Max ranking (highest rank for ties):")
print(scores.rank(method='max'))
```
```output
Max ranking (highest rank for ties):
0    3.0
1    4.0
2    3.0
3    5.0
4    3.0
dtype: float64
```

```python
print("Dense ranking (no gaps in ranks):")
print(scores.rank(method='dense'))
```
```output
Dense ranking (no gaps in ranks):
0    1.0
1    2.0
2    1.0
3    3.0
4    1.0
dtype: float64
```