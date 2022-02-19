const express = require("express");
const userController = require("../../controllers/user.controller");

const router = express.Router();

router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/:id", userController.getUser);
router.patch("/:id", userController.update);

module.exports = router;
