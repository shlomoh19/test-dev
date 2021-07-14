const Task = require("../models/task.model.js");

// Create and Save a new Task
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Task
  const task = new Task({
    user_id: req.body.user_id,
    title: req.body.title,
    description: req.body.description,
    status: req.body.status
  });

  // Save Task in the database
  Task.create(task, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Task."
      });
    else res.send(data);
  });
};

// Find a single Task with a userId
exports.findOne = (req, res) => {
    Task.findByUserId(req.params.userId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Task with user_id ${req.params.userId}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving Task with user_id " + req.params.userId
          });
        }
      } else res.send(data);
    });
  };


// Delete a Task with the specified id in the request
exports.delete = (req, res) => {
    Task.remove(req.params.id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Task with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Could not delete Task with id " + req.params.id
          });
        }
      } else res.send({ message: `Task was deleted successfully!` });
    });
  };
