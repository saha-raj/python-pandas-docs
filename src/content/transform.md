---
grandParent: "Pandas"
grandParentOrder: 20
parent: "Modifying"
parentOrder: 40
self: "Transform"
selfOrder: 20
---

## Example DataFrame
Create a DataFrame and transform data by applying functions to columns or rows.

```python
data = {
    "Product": ["A", "B", "C"],
    "Price": [20, 35, 50],
    "Discount": [0.1, 0.2, 0.15]
}
df = pd.DataFrame(data)
print(df.head(2))  # Display first 2 rows
```
```output
  Product  Price  Discount
0       A     20      0.10
1       B     35      0.20
```

## Transforming Data
```python
df["Discounted_Price"] = df["Price"] * (1 - df["Discount"])  # Apply discount
print(df)
```
```output
  Product  Price  Discount  Discounted_Price
0       A     20      0.10              18.0
1       B     35      0.20              28.0
2       C     50      0.15              42.5
```
