const express = require("express");
const router = express.Router();

const controller = require("../controllers/kelasController");

router.get("/", controller.getKelas);
router.get("/:id", controller.getKelasById);
router.post("/", controller.createKelas);
router.put("/:id", controller.updateKelas);
router.delete("/:id", controller.deleteKelas);

module.exports = router;
