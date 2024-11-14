---
grandParent: "Pandas"
grandParentOrder: 20
parent: "Selecting"
parentOrder: 30
self: "Sort"
selfOrder: 20
---

## Example DataFrame
Create a DataFrame and sort rows by values in a specific column.

```python
data = {
    "Employee": ["John", "Doe", "Emma"],
    "Salary": [50000, 60000, 45000],
    "Years": [2, 5, 1]
}
df = pd.DataFrame(data)
print(df.head(2))  # Display first 2 rows
```
```output
  Employee  Salary  Years
0     John   50000      2
1      Doe   60000      5
```

### Sorting
```python
sorted_df = df.sort_values(by="Salary", ascending=False)
print(sorted_df)
```
```output
  Employee  Salary  Years
1      Doe   60000      5
0     John   50000      2
2     Emma   45000      1
```
