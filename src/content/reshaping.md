---
grandParent: "Pandas"
grandParentOrder: 10
parent: "Transforming"
parentOrder: 40
self: "Reshaping Data"
selfOrder: 40
---

## Pivot Tables
Create spreadsheet-style pivot tables. Aggregate and reshape data for summary analysis.

```python
import pandas as pd

df = pd.DataFrame({
   'date': ['2024-01', '2024-01', '2024-02', '2024-02'],
   'product': ['A', 'B', 'A', 'B'],
   'region': ['East', 'East', 'West', 'West'],
   'sales': [100, 150, 120, 180]
})

# Create pivot table
print(pd.pivot_table(df, 
                   values='sales', 
                   index='region',
                   columns='product',
                   aggfunc='sum'))
```
```output
product      A    B
region            
East      100  150
West      120  180
```

## Melting
Convert wide-format data to long format. Useful for restructuring data for analysis.

```python
df = pd.DataFrame({
   'name': ['John', 'Anna'],
   'math': [90, 85],
   'science': [88, 92],
   'history': [85, 89]
})

# Melt to long format
print(pd.melt(df, 
             id_vars=['name'],
             var_name='subject',
             value_name='score'))
```
```output
  name subject  score
0  John    math     90
1  Anna    math     85
2  John science     88
3  Anna science     92
4  John history     85
5  Anna history     89
```

## Stacking/Unstacking
Reshape hierarchical data by moving levels between columns and index.

```python
df = pd.DataFrame({
   ('A', 'val'): [1, 2],
   ('A', 'cnt'): [3, 4],
   ('B', 'val'): [5, 6],
   ('B', 'cnt'): [7, 8]
})
df.columns = pd.MultiIndex.from_tuples(df.columns)

print("Original:")
print(df)
```
```output
Original:
  A      B    
val cnt val cnt
0   1   3   5   7
1   2   4   6   8
```

```python
# Stack the inner level
print("\nStacked:")
print(df.stack(level=0))
```
```output
Stacked:
    cnt  val
0 A    3    1
 B    7    5
1 A    4    2
 B    8    6
```

## Crosstabs
Compute frequency tables of multiple variables. Quick way to see relationships between categorical variables.

```python
df = pd.DataFrame({
   'gender': ['M', 'F', 'M', 'F', 'M', 'F'],
   'dept': ['IT', 'HR', 'IT', 'IT', 'HR', 'HR'],
   'status': ['Active', 'Active', 'Inactive', 'Active', 'Inactive', 'Active']
})

# Create crosstab
print(pd.crosstab(df['dept'], df['gender']))
```
```output
gender  F  M
dept        
HR      2  1
IT      1  2
```

## Pivoting with Multiple Values
Create complex pivot tables with multiple value columns and aggregation functions.

```python
df = pd.DataFrame({
   'date': ['2024-01', '2024-01', '2024-02', '2024-02'],
   'product': ['A', 'B', 'A', 'B'],
   'sales': [100, 150, 120, 180],
   'units': [10, 15, 12, 18]
})

# Pivot with multiple values
print(pd.pivot_table(df,
                   values=['sales', 'units'],
                   index='date',
                   columns='product',
                   aggfunc='sum'))
```
```output
      sales      units    
product     A    B     A   B
date                        
2024-01   100  150    10  15
2024-02   120  180    12  18
```