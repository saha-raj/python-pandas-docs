---
grandParent: "Python"
grandParentOrder: 10
parent: "Advanced"
parentOrder: 50
self: "Error Handling"
selfOrder: 40
---

Error handling manages exceptions to prevent program crashes.

```python
try:
    result = 10 / 0
except ZeroDivisionError:
    result = 'Cannot divide by zero'
print(result)
```
```output
Cannot divide by zero
```
