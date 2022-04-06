# To-do list API

This repo is a basic `TO-DO list` app which perform CRUD operations.

## The Stack

The following languages, frameworks, APIs, and services were used to create the website.

- Node.js & Express.js
- MongoDB (Hosted on AWS)
- Heroku (PaaS Hosting) -- `Pending`

## Steps to run:
1. Clone the repo
3. `npm install`
4. setup `.env` and set `MONGO_URI` variable equal to DB connection string.
5. `npm start`

## HTTP requests:

All API requests are made by sending a secure HTTPS request using one of the following methods, depending on the action being taken:

- `POST` Create a new task
- `PATCH` Update a task
- `GET` Get's a task or list of tasks
- `DELETE` Delete a task


### Sample `POST/PATCH` request:
```
{
"name":"Refactor API code",
"completed":false (by default false)
}
```
### Sample url for `DELETE` request:
Delete tasks by id:
```
DELETE /api/v1/tasks/:id
```
### Sample url for `GET` request (Displays all tasks):
Gets all the tasks:
```
GET /api/v1/tasks/
```
### Sample url to `GET` a specific task:
Gets a specific task:
```
GET /api/v1/tasks/:id
```

