---
grandParent: "Pandas"
grandParentOrder: 20
parent: "Grouping and Aggregation"
parentOrder: 50
self: "Basic Grouping"
selfOrder: 10
---

## Simple GroupBy
Group data by one column and apply basic aggregation functions. Foundation of data summarization.

```python
import pandas as pd

df = pd.DataFrame({
   'department': ['Sales', 'IT', 'Sales', 'IT', 'HR'],
   'salary': [50000, 60000, 55000, 65000, 45000]
})

# Basic grouping with single aggregation
print(df.groupby('department')['salary'].mean())
```
```output
department
HR      45000.0
IT      62500.0
Sales   52500.0
Name: salary, dtype: float64
```

## Common Aggregations
Apply built-in aggregation functions to grouped data.

```python
df = pd.DataFrame({
   'department': ['Sales', 'IT', 'Sales', 'IT', 'HR'],
   'salary': [50000, 60000, 55000, 65000, 45000],
   'age': [25, 30, 35, 28, 45]
})

# Multiple aggregations
print(df.groupby('department').agg({
   'salary': 'mean',
   'age': ['min', 'max']
}))
```
```output
          salary age     
            mean min  max
department                
HR         45000  45   45
IT         62500  28   30
Sales      52500  25   35
```

## Multiple Group Keys
Group by multiple columns simultaneously.

```python
df = pd.DataFrame({
   'department': ['Sales', 'Sales', 'IT', 'IT'],
   'location': ['NY', 'SF', 'NY', 'SF'],
   'sales': [100, 150, 200, 300]
})

# Group by multiple columns
print(df.groupby(['department', 'location'])['sales'].sum())
```
```output
department  location
IT         NY         200
          SF         300
Sales      NY         100
          SF         150
Name: sales, dtype: int64
```

## Group Object Methods
Use methods specific to grouped data objects.

```python
df = pd.DataFrame({
   'group': ['A', 'A', 'B', 'B'],
   'value': [1, 2, 3, 4]
})

# Get group sizes
print("Group sizes:")
print(df.groupby('group').size())
```
```output
Group sizes:
group
A    2
B    2
dtype: int64
```

## Filter Groups
Filter groups based on group-level conditions.

```python
df = pd.DataFrame({
   'group': ['A', 'A', 'B', 'B', 'C'],
   'value': [1, 2, 3, 4, 5]
})

# Keep only groups with more than 1 member
print(df.groupby('group').filter(lambda x: len(x) > 1))
```
```output
 group  value
0     A      1
1     A      2
2     B      3
3     B      4
```

## Basic Transformations
Apply simple transformations that preserve the DataFrame's structure.

```python
df = pd.DataFrame({
   'group': ['A', 'A', 'B', 'B'],
   'value': [1, 2, 3, 4]
})

# Add group means to each row
print(df.assign(
   group_mean=df.groupby('group')['value'].transform('mean')
))
```
```output
 group  value  group_mean
0     A      1        1.5
1     A      2        1.5
2     B      3        3.5
3     B      4        3.5
```