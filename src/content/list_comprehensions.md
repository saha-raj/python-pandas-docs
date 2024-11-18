---
grandParent: "Python"
grandParentOrder: 10
parent: "Advanced"
parentOrder: 60
self: "List Comprehensions"
selfOrder: 30
---

## Usage
List comprehensions provide a concise way to create lists. They follow the form `[expression for item in iterable]`.

```python
squares = [x**2 for x in range(5)]
print(squares)
```
```output
[0, 1, 4, 9, 16]
```

## Basic List Comprehension
A basic list comprehension consists of an expression followed by a `for` clause.

```python
numbers = [1, 2, 3, 4, 5]
```

```python
doubled_numbers = [x * 2 for x in numbers]
print(doubled_numbers)
```
```output
[2, 4, 6, 8, 10]
```

## List Comprehension with Conditional
You can include an `if` condition in a list comprehension to filter elements.

```python
numbers = [1, 2, 3, 4, 5]
```

```python
even_numbers = [x for x in numbers if x % 2 == 0]
print(even_numbers)
```
```output
[2, 4]
```

## List Comprehension with Multiple Iterables
You can use multiple iterables in a list comprehension to create combinations.

```python
colors = ["red", "green", "blue"]
items = ["apple", "banana", "cherry"]
```

```python
combined = [(color, item) for color in colors for item in items]
print(combined)
```
```output
[('red', 'apple'), ('red', 'banana'), ('red', 'cherry'),
 ('green', 'apple'), ('green', 'banana'), ('green', 'cherry'),
 ('blue', 'apple'), ('blue', 'banana'), ('blue', 'cherry')]
```

## List Comprehension with Conditional Expression
You can use a conditional expression (ternary operator) in a list comprehension.

```python
numbers = [1, 2, 3, 4, 5]
```

```python
result = ["even" if x % 2 == 0 else "odd" for x in numbers]
print(result)
```
```output
['odd', 'even', 'odd', 'even', 'odd']
```

## Nested List Comprehension
You can create nested list comprehensions to generate multidimensional lists.

```python
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
```

```python
flattened = [x for row in matrix for x in row]
print(flattened)
```
```output
[1, 2, 3, 4, 5, 6, 7, 8, 9]
```

## List Comprehension with Function Call
You can call functions within a list comprehension.

```python
words = ["hello", "world", "python"]
```

```python
lengths = [len(word) for word in words]
print(lengths)
```
```output
[5, 5, 6]
```
