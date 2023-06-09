// node modules
const express = require("express");

// express router
const router = express.Router();

// controllers
const { updateUser, deleteUser, oneUser } = require("../controllers/user.controllers");

// get one user
router.get("/user/:id", oneUser);

// update user
router.put("/update-user/:id", updateUser);

// delete user
router.delete("/delete-user/:id", deleteUser);

// router exports
module.exports = router;