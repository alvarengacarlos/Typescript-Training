import express from "express";
import "dotenv/config";

import { ProductController } from "./ProductController";
import { CategoryController } from "./CategoryController";

const app = express();
app.use(express.json());

const router = express.Router();

router.post("/products", ProductController.create);
router.post("/categories", CategoryController.create);

app.use("/api/v1", router);
export default app;
