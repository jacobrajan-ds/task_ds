const Todo = require("../models/Todo");

exports.createTodo = async (req, res) => {
  try {
    console.log("first");
    const { title, description } = req.body;
    const response = await Todo.create({ title, description });
    res.status(200).json({
      success: true,
      data: response,
      message: "Task Added Successfully",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};
