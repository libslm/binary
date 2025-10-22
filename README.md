# Libslm (Life is boring so let's make) Binary

![Version](https://img.shields.io/github/package-json/v/libslm/binary?style=for-the-badge)
![License](https://img.shields.io/github/license/libslm/binary?style=for-the-badge)

## 📚 Indexing

- [Libslm (Life is boring so let's make) Binary](#libslm-life-is-boring-so-lets-make-binary)
  - [📚 Indexing](#-indexing)
  - [🧪 Introduction](#-introduction)
    - [✨ Features](#-features)
    - [🧱 Primitive Types](#-primitive-types)
    - [🛠️ Utility Types](#️-utility-types)
    - [🧩 Binary Methods](#-binary-methods)
    - [💡 Usage Example](#-usage-example)
    - [🛣️ Roadmap](#️-roadmap)
    - [📝 Notes](#-notes)

## 🧪 Introduction

Welcome to **Libslm Binary** — This library provides low-level, primitive types for working with binary data. These are designed for **precise bit and byte manipulation**, with a focus on fixed-width representations.

Due to its experimental nature, **stability is not guaranteed**. Features may change, vanish, or break at any time.

> ⚠️ Use at your own risk.

> ℹ️ The core challenge in this library is that all binary values are, fundamentally, just numbers. So after performing arithmetic or bitwise operations, values tend to default back to raw numbers, losing their typed wrapper.

### ✨ Features

- **Binary Encapsulation** – Represent numbers as fixed-width binary sequences.
- **Arithmetic & Bitwise Operations** – Perform operations while maintaining binary structure.
- **Signed Value Conversion** – Supports two’s complement interpretation.

### 🧱 Primitive Types

- **bit** – A single binary digit (0 or 1).
- **nibble** – A 4-bit unsigned integer.
- **byte** – A 8-bit unsigned integer.
- **word** – A 16-bit unsigned integer.
- **dword** – A 32-bit unsigned integer.

### 🛠️ Utility Types

- **bitLike** – Representing either a boolean or a number (0 or 1).
- **bitArray** – Representing a 1-bit array.
- **nibbleArray** – Representing a 4-bit array.
- **byteArray** – Representing a 8-bit array.
- **wordArray** – Representing a 16-bit array.
- **dwordArray** – Representing a 32-bit array.

### 🧩 Binary Methods

All can be found for all **Primitive Types** as a static method.

|Method|Returns|Description|
| :-- | :-: | :-- |
| **toArray** | array | Converts to a `bitLike` array (MSB first) |
| **toBinary** | string | Converts to binary string (e.g., "01001010") |
| **toHexadecimal** | string | Converts to hexadecimal string (e.g., "0xCA") |
| **toString** | string | Converts to string (e.g., "1001010") |
| **toSigned** | number | Converts to signed integer (two's complement interpretation) |
| **valueOf** | number | Returns the numeric value |
| **get** | boolean | Gets the bit value at index (0 = MSB, n-1 = LSB) |
| **set** | **binary** | Set the bit at index to a `bitLike` value (0 = MSB, n-1 = LSB) |
| **fromArray** | **binary** | Creates a **binary** from a `bitLike` array (MSB first) |

### 💡 Usage Example

```typescript
import {byte, byteArray} from 'libslm-binary';

let first: byte = byte(0x41);
console.info(byte.toArray(first));        // [0, 1, 0, 0, 0, 0, 0, 1]
console.info(byte.toString(first));       // 1000001
console.info(byte.toBinary(first));       // 01000001
console.info(byte.toHexadecimal(first));  // 41
console.info(byte.size);                  // 8
console.info(byte.mask);                  // 255

let second: byte = byte(255);
console.info(byte.toSigned(second));      // -127
console.info(byte.valueOf(second));       // 255

let array: byteArray = [1, 0, 0, 1, 1, 0, 0, 0];
let third: byte = byte.fromArray(array);
console.info(third);                      // 152
```

### 🛣️ Roadmap

| Status | Feature |
|:------:|:--------|
| ✅ | Basic implementation |
| ✅ | Basic arithmetic & bitwise operations |
| ✅ | Basic documentation |
| ✅ | Conversion between arrays and types |
| ✅ | Conversion to binary/hex strings |
| ✅ | Signed value support |
| ✅ | Performance improvements |
| 🔲 | Advanced documentation |
| 🔲 | Floating-point support |

### 📝 Notes

These types serve as **foundational tools** for binary manipulation.
Given the library's experimental status, expect things to **evolve** — or get scrapped entirely.
