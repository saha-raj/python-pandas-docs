---
grandParent: "Python"
grandParentOrder: 10
parent: "Control Flow"
parentOrder: 30
self: "in, not in"
selfOrder: 20
---

## Usage
The `in` and `not in` operators check if an element is present or absent in a collection (like a list, string, or dictionary).

```python
fruits = ["apple", "banana", "cherry"]
```

```python
# Check if "apple" is in the list
print("apple" in fruits)
```
```output
True
```

```python
# Check if "orange" is not in the list
print("orange" not in fruits)
```
```output
True
```

## Using in, not in with Strings
You can use `in` and `not in` to check if a substring is present or absent in a string.

```python
message = "Hello, World!"
```

```python
# Check if "Hello" is in the string
print("Hello" in message)
```
```output
True
```

```python
# Check if "Goodbye" is not in the string
print("Goodbye" not in message)
```
```output
True
```

## Using in, not in with Dictionaries
For dictionaries, `in` and `not in` check if a key is present or absent in the dictionary.

```python
person = {"name": "John", "age": 30, "city": "New York"}
```

```python
# Check if "name" is a key in the dictionary
print("name" in person)
```
```output
True
```

```python
# Check if "gender" is not a key in the dictionary
print("gender" not in person)
```
```output
True
```

## Using in, not in with Sets
Sets are unordered collections of unique elements. You can use `in` and `not in` to check membership in a set.

```python
numbers = {1, 2, 3, 4, 5}
```

```python
# Check if 3 is in the set
print(3 in numbers)
```
```output
True
```

```python
# Check if 6 is not in the set
print(6 not in numbers)
```
```output
True
```

## Using in, not in with if Statements
`in` and `not in` are commonly used in conditional statements to make decisions based on membership.

```python
fruits = ["apple", "banana", "cherry"]
```

```python
if "banana" in fruits:
    print("We have bananas!")
else:
    print("No bananas today.")
```
```output
We have bananas!
```

```python
if "orange" not in fruits:
    print("We don't have oranges.")
else:
    print("We have oranges!")
```
```output
We don't have oranges.
```