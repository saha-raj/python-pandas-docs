---
grandParent: "Python"
grandParentOrder: 10
parent: "Code Modularization"
parentOrder: 50
self: "Functions"
selfOrder: 10
---

## Usage
Functions are reusable blocks of code defined using `def`. They can take parameters and return values.

```python
def greet(name):
    return "Hello, " + name
```

```python  
print(greet("Alice"))
```
```output
Hello, Alice
```

## Function Parameters
Functions can accept parameters, which are values passed to the function when it is called.

```python
def add_numbers(a, b):
    return a + b
```

```python
result = add_numbers(5, 3)
print(result)
```
```output
8
```

## Default Parameter Values
You can specify default values for parameters, making them optional when calling the function.

```python
def greet(name, greeting="Hello"):
    return greeting + ", " + name
```

```python
print(greet("Alice"))
print(greet("Bob", "Hi"))
```
```output
Hello, Alice
Hi, Bob
```

## Variable-length Arguments (*args)
You can define functions that accept a variable number of arguments using `*args`.

```python
def sum_numbers(*args):
    total = 0
    for num in args:
        total += num
    return total
```

```python
print(sum_numbers(1, 2, 3))
print(sum_numbers(4, 5, 6, 7))
```
```output
6
22
```

## Keyword Arguments (**kwargs)
You can define functions that accept keyword arguments using `**kwargs`.

```python
def print_info(**kwargs):
    for key, value in kwargs.items():
        print(key + ":", value)
```

```python        
print_info(name="Alice", age=25, city="New York")
```
```output
name: Alice
age: 25
city: New York
```

## Lambda Functions
Lambda functions are small, anonymous functions defined using the `lambda` keyword.

```python
square = lambda x: x ** 2
```

```python
print(square(5))
```
```output
25
```

## Recursive Functions
Functions can call themselves recursively to solve problems that can be broken down into smaller subproblems.

```python
def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n - 1)
```

```python
print(factorial(5))
```
```output
120
```

## Docstrings
Docstrings are string literals that appear as the first statement in a function. They are used to document the function's purpose, parameters, and return value.

```python
def calculate_average(numbers):
    """
    Calculates the average of a list of numbers.
    
    Args:
        numbers (list): A list of numbers.
        
    Returns:
        float: The average of the numbers.
    """
    total = sum(numbers)
    count = len(numbers)
    return total / count
```
```output
```
