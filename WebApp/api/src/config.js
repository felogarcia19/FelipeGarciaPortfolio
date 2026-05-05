import dotenv from "dotenv";

dotenv.config();

export const config = {
  port: Number(process.env.PORT ?? 4000),
  pythonBackendUrl: process.env.PYTHON_BACKEND_URL ?? "http://127.0.0.1:8000",
};
