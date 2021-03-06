module.exports = app => {
    const user = require("../controllers/user.controller.js");
    const task = require("../controllers/task.controller.js")
    
    // Create a new user
    app.post("/user", user.create);
  
    // Retrieve all user
    app.get("/user", user.findAll);
  
    // Retrieve a single user with userId
    app.get("/user/:userId", user.findOne);
  
    // Update a user with userId
    app.put("/user/:userId", user.update);
  
    // Delete a user with userId
    app.delete("/user/:userId", user.delete);
  
    // Delete a new user
    app.delete("/user", user.deleteAll);

    // Create a new TAsk
    app.post("/Task", task.create);

    // Delete a task with id
    app.delete("/task/:id", task.delete);
 
    // Retrieve a task with userId
    app.get("/task/:userId", user.findOne);
  };