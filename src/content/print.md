---
grandParent: "Python"
grandParentOrder: 10
parent: "Input / output"
parentOrder: 40
self: "Print"
selfOrder: 10
---

## Usage
The `print()` function outputs values to the console.

```python
name = "Alice"
```

```python
print("Hello,", name)
```
```output
Hello, Alice
```

## Printing Multiple Values
You can print multiple values by separating them with commas.

```python
x = 10
y = 20
```

```python
print("x =", x, "and y =", y)
```
```output
x = 10 and y = 20
```

## Customizing Separator
By default, `print()` uses a space as the separator between values. You can change the separator using the `sep` parameter.

```python
print("apple", "banana", "cherry")
```
```output
apple banana cherry
```

```python
print("apple", "banana", "cherry", sep=", ")
```
```output
apple, banana, cherry
```

## Customizing End Character
By default, `print()` adds a newline character at the end of the output. You can change the end character using the `end` parameter.

```python
print("Hello,", end=" ")
print("World!")
```
```output
Hello, World!
```

## Printing Formatted Strings
You can use f-strings (formatted string literals) to embed expressions inside string literals.

```python
name = "Alice"
age = 25
```

```python
print(f"My name is {name} and I'm {age} years old.")
```
```output
My name is Alice and I'm 25 years old.
```

## Printing to a File
You can redirect the output of `print()` to a file using the `file` parameter.

```python
with open("output.txt", "w") as file:
    print("Hello, World!", file=file)
```
```output
```

This will write "Hello, World!" to the file "output.txt".

## Printing with Different Formatting
You can use various formatting options with `print()` to control the appearance of the output.

```python
x = 10
y = 3.14159
```

```python
print("x = %d" % x)  # Placeholder for integers
```
```output
x = 10
```

```python
print("y = %.2f" % y)  # Placeholder for floats with 2 decimal places
```
```output
y = 3.14
```

```python
print("x = {0} and y = {1}".format(x, y))  # Using format() method
```
```output
x = 10 and y = 3.14159
```
