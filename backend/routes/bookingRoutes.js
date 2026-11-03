import express from "express";

import { createBooking,getBookings,deleteBooking,updateBooking,} from "../controllers/bookingController.js";

import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();



router.post("/create", authMiddleware, createBooking);


router.get("/", authMiddleware, getBookings);


router.delete("/delete/:id", authMiddleware, deleteBooking);


router.put("/update/:id", authMiddleware, updateBooking);


export default router;