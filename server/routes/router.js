const express = require("express");
const router = express.Router();
const service = require("../services/render");
const controller = require("../controller/controller");
// @description For home router
// Method GET
router.get("/", service.home_router);
// @description For add new user
// Method GET
router.get("/add-user", service.add_user);
// @description For Updating user
// Method GET
router.get("/update-user", service.update_user);

//Restfull api route
router.post("/api/users", controller.create_user);
router.get("/api/users", controller.find_user);
router.put("/api/users/:id", controller.update_user);
router.delete("/api/users/:id", controller.delete_user);

module.exports = router;
