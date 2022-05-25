const task = require("../models/tasks");
const { param } = require("../routes/tasks");

const getAllTasks = async (req, res) => {
  try {
    const allTasks = await task.find({});
    res.json({ allTasks });
  } catch (error) {
    console.log(error);
    res.send({ error: error._message });
  }
};

const createTask = async (req, res) => {
  try {
    const newTask = await task.create(req.body);
    res.json({ newTask });
  } catch (error) {
    console.log(error);
    res.send({ error: error._message });
  }
};

const getTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const oneTask = await task.findOne({ _id: taskID });
    if (!oneTask) {
      return res.status(404).json({ msg: `no task with id: ${taskID}` });
    }
    res.json({ oneTask });
  } catch (error) {
    console.log(error);
    res.send({ error: error._message });
  }
};

const updateTask = async (req, res) => {
  const { id: taskID } = req.params;
  const updated = await task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!updated) {
    return res.status(404).json({ msg: `no task with id: ${taskID}` });
  }
  res.json({ updated });
};

const deleteTask = async (req, res) => {
  try {
    const { id: deleteTaskId } = req.params;
    const delTask = await task.findOneAndDelete({ _id: deleteTaskId });
    if (!oneTask) {
      return res.status(404).json({ msg: `no task with id: ${delTask}` });
    }
    console.log("done");
    res.status(200).json({ Id: `The task has been deleted ${deleteTaskId}` });
  } catch (error) {
    console.log(error);
    res.send({ error: error._message });
  }
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
