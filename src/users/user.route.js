const express = require("express");
const router = express.Router();
const { userController: controller } = require("./user.module");
const upload = require("../../middlewares/upload")

router.post("/", (req, res, next) => controller.postSignup(req, res, next));
router.post("/usercheck", (req, res, next) => controller.postUserCheck(req, res, next));
router.get("/me", (req, res, next) => controller.getMe(req, res, next));
router.put("/", (req, res, next) => controller.putProfile(req, res, next));

// router.post("/single", (req, res, next) => controller.postSingle(req, res, next));
// router.post("/array", (req, res, next) => controller.postArray(req, res, next));
router.post("/single", upload.single("photoid"), (req, res) => {
    console.log("Upload image")
    console.log("req.file :", req.file);
    res.send("upload");
  });

router.post("/array", upload.array("photoid"), (req, res) => {
    console.log("req.files :", req.files);
    res.send("upload");
  });

module.exports = router;
