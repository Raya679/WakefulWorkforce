# Advait

1. JWT TOKEN STRUCTURE

    ```js
    jwt_token = xyz.abc.uvw
    ```

    Where,

    - xyx = header
    - abc = payload
    - uvw = secretkey

2. Jwt methods

    ```js
    jwt.sign()  // creates a token
    jwt.decode()  //decodes the payload only without the help of signature
    jwt.verify()  //decodes the token with the help of signature
    ```

3. HTTPOnly

    setting HttpOnly : true, allows the use of localStorage.getItem("jwt") but makes the site more vulnerable (XSS attacks)
