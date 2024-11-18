---
grandParent: "Python"
grandParentOrder: 10
parent: "Data Structures"
parentOrder: 10
self: "Arrays (built-in Python)"
selfOrder: 28
---

## Usage
Python's `array` module allows storing and manipulating data of the same type efficiently. Unlike lists, all array elements must share the same type.

```python
# importing the array module 
import array as arr

# creating an integer array
numbers = arr.array('i', [1, 2, 3, 4])
print(numbers)
```

```output
array('i', [1, 2, 3, 4])
```

## Accessing Array Elements
Access elements in an array by their index, starting at 0.

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

## Adding Elements
Add elements to an array using `append` or `extend`.

```python
# appending a value to the array
numbers.append(5)

# extending the array with multiple values
numbers.extend([6, 7])
print(numbers)
```

```output
array('i', [1, 2, 3, 4, 5, 6, 7])
```

## Removing Elements
Remove elements using `remove` or `pop`.

```python
# removing the first occurrence of a value
numbers.remove(3)

# removing and returning an element by index
removed_item = numbers.pop(2)
print(numbers)
print(removed_item)
```

```output
array('i', [1, 2, 4, 5, 6, 7])
4
```

## Basic Array Operations
Perform operations like finding the length, summing elements, or counting occurrences of a value.

```python
# getting the length of the array
print(len(numbers))

# calculating the sum of array elements
print(sum(numbers))

# counting occurrences of a specific value
print(numbers.count(5))
```

```output
6
25
1
```

## Array Slicing
Extract a subset of the array using slicing.

```python
# slicing to get elements from index 1 to 3
subset = numbers[1:4]
print(subset)
```

```output
array('i', [2, 4, 5])
```

## Iterating Through Arrays
Use a `for` loop to iterate through array elements.

```python
# iterating through each element in the array
for num in numbers:
    print(num)
```

```output
1
2
4
5
6
7
```

## Type Codes
Specify a type code when creating an array to define the data type.

```python
# creating an array of Unicode characters
chars = arr.array('u', ['a', 'b', 'c'])
print(chars)
```

```output
array('u', 'abc')
```

## 2D Arrays
Python doesn't have built-in support for 2D arrays, but you can create a nested list to represent a 2D array.

```python
# creating a 2D array using a nested list
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
print(matrix)
```
```output
[[1, 2, 3], [4, 5, 6], [7, 8, 9]]
```

To access elements in a 2D array, use two indices: the first for the row and the second for the column.

```python
# accessing an element in a 2D array
print(matrix[1][2])
```
```output
6
```
You can also use nested loops to iterate through a 2D array.
```python
# iterating through a 2D array
for row in matrix:
    for item in row:
        print(item, end=' ')
    print()
```
```output
1 2 3 
4 5 6
7 8 9
```