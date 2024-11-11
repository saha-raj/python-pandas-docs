// src/data/content.js
export const docContent = {
  sections: [
    {
      id: "python-basics",
      title: "Python",
      items: [
        {
          id: "storing-values",
          title: "Storing values in memory",
          items: [
            {
              id: "Variables",
              title: "Variables",
              content: {
                description: "Python has several built-in data types that are used to define different kinds of data. The most common basic data types are integers (int), floating-point numbers (float), strings (str), and booleans (bool).",
                codeBlocks: [
                  {
                    code: "# Integer examples\nage = 25\ncount = -10\nprint(f\"Age: {age}, Count: {count}\")\nprint(f\"Type of age: {type(age)}\")",
                    output: "Age: 25, Count: -10\nType of age: <class 'int'>"
                  },
                  {
                    code: "# Float examples\nprice = 19.99\ntemperature = -3.8\nprint(f\"Price: ${price}, Temperature: {temperature}°C\")\nprint(f\"Type of price: {type(price)}\")",
                    output: "Price: $19.99, Temperature: -3.8°C\nType of price: <class 'float'>"
                  },
                  {
                    code: "# String examples\nname = \"Python\"\nmessage = 'Hello, World!'\nprint(f\"Name: {name}\")\nprint(f\"Message: {message}\")\nprint(f\"Type of name: {type(name)}\")",
                    output: "Name: Python\nMessage: Hello, World!\nType of name: <class 'str'>"
                  },
                  {
                    code: "# Boolean examples\nis_valid = True\nhas_data = False\nprint(f\"Is valid?: {is_valid}\")\nprint(f\"Has data?: {has_data}\")\nprint(f\"Type of is_valid: {type(is_valid)}\")",
                    output: "Is valid?: True\nHas data?: False\nType of is_valid: <class 'bool'>"
                  }
                ]
              }
            },
            {
              id: "Lists",
              title: "Lists",
              content: {
                description: "[Placeholder] Description of Python lists",
                codeBlocks: [{
                  code: "# List examples placeholder",
                  output: "Output placeholder"
                }]
              }
            },
            {
              id: "Arrays",
              title: "Arrays",
              content: {
                description: "[Placeholder] Description of Python arrays",
                codeBlocks: [{
                  code: "# Array examples placeholder",
                  output: "Output placeholder"
                }]
              }
            },
            {
              id: "Dictionaries",
              title: "Dictionaries",
              content: {
                description: "[Placeholder] Description of Python dictionaries",
                codeBlocks: [{
                  code: "# Dictionary examples placeholder",
                  output: "Output placeholder"
                }]
              }
            },
            {
              id: "dataframes-ref",
              title: "dataframes (see pandas)",
              content: {
                description: "[Placeholder] Reference to Pandas section for DataFrames",
                codeBlocks: [{
                  code: "# DataFrame reference placeholder",
                  output: "Output placeholder"
                }]
              }
            }
          ]
        },
        {
          id: "manipulating-values",
          title: "Manipulating values",
          items: [
            {
              id: "arithmetic",
              title: "Arithmetic",
              content: {
                description: "[Placeholder] Description of arithmetic operations",
                codeBlocks: [{
                  code: "# Arithmetic examples placeholder",
                  output: "Output placeholder"
                }]
              }
            },
            {
              id: "logic-comparison",
              title: "logic and comparison",
              content: {
                description: "[Placeholder] Description of logic and comparison operations",
                codeBlocks: [{
                  code: "# Logic examples placeholder",
                  output: "Output placeholder"
                }]
              }
            },
            {
              id: "string-ops",
              title: "String",
              content: {
                description: "[Placeholder] Description of string operations",
                codeBlocks: [{
                  code: "# String operation examples placeholder",
                  output: "Output placeholder"
                }]
              }
            }
          ]
        },
        {
          id: "control-flow",
          title: "Control Flow",
          items: [
            {
              id: "if-else",
              title: "if else",
              content: {
                description: "[Placeholder] Description of if-else statements",
                codeBlocks: [{
                  code: "# If-else examples placeholder",
                  output: "Output placeholder"
                }]
              }
            },
            {
              id: "in-not-in",
              title: "in, not in",
              content: {
                description: "[Placeholder] Description of in/not in operators",
                codeBlocks: [{
                  code: "# In/not in examples placeholder",
                  output: "Output placeholder"
                }]
              }
            },
            {
              id: "for-loops",
              title: "for",
              content: {
                description: "[Placeholder] Description of for loops",
                codeBlocks: [{
                  code: "# For loop examples placeholder",
                  output: "Output placeholder"
                }]
              }
            },
            {
              id: "while-loops",
              title: "while",
              content: {
                description: "[Placeholder] Description of while loops",
                codeBlocks: [{
                  code: "# While loop examples placeholder",
                  output: "Output placeholder"
                }]
              }
            }
          ]
        },
        {
          id: "io",
          title: "Input / output",
          items: [
            {
              id: "print",
              title: "print",
              content: {
                description: "[Placeholder] Description of print function",
                codeBlocks: [{
                  code: "# Print examples placeholder",
                  output: "Output placeholder"
                }]
              }
            },
            {
              id: "file-io",
              title: "read and write to files",
              content: {
                description: "[Placeholder] Description of file I/O",
                codeBlocks: [{
                  code: "# File I/O examples placeholder",
                  output: "Output placeholder"
                }]
              }
            },
            {
              id: "other-io",
              title: "other?",
              content: {
                description: "[Placeholder] Description of other I/O methods",
                codeBlocks: [{
                  code: "# Other I/O examples placeholder",
                  output: "Output placeholder"
                }]
              }
            }
          ]
        },
        {
          id: "advanced",
          title: "Advanced",
          items: [
            {
              id: "Functions",
              title: "Functions",
              content: {
                description: "[Placeholder] Description of Python functions",
                codeBlocks: [{
                  code: "# Function examples placeholder",
                  output: "Output placeholder"
                }]
              }
            },
            {
              id: "methods",
              title: "Methods",
              content: {
                description: "[Placeholder] Description of Python methods",
                codeBlocks: [{
                  code: "# Method examples placeholder",
                  output: "Output placeholder"
                }]
              }
            },
            {
              id: "list-comprehensions",
              title: "List Comprehensions",
              content: {
                description: "[Placeholder] Description of list comprehensions",
                codeBlocks: [{
                  code: "# List comprehension examples placeholder",
                  output: "Output placeholder"
                }]
              }
            },
            {
              id: "error-handling",
              title: "Error Handling",
              content: {
                description: "[Placeholder] Description of error handling",
                codeBlocks: [{
                  code: "# Error handling examples placeholder",
                  output: "Output placeholder"
                }]
              }
            }
          ]
        }
      ]
    },
    {
      id: "pandas",
      title: "Pandas",
      items: [
        {
          id: "input",
          title: "input",
          items: [
            {
              id: "create-df",
              title: "creating dataframe",
              content: {
                description: "[Placeholder] Description of DataFrame creation",
                codeBlocks: [{
                  code: "# DataFrame creation placeholder",
                  output: "Output placeholder"
                }]
              }
            },
            {
              id: "load-df",
              title: "loading dataframe from file, csv and excel",
              content: {
                description: "[Placeholder] Description of loading DataFrames",
                codeBlocks: [{
                  code: "# DataFrame loading placeholder",
                  output: "Output placeholder"
                }]
              }
            }
          ]
        },
        {
          id: "view",
          title: "View",
          items: [
            {
              id: "inspect",
              title: "inspect/summarize",
              content: {
                description: "[Placeholder] Description of DataFrame inspection",
                codeBlocks: [{
                  code: "# DataFrame inspection placeholder",
                  output: "Output placeholder"
                }]
              }
            },
            {
              id: "index-slice",
              title: "index, slice",
              content: {
                description: "[Placeholder] Description of indexing and slicing",
                codeBlocks: [{
                  code: "# Indexing examples placeholder",
                  output: "Output placeholder"
                }]
              }
            }
          ]
        },
        {
          id: "select",
          title: "select",
          items: [
            {
              id: "filter-subset",
              title: "filter, subset",
              content: {
                description: "[Placeholder] Description of filtering and subsetting",
                codeBlocks: [{
                  code: "# Filtering examples placeholder",
                  output: "Output placeholder"
                }]
              }
            },
            {
              id: "sort",
              title: "sort",
              content: {
                description: "[Placeholder] Description of sorting",
                codeBlocks: [{
                  code: "# Sorting examples placeholder",
                  output: "Output placeholder"
                }]
              }
            }
          ]
        },
        {
          id: "modify",
          title: "modify",
          items: [
            {
              id: "clean",
              title: "clean",
              content: {
                description: "[Placeholder] Description of data cleaning",
                codeBlocks: [{
                  code: "# Cleaning examples placeholder",
                  output: "Output placeholder"
                }]
              }
            },
            {
              id: "transform",
              title: "transform",
              content: {
                description: "[Placeholder] Description of data transformation",
                codeBlocks: [{
                  code: "# Transformation examples placeholder",
                  output: "Output placeholder"
                }]
              }
            }
          ]
        },
        {
          id: "combine",
          title: "combine",
          items: [
            {
              id: "agg-group",
              title: "aggregate and group",
              content: {
                description: "[Placeholder] Description of aggregation and grouping",
                codeBlocks: [{
                  code: "# Aggregation examples placeholder",
                  output: "Output placeholder"
                }]
              }
            },
            {
              id: "merge-join",
              title: "merge and join",
              content: {
                description: "[Placeholder] Description of merging and joining",
                codeBlocks: [{
                  code: "# Merging examples placeholder",
                  output: "Output placeholder"
                }]
              }
            }
          ]
        },
        {
          id: "output",
          title: "output",
          items: [
            {
              id: "save-df",
              title: "save dataframe",
              content: {
                description: "[Placeholder] Description of saving DataFrames",
                codeBlocks: [{
                  code: "# Saving examples placeholder",
                  output: "Output placeholder"
                }]
              }
            }
          ]
        }
      ]
    }
  ]
};
