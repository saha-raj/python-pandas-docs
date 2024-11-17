---
grandParent: "Python"
grandParentOrder: 10
parent: "Storing values in memory"
parentOrder: 10
self: "Arrays (Numpy)"
selfOrder: 31
---

## Usage
NumPy arrays are efficient data structures for numerical operations. They store and manipulate large arrays and matrices effectively.

```python
# importing numpy
import numpy as np

# create a numpy array
numbers = np.array([1, 2, 3, 4])
print(numbers)
```

```output
[1 2 3 4]
```

## Accessing Elements
Access elements using zero-based indexing.

```python
# accessing the first element
print(numbers[0])
```
```output
1
```
```python
# accessing the third element
print(numbers[2])
```
```output
3
```



## Array Slicing
Extract a subset of an array.

```python
# slicing to get elements from index 1 to 2
subset = numbers[1:3]
print(subset)
```

```output
[2 3]
```

## Adding Elements
Append elements to create a new array.

```python
# appending an element to the array
numbers = np.append(numbers, 5)
print(numbers)
```

```output
[1 2 3 4 5]
```

## Removing Elements
Remove elements by index.

```python
# removing the element at index 1
numbers = np.delete(numbers, 1)
print(numbers)
```

```output
[1 3 4 5]
```

## Basic Operations
Perform operations like length, sum, and mean.

```python
# calculating the length, sum, and mean of the array
print(len(numbers))
print(np.sum(numbers))
print(np.mean(numbers))
```

```output
4
13
3.25
```

## Min and Max
Find the minimum and maximum values.

```python
# finding the smallest value
print(np.min(numbers))

# finding the largest value
print(np.max(numbers))
```

```output
1
5
```

## Reshaping Arrays
Change the shape of an array.

```python
# reshaping a 1D array into a 2D array
matrix = np.array([1, 2, 3, 4, 5, 6]).reshape(2, 3)
print(matrix)
```

```output
[[1 2 3]
 [4 5 6]]
```

## 2D Arrays
Access elements in rows and columns.

```python
# accessing an element in row 0, column 1
print(matrix[0, 1])

# accessing all rows of column 1
print(matrix[:, 1])
```

```output
2
[2 5]
```

## Transposing Arrays
Switch rows and columns.

```python
# transposing the array
transposed = matrix.T
print(transposed)
```

```output
[[1 4]
 [2 5]
 [3 6]]
```

## Element-Wise Operations
Apply operations to all elements.

```python
# multiplying each element by 2
result = numbers * 2
print(result)
```

```output
[2 6 8 10]
```

## Boolean Masking
Filter elements that meet a condition.

```python
# filtering elements greater than 3
mask = numbers > 3
filtered = numbers[mask]
print(filtered)
```

```output
[4 5]
```

## Generating Ranges
Create arrays with a range of values.

```python
# generating a range of numbers from 1 to 9 with a step of 2
range_arr = np.arange(1, 10, 2)
print(range_arr)
```

```output
[1 3 5 7 9]
```

## Random Numbers
Generate random arrays.

```python
# creating a 2x3 array of random integers between 1 and 9
rand_arr = np.random.randint(1, 10, size=(2, 3))
print(rand_arr)
```

```output
[[3 7 1]
 [6 5 8]]
```

## Stacking Arrays
Combine arrays vertically or horizontally.

```python
# stacking arrays vertically
stacked = np.vstack([numbers, numbers])
print(stacked)
```

```output
[[1 3 4 5]
 [1 3 4 5]]
```

## Dot Product
Calculate the dot product of two arrays.

```python
# computing the dot product of two arrays
a = np.array([1, 2])
b = np.array([3, 4])
dot_product = np.dot(a, b)
print(dot_product)
```

```output
11
```

## Matrix Multiplication
Multiply two 2D arrays.

```python
# multiplying two matrices
matrix1 = np.array([[1, 2], [3, 4]])
matrix2 = np.array([[5, 6], [7, 8]])
result = np.matmul(matrix1, matrix2)
print(result)
```

```output
[[19 22]
 [43 50]]
```

## Unique Elements
Find unique values in an array.

```python
# extracting unique elements from the array
unique_elements = np.unique(numbers)
print(unique_elements)
```

```output
[1 3 4 5]
```

