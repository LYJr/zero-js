"use strtit";
const express = require("express");
const app = express();

const userList = [];
const user = {
  name: "",
};

//처음에 500에러가 뜨는데 뜨는 이유는 json을 받아들일 준비가 안되있어서.
app.use(express.json()); //자바의 @RestController와 동일.
app.post("/user", function (req, res) {
  console.log(`request from ${req.ip} / addr : ${req.path}`);

  user.name = req.body.name;
  userList.push(user);

  console.log(userList);
  res.send("success");
});

app.listen(3000, "127.0.0.1", function () {
  console.log("server listen at localhost:3000");
});

app.get("/users", function (req, res) {
  console.log(`request from ${req.ip} / addr : ${req.path}`);
  res.send(useList);
});

app.get("/user/:id", function (req, res) {
  //단수 데이터 = 자바의 {id}
  const id = req.params.id;
  const name = req.query.name;
  console.log(`request from ${req.ip} / addr : ${req.path}`);
  //로그를 찍고

  res.send(`${id} / $ {name}`);
  //문자열을 반환한다.
});
