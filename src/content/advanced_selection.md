---
grandParent: "Pandas"
grandParentOrder: 20
parent: "Viewing & Selecting"
parentOrder: 20
self: "Advanced Selection"
selfOrder: 50
---

## Custom Indexing Functions
Create complex selections using arbitrary functions. More flexible than simple boolean indexing.

```python
import pandas as pd
import numpy as np

df = pd.DataFrame({
   'A': range(1, 6),
   'B': range(10, 60, 10),
   'C': list('abcde')
})

# Select using custom function
def complex_condition(x):
   return (x['A'] > 2) & (x['B'] < 50)

print(df[complex_condition(df)])
```
```output
  A   B  C
2  3  30  c
3  4  40  d
```

## Masking with `where()`
Replace values that don't meet conditions instead of filtering rows. Preserves DataFrame shape.

```python
# Replace values not meeting condition with NaN
print(df.where(df['A'] > 3))
```
```output
    A     B    C
0  NaN   NaN  NaN
1  NaN   NaN  NaN
2  NaN   NaN  NaN
3  4.0  40.0    d
4  5.0  50.0    e
```

## Advanced `iloc`
Complex integer-based indexing using lists and slices.

```python
df = pd.DataFrame({
   'A': range(1, 6),
   'B': range(10, 60, 10),
   'C': list('abcde')
})

# Select alternating rows, specific columns
print(df.iloc[::2, [0, 2]])  # Every other row, columns 0 and 2
```
```output
  A  C
0  1  a
2  3  c
4  5  e
```

## Advanced `loc`
Label-based indexing with boolean arrays and callable functions.

```python
df = pd.DataFrame({
   'A': range(1, 6),
   'B': range(10, 60, 10),
}, index=['p', 'q', 'r', 's', 't'])

# Select using complex label-based condition
print(df.loc[lambda x: x['A'] > x['B'].mean()])
```
```output
  A   B
t  5  50
```

## Selecting with `eval()`
Use string expressions for complex selections. More readable for complicated conditions.

```python
df = pd.DataFrame({
   'A': range(1, 6),
   'B': range(10, 60, 10),
   'C': [100, 200, 150, 250, 300]
})

# Complex selection using eval
print(df.query('A > 2 and B < C/2'))
```
```output
  A   B    C
2  3  30  150
3  4  40  250
4  5  50  300
```

## Cross-Sectional Indexing
Select data across multiple axes with `xs()`.

```python
# Create multi-index DataFrame
arrays = [['A', 'A', 'B', 'B'], [1, 2, 1, 2]]
df = pd.DataFrame(np.random.randn(4, 2),
                index=pd.MultiIndex.from_arrays(arrays, names=['letter', 'number']),
                columns=['value1', 'value2'])

# Select cross-section
print(df.xs('A', level='letter'))
```
```output
       value1    value2
number                 
1      -0.321    0.432
2       0.543   -0.654
```