"use strict";

const userService = require("../service/UserService");

const createUser = function (req, res) {
  res.send(userService.createUser(req.body));
};

const searchUserList = function (req, res) {
  res.send(userService.searchUserList());
};

const searchUser = function (req, res) {
  res.send(userService.searchUser(Number(req.params.id)));
};

const updateUser = function (req, res) {
  res.send(userService.updateUser(Number(req.params.id), req.body));
};

const updateDetailUser = function (req, res) {
  res.send(userService.updateDetailUser(Number(req.params.id)), req.body);
};

const deleteUser = function (req, res) {
  res.send(userService.deleteUser(req.body.id));
};

module.exports = {
  createUser: createUser,
  searchUserList: searchUserList,
  searchUser: searchUser,
  updateUser: updateUser,
  updateDetailUser: updateDetailUser,
  deleteUser: deleteUser,
};
