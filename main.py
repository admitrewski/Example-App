"""Charger Network Intelligence — FastAPI backend.

Serves the pre-built React SPA from ./frontend and exposes a /health check.
"""

import os
from pathlib import Path

from fastapi import FastAPI
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles

app = FastAPI(title="Charger Network Intelligence")

FRONTEND_DIR = Path(__file__).parent / "frontend"


@app.get("/health")
def health():
    return {"status": "ok"}


# Mount static assets (JS, CSS) under /assets
app.mount("/assets", StaticFiles(directory=FRONTEND_DIR / "assets"), name="assets")


# SPA fallback — serve index.html for all non-matched routes
@app.get("/{full_path:path}")
async def spa_fallback(full_path: str):
    return FileResponse(FRONTEND_DIR / "index.html")
