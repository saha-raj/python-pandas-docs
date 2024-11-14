---
grandParent: "Pandas"
grandParentOrder: 20
parent: "Combining"
parentOrder: 50
self: "Aggregate and Group"
selfOrder: 10
---

Aggregate data by grouping based on specific columns.

```python
grouped_df = df.groupby('Name').mean()
print(grouped_df)
```
```output
Grouped DataFrame with average values
```
