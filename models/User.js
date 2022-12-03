import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Provide Name"],
    minlength: 3,
    maxlength: 20,
    trim: true,
  },

  email: {
    type: String,
    required: [true, "Please Provide Email"],
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: "Please provide a valid Email...",
    },

    password: {
      type: String,
      required: [true, "Please Provide Password"],
      minlength: 6,
    },

    lastName: {
      type: String,
      required: [true, "Please Provide LastName"],
      minlength: 3,
      trim: true,
      default: "Ujjal Kopa",
    },

    location: {
      type: String,
      trim: true,
      default: "My City",
    },
  },
});

export default mongoose.model("Users", userSchema);
