---
grandParent: "Python"
grandParentOrder: 10
parent: "Data Manipulation"
parentOrder: 20
self: "Arithmetic"
selfOrder: 10
---

## Basic Arithmetic Operations
Arithmetic operations allow you to perform basic calculations. Operators include addition (`+`), subtraction (`-`), multiplication (`*`), division (`/`), modulus (`%`), exponentiation (`**`), and floor division (`//`).

```python
x = 10
y = 3
```

```python
# Addition
print(x + y)
```
```output
13
```

```python
# Subtraction
print(x - y)
```
```output
7
```

```python
# Multiplication
print(x * y)
```
```output
30
```

```python
# Division
print(x / y)
```
```output
3.3333333333333335
```

```python
# Modulus
print(x % y)
```
```output
1
```

```python
# Exponentiation
print(x ** y)
```
```output
1000
```

```python
# Floor Division
print(x // y)
```
```output
3
```

## Order of Operations
Python follows the standard order of operations (PEMDAS): Parentheses, Exponentiation, Multiplication/Division, Addition/Subtraction.

```python
# PEMDAS
result = 2 + 3 * 4 ** 2 / (5 - 1)
```

```python
print(result)
```
```output
14.0
```

## Augmented Assignment Operators
Augmented assignment operators combine an arithmetic operation with assignment.

```python
x = 5
```

```python
# Equivalent to x = x + 3
x += 3
print(x)
```
```output
8
```

```python
# Equivalent to x = x - 2
x -= 2
print(x)
```
```output
6
```

```python
# Equivalent to x = x * 4
x *= 4
print(x)
```
```output
24
```

## Arithmetic Functions
Python provides built-in functions for common arithmetic operations.

```python
x = -3.14
y = 2
```

```python
# Absolute value
print(abs(x))
```
```output
3.14
```

```python
# x raised to the power of y
print(pow(x, y))
```
```output
9.8596
```

```python
# Round to the nearest integer
print(round(x))
```
```output
-3
```

```python
# Round to 1 decimal place
print(round(x, 1))
```
```output
-3.1
```

## Math Module
The `math` module provides additional mathematical functions.

```python
import math

x = 9
y = 2
```

```python
# Square root
print(math.sqrt(x))
```
```output
3.0
```

```python
# Ceiling (smallest integer greater than or equal to x / y)
print(math.ceil(x / y))
```
```output
5
```

```python
# Floor (largest integer less than or equal to x / y)
print(math.floor(x / y))
```
```output
4
```

```python
# Sine function
print(math.sin(math.pi / 2))
```
```output
1.0
```