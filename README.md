# Node.js Todo App

## Overview

Welcome to the Node.js Todo App! This simple yet powerful project serves as a Todo application with a range of functionalities. Leveraging Node.js, Express, and MongoDB, this application provides a seamless experience for managing your tasks. The API offers endpoints for retrieving a list of todos, updating todos, deleting todos, fetching a single todo by ID, and adding new todos.

## Getting Started

To kickstart the development server, follow these steps:

1. Clone the repository:

2. Navigate to the project directory:

   ```bash
   cd todo_app_be
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server using nodemon:

   ```bash
   npm run start
   ```

   This command will launch the server and automatically restart it upon file changes, thanks to nodemon.

## API Endpoints

### 1. Get List of Todos

- **Endpoint:** `/todos`
- **Method:** `GET`
- **Description:** Retrieve a list of all todos.

### 2. Update Todo

- **Endpoint:** `/todos/:id`
- **Method:** `PUT`
- **Description:** Update a todo identified by its unique ID.

### 3. Delete Todo

- **Endpoint:** `/todos/:id`
- **Method:** `DELETE`
- **Description:** Delete a todo by its unique ID.

### 4. Get Single Todo by Id

- **Endpoint:** `/todos/:id`
- **Method:** `GET`
- **Description:** Retrieve a single todo by its unique ID.

### 5. Add Todo

- **Endpoint:** `/todos`
- **Method:** `POST`
- **Description:** Add a new todo to the list.

## Technologies Used

- **Node.js:** A JavaScript runtime for server-side development.
- **Express:** A minimal and flexible Node.js web application framework.
- **MongoDB:** A NoSQL database for storing and retrieving todo data.
- **Nodemon:** Monitors for any changes in your source and automatically restarts the server.

## Contributions

Feel free to contribute to the project by opening issues or submitting pull requests. Your feedback and enhancements are highly appreciated!

Happy coding!
