const catchAsync = require("../utils/catchAsync");
const { userService } = require("../services");
const logger = require("../config/logger");
const httpStatus = require("http-status");

const register = catchAsync(async (req, res) => {
  const user = await userService.register(req.body);
  res.status(httpStatus.CREATED).send(user);
});

const login = catchAsync(async (req, res) => {
  const user = await userService.login(req.body);
  res.status(httpStatus.OK).send(user);
});

const update = catchAsync(async (req, res) => {
  const user = await userService.update(req.params.id, req.body);
  res.status(httpStatus.OK).send(user);
});

const getUser = catchAsync(async (req, res) => {
  const user = await userService.getUser(req.params.id);
  res.status(httpStatus.OK).send(user);
});

module.exports = { register, login, update, getUser };
