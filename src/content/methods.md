---
grandParent: "Python"
grandParentOrder: 10
parent: "Code Modularization"
parentOrder: 50
self: "Methods"
selfOrder: 20
---

## Usage
Methods are functions associated with objects. They are called on objects using dot notation (e.g., `.append()` for lists).

```python
fruits = ["apple", "banana"]
fruits.append("cherry")       # Append method for list
print(fruits)
```
```output
['apple', 'banana', 'cherry']
```

## String Methods
String objects have various built-in methods for manipulation and analysis.

```python
message = "Hello, World!"
```

```python
print(message.upper())       # Convert to uppercase
```
```output
HELLO, WORLD!
```

```python
print(message.replace("Hello", "Hi"))   # Replace substring
```
```output
Hi, World!
```

```python
print(message.split(", "))   # Split string into list
```
```output
['Hello', 'World!']
```

## List Methods
List objects have methods for modifying and manipulating the elements.

```python
numbers = [1, 2, 3, 4, 5]
```

```python
numbers.append(6)            # Append element to the end
print(numbers)
```
```output
[1, 2, 3, 4, 5, 6]
```

```python
numbers.insert(0, 0)         # Insert element at specific index
print(numbers)
```
```output
[0, 1, 2, 3, 4, 5, 6]
```

```python
numbers.remove(3)            # Remove first occurrence of element
print(numbers)
```
```output
[0, 1, 2, 4, 5, 6]
```

## Dictionary Methods
Dictionary objects have methods for accessing and manipulating key-value pairs.

```python
person = {"name": "Alice", "age": 25}
```

```python
print(person.keys())         # Get all keys
```
```output
dict_keys(['name', 'age'])
```

```python
print(person.values())       # Get all values
```
```output
dict_values(['Alice', 25])
```

```python
print(person.items())        # Get all key-value pairs
```
```output
dict_items([('name', 'Alice'), ('age', 25)])
```

## Custom Methods
You can define custom methods within classes to encapsulate object behavior.

```python
class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height
        
    def area(self):
        return self.width * self.height
        
    def perimeter(self):
        return 2 * (self.width + self.height)
```

```python
rectangle = Rectangle(5, 3)
print(rectangle.area())       # Call area method
```
```output
15
```

```python
print(rectangle.perimeter())  # Call perimeter method
```
```output
16
```

