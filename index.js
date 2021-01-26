"use strtit";
const express = require("express");
const app = express();

var bodyParser = require("body-parser");
const IP = "127.0.0.1";
const HOST = 3000;

let userList = new Map();
const user = {
  id: "",
  name: "",
  twitterId: "",
};

app.listen(HOST, IP, function () {
  console.log("server listen at localhost:" + HOST);
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.post("/users", function (req, response) {
  user.id = req.body.id;
  // user.name = request.body.name;
  // user.twitterId = request.body.twitterId;

  console.log(req.params.id);
  // userList.set(requset.body.id, user);

  console.log("test");

  // response.send("success");
});

app.get("/users/:id", function (request, response) {
  console.log(request.params.id); //?
});

app.get("/users", function (request, response) {
  response.send(userList);
});

app.put("/users/:id", function (requset, response) {
  userList.get({ id });
});
