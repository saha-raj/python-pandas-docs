---
grandParent: "Python"
grandParentOrder: 10
parent: "Data Structures"
parentOrder: 10
self: "Dictionaries"
selfOrder: 40
---

## Usage
Dictionaries store data as key-value pairs. They are unordered, mutable, and use unique keys for indexing.

```python
# creating a dictionary with key-value pairs
person = {"name": "Alice", "age": 25, "city": "New York"}
print(person)
```

```output
{'name': 'Alice', 'age': 25, 'city': 'New York'}
```

## Accessing Dictionary Values
Access values in a dictionary using their keys.

```python
# accessing value associated with a key
print(person["name"])
```
```output
Alice
```

```python
# accessing value associated with a key
print(person["age"])
```
```output
25
```

## Modifying Dictionaries
Add, update, or remove key-value pairs in a dictionary.

```python
# updating the value of an existing key
person["age"] = 26

# adding a new key-value pair
person["job"] = "Engineer"
print(person)
```

```output
{'name': 'Alice', 'age': 26, 'city': 'New York', 'job': 'Engineer'}
```

## Removing Elements
Remove elements using `pop()` or `del`.

```python
# removing an item by key using pop()
person.pop("city")
print(person)

# removing an item by key using del
del person["job"]
print(person)
```

```output
{'name': 'Alice', 'age': 26, 'job': 'Engineer'}
{'name': 'Alice', 'age': 26}
```

## Dictionary Methods
Use dictionary methods to access keys, values, and items.

```python
# getting all keys in the dictionary
print(person.keys())

# getting all values in the dictionary
print(person.values())

# getting all key-value pairs in the dictionary
print(person.items())
```

```output
dict_keys(['name', 'age'])
dict_values(['Alice', 26])
dict_items([('name', 'Alice'), ('age', 26)])
```

