---
grandParent: "Pandas"
grandParentOrder: 20
parent: "Selecting"
parentOrder: 30
self: "Filter and Subset"
selfOrder: 10
---

## Example DataFrame
Create a DataFrame and filter rows based on conditions to create subsets.

```python
data = {
    "Student": ["Alex", "Bella", "Chris"],
    "Score": [85, 90, 78],
    "Passed": [True, True, False]
}
df = pd.DataFrame(data)
print(df.head(2))  # Display first 2 rows
```
```output
  Student  Score  Passed
0    Alex     85    True
1   Bella     90    True
```

### Filtering and Subsetting
```python
filtered_df = df[df["Score"] > 80]  # Filter rows where Score is greater than 80
print(filtered_df)
```
```output
  Student  Score  Passed
0    Alex     85    True
1   Bella     90    True
```
