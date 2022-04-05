const task = require('../models/tasks');
const { param } = require('../routes/tasks');

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

const getTask = async (req, res) => {
    try {
        const { id: taskID } = req.params
        const oneTask = await task.findOne({ _id: taskID })
        if (!oneTask) {
            return res.status(404).json({ "msg": `no task with id: ${taskID}` })
        }
        res.json({ oneTask })
    } catch (error) {
        console.log(error)
        res.send({ "error": error._message })
    }
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