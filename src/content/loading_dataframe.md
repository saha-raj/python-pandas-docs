---
grandParent: "Pandas"
grandParentOrder: 20
parent: "Creating/Loading DataFrames"
parentOrder: 10
self: "Loading dataframes"
selfOrder: 20
---

## Loading DataFrame from File (CSV and Excel)
Load data from a CSV or Excel file into a DataFrame using `pd.read_csv()` and `pd.read_excel()`.

```python
# Loading from CSV
df_csv = pd.read_csv("data.csv")

# Loading from Excel
df_excel = pd.read_excel("data.xlsx")

print(df_csv.head())  # Display first few rows
```
```output
    # Sample output may vary based on file content
```