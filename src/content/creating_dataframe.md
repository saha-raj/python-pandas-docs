---
grandParent: "Pandas"
grandParentOrder: 20
parent: "Creating/Loading DataFrames"
parentOrder: 10
self: "Creating dataframe"
selfOrder: 10
---

## Creating DataFrame
You can create a DataFrame in Pandas using a dictionary, where keys are column names and values are lists of data.

```python
import pandas as pd

data = {
    "Name": ["Alice", "Bob", "Charlie"],
    "Age": [24, 27, 22],
    "City": ["New York", "Los Angeles", "Chicago"]
}
df = pd.DataFrame(data)
print(df)
```
```output
      Name  Age         City
0    Alice   24     New York
1      Bob   27  Los Angeles
2  Charlie   22      Chicago
```

