---
grandParent: "Python"
grandParentOrder: 10
parent: "Storing values in memory"
parentOrder: 10
self: "Lists"
selfOrder: 20
---

## Usage
Lists store multiple items in a single variable. They are ordered, mutable (changeable), and allow duplicates.

```python
# creating a list of colors
colors = ['red', 'green', 'blue']
print(colors)
```
```output
['red', 'green', 'blue']
```

## Accessing List Elements
Access items in a list using their index. Indexing starts at 0.

```python
# accessing elements by index
print(colors[0])  # first item
```
```output
red
```
```python
# accessing elements by index
print(colors[2])  # third item
```
```output
blue
```

## Modifying Lists
Lists can be updated by changing items, adding new ones, or removing existing ones.

```python
# changing an item in the list
colors[1] = 'yellow'  # change 'green' to 'yellow'
print(colors)
```
```output
['red', 'yellow', 'blue']
```

```python
# adding an item to the list
colors.append('purple')
print(colors)
```
```output
['red', 'yellow', 'blue', 'purple']
```


## Operations on Lists
Lists support operations like sorting and slicing.

```python
# sorting the list alphabetically
colors.sort()
print(colors)
```
```output
['blue', 'purple', 'red', 'yellow']
```
```python
# slicing the list to get the first two items
print(colors[:2])
```
```output
['blue', 'purple']
```