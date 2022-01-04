import User from "../models/user";
import bcrypt from "bcrypt";

const getAllUser = async(req, res) => {
    const users = await User.find({})
    return res.status(200).json(users)
}


const getUser = async (req, res) => {
    const { userId } = req.params;
    const foundUser = await User.findOne({
      _id: userId,
    });
  
    if (!foundUser) {
      return res.status(404).json({ message: "No user found" });
    }
  
    return res.status(200).json(foundUser);
  };

const addUser = async(req, res) => {
    const data = req.body
    const foundEmail = await User.findOne({ email: data.email})

    if(foundEmail){
        return res.status(400).json({ message: 'Email Already exists' })
    }

    const salt = await bcrypt.genSalt(10)
    const passwordHash = await bcrypt.hash(data.password, salt)

    const newUser = new User({
        username: data.username,
        email: data.email,
        password: passwordHash
    })
    const user = await newUser.save()

    return res.status(201).json(user)
    
}


const updateUser = async (req, res) => {
    const { userId } = req.params;
    const data = req.body;
    const foundUser = await user.findOne({
      _id: userId,
    });
  
    if (!foundUser) {
      return res.status(404).json({ message: "No user found" });
    }
  
    if (data.email !== foundUser.email) {
      const foundEmail = await User.findOne({
        email: data.email,
      });
      if (foundEmail) {
        return res.status(400).json({ message: "Email already taken" });
      }
    }
  
    let passwordHash;
    if (data.password) {
      const salt = await bcrypt.genSalt(10);
      passwordHash = await bcrypt.hash(data.password, salt);
    }
    const query = { _id: userId };
  
    const update = {
      name: data.name,
      email: data.email,
      password: passwordHash,
    };
  
    const updateData = await updateUserSingle(query, update);
  
    res.json(updateData);
  };

const removeUser = async (req, res) => {
    const { userId } = req.params;
    const foundUser = await User.findOne({
      _id: userId,
    });
  
    if (!foundUser) {
      return res.status(404).json({ message: "No user found" });
    }
  
    await User.findByIdAndRemove(userId);
    return res.status(200).json({ message: "User Deleted Successfully" });
  };


export default {
    getAllUser,
    getUser,
    addUser,
    updateUser,
    removeUser,
}