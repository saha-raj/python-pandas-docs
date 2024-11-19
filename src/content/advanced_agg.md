---
grandParent: "Pandas"
grandParentOrder: 20
parent: "Grouping and Aggregation"
parentOrder: 70
self: "Advanced Aggregations"
selfOrder: 20
---

## Named Aggregations
Create more readable aggregations with custom column names. Clearer than basic `agg()` syntax.

```python
import pandas as pd

df = pd.DataFrame({
   'group': ['A', 'A', 'B', 'B'],
   'value1': [1, 2, 3, 4],
   'value2': [10, 20, 30, 40]
})

# Named aggregations
print(df.groupby('group').agg(
   mean_v1=('value1', 'mean'),
   max_v2=('value2', 'max'),
   count=('value1', 'count')
))
```
```output
     mean_v1  max_v2  count
group                       
A        1.5      20      2
B        3.5      40      2
```

## Custom Aggregation Functions
Define and apply custom aggregation functions to grouped data.

```python
df = pd.DataFrame({
   'group': ['A', 'A', 'B', 'B', 'B'],
   'value': [1, 2, 3, 4, 5]
})

# Custom function for range (max - min)
def range_calc(x):
   return {'range': x.max() - x.min(),
           'pct_above_mean': (x > x.mean()).mean() * 100}

print(df.groupby('group')['value'].apply(range_calc).unstack())
```
```output
      pct_above_mean  range
group                      
A                0.5    1.0
B                0.4    2.0
```

## Multiple Functions Per Column
Apply different sets of functions to different columns.

```python
df = pd.DataFrame({
   'group': ['A', 'A', 'B', 'B'],
   'nums': [1, 2, 3, 4],
   'letters': ['a', 'b', 'c', 'd']
})

# Different functions per column
print(df.groupby('group').agg({
   'nums': ['sum', 'mean', 'std'],
   'letters': lambda x: ','.join(x)
}))
```
```output
     nums                    letters
      sum  mean       std         
group                              
A        3   1.5  0.707107      a,b
B        7   3.5  0.707107      c,d
```

## Hierarchical Grouping
Work with multiple levels of grouping and complex aggregations.

```python
df = pd.DataFrame({
   'dept': ['IT', 'IT', 'Sales', 'Sales'],
   'team': ['Dev', 'QA', 'US', 'EU'],
   'sales': [100, 200, 300, 400],
   'costs': [50, 100, 150, 200]
})

# Complex hierarchical aggregation
print(df.groupby(['dept', 'team']).agg({
   'sales': ['sum', 'mean'],
   'costs': lambda x: x.sum() / len(x)  # custom avg
}))
```
```output
             sales           costs
              sum  mean           
dept   team                       
IT     Dev     100   100         50
      QA      200   200        100
Sales  EU      400   400        200
      US      300   300        150
```

## Rolling Aggregations
Compute aggregations over rolling windows within groups.

```python
df = pd.DataFrame({
   'group': ['A', 'A', 'A', 'B', 'B', 'B'],
   'value': [1, 2, 3, 4, 5, 6]
})

# Rolling mean by group
print(df.groupby('group')['value']
      .rolling(window=2)
      .mean()
      .reset_index())
```
```output
 group  level_1  value
0     A      0.0    NaN
1     A      1.0    1.5
2     A      2.0    2.5
3     B      3.0    NaN
4     B      4.0    4.5
5     B      5.0    5.5
```

## Grouped Transformations
Apply complex transformations while maintaining the original DataFrame structure.

```python
df = pd.DataFrame({
   'group': ['A', 'A', 'B', 'B'],
   'value': [10, 20, 30, 40]
})

# Calculate percentage of group total
print(df.assign(
   pct_of_group=lambda x: x['value'] / x.groupby('group')['value'].transform('sum') * 100
))
```
```output
 group  value  pct_of_group
0     A     10     33.333333
1     A     20     66.666667
2     B     30     42.857143
3     B     40     57.142857
```