---
grandParent: "Pandas"
grandParentOrder: 20
parent: "Getting Started"
parentOrder: 10
self: "Core Concepts"
selfOrder: 10
---

## DataFrame vs Series
A Series is a one-dimensional labeled array that can hold data of any type (`integer`, `float`, `string`, `objects`, etc.), similar to a column in a spreadsheet. 

A DataFrame is a two-dimensional labeled data structure with columns that can be of different types, like a spreadsheet or SQL table. DataFrames are the most commonly used Pandas object.

```python
import pandas as pd

# Series: 1-dimensional labeled array
series = pd.Series([1, 2, 3, 4], index=['a', 'b', 'c', 'd'])
print(series)
```
```output
a    1
b    2
c    3
d    4
dtype: int64
```

```python
# DataFrame: 2-dimensional labeled data structure
df = pd.DataFrame({
   'A': [1, 2, 3],
   'B': ['a', 'b', 'c']
})
print(df)
```
```output
  A  B
0  1  a
1  2  b
2  3  c
```

## Index Objects
Index objects are immutable arrays that hold axis labels for Pandas objects. They enable fast lookup of data, automatic alignment of data during computations, and ensure data integrity. Understanding indexes is crucial as they control how you select, slice, and combine data in Pandas.

```python
# Different types of indexes
numeric_idx = pd.Index([1, 2, 3, 4])
string_idx = pd.Index(['a', 'b', 'c'])
date_idx = pd.date_range('2023-01-01', periods=3)
print(f"Numeric Index: {numeric_idx}")
```
```output
Numeric Index: Int64Index([1, 2, 3, 4], dtype='int64')
```

```python
# Index properties
string_idx = pd.Index(['a', 'b', 'c'])
print(f"Is unique: {string_idx.is_unique}, Is monotonic: {string_idx.is_monotonic_increasing}")
```
```output
Is unique: True, Is monotonic: True
```

```python
# Creating DataFrame with custom index
df = pd.DataFrame({
   'value': [10, 20, 30]
}, index=['a', 'b', 'c'])
print(df)
```
```output
  value
a     10
b     20
c     30
```

## Data Types (dtypes)
Pandas supports various data types for efficient memory usage and operations. Common types include `int64` (integers), `float64` (decimals), `object` (strings/mixed), `datetime64` (dates), and `category` (limited set of values). Choosing the right dtype can significantly impact memory usage and computation speed.

```python
# Common dtypes
df = pd.DataFrame({
   'integer': [1, 2, 3],
   'float': [1.1, 2.2, 3.3],
   'string': ['a', 'b', 'c'],
   'boolean': [True, False, True],
   'datetime': pd.date_range('2023-01-01', periods=3),
   'category': pd.Categorical(['x', 'y', 'z'])
})
print(df.dtypes)
```
```output
integer             int64
float            float64
string            object
boolean             bool
datetime    datetime64[ns]
category        category
dtype: object
```

## Memory Usage
Memory management is crucial when working with large datasets. Pandas provides tools to analyze and optimize memory usage. Common optimization techniques include using appropriate dtypes (like `int32` instead of `int64`), converting string columns to categorical when they have few unique values, and removing unnecessary columns.

```python
# Creating a DataFrame with different dtypes
df = pd.DataFrame({
   'A': [1] * 1000,
   'B': ['string'] * 1000,
   'C': [1.0] * 1000
})
print("Initial memory usage:\n", df.memory_usage(deep=True))
```
```output
Initial memory usage:
Index     8000
A         8000
B        64000
C         8000
dtype: int64
```

```python
# Optimize memory usage
df['A'] = df['A'].astype('int32')
df['B'] = df['B'].astype('category')
print("Optimized memory usage:\n", df.memory_usage(deep=True))
```
```output
Optimized memory usage:
Index     8000
A         4000
B         2000
C         8000
dtype: int64
```

## Attributes vs Methods
Attributes are properties of Pandas objects that provide metadata or state information (like `shape`, `dtypes`, `index`), accessed using dot notation without parentheses. 

Methods are functions that perform operations on the data (like `describe()`, `mean()`, `sort_values()`), always called with parentheses. Understanding this distinction helps write more readable and efficient code.

```python
# Demonstrating attributes
df = pd.DataFrame({
   'A': [1, 2, 3],
   'B': ['x', 'y', 'z']
})
print(f"Shape: {df.shape}\nColumns: {df.columns}\nIndex: {df.index}")
```
```output
Shape: (3, 2)
Columns: Index(['A', 'B'], dtype='object')
Index: RangeIndex(start=0, stop=3, step=1)
```

```python
# Demonstrating methods
df = pd.DataFrame({
   'A': [1, 2, 3],
   'B': ['x', 'y', 'z']
})
print(df.describe())
```
```output
            A
count  3.0000
mean   2.0000
std    1.0000
min    1.0000
25%    1.5000
50%    2.0000
75%    2.5000
max    3.0000
```