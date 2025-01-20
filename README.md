### Hexlet tests and linter status:
[![Actions Status](https://github.com/KateAedon/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/KateAedon/frontend-project-46/actions)

[![Maintainability](https://api.codeclimate.com/v1/badges/064894b7afc74b1a00d7/maintainability)](https://codeclimate.com/github/KateAedon/frontend-project-46/maintainability)

[![Test Coverage](https://api.codeclimate.com/v1/badges/064894b7afc74b1a00d7/test_coverage)](https://codeclimate.com/github/KateAedon/frontend-project-46/test_coverage)

# FileDiff

**FileDiff** is a tool to calculate and display the differences between two files. It helps you easily track changes, compare configurations, and detect discrepancies between different versions of files.

## Features
- Compare files of various formats (JSON, YAML)
- Highlight added, removed, or modified content
- Output in a user-friendly diff format
- Simple CLI interface for easy integration

## Installation

To install **FileDiff**, follow these steps:

1. Clone the repository:
    ```bash
    git clone github.com/KateAedon/frontend-project-46
    ```

2. Navigate to the project directory:
    ```bash
    cd frontend-project-46
    ```

3. Install dependencies using npm (Node.js must be installed):
    ```bash
    make deps-install
    ```

## Usage

To compare two files, run the following command in your terminal:

```bash
make run file1.txt file2.txt
```

## Run tests
```bash
make test
```

EXAMPLE
[![asciicast](https://asciinema.org/a/zKRCCpuAmQJJrG6Fgpb323FnA.svg)](https://asciinema.org/a/zKRCCpuAmQJJrG6Fgpb323FnA)