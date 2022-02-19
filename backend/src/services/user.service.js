const { User } = require("../models");
const logger = require("../config/logger");

const register = async (user) => {
  const { email } = user;
  const foundUser = await User.findOne({ email });
  if (!foundUser) {
    const newUser = await User.create(user);
    return newUser;
  } else {
    throw new Error("User already exists");
  }
};

const login = async (user) => {
  const { email, password } = user;
  const foundUser = await User.findOne({ email });
  if (!foundUser) {
    throw new Error("User not found");
  }
  if (foundUser.password !== password) {
    throw new Error("Wrong password");
  }
  return foundUser;
};

const update = async (id, user) => {
  return User.findByIdAndUpdate(id, user, { new: true }).select("-password");
};

const getUser = async (id) => {
  return User.findById(id).select("-password");
};

module.exports = { register, login, update, getUser };
