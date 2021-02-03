"use strict";

const userModel = require("../model/UserModel");

const SUCCESS = "success";
const NOT_FOUND = "No such data";

const createUser = function (body) {
  userModel.assignmentUser(body);
  return SUCCESS;
};

const searchUserList = function () {
  return userModel.searchUserList();
};

const searchUser = function (id) {
  const user = userModel.searchUser(id);
  if (userModel.isUndefined(user, undefined)) {
    return user;
  }
  return NOT_FOUND;
};

const updateUser = function (id, body) {
  const isUpdate = userModel.updateUser(id, body);
  return isSuccess(isUpdate);
};

const updateDetailUser = function (id, name) {
  const isUpdateName = userModel.nameUpdate(id, name);
  return isSuccess(isUpdateName);
};

const deleteUser = function (id) {
  const isDelete = userModel.deleteUser(id);
  return isSuccess(isDelete);
};

const isSuccess = function (data) {
  if (data === true) {
    return SUCCESS;
  }
  return NOT_FOUND;
};

module.exports = {
  createUser: createUser,
  searchUserList: searchUserList,
  searchUser: searchUser,
  updateUser: updateUser,
  updateDetailUser: updateDetailUser,
  deleteUser: deleteUser,
};
