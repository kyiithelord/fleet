from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.db.database import SessionLocal
from app.models.vehicle import Vehicle

router = APIRouter(prefix="/vehicles", tags=["Vehicles"])

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get("/")
def get_vehicles(db: Session = Depends(get_db)):
    return db.query(Vehicle).all()
