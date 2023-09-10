# Utility Functions Documentation

This document provides documentation for a set of utility functions that can be reused in future projects. These functions cover various tasks, including theme handling, password hashing, JWT (JSON Web Token) management, and Prisma Client configuration.

## Table of Contents

- [Utility Functions Documentation](#utility-functions-documentation)
  - [Table of Contents](#table-of-contents)
  - [Theme Handling](#theme-handling)
    - [`getTextColor` Function](#gettextcolor-function)
      - [Parameters](#parameters)
      - [Returns](#returns)
  - [Password Utilities](#password-utilities)
    - [`hashPassword` Function](#hashpassword-function)
      - [Parameters](#parameters-1)
      - [Returns](#returns-1)
    - [`comparePassword` Function](#comparepassword-function)
      - [Parameters](#parameters-2)
      - [Returns](#returns-2)
  - [JWT (JSON Web Token) Utilities](#jwt-json-web-token-utilities)
    - [`signJwtAccessToken` Function](#signjwtaccesstoken-function)
      - [Parameters](#parameters-3)
      - [Returns](#returns-3)
    - [`verifyJwt` Function](#verifyjwt-function)
      - [Parameters](#parameters-4)
      - [Returns](#returns-4)
  - [Prisma Client Configuration](#prisma-client-configuration)
    - [`prismaClient.js` Module](#prismaclientjs-module)

---

## Theme Handling

### `getTextColor` Function

The `getTextColor` function is a utility function used to determine the text color based on the brightness of a background color.

#### Parameters

- `backgroundColor` (String): The background color in hexadecimal format.

#### Returns

- `textColor` (String): The recommended text color based on brightness.

[See Full Documentation](/Utilities/getTextColor.md)

---

## Password Utilities

### `hashPassword` Function

The `hashPassword` function securely hashes a password using the `bcrypt` library.

#### Parameters

- `password` (String): The plain-text password to be hashed.

#### Returns

- `hashedPassword` (String): A securely hashed password.

### `comparePassword` Function

The `comparePassword` function securely compares a plain-text password with a stored hashed password to determine if they match.

#### Parameters

- `password` (String): The plain-text password to be compared.
- `storedPassword` (String): The stored hashed password to compare against.

#### Returns

- `samePassword` (Boolean): `true` if the passwords match, `false` otherwise.

[See Full Documentation](/Utilities/bcrypt.md)

---

## JWT (JSON Web Token) Utilities

### `signJwtAccessToken` Function

The `signJwtAccessToken` function signs a JWT access token with the provided payload and options.

#### Parameters

- `payload` (Object): The data to be included in the JWT token.
- `options` (Object, optional): Configuration options for the token.

#### Returns

- `token` (String): The signed JWT access token.

### `verifyJwt` Function

The `verifyJwt` function verifies a JWT token and returns the decoded data from the token.

#### Parameters

- `token` (String): The JWT token to verify.

#### Returns

- `decodedData` (Object): The decoded data from the JWT token if verification is successful, or `null` if the token is invalid or expired.

[See Full Documentation](/Utilities/jwt.md)

---

## Prisma Client Configuration

### `prismaClient.js` Module

The `prismaClient.js` module configures and exports an instance of the Prisma Client for database interactions. It handles different setups for development and production environments to ensure efficient database connections.

[See Full Documentation](/Utilities/prismaClient.md)

---

You can refer to the individual sections for detailed documentation of each utility function or module.
