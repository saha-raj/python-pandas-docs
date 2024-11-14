---
grandParent: "Pandas"
grandParentOrder: 20
parent: "Combining"
parentOrder: 50
self: "Merge and Join"
selfOrder: 20
---

Combine data from multiple DataFrames using merge or join.

```python
df1 = pd.DataFrame({'ID': [1, 2], 'Name': ['Alice', 'Bob']})
df2 = pd.DataFrame({'ID': [1, 2], 'Age': [25, 30]})
merged_df = pd.merge(df1, df2, on='ID')
print(merged_df)
```
```output
Merged DataFrame on common column ID
```
