---
grandParent: "Python"
grandParentOrder: 10
parent: "Data Structures"
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

## Generating Arrays
Create arrays using various methods like `arange`, `linspace`, `zeros`, `ones`, and `full`.

`arange`: Create an array with evenly spaced values within a given range.

`linspace`: Create an array with a specified number of evenly spaced values between a start and end point.

`zeros`: Create an array filled with zeros of a given shape.

`ones`: Create an array filled with ones of a given shape.

`full`: Create an array filled with a specific value of a given shape.

```python
# creating an array with a range of values
# starting from 2, up to but not including 10,
# and at intervals of 2
arr1 = np.arange(1, 10, 2)
print(arr1)
```

```output
[1 3 5 7 9]
```

```python
# creating an array of 5 evenly spaced values
# between 0 and 1
arr2 = np.linspace(0, 1, 5)
```

```python
print(arr2)
```
```output
[0.   0.25 0.5  0.75 1.  ]
```

```python
# creating an array filled with zeros
arr3 = np.zeros((2, 3))
print(arr3)
```

```output
[[0. 0. 0.]
[0. 0. 0.]]
```

```python
# creating an array filled with ones
arr4 = np.ones((3, 2))
print(arr4)
```

```output
[[1. 1.]
[1. 1.]
[1. 1.]]
```

```python
# creating an array filled with a specific value
arr5 = np.full((2, 2), 7)
print(arr5)
```

```output
[[7 7]
[7 7]]
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
Perform operations on an array.

`len`: Return the number of elements in the array.

`sum`: Calculate the sum of all elements in the array.

`mean`: Calculate the arithmetic mean of the elements in the array.

`std`: Calculate the standard deviation of the elements in the array.

`var`: Calculate the variance of the elements in the array.

For multi-dimensional arrays, `sum`, `mean`, `std`, and `var` operate on the flattened version of the array by default. You can specify the `axis` parameter to perform the operation along a specific axis of a multi-dimensional array.

```python
# calculating the length of the array
print(len(numbers))
```

```output
4
```

```python
# calculating the sum of the array
print(np.sum(numbers))
```

```output
13
```

```python
# calculating the mean of the array
print(np.mean(numbers))
```

```output
3.25
```

```python
# calculating the standard deviation of the array
print(np.std(numbers))
```
```output
1.479019945774904
```

```python
# calculating the variance of the array
print(np.var(numbers))
```
```output
2.1875
```

## Min and Max
Find the minimum and maximum values.

`min`: Find the minimum value in the array.

`max`: Find the maximum value in the array.

`argmin`: Return the index of the minimum value in the array.

`argmax`: Return the index of the maximum value in the array.

```python
# finding the smallest value
print(np.min(numbers))
```
```output
1
```
```python
# finding the largest value  
print(np.max(numbers))
```
```output
5
```



```python
# finding the index of the minimum value in the array
print(np.argmin(numbers))
```

```output
0
```

```python
# finding the index of the maximum value in the array
print(np.argmax(numbers))
```

```output
3
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

## Broadcasting
Perform operations on arrays with different shapes.

```python
# adding a scalar to a 2D array
result = matrix + 1
print(result)
```

```output
[[2 3 4]
[5 6 7]]
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

## Sorting Arrays
Sort elements in ascending or descending order.

```python
# sorting the array in ascending order
sorted_arr = np.sort(numbers)
print(sorted_arr)

# sorting the array in descending order  
reverse_sorted = numbers[::-1]
print(reverse_sorted)
```

```output
[1 3 4 5]
[5 4 3 1]
```

## Saving and Loading Arrays
Save and load arrays to/from files.

```python
# saving the array to a file
np.save('my_array.npy', numbers)

# loading the array from a file
loaded_arr = np.load('my_array.npy')
print(loaded_arr)
```

```output
[1 3 4 5]
```