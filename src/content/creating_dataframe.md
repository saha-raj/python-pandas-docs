---
grandParent: "Pandas"
grandParentOrder: 20
parent: "Creating/Loading DataFrames"
parentOrder: 10
self: "Creating dataframe"
selfOrder: 10
---

Create DataFrames from lists or dictionaries using pandas.

```python
import pandas as pd
data = {'Name': ['Alice', 'Bob'], 'Age': [25, 30]}
df = pd.DataFrame(data)
print(df)
```
```output
Name  Age
0  Alice   25
1  Bob   30
```
