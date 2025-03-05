# Node.js JWT Authentication API

This project is a Node.js API that implements JWT-based authentication with features like login, logout, and forget password. All protected routes are secured using JWT tokens.

## Features

- **JWT-based authentication**
- **Login and Logout** functionality
- **Forgot password** feature
- **Auth-protected API routes**

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/nodejs-jwt-auth-api.git
   cd server

   do npm install
Update .env file: 
   # MongoDB Atlas Connection
MongoDB_Connection=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<your-database>?retryWrites=true&w=majority

# JWT Configuration
JWT_SECRET_KEY=your_secret_key
JWT_TOKEN=1h  # Example token expiration: 1 hour

# Port Configuration
PORT=3000

npm run dev for nodemon server,
npm start for node server

### Key Points:
- **JWT Authentication**: The application uses JSON Web Tokens for authenticating users. After logging in, a token is returned, which is used for securing routes.
- **`npm run dev`**: Starts the application with `nodemon`, which automatically reloads the server when code changes are made.
- **`npm start`**: Runs the server normally in a production-like environment.
