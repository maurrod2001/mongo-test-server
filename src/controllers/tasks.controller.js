import Task from "../models/task.model.js";

export const getTasks = async (_req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
};

export const getTask = async (req, res) => {
    const task = await Task.findById(req.params.id);
    res.json(task);
};

export const createTask = async (req, res) => {
    const newTask = await Task.create(req.body);
    console.log(newTask)
    res.json(newTask);
};
//! rewrk -c 1 -d 1s -t 1 -m POST -H "Content-Type: application/json; charset=utf-8" -b '{"title": "first task","description": "in mongoddb"}' -h http://192.168.224.1:3000/api/tasks
export const updateTask = async (req, res) => {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    res.json(task);
};

export const deleteTask = async (req, res) => {
    const task = await Task.findByIdAndDelete(req.params.id);
    res.json(task);
};
