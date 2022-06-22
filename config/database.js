const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://accrahandyman:Tressajepp100@cluster0.tsy3z.mongodb.net/?retryWrites=true&w=majority")
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(err.message));
