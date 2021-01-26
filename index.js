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

app.use(express.json());

app.post("/users", function (req, res) {
  user.id = req.body.id;
  user.name = req.body.name;
  user.twitterId = req.body.twitterId;

  userList.set(req.body.id, user);

  res.send(SUCCESS);
});

app.get("/users", function (req, res) {
  var list = [];

  if (userList.size > 0) {
    for (let index = 1; index <= userList.size; index++) {
      list.push(userList.get(index));
    }
    return res.send(list);
  }
  res.send(NOT_FOUND);
});

app.get("/users/:id", function (req, res) {
  if (userList.get(Number(req.params.id)) !== undefined) {
    return res.send(userList.get(Number(req.params.id)));
  }
  res.send(NOT_FOUND);
});

//todo code 구현
app.put("/users/:id", function (req, res) {
  if (userList.get(Number(req.params.id)) !== undefined) {
    user.id = req.body.id;
    user.name = req.body.name;
    user.twitterId = req.body.twitterId;

    userList.set(Number(req.params.id), user);

    return res.send(userList.get(Number(req.params.id)));
  }
  res.send(NOT_FOUND);
});

//todo code 구현
app.patch("/users/:id", function (req, res) {
  if (userList.get(Number(req.params.id)) !== undefined) {
    userList.get(Number(req.params.id)).name = req.body.name;

    console.log(userList.get(Number(req.params.id)));

    return res.send(userList.get(Number(req.params.id)));
  }
  res.send(NOT_FOUND);
});

app.delete("/users", function (req, res) {
  if (userList.get(req.body.id) !== undefined) {
    userList.delete(req.body.id);
    return res.send(SUCCESS);
  }
  res.send(NOT_FOUND);
});
