---
grandParent: "Pandas"
grandParentOrder: 20
parent: "Viewing & Selecting"
parentOrder: 20
self: "Inspecting"
selfOrder: 10
---

## Basic DataFrame Information
Quick methods to get an overview of your DataFrame's structure, size, and content. These are typically your first step when exploring a new dataset.

```python
import pandas as pd

df = pd.DataFrame({
   'A': [1, 2, 3, None, 5],
   'B': ['a', 'b', None, 'd', 'e'],
   'C': [1.1, 2.2, 3.3, 4.4, 5.5]
})
print(df.info())
```
```output
<class 'pandas.core.frame.DataFrame'>
RangeIndex: 5 entries, 0 to 4
Data columns (total 3 columns):
#   Column  Non-Null Count  Dtype  
---  ------  --------------  -----  
0   A       4 non-null      float64
1   B       4 non-null      object 
2   C       5 non-null      float64
dtypes: float64(2), object(1)
memory usage: 248.0+ bytes
```

## Descriptive Statistics
Summary statistics for your numerical columns. Quickly understand the distribution and characteristics of your data.

```python
# Get statistical overview
df = pd.DataFrame({
   'Age': [25, 30, 35, 40, 45],
   'Salary': [30000, 45000, 50000, 60000, 85000],
   'Experience': [1, 3, 5, 7, 10]
})
print(df.describe())
```
```output
           Age     Salary  Experience
count   5.00000     5.000      5.000
mean   35.00000 54000.000      5.200
std     7.90569 20736.441      3.421
min    25.00000 30000.000      1.000
25%    30.00000 45000.000      3.000
50%    35.00000 50000.000      5.000
75%    40.00000 60000.000      7.000
max    45.00000 85000.000     10.000
```

## Value Counts and Unique Values
Identify unique values and their frequencies in your columns. Essential for understanding categorical data and checking data quality.

```python
# Example with categorical data
df = pd.DataFrame({
   'Category': ['A', 'B', 'A', 'C', 'B', 'B', 'A'],
   'Status': ['Active', 'Active', 'Inactive', 'Active', 'Inactive', 'Active', 'Active']
})
print(df['Category'].value_counts())
```
```output
B    3
A    3
C    1
Name: Category, dtype: int64
```

## Missing Data Analysis
Find and analyze missing values in your dataset. Key step in data cleaning and understanding data quality.

```python
df = pd.DataFrame({
   'A': [1, None, 3, None, 5],
   'B': [None, 2, 3, None, 5],
   'C': [1, 2, None, 4, 5]
})
print(df.isnull().sum())
```
```output
A    2
B    2
C    1
dtype: int64
```

## Head and Tail
Quick look at the first or last few rows of your DataFrame. Useful for initial data inspection and verifying data loading, especially with large datasets.

```python
df = pd.DataFrame({
   'Date': pd.date_range('2023-01-01', periods=10),
   'Value': range(10)
})
print("First 3 rows:\n", df.head(3))
```
```output
First 3 rows:
       Date  Value
0 2023-01-01      0
1 2023-01-02      1
2 2023-01-03      2
```

```python
# View last 3 rows
print("Last 3 rows:\n", df.tail(3))
```
```output
Last 3 rows:
        Date  Value
7 2023-01-08      7
8 2023-01-09      8
9 2023-01-10      9
```

## Random Sampling
Sample random rows from your DataFrame. Useful for quick data exploration, testing analyses, or creating representative subsets of large datasets.

```python
# Create a larger DataFrame
df = pd.DataFrame({
   'ID': range(1000),
   'Value': np.random.randn(1000)
})
# Sample 5 random rows
print("Random sample:\n", df.sample(n=5))
```
```output
Random sample:
    ID     Value
731  731  0.23989
142  142 -1.42281
967  967  0.89172
415  415  0.31424
528  528 -0.58219
```

```python
# Sample with weights (probability weights for each row)
print("Weighted sample:\n", df.sample(n=3, weights='Value'))
```
```output
Weighted sample:
    ID     Value
823  823  1.52341
567  567  1.23456
291  291  1.12345
```