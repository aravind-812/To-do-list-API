const task = require('../models/tasks')

const getAllTasks = async (req, res) => {
    try {
        const allTasks = await task.find({})
        res.json({ allTasks });
    } catch (error) {
        console.log(error)
        res.send({ "error": error._message })
    }


}

const createTask = async (req, res) => {
    try {
        const newTask = await task.create(req.body)
        res.json({ newTask })
    } catch (error) {
        console.log(error)
        res.send({ "error": error._message })
    }

}

const getTask = (req, res) => {
    res.json({ id: req.params.id })
}

const updateTask = (req, res) => {
    res.send("task created")
}

const deleteTask = (req, res) => {
    res.send("task created")
}


module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
} 