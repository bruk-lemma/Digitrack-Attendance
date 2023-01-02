const express = require("express");
const authController = require("../controllers/authController");
const studentController = require("../controllers/studentController");
const router = express.Router();

router
  .route("/")
  .get(
    authController.protect,
    authController.restrictTo("user"),
    studentController.getAllStudents
  );
router
  .route("/:id")
  .get(
    authController.protect,
    authController.restrictTo("user"),
    studentController.getStudent
  );
router.post("/", studentController.createStudent);
router.route("/:id").patch(studentController.updateStudent);
router.route("/:id").delete(studentController.deleteStudent);

module.exports = router;
