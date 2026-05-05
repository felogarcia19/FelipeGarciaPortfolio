from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

from .api import router as content_router

app = FastAPI(title="SoundHarbor Content Service", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(content_router)
app.mount("/assets", StaticFiles(directory="backend/assets"), name="assets")


@app.get("/health")
def health_check() -> dict:
    return {"status": "ok"}
