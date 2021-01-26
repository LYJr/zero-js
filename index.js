"use strtit";
const express = require("express");
const app = express();

const IP = "127.0.0.1";
const HOST = 3000;
const NOT_FOUND = "No such data";
const SUCCESS = "success";

let userList = new Map();
const user = {
  id: "",
  name: "",
  twitterId: "",
};

app.listen(HOST, IP, function () {
  console.log("server listen at localhost:" + HOST);
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.post("/users", function (req, res) {
  // user.id = req.body.id;
  // user.name = req.body.name;
  // user.twitterId = req.body.twitterId;

  console.log(req.body.id);
  // userList.set(req.body.id, user);

  console.log("test");

  res.send(SUCCESS);
});

app.get("/users", function (req, res) {
  if (userList.size > 0) {
    return res.send(userList);
  }
  res.send(NOT_FOUND);
});

app.get("/users/:id", function (req, res) {
  if (userList.get(req.params.id) !== undefined) {
    return res.send(userList.get(req.params.id));
  }
  res.send(NOT_FOUND);
});

app.put("/users/:id", function (req, res) {
  if (userList.get(req.params.id) !== undefined) {
    //todo 코딩중
  }
  res.send(NOT_FOUND);
});

app.patch("/users/:id", function (req, res) {
  if (userList.get(req.params.id) !== undefined) {
    //todo 코딩중
    return res.send(userList.get(req.params.id));
  }
  res.send(NOT_FOUND);
});

app.delete("/users/:id", function (req, res) {
  if (userList.get(req.params.id) !== undefined) {
    //todo 코딩중
  }
  res.send(NOT_FOUND);
});
