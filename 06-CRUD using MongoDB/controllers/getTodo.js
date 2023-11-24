const Todo = require("../models/Todo");

exports.getTodo = async (req, res) => {
  try {
    const todos = await Todo.find({});

    res.status(200).json({
      success: true,
      message: "Fetched All Todos",
      data: todos,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

exports.getTodoById = async (req, res) => {
  try {
    const id = req.params.id;
    const todo = await Todo.findById({ _id: id });
    console.log(todo);
    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "No Todo find with the given ID",
      });
    }

    res.status(200).json({
      success: true,
      message: "Fetched Todo",
      data: todo,
    });
  } catch (err) {
    console.log("----------------");
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};
