// const path = require("path");
require("./config/database");
const express = require("express"); 
const cors = require("cors")

const app = express();
const userRoutes = require("./routes/userRoutes.js");
app.use(express.json());
app.use(cors())

app.use("/users", userRoutes);


app.listen(4000, () => {
  console.log("SERVER IS UP!");
});
