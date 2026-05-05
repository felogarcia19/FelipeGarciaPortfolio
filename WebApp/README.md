# SoundHarbor Instruments WebApp

Portfolio-ready full-stack demo e-commerce app for musical instruments.

## Stack
- React + Vite frontend with Home, Products, and Contact tabs
- Node.js + Express API gateway
- Python + FastAPI content backend

## Architecture
- Frontend calls Node API on `/api/*`
- Node API fetches product and store content from Python backend
- Python backend is the source of product text, pricing, and image URLs

## Quick Start

### 1) Install JavaScript dependencies
> Run from: `Portfolio/Code/WebApp`
```bash
cd Portfolio/Code/WebApp
npm install
npm run install:all
```

### 2) Create a local Python virtual environment and install dependencies
> Run from: `Portfolio/Code/WebApp`
```bash
cd Portfolio/Code/WebApp
python -m venv .venv
.venv\Scripts\python -m pip install -r backend/requirements.txt
```

### 3) Run everything
> Run from: `Portfolio/Code/WebApp`
```bash
cd Portfolio/Code/WebApp
npm run dev
```

Services:
- Frontend: http://localhost:5173
- Node API: http://localhost:4000
- Python backend: http://localhost:8000

If your Python executable is not found automatically, run with:
```bash
set PYTHON_CMD=C:\\path\\to\\python.exe
npm run dev
```

## Optional Commands
```bash
npm run dev:frontend
npm run dev:api
npm run dev:backend
npm run build
```

## Notes
- This app uses fake brand/content for recruiter portfolio demos.
- Contact form is demo-only and does not send real emails.
