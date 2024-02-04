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

4. React custom hook names

    Always use "use" in a custom hook name since the hook uses existing react hooks eg :

    ```js
        function useFunctionName(){
            // code
        }
    ```

5. Status Codes
    - 302 : found
    - 200 : OK
    - 201 : Created
    - 204 : No content
    - 400 : Bad Request
    - 401 : Unauthorized
    - 404 : Not found
    - 403 : Forbidden
    - 500 : Internal Server Error
    - 502 : Bad Gateway
    - 503 : Service Unavailable

6. withCredentials
    Always set withCredentials: true in you axios or fetch request when it includes cors or cookies(jwt)
