import express from "express";

import catalogRouter from "./routes/catalogRoutes.js";
import contactRouter from "./routes/contactRoutes.js";

const app = express();

app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.use("/api", catalogRouter);
app.use("/api", contactRouter);

app.use((error, _req, res, _next) => {
  res.status(502).json({
    message: "Failed to reach upstream content service",
    detail: error.message,
  });
});

export default app;
