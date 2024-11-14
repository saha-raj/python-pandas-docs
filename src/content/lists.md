---
grandParent: "Python"
grandParentOrder: 10
parent: "Storing values in memory"
parentOrder: 10
self: "Lists"
selfOrder: 20
---

Lists are used to store multiple items in a single variable. They are ordered, mutable (changeable), and allow duplicate values.

```python
colors = ['red', 'green', 'blue']
print(colors)
```
```output
['red', 'green', 'blue']
```

## Accessing List Elements
You can access elements in a list using their index. Indexing in Python starts at 0, so the first item is at index 0.

```python
print(colors[0])  # First item
print(colors[2])  # Third item
```

```output
red
blue
```

## Modifying Lists
Lists are mutable, meaning you can modify their contents after creation. You can change an item by referring to its index or add/remove items.

```python
colors[1] = 'yellow'  # Change 'green' to 'yellow'
print(colors)

colors.append('purple')  # Add 'purple' to the end
print(colors)
```
```output
['red', 'yellow', 'blue']
['red', 'yellow', 'blue', 'purple']
```

## More Info
You can perform operations like sorting and slicing on lists.

```python
# Sorting the list
colors.sort()
print(colors)

# Slicing a list to get the first two elements
print(colors[:2])
```
```output
['blue', 'purple', 'red', 'yellow']
['blue', 'purple']
```