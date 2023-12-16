import express from "express";

import { isAuthenticated } from "../middlewares/auth.js";

import { getAllOrders, addOrder, getRemOrders } from "../controllers/order.js";

const router = express.Router();

router.get("/all", isAuthenticated, getAllOrders);
router.post("/add", isAuthenticated, addOrder);
router.get("/remOrder", isAuthenticated, getRemOrders);

export default router;
