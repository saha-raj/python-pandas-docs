---
grandParent: "Python"
grandParentOrder: 10
parent: "Advanced"
parentOrder: 60
self: "Error Handling"
selfOrder: 40
---

## Error Handling
Error handling uses `try`, `except`, `finally`, and `else` blocks to manage exceptions and prevent crashes.

```python
try:
    x = 1 / 0
except ZeroDivisionError:
    print("Cannot divide by zero!")
finally:
    print("End of code.")
```
```output
Cannot divide by zero!
End of code.
```
