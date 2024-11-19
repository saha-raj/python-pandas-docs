---
grandParent: "Pandas"
grandParentOrder: 20
parent: "Getting Started"
parentOrder: 10
self: "Loading DataFrames"
selfOrder: 30
---

## CSV Files
Load data from CSV (Comma-Separated Values) files, the most common format.

```python
import pandas as pd

# Basic CSV reading
df = pd.read_csv('data.csv')

# With specific options
df = pd.read_csv('data.csv',
                sep=',',           # delimiter to use
                header=0,          # row to use as column names
                index_col=0,       # column to use as index
                na_values=['NA'],  # values to treat as NaN
                encoding='utf-8')  # file encoding
print(df.head())
```
```output
        Name  Age      City
0       John   25  New York
1       Anna   28     Paris
2      Peter   32    London
```

## Excel Files
Read data from Excel files (.xlsx, .xls).

```python
# Basic Excel reading
df = pd.read_excel('data.xlsx')

# With specific options
df = pd.read_excel('data.xlsx',
                  sheet_name='Sheet1',  # specific sheet
                  header=0,             # row for column names
                  skiprows=1,           # skip first row
                  usecols='A:C')        # use only columns A to C
print(df.head())
```
```output
   Name  Age      City
0   John   25  New York
1   Anna   28     Paris
2  Peter   32    London
```

## JSON Files
Load data from JSON (JavaScript Object Notation) format.

```python
# Basic JSON reading
df = pd.read_json('data.json')

# With specific options
df = pd.read_json('data.json',
                 orient='records',     # JSON structure format
                 lines=True,           # Read JSON Lines format
                 encoding='utf-8')     # File encoding
print(df.head())
```
```output
   Name  Age      City
0   John   25  New York
1   Anna   28     Paris
2  Peter   32    London
```

## SQL Databases
Read data directly from SQL databases using SQLAlchemy.

```python
from sqlalchemy import create_engine

# Create database connection
engine = create_engine('sqlite:///database.db')

# Read SQL query or table
df = pd.read_sql('SELECT * FROM users', engine)
df = pd.read_sql_table('users', engine)
print(df.head())
```
```output
   Name  Age      City
0   John   25  New York
1   Anna   28     Paris
2  Peter   32    London
```

## Web Data
Read data from web sources including HTML tables and APIs.

```python
# Read HTML tables from a webpage
dfs = pd.read_html('https://example.com/table.html')
df = dfs[0]  # get first table

# Read from API (requires requests)
import requests
response = requests.get('https://api.example.com/data')
df = pd.DataFrame(response.json())
```
```output
```

