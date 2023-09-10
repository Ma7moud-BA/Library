# `bcrypt` Password Utility Functions

The `bcrypt` Password Utility Functions are a set of utility functions for securely hashing and comparing passwords using the `bcrypt` library. These functions are commonly used to enhance security when dealing with user authentication and password management.

## Usage

These functions can be imported and used in your Node.js application as follows:

```javascript
import { hashPassword, comparePassword } from './bcryptUtils';

// Example usage:
const userPassword = 'user_password';

// Hashing a password for storage:
const hashedPassword = await hashPassword(userPassword);

// Comparing a password with a stored hashed password:
const isMatch = await comparePassword(userPassword, hashedPassword);

// 'isMatch' will be 'true' if the passwords match, 'false' otherwise.

```

# hashPassword(password)
This function securely hashes a password using the bcrypt library.

## Parameters
- password (String): The plain-text password to be hashed.
## Returns
- hashedPassword (String): A securely hashed password.
#comparePassword(password, storedPassword)
This function securely compares a plain-text password with a stored hashed password to determine if they match.

##   Parameters
- password (String): The plain-text password to be compared.
- storedPassword (String): The stored hashed password to compare against.
# Returns
- samePassword (Boolean): true if the passwords match, false otherwise.
  
# Notes
- Ensure you have the bcrypt library installed in your Node.js project for these functions to work correctly. You can install it using npm install bcrypt or yarn add bcrypt.

