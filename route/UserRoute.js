"use strict";

const express = require("express");
const userController = require("../controller/UserController");
const router = express.Router();

router.post("/", userController.createUser);

router.get("/", userController.searchUserList);

router.get("/:id", userController.searchUser);

router.put("/:id", userController.updateUser);

router.patch("/:id", userController.updateDetailUser);

router.delete("/", userController.deleteUser);

module.exports = router;
