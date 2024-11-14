---
grandParent: "Pandas"
grandParentOrder: 20
parent: "Viewing"
parentOrder: 20
self: "Index and Slice"
selfOrder: 20
---

## Example DataFrame
Create a DataFrame and access specific rows and columns using indexing and slicing with `.iloc` (index-based) or `.loc` (label-based).

```python
data = {
    "Name": ["Alice", "Bob", "Charlie"],
    "Age": [24, 27, 22],
    "City": ["New York", "Los Angeles", "Chicago"]
}
df = pd.DataFrame(data)
print(df.head(2))  # Display first 2 rows
```
```output
      Name  Age         City
0    Alice   24     New York
1      Bob   27  Los Angeles
```

### Indexing and Slicing
```python
print(df.iloc[0])               # First row
print(df.loc[:, "Name"])        # Select 'Name' column
print(df.iloc[0:2, 1:3])        # Slice specific rows and columns
```
```output
Name      Alice
Age          24
City    New York
Name: 0, dtype: object

0      Alice
1        Bob
2    Charlie
Name: Name, dtype: object

   Age         City
0   24     New York
1   27  Los Angeles
```
