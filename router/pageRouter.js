const express = require("express");
const router = express.Router();
const {homepage,login,aftersignup,signup,afterlogin} = require("../controller/pageController");

router.get("/home",homepage);
router.get("/login",login);
router.get("/signup",signup);
router.post("/aftersignup",aftersignup);
router.post("/afterlogin",afterlogin);

module.exports = router;