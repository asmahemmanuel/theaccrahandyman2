const { model, Schema } = require("mongoose");

const userSchema = Schema(
  {
    username: {
      type: String,
      minlength: [6, "minimum username length is 6 characters"],
      unique: true,
      lowercase: true,
      required: true,
    },
    password: {
      type: String,
      minlength: [6, "minimum password length is 6 characters"],
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = model("User", userSchema);
