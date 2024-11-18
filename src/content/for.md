---
grandParent: "Python"
grandParentOrder: 10
parent: "Control Flow"
parentOrder: 30
self: "for Loops"
selfOrder: 30
---

## Usage
A `for` loop is used to iterate over a sequence (like a list or range).

```python
for num in range(3):
    print("Number:", num)
```
```output
Number: 0
Number: 1
Number: 2
```

## Iterating over a List
You can use a `for` loop to iterate over the elements of a list.

```python
fruits = ["apple", "banana", "cherry"]
```

```python
for fruit in fruits:
    print(fruit)
```
```output
apple
banana
cherry
```

## Iterating over a Range
You can use `range()` to generate a sequence of numbers to iterate over.

```python
for i in range(1, 6):
    print(i)
```
```output
1
2
3
4
5
```

## Iterating with Index
You can use `range()` and `len()` to iterate over a list with its index.

```python
fruits = ["apple", "banana", "cherry"]
```

```python
for i in range(len(fruits)):
    print("Index:", i, "Fruit:", fruits[i])
```
```output
Index: 0 Fruit: apple
Index: 1 Fruit: banana
Index: 2 Fruit: cherry
```

## Iterating with enumerate()
The `enumerate()` function allows you to iterate over a list and get both the index and value in each iteration.

```python
fruits = ["apple", "banana", "cherry"]
```

```python
for index, fruit in enumerate(fruits):
    print("Index:", index, "Fruit:", fruit)
```
```output
Index: 0 Fruit: apple
Index: 1 Fruit: banana
Index: 2 Fruit: cherry
```

## Iterating over a String
You can use a `for` loop to iterate over the characters of a string.

```python
message = "Hello"
```

```python
for char in message:
    print(char)
```
```output
H
e
l
l
o
```

## Iterating over a Dictionary
You can use a `for` loop to iterate over the keys of a dictionary.

```python
person = {"name": "John", "age": 30, "city": "New York"}
```

```python
for key in person:
    print(key)
```
```output
name
age
city
```

## Iterating over Dictionary Keys and Values
You can use the `items()` method to iterate over both the keys and values of a dictionary.

```python
person = {"name": "John", "age": 30, "city": "New York"}
```

```python
for key, value in person.items():
    print(key + ":", value)
```
```output
name: John
age: 30
city: New York
```

## Iterating over Multiple Lists
You can use the `zip()` function to iterate over multiple lists simultaneously.

```python
fruits = ["apple", "banana", "cherry"]
prices = [0.5, 0.75, 1.0]
```

```python
for fruit, price in zip(fruits, prices):
    print(fruit, "costs", price)
```
```output
apple costs 0.5
banana costs 0.75
cherry costs 1.0
```