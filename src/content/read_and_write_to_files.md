---
grandParent: "Python"
grandParentOrder: 10
parent: "Input / output"
parentOrder: 40
self: "Read and Write to files"
selfOrder: 20
---

## Read and Write to files
You can read from and write to files using Python’s `open()` function. Use `w` for writing, `r` for reading, and `a` for appending.

```python
# Writing to a file
with open("example.txt", "w") as file:
    file.write("Hello, World!")

# Reading from a file
with open("example.txt", "r") as file:
    content = file.read()
    print(content)
```
```output
Hello, World!
```

