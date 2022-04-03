const getAllTasks = (req, res) => {
    res.send("example function")
}

const createTask = (req, res) => {
    console.log(req.body)
    res.json(req.body)

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