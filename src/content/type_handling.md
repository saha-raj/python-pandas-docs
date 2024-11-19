---
grandParent: "Pandas"
grandParentOrder: 20
parent: "Data Cleaning"
parentOrder: 30
self: "Type Handling"
selfOrder: 30
---

## Basic Type Conversion
Convert column types using `astype()`. Essential for data consistency and memory optimization.

```python
import pandas as pd

df = pd.DataFrame({
   'string_nums': ['1', '2', '3'],
   'mixed_floats': [1, 2.5, 3],
   'categories': ['A', 'B', 'A']
})

# Convert types
df['string_nums'] = df['string_nums'].astype(int)
print(df.dtypes)
```
```output
string_nums       int64
mixed_floats    float64
categories       object
dtype: object
```

## Categorical Data
Convert string columns to categorical type. Significantly reduces memory usage for columns with repeated values.

```python
# Create DataFrame with repeated values
df = pd.DataFrame({
   'grade': ['A', 'B', 'A', 'A', 'C', 'B'] * 1000
})

# Check memory before conversion
print("Before categorical conversion:")
print(df.memory_usage(deep=True))
```
```output
Before categorical conversion:
Index     48
grade    48000
dtype: int64
```

```python
# Convert to categorical and check memory
df['grade'] = df['grade'].astype('category')
print("After categorical conversion:")
print(df.memory_usage(deep=True))
```
```output
After categorical conversion:
Index     48
grade    6144
dtype: int64
```

## Numeric Type Optimization
Downcast numeric types to use minimal memory while preserving data.

```python
df = pd.DataFrame({
   'ints': [1, 2, 3, 100],
   'floats': [1.0, 2.0, 3.0, 4.0]
})

# Optimize numeric types
print("Original types:")
print(df.dtypes)
```
```output
Original types:
ints      int64
floats  float64
dtype: object
```

```python
# Downcast to smaller types
df['ints'] = pd.to_numeric(df['ints'], downcast='integer')
df['floats'] = pd.to_numeric(df['floats'], downcast='float')
print("Optimized types:")
print(df.dtypes)
```
```output
Optimized types:
ints      int8
floats  float32
dtype: object
```

## Handling Mixed Types
Deal with columns containing mixed data types safely.

```python
df = pd.DataFrame({
   'mixed': ['1', '2.5', 'three', '4'],
})

# Convert to numeric, handling errors
print(pd.to_numeric(df['mixed'], errors='coerce'))
```
```output
0    1.0
1    2.5
2    NaN
3    4.0
Name: mixed, dtype: float64
```

## Type Inference
Let pandas automatically infer appropriate types when reading data.

```python
# Create DataFrame with automatic type inference
data = {'numbers': ['1', '2', '3'],
       'decimals': ['1.1', '2.2', '3.3'],
       'strings': ['a', 'b', 'c']}
       
df = pd.DataFrame(data)
print("Inferred types:")
print(df.dtypes)
```
```output
Inferred types:
numbers     object
decimals    object
strings     object
dtype: object
```

## Type Verification
Check if values in a column conform to expected types.

```python
df = pd.DataFrame({
   'values': [1, 2, '3', 4.0, 'five']
})

# Check which values can be converted to numeric
print("Can be converted to numeric:")
print(pd.to_numeric(df['values'], errors='coerce').notna())
```
```output
Can be converted to numeric:
0     True
1     True
2     True
3     True
4    False
Name: values, dtype: bool
```