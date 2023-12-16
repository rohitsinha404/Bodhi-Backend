import express from "express";

import { isAuthenticated } from "../middlewares/auth.js";
import { getAllProducts, addProduct } from "../controllers/product.js";

const router = express.Router();

router.get("/all", getAllProducts);
router.post("/add", addProduct);

export default router;
