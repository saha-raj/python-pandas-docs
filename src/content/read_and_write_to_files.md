---
grandParent: "Python"
grandParentOrder: 10
parent: "Input / output"
parentOrder: 40
self: "Read and Write to files"
selfOrder: 20
---

## Usage
You can read from and write to files using Python's `open()` function. Use `w` for writing, `r` for reading, and `a` for appending.

```python
# Writing to a file
with open("example.txt", "w") as file:
    file.write("Hello, World!")
```
```output
```

```python
# Reading from a file
with open("example.txt", "r") as file:
    content = file.read()
    print(content)
```
```output
Hello, World!
```

## Writing to a File
You can write content to a file using the `write()` method.

```python
with open("output.txt", "w") as file:
    file.write("This is the first line.\n")
    file.write("This is the second line.")
```
```output
```

The `"w"` mode overwrites the file if it already exists. Use `"a"` mode to append to an existing file.

## Reading from a File
You can read the entire content of a file using the `read()` method.

```python
with open("example.txt", "r") as file:
    content = file.read()
    print(content)
```
```output
```

## Reading Lines from a File
You can read a file line by line using the `readline()` method or by iterating over the file object.

```python
with open("example.txt", "r") as file:
    line = file.readline()
    while line:
        print(line.strip())
        line = file.readline()
```
```output
```

```python
with open("example.txt", "r") as file:
    for line in file:
        print(line.strip())
```
```output
```

## Appending to a File
You can append content to an existing file using the `"a"` mode.

```python
with open("example.txt", "a") as file:
    file.write("\nThis line is appended.")
```
```output
```

## Checking if a File Exists
You can use the `os` module to check if a file exists before performing file operations.

```python
import os

if os.path.exists("example.txt"):
    print("File exists.")
else:
    print("File does not exist.")
```
```output
```

## Deleting a File
You can use the `os` module to delete a file.

```python
import os

if os.path.exists("example.txt"):
    os.remove("example.txt")
    print("File deleted.")
else:
    print("File does not exist.")
```
```output
```

## Reading and Writing Binary Files
You can read from and write to binary files by specifying the `"b"` mode along with `"r"` or `"w"`.

```python
with open("image.jpg", "rb") as file:
    binary_data = file.read()
```
```output
```

```python
with open("copy.jpg", "wb") as file:
    file.write(binary_data)
```
```output
```
