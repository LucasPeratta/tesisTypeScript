import express from  "express"
const router = express.Router()

// Import all routers here
import patientRouter from "./patients/index"

// Link all routers to the main router
router.use("/patients", patientRouter)



export default router;