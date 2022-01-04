import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("users", userSchema);

export default User;


export const updateUserSingle = async (
    query,
    data
  ) => {
    const options = { new: true, omitUndefined: true };
    const updatedData = await User.findOneAndUpdate(query, data, options);
    return updatedData;
  };
