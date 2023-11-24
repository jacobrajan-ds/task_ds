const express = require("express");
const app = express();
const todoRoutes = require("./routes/todos");
const dbConnect = require("./config/database");

require("dotenv").config();
app.use(express.json());

app.use("/api/v1", todoRoutes);

//Connect to database
dbConnect();

//default route
app.get("/", (req, res) => {
  res.send("<h1> Welcome to the HomePage</h1>");
});

//Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
