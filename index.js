"use strtit";
const express = require("express");
const app = express();

const userRouter = require("./route/UserRoute"); //js 파일 가져오기.
app.use(express.json());
app.use("/users", userRouter); //RequestMapping 느낌.

const IP = "127.0.0.1";
const HOST = 3000;

app.listen(HOST, IP, function () {
  console.log("server listen at localhost:" + HOST);
});
