import { Router } from "express";

import { fetchProducts, fetchStoreInfo } from "../services/catalogService.js";

const catalogRouter = Router();

catalogRouter.get("/store-info", async (_req, res, next) => {
  try {
    const storeInfo = await fetchStoreInfo();
    res.json(storeInfo);
  } catch (error) {
    next(error);
  }
});

catalogRouter.get("/products", async (_req, res, next) => {
  try {
    const products = await fetchProducts();
    res.json(products);
  } catch (error) {
    next(error);
  }
});

export default catalogRouter;
