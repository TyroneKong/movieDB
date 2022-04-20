const express = require("express");
const router = express.Router();

require("dotenv").config();
const mainVideoController = require("../controllers/mainVideoContoller");

router.get("/getVideo/:id", mainVideoController.getVideo);

module.exports = router;
