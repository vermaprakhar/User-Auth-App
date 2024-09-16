# Full stack Authentication with jsonwebtoken

# Application has three layers
 - 1.Database layer
 - 2.Frontend layer
 - 3.Backend layer

# Database layer
  - We do data modeling for user model

# In Backend layer
 - 1. First of all we create a basic server using express
 - 2. Then we connect with our database(Mongodb) using mongoose
 - 3. We create app middleware
 - 4. We create routes to related api endpoints
     - http://localhost:PORT/api/v1/user/endpoints
 - 5. We create controller related to API endpoint
    - first we create /register
    - second we create /login
    - third we create /logout
    - fourth we create /update
    - fifth we create //profile
 - 6. We test the API's using POSTMAN

 # In Frontend layer
 - We use React along with TailwindCss fro styling
 - We create routing using react-router-dom
 - We create three pages
  - 1. Home Page
  - 2. Register Page
  - 3. Login Page
  - 4. User Profile Page 
