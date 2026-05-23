from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from ..database.db import get_db
from ..models.resume import Resume
from ..models.user import User
from .auth import get_current_user
from ai.resume_generator import resume_generator
from ai.ats_analyzer import ats_analyzer
from pydantic import BaseModel
from typing import List, Optional

router = APIRouter(prefix="/resumes", tags=["resumes"])

class ResumeBase(BaseModel):
    title: str
    template: str = "modern"
    content: dict

class ResumeCreate(ResumeBase):
    pass

class ResumeUpdate(ResumeBase):
    pass

@router.post("/", response_model=dict)
def create_resume(resume: ResumeCreate, db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    new_resume = Resume(
        title=resume.title,
        template=resume.template,
        content=resume.content,
        user_id=current_user.id
    )
    db.add(new_resume)
    db.commit()
    db.refresh(new_resume)
    return {"id": new_resume.id, "message": "Resume created successfully"}

@router.get("/", response_model=List[dict])
def list_resumes(db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    resumes = db.query(Resume).filter(Resume.user_id == current_user.id).all()
    return [{"id": r.id, "title": r.title, "created_at": r.created_at} for r in resumes]

@router.post("/generate/summary")
def generate_summary(user_info: dict, current_user: User = Depends(get_current_user)):
    summary = resume_generator.generate_summary(user_info)
    return {"summary": summary}

@router.post("/analyze/ats")
def analyze_ats(data: dict, current_user: User = Depends(get_current_user)):
    # data expects { "resume_content": "...", "job_description": "..." }
    result = ats_analyzer.analyze(data.get("resume_content"), data.get("job_description"))
    return result
