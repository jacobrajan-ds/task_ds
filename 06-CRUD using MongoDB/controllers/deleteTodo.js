const Todo = require("../models/Todo");

exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    await Todo.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Todo Deleted Successfully",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};
