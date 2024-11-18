---
grandParent: "Python"
grandParentOrder: 10
parent: "Control Flow"
parentOrder: 30
self: "while Loops"
selfOrder: 40
---

## Usage
A `while` loop repeatedly executes code as long as a condition is `True`.

```python
count = 0
while count < 3:
    print("Count:", count)
    count += 1
```
```output
Count: 0
Count: 1
Count: 2
```


## Infinite Loop
If the condition in a `while` loop always remains `True`, it will result in an infinite loop.

```python
while True:
    print("This is an infinite loop!")
    # Use break, return, or sys.exit() to exit the loop
```
```output
This is an infinite loop!
This is an infinite loop!
...
```

## break Statement
The `break` statement is used to exit a `while` loop prematurely.

```python
count = 0
while True:
    print("Count:", count)
    count += 1
    if count >= 3:
        break
```
```output
Count: 0
Count: 1
Count: 2
```

## continue Statement
The `continue` statement is used to skip the rest of the current iteration and move to the next iteration.

```python
count = 0
while count < 5:
    count += 1
    if count == 3:
        continue
    print("Count:", count)
```
```output
Count: 1
Count: 2
Count: 4
Count: 5
```

## while Loop with else
The `else` block after a `while` loop is executed if the loop completes normally (without encountering a `break` statement).

```python
count = 0
while count < 3:
    print("Count:", count)
    count += 1
else:
    print("Loop completed normally")
```
```output
Count: 0
Count: 1
Count: 2
Loop completed normally
```

## Nested while Loops
You can nest `while` loops to create more complex logic.

```python
i = 1
while i <= 3:
    j = 1
    while j <= 3:
        print("(i, j):", (i, j))
        j += 1
    i += 1
```
```output
(i, j): (1, 1)
(i, j): (1, 2)
(i, j): (1, 3)
(i, j): (2, 1)
(i, j): (2, 2)
(i, j): (2, 3)
(i, j): (3, 1)
(i, j): (3, 2)
(i, j): (3, 3)
```

## while Loop with User Input
You can use a `while` loop to repeatedly prompt the user for input until a certain condition is met.

```python
while True:
    user_input = input("Enter a number (or 'q' to quit): ")
    if user_input == 'q':
        break
    number = int(user_input)
    print("Entered number:", number)
```
```output
Enter a number (or 'q' to quit): 5
Entered number: 5
Enter a number (or 'q' to quit): 10
Entered number: 10
Enter a number (or 'q' to quit): q
```