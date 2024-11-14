---
grandParent: "Python"
grandParentOrder: 10
parent: "Storing values in memory"
parentOrder: 10
self: "Arrays"
selfOrder: 30
---

## Arrays
NumPy arrays are a powerful data structure for numerical operations in Python. They provide efficient storage and manipulation of large arrays and matrices. To use arrays in Python, you need to install and import the `numpy` library.

```python
import numpy as np
numbers = np.array([1, 2, 3, 4])
print(numbers)
```
```output
[1 2 3 4]
```

## Accessing Array Elements
You can access elements in a NumPy array by their index, starting at 0.

```python
print(numbers[0])  # First element
print(numbers[2])  # Third element
```
```output
1
3
```

## Adding Elements
NumPy arrays are fixed in size, so you can't directly append to them like lists. However, you can use `np.append()` to create a new array with additional elements.

```python
numbers = np.append(numbers, 5)        # Append 5 to the array
print(numbers)
```
```output
[1 2 3 4 5]
```

## Removing Elements
To remove elements, you can use `np.delete()` to create a new array without specific elements.

```python
numbers = np.delete(numbers, 1)        # Remove element at index 1
print(numbers)
```
```output
[1 3 4 5]
```

## Basic Array Operations
NumPy supports efficient element-wise operations and functions like finding the length, sum, and mean.

```python
print(len(numbers))            # Length of the array
print(np.sum(numbers))         # Sum of elements
print(np.mean(numbers))        # Mean of elements
```
```output
4
13
3.25
```

## Array Slicing
Array slicing allows you to get a subset of the array.

```python
subset = numbers[1:3]          # Get elements from index 1 to 2
print(subset)
```
```output
[3 4]
```

## Reshaping Arrays
You can reshape arrays for operations that require specific dimensions, like creating a 2D array.

```python
matrix = np.array([1, 2, 3, 4, 5, 6]).reshape(2, 3)
print(matrix)
```
```output
[[1 2 3]
 [4 5 6]]
```
