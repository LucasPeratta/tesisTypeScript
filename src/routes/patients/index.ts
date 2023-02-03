import express from  "express"
const router = express.Router()

import {  addPatient, getPatientById, getAll, updatePatientById, deletePatientById } from "../../controllers/patients";

router.post("/", addPatient);

router.get("/:id", getPatientById);

router.get("/", getAll);

router.put("/:id", updatePatientById);

router.delete("/:id", deletePatientById);

export default router;