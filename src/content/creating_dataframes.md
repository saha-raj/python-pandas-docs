---
grandParent: "Pandas"
grandParentOrder: 20
parent: "Getting Started"
parentOrder: 10
self: "Creating DataFrames"
selfOrder: 20
---

## From Lists
Create a DataFrame from Python lists using `pd.DataFrame()`.

```python
import pandas as pd

# From a list of lists (each inner list becomes a row)
data = [[1, 'John', 25], [2, 'Anna', 28], [3, 'Peter', 32]]
df = pd.DataFrame(data, columns=['ID', 'Name', 'Age'])
print(df)
```
```output
  ID   Name  Age
0   1   John   25
1   2   Anna   28
2   3  Peter   32
```

## From Dictionaries
Create a DataFrame from Python dictionaries, where each key becomes a column.

```python
# From dictionary of lists
data = {
   'Name': ['John', 'Anna', 'Peter'],
   'Age': [25, 28, 32],
   'City': ['New York', 'Paris', 'London']
}
df = pd.DataFrame(data)
print(df)
```
```output
   Name  Age      City
0   John   25  New York
1   Anna   28     Paris
2  Peter   32    London
```

## From NumPy Arrays
Create a DataFrame from NumPy arrays for numerical data.

```python
import numpy as np

# From a NumPy array
array = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
df = pd.DataFrame(array, columns=['A', 'B', 'C'])
print(df)
```
```output
  A  B  C
0  1  2  3
1  4  5  6
2  7  8  9
```

## Empty DataFrame
Create an empty DataFrame with specified columns and index.

```python
# Create empty DataFrame with defined structure
df = pd.DataFrame(columns=['Name', 'Age', 'City'])
print(df)

# With specific index
df = pd.DataFrame(index=['A', 'B', 'C'], columns=['Col1', 'Col2'])
print(df)
```
```output
Empty DataFrame
Columns: [Name, Age, City]
Index: []

    Col1  Col2
A    NaN   NaN
B    NaN   NaN
C    NaN   NaN
```

## Using Random Data
Create a DataFrame with random data for testing or examples.

```python
# Random numbers
df = pd.DataFrame(np.random.rand(3, 2), columns=['A', 'B'])
print(df)

# Random integers
df = pd.DataFrame(np.random.randint(0, 100, size=(3, 3)), 
                columns=['X', 'Y', 'Z'])
print(df)
```
```output
         A         B
0  0.126986  0.234561
1  0.367821  0.865431
2  0.912356  0.543219

   X   Y   Z
0  45  67  89
1  23  45  67
2  78  90  12
```

## From Clipboard
Create a DataFrame from data copied to clipboard.

```python
# Read data from clipboard (useful for Excel/spreadsheet data)
df = pd.read_clipboard()

# Example of what you might have copied:
'''
Name    Age   City
John    25    New York
Anna    28    Paris
Peter   32    London
'''
```
```output
```