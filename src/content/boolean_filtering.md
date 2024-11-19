---
grandParent: "Pandas"
grandParentOrder: 20
parent: "Data Inspection"
parentOrder: 20
self: "Boolean Filtering"
selfOrder: 40
---

## Basic Boolean Filters
Filter DataFrame rows using boolean conditions. Returns rows where the condition is `True`. Most common and powerful way to subset data.

```python
import pandas as pd

df = pd.DataFrame({
    'name': ['John', 'Anna', 'Peter', 'Linda'],
    'age': [28, 22, 35, 25],
    'city': ['NY', 'Paris', 'NY', 'London']
})

# Single condition
print(df[df['age'] > 25])
```
```output
    name  age city
0   John   28   NY
2  Peter   35   NY
```

## Multiple Conditions
Combine conditions using `&` (and) and `|` (or). Each condition must be in parentheses when combining.

```python
# Multiple conditions with AND (&)
print(df[(df['age'] > 25) & (df['city'] == 'NY')])
```
```output
    name  age city
0   John   28   NY
2  Peter   35   NY
```

## Using `query()` Method
Alternative way to filter using string expressions. More readable for complex conditions.

```python
# Same filter using query
print(df.query('age > 25 and city == "NY"'))
```
```output
    name  age city
0   John   28   NY
2  Peter   35   NY
```

## String Filters
Filter based on string patterns using string methods like contains, `startswith`, `endswith`.

```python
df = pd.DataFrame({
    'name': ['John Smith', 'Anna Johnson', 'Peter Smith', 'Linda Williams'],
    'email': ['john@gmail.com', 'anna@yahoo.com', 'peter@gmail.com', 'linda@outlook.com']
})

# Filter names containing 'Smith'
print(df[df['name'].str.contains('Smith')])
```
```output
          name            email
0   John Smith   john@gmail.com
2  Peter Smith  peter@gmail.com
```

## `isin()` Filtering
Check if values are in a specified list. Useful for categorical data.

```python
df = pd.DataFrame({
    'name': ['John', 'Anna', 'Peter', 'Linda'],
    'dept': ['HR', 'IT', 'Sales', 'IT']
})

# Filter specific departments
valid_depts = ['IT', 'HR']
print(df[df['dept'].isin(valid_depts)])
```
```output
   name dept
0  John   HR
1  Anna   IT
3 Linda   IT
```

## Inverse Filtering
Use `~` to negate boolean conditions. Returns rows where condition is False.

```python
df = pd.DataFrame({
    'name': ['John', 'Anna', 'Peter', 'Linda'],
    'status': ['Active', 'Inactive', 'Active', 'Active']
})

# Get all non-active records
print(df[~(df['status'] == 'Active')])
```
```output
   name   status
1  Anna  Inactive
```