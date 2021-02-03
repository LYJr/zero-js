"use strict";

const userList = new Map();

const assignmentUser = function (body) {
  const user = {
    id: body.id,
    name: body.name,
    twitterId: body.twitterId,
  };
  userList.set(user.id, user);
};

const userUpdate = function (id, body) {
  console.log("test");
  // const origin = searchUser(id);

  // console.log(origin);

  // if (isUndefined(searchUser(id), undefined)) {
  //   origin.id = body.id;
  //   origin.name = body.name;
  //   origin.twitterId = boyd.twitterId;

  //   userList.set(id, origin);

  //   return true;
  // }
};

const nameUpdate = function (id, name) {
  const origin = searchUser(id);
  if (isUndefined(searchUser(id), undefined)) {
    origin.name = name;
    return true;
  }
  return false;
};

const searchUserList = function () {
  const users = [];
  if (userList.size > 0) {
    for (let index = 1; index <= userList.size; index++) {
      users.push(userList.get(index));
    }
    return users;
  }
};

const searchUser = function (id) {
  return isUndefined(userList.get(id), undefined)
    ? userList.get(id)
    : undefined;
};

const deleteUser = function (id) {
  if (isUndefined(userList.get(id))) {
    userList.delete(id);
    return true;
  }
  return false;
};

const isUndefined = function (data, condition) {
  if (data !== condition) {
    return true;
  }
  return false;
};

module.exports = {
  assignmentUser: assignmentUser,
  userUpdate: userUpdate,
  nameUpdate: nameUpdate,
  searchUserList: searchUserList,
  searchUser: searchUser,
  deleteUser: deleteUser,
  isUndefined: isUndefined,
};
