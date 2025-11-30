import { Router } from "express";
import {
  getKelas,
  getKelasById,
  createKelas,
  updateKelas,
  deleteKelas
} from "../controllers/kelasController.js";

const router = Router();

router.get("/musik", getKelas);
router.get("/musik/:id", getKelasById);
router.post("/musik", createKelas);
router.put("/musik/:id", updateKelas);
router.delete("/musik/:id", deleteKelas);

export default router;
