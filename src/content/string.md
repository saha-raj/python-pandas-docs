---
grandParent: "Python"
grandParentOrder: 10
parent: "Data Manipulation"
parentOrder: 20
self: "String"
selfOrder: 30
---

## String
String manipulation includes operations like concatenation, indexing, slicing, and using built-in string methods.

```python
text = "Hello, World!"
```

```python
# Convert to uppercase
print(text.upper())
```
```output
HELLO, WORLD!
```

```python
# Convert to lowercase
print(text.lower())
```
```output
hello, world!
```

```python
# Replace characters
print(text.replace("o", "0"))
```
```output
Hell0, W0rld!
```

```python
# Slice string
print(text[1:5])
```
```output
ello
```

```python
# Check if string starts with a substring
print(text.startswith("Hello"))
```
```output
True
```

```python
# Check if string ends with a substring
print(text.endswith("!"))
```
```output
True
```

```python
# Split string into a list
print(text.split(", "))
```
```output
['Hello', 'World!']
```

```python
# Join list elements into a string
print(", ".join(["apple", "banana", "cherry"]))
```
```output
apple, banana, cherry
```

```python
# Remove leading and trailing whitespace
text = "  Hello, World!  "
print(text.strip())
```
```output
Hello, World!
```

```python
# Check if string contains a substring
print("World" in text)
```
```output
True
```

```python
# Find the index of a substring
print(text.find("World"))
```
```output
8
```

```python
# Count occurrences of a substring
print(text.count("o"))
```
```output
2
```

```python
# Check if string is uppercase
print(text.isupper())
```
```output
False
```

```python
# Check if string is lowercase
print(text.islower())
```
```output
False
```

```python
# Check if string is alphanumeric
print(text.isalnum())
```
```output
False
```

```python
# Check if string is alphabetic
print(text.isalpha())
```
```output
False
```

```python
# Check if string is numeric
print(text.isnumeric())
```
```output
False
```

```python
# Capitalize the first character
print(text.capitalize())
```
```output
Hello, world!
```

```python
# Swap case
print(text.swapcase())
```
```output
hELLO, wORLD!
```

```python
# Title case
print(text.title())
```
```output
Hello, World!
```