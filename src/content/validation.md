---
grandParent: "Pandas"
grandParentOrder: 20
parent: "Data Cleaning"
parentOrder: 35
self: "Data Validation"
selfOrder: 20
---

## Data Type Validation
Check and enforce correct data types. Crucial for data integrity and calculations.

```python
import pandas as pd
import numpy as np

df = pd.DataFrame({
   'age': ['25', '30', 'invalid', '40'],
   'income': ['50000', '60000', '75000', 'unknown']
})

# Convert and validate numeric columns
def safe_convert(x):
   try:
       return pd.to_numeric(x)
   except:
       return np.nan

print("Converted age with validation:")
print(df['age'].apply(safe_convert))
```
```output
Converted age with validation:
0    25.0
1    30.0
2     NaN
3    40.0
Name: age, dtype: float64
```

## Value Range Checking
Identify values outside expected ranges. Important for detecting outliers or data entry errors.

```python
df = pd.DataFrame({
   'age': [25, 150, 30, -5, 45],
   'score': [85, 120, 95, 45, 75]
})

# Define valid ranges
age_mask = (df['age'] >= 0) & (df['age'] <= 120)
score_mask = (df['score'] >= 0) & (df['score'] <= 100)

# Check for invalid values
print("Invalid ages:")
print(df[~age_mask]['age'])
```
```output
Invalid ages:
1    150
3     -5
Name: age, dtype: int64
```

## Duplicate Detection
Find and handle duplicate records in your dataset.

```python
df = pd.DataFrame({
   'name': ['John', 'Anna', 'John', 'Peter', 'Anna'],
   'age': [25, 30, 25, 35, 30]
})

# Find duplicate rows
print("Duplicate rows:")
print(df[df.duplicated(keep='first')])
```
```output
Duplicate rows:
  name  age
2  John   25
4  Anna   30
```

## Custom Validation Rules
Apply specific business rules or complex validation criteria.

```python
df = pd.DataFrame({
   'start_date': ['2023-01-01', '2023-02-01', '2023-03-01'],
   'end_date': ['2023-02-01', '2023-01-01', '2023-04-01']
})

# Convert to datetime
df['start_date'] = pd.to_datetime(df['start_date'])
df['end_date'] = pd.to_datetime(df['end_date'])

# Check if end_date is after start_date
print("Invalid date ranges:")
print(df[df['end_date'] <= df['start_date']])
```
```output
Invalid date ranges:
 start_date   end_date
1 2023-02-01 2023-01-01
```

## Format Validation
Check if values conform to expected formats (e.g., email, phone numbers).

```python
import re

df = pd.DataFrame({
   'email': ['john@example.com', 'invalid.email', 'anna.smith@company.co.uk'],
   'phone': ['123-456-7890', '1234567890', '12-34-56']
})

# Validate email format
def is_valid_email(email):
   pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
   return bool(re.match(pattern, str(email)))

print("Invalid emails:")
print(df[~df['email'].apply(is_valid_email)]['email'])
```
```output
Invalid emails:
1    invalid.email
Name: email, dtype: object
```

## Cross-Field Validation
Validate data based on relationships between multiple fields.

```python
df = pd.DataFrame({
   'min_value': [10, 20, 30, 40],
   'max_value': [20, 15, 50, 45],
   'current': [15, 17, 40, 47]
})

# Check if current is between min and max
valid_range = (df['current'] >= df['min_value']) & (df['current'] <= df['max_value'])
print("Records with invalid ranges:")
print(df[~valid_range])
```
```output
Records with invalid ranges:
  min_value  max_value  current
1        20        15      17
3        40        45      47
```