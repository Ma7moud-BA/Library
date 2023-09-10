# JSON Web Token (JWT) Utility Functions

The JSON Web Token (JWT) Utility Functions are a set of utility functions for signing and verifying JWT tokens using the "jsonwebtoken" library. These functions are commonly used in authentication and authorization processes in web applications.

## Usage

These functions can be imported and used in your Node.js application as follows:

```javascript
import { signJwtAccessToken, verifyJwt } from './jwtUtils';

// Example usage for signing a JWT access token:
const payload = { userId: 123 };
const accessToken = signJwtAccessToken(payload);

// Example usage for verifying a JWT:
const tokenToVerify = 'your_jwt_token_here';
const decodedData = verifyJwt(tokenToVerify);

```

# Overview

# signJwtAccessToken(payload, options)
This function signs a JWT access token with the provided payload and options.

### Parameters
- payload (Object): The data to be included in the JWT token.
- options (Object, optional): Configuration options for the token (e.g., expiration time). Defaults to { expiresIn: '1h' }.
### Returns
- token (String): The signed JWT access token.
 
# verifyJwt(token)
This function verifies a JWT token and returns the decoded data from the token.


### Parameters
- token (String): The JWT token to verify.

### Returns
- decodedData (Object): The decoded data from the JWT token if verification is successful, or null if the token is invalid or expired.
# Notes
- Ensure that you have a valid SECRET_KEY stored in your environment variables for these functions to work correctly.
- Customize the payload and options according to your application's specific requirements.