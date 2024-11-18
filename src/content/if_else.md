---
grandParent: "Python"
grandParentOrder: 10
parent: "Control Flow"
parentOrder: 30
self: "if else"
selfOrder: 10
---

## Usage
`if else` statements allow you to execute code based on conditions. The `elif` keyword provides additional conditions.

```python
temperature = 30
```

```python
if temperature > 35:
    print("It's a hot day.")
elif temperature > 20:
    print("It's a warm day.")
else:
    print("It's a cold day.")
```
```output
It's a warm day.
```

## Multiple Conditions
You can use logical operators like `and`, `or`, and `not` to combine multiple conditions.

```python
is_weekend = True
is_sunny = True
```

```python
if is_weekend and is_sunny:
    print("It's a great day for a picnic!")
else:
    print("Let's stay indoors and watch a movie.")
```
```output
It's a great day for a picnic!
```

## Nested if else
You can nest `if else` statements to create more complex conditions.

```python
num = 10
```

```python
if num > 0:
    print("The number is positive.")
    if num % 2 == 0:
        print("The number is even.")
    else:
        print("The number is odd.")
else:
    print("The number is non-positive.")
```
```output
The number is positive.
The number is even.
```

## Ternary Operator
A ternary operator is a shorthand way to write a simple `if-else` statement in one line. It has the following syntax:

`result = expression_if_true if condition else expression_if_false`

The ternary operator evaluates the condition. If it's true, the `expression_if_true` is executed and assigned to result. If the condition is false, the `expression_if_false` is executed and assigned to result.

```python
x = 10
y = 20
```

```python
max_num = x if x > y else y
print("The maximum number is:", max_num)
```
```output
The maximum number is: 20
```

## Multiple Conditions with Ternary Operator
You can combine the ternary operator with logical operators for more complex conditions.

```python
is_raining = False
is_windy = True
```

```python
weather = "Stay indoors" if is_raining or is_windy else "Go outside"
print(weather)
```
```output
Stay indoors
```

## "Truthy" and "Falsy" Values
In Python, certain values are considered "truthy" or "falsy" when evaluated in a boolean context.

```python
if "hello":
    print("The string is truthy.")
else:
    print("The string is falsy.")
```
```output
The string is truthy.
```

```python
if []:
    print("The list is truthy.")
else:
    print("The list is falsy.")
```
```output
The list is falsy.
```