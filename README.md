# To-Do List Backend Application

## About The Project

This is a simple To-Do List Backend application built using Node.js, Express.js and MongoDB.

The application allows users to create, view, update and delete tasks. The APIs were tested using Postman to make sure all CRUD operations are working properly.

---

## Steps To Run The Application

### Step 1

Download or clone the project into your system.

### Step 2

Open the project folder in VS Code.

### Step 3

Install the required packages.

```bash
npm install
npm install mongodb
npm install express mongoose cors dotenv
npm install nodemon --save-dev
```

### Step 4

Create a `.env` file in the project root folder and add:

```env
PORT=5000

MONGO_URI=<your mongodb connection string>
```

### Step 5

Make sure MongoDB is running.

### Step 6

Run the server using:

```bash
npm run dev
```

The terminal should display:

```text
Database Connected
Server running on port 5000
```

### Step 7

Open Postman/ThunderClient and test the APIs.

## API Endpoints

### Create Task

```
POST http://localhost:5000/api/tasks/
```

### Get All Tasks

```
GET http://localhost:5000/api/tasks/
```

### Get Single Task

```
GET http://localhost:5000/api/tasks/:id
```

### Update Task

```
PUT http://localhost:5000/api/tasks/:id
```

### Delete Task

DELETE http://localhost:5000/api/tasks/:id

## Testing

All APIs were tested using Postman/ThunderClient.

Sample body:

```json
{
    "title": "Complete Assignment",
    "description": "Finish Assignment 8 by today"
}
```

## Challenges Faced

Initially I was confused about how MongoDB creates the `_id` field because I was expecting simple numeric IDs. Later I understood that MongoDB automatically generates a unique ObjectId for every document.

I also faced some issues while connecting MongoDB and setting up the routes correctly. Some APIs were not working at first because of small mistakes in file paths and imports, but after checking them carefully the application worked properly.

Understanding the flow from routes to controller and then service was also a bit confusing in the beginning, but testing each API one by one helped me understand it better.

I also didn't know about how to add timestamps and searchTask so read the documentations available online.


## Author

Ayush
