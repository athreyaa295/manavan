from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routers import auth, resume
from .database.db import engine, Base
import os

# Create tables
Base.metadata.create_all(bind=engine)

app = FastAPI(title="AI Resume Builder Pro API")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # In production, replace with specific origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(auth.router)
app.include_router(resume.router)

@app.get("/")
def read_root():
    return {"message": "Welcome to AI Resume Builder Pro API"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
