const express = require('express');
const app = express();
const port = 3000
const tasks = require('./routes/tasks')
const connectDB = require("./db/connect")
require('dotenv').config()

//Middleware setup
app.use(express.json());

//Routes
app.use('/api/v1/tasks', tasks)



app.get('/hello', (req, res) => {
    res.end("Task manager app")
})

// app.get('api/v1/tasks')
// app.post('api/v1/tasks')
// app.get('api/v1/tasks/:id')
// app.patch('api/v1/tasks/:id')
// app.delete('api/v1/tasks/:id')

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => console.log('We are listening at 3000...'))
    }
    catch (err) {
        console.log(err)
    }
}

start()





