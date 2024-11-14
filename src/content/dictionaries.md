---
grandParent: "Python"
grandParentOrder: 10
parent: "Storing values in memory"
parentOrder: 10
self: "Dictionaries"
selfOrder: 40
---

## Dictionaries
Dictionaries are collections of key-value pairs. They are unordered, mutable, and indexed by keys. Each key in a dictionary must be unique.

```python
person = {"name": "Alice", "age": 25, "city": "New York"}
print(person)
```
```output
{'name': 'Alice', 'age': 25, 'city': 'New York'}
```

## Accessing Dictionary Values
Access values in a dictionary by referring to their keys.

```python
print(person["name"])  # Access value by key
```
```output
Alice
```

## Modifying Dictionaries
Dictionaries are mutable, so you can add, modify, or remove key-value pairs.

```python
person["age"] = 26                # Update value
person["job"] = "Engineer"        # Add new key-value pair
print(person)
```
```output
{'name': 'Alice', 'age': 26, 'city': 'New York', 'job': 'Engineer'}
```

## Removing Elements
Use `pop()` or `del` to remove items from a dictionary.

```python
person.pop("city")                # Remove item with key 'city'
print(person)
del person["job"]                 # Remove item with key 'job'
print(person)
```
```output
{'name': 'Alice', 'age': 26, 'job': 'Engineer'}
{'name': 'Alice', 'age': 26}
```

## Dictionary Methods
Dictionaries come with useful methods for accessing keys, values, and items.

```python
print(person.keys())              # Get all keys
print(person.values())            # Get all values
print(person.items())             # Get all key-value pairs
```
```output
dict_keys(['name', 'age'])
dict_values(['Alice', 26])
dict_items([('name', 'Alice'), ('age', 26)])
```

```