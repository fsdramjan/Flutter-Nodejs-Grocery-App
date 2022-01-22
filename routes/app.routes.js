const categoryController = require("../controllers/category.controller");
const express = require("express");
const router = express.Router();


router.post("/category", categoryController.create);
router.get("/category", categoryController.findAll);
router.post("/category/:id", categoryController.findOne);
router.post("/category/:id", categoryController.update);
router.post("/category:id", categoryController.delete);



module.exports = router;