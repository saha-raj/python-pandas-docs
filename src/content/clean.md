---
grandParent: "Pandas"
grandParentOrder: 20
parent: "Modifying"
parentOrder: 40
self: "Clean"
selfOrder: 10
---

## Example DataFrame
Create a DataFrame and perform cleaning operations, such as handling missing values.

```python
data = {
    "Customer": ["Alice", "Bob", "Charlie"],
    "Age": [25, None, 35],
    "City": ["New York", "Los Angeles", None]
}
df = pd.DataFrame(data)
print(df.head(2))  # Display first 2 rows
```
```output
  Customer   Age         City
0    Alice  25.0     New York
1      Bob   NaN  Los Angeles
```

## Cleaning Data
One of the ways of cleaning data involves handling null values. In the first ling of the code example below we replace null values with the string "Unknown" and store the results in a dataframe. The second line drops all rows that have missing values and saves the result to another dataframe.

```python
df_filled = df.fillna("Unknown")     # Fill missing values
df_dropped = df.dropna()             # Drop rows with missing values
print(df_filled)
print(df_dropped)
```
```output
  Customer      Age         City
0    Alice     25.0     New York
1      Bob  Unknown  Los Angeles
2  Charlie     35.0      Unknown

  Customer   Age      City
0    Alice  25.0  New York
```
