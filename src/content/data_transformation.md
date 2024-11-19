---
grandParent: "Pandas"
grandParentOrder: 20
parent: "Data Transformation"
parentOrder: 55
self: "Data Transformation"
selfOrder: 10
---

## Normalization/Standardization
Scale numerical data to a standard range or distribution. Essential for machine learning and statistical analysis.

```python
import pandas as pd
import numpy as np

df = pd.DataFrame({
   'raw_score': [85, 92, 78, 95, 89],
   'value': [100, 500, 300, 200, 400]
})

# Min-Max normalization (scale to 0-1)
df['normalized'] = (df['raw_score'] - df['raw_score'].min()) / (df['raw_score'].max() - df['raw_score'].min())
print("Min-Max Normalized:")
print(df)
```
```output
Min-Max Normalized:
  raw_score  value  normalized
0         85    100    0.411765
1         92    500    0.823529
2         78    300    0.000000
3         95    200    1.000000
4         89    400    0.647059
```

## Binning/Discretization
Convert continuous data into categorical bins. Useful for grouping data into meaningful categories.

```python
df = pd.DataFrame({
   'age': [22, 35, 48, 29, 55, 41, 33, 60],
})

# Create age groups
df['age_group'] = pd.cut(df['age'], 
                       bins=[0, 30, 45, 60],
                       labels=['Young', 'Middle', 'Senior'])
print(df)
```
```output
  age age_group
0   22     Young
1   35    Middle
2   48    Senior
3   29     Young
4   55    Senior
5   41    Middle
6   33    Middle
7   60    Senior
```

## One-hot Encoding
Convert categorical variables into binary columns. Required for many machine learning algorithms.

```python
df = pd.DataFrame({
   'color': ['red', 'blue', 'green', 'red', 'blue'],
   'value': [10, 20, 30, 40, 50]
})

# Create dummy variables
print(pd.get_dummies(df['color'], prefix='color'))
```
```output
  color_blue  color_green  color_red
0           0            0          1
1           1            0          0
2           0            1          0
3           0            0          1
4           1            0          0
```

## Label Encoding
Convert categorical labels into numeric values. Useful when categories have ordinal relationships.

```python
df = pd.DataFrame({
   'grade': ['A', 'C', 'B', 'A', 'B']
})

# Create label encoder
from sklearn.preprocessing import LabelEncoder
le = LabelEncoder()
df['grade_encoded'] = le.fit_transform(df['grade'])
print(df)
```
```output
 grade  grade_encoded
0     A             0
1     C             2
2     B             1
3     A             0
4     B             1
```

## Feature Engineering
Create new features from existing ones. Key step in data preparation for analysis.

```python
df = pd.DataFrame({
   'first_name': ['John', 'Anna', 'Peter'],
   'last_name': ['Smith', 'Johnson', 'Williams'],
   'birth_year': [1990, 1985, 1988]
})

# Create new features
df['full_name'] = df['first_name'] + ' ' + df['last_name']
df['age'] = 2024 - df['birth_year']
print(df)
```
```output
 first_name last_name  birth_year            full_name  age
0       John    Smith       1990        John Smith       34
1       Anna  Johnson       1985      Anna Johnson       39
2      Peter Williams       1988    Peter Williams       36
```

## Reshaping Data
Transform data structure for different types of analysis. Common in data preparation.

```python
df = pd.DataFrame({
   'date': ['2024-01', '2024-01', '2024-02', '2024-02'],
   'product': ['A', 'B', 'A', 'B'],
   'sales': [100, 150, 120, 180]
})

# Pivot data to wide format
print(df.pivot(index='date', columns='product', values='sales'))
```
```output
product      A    B
date              
2024-01   100  150
2024-02   120  180
```