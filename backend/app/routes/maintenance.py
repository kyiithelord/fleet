from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.db.database import SessionLocal
from app.models.maintenance import Maintenance

router = APIRouter(prefix="/maintenance", tags=["Maintenance"])

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get("/")
def get_maintenance(db: Session = Depends(get_db)):
    return db.query(Maintenance).all()
