---
grandParent: "Python"
grandParentOrder: 10
parent: "Data Manipulation"
parentOrder: 20
self: "Logic and Comparison"
selfOrder: 20
---

## Basic Logic and Comparison Operations
Use logical operators (`and`, `or`, `not`) and comparison operators (`==`, `!=`, `<`, `>`, `<=`, `>=`) to compare values and combine conditions.

```python
# defining two numbers
a = 5
b = 10
```

```python
# checking if values are equal
print(a == b)
```

```output
False
```

```python
# checking if values are not equal
print(a != b)
```

```output
True
```

```python
# checking if one value is less than the other
print(a < b)
```

```output
True
```

```python
# checking if one value is greater than the other
print(a > b)
```

```output
False
```

```python
# checking if one value is less than or equal to the other
print(a <= b)
```

```output
True
```

```python
# checking if one value is greater than or equal to the other
print(a >= b)
```

```output
False
```

## Logical Operators
Logical operators combine conditions.

```python
# checking logical AND condition
print(a < b and b > 0)
```

```output
True
```

```python
# checking logical OR condition
print(a > b or a < b)
```

```output
True
```

```python
# checking logical NOT condition
print(not a == b)
```

```output
True
```

## Combining Logical and Comparison Operators
Combine multiple logical and comparison operations.

```python
# checking multiple conditions with logical AND
c = 15
print(a < b and b < c)
```

```output
True
```

```python
# checking multiple conditions with logical OR
print(a == b or c > b)
```

```output
True
```

```python
# using logical NOT with multiple conditions
print(not (c <= a or b < a))
```

```output
True
```

## Truthy and Falsy Values
Some values inherently evaluate to `True` or `False`.

```python
# checking the boolean value of 0
print(bool(0))
```

```output
False
```

```python
# checking the boolean value of a non-zero number
print(bool(1))
```

```output
True
```

```python
# checking the boolean value of an empty string
print(bool(""))
```

```output
False
```

```python
# checking the boolean value of a non-empty string
print(bool("Hello"))
```

```output
True
```

## Comparison of Strings
Strings are compared lexicographically.

```python
# defining two strings
x = "apple"
y = "banana"
```

```python
# checking if strings are equal
print(x == y)
```

```output
False
```

```python
# checking lexicographic order
print(x < y)
```

```output
True
```

```python
# checking reverse lexicographic order
print(x > y)
```

```output
False
```

## Chaining Comparisons
Python supports chaining comparisons for concise expressions.

```python
# checking if a value falls within a range
print(1 < a < 10)
```

```output
True
```

```python
# checking if a value is between two other values
print(0 <= b <= 10)
```

```output
True
```
