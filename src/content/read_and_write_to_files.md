---
grandParent: "Python"
grandParentOrder: 10
parent: "Input / output"
parentOrder: 40
self: "Read and Write to files"
selfOrder: 20
---

File I/O includes reading from and writing to files on disk.

```python
with open('example.txt', 'w') as f:
    f.write('Hello')
with open('example.txt', 'r') as f:
    print(f.read())
```
```output
Hello
```
