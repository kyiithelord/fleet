from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from .. import crud, schemas
from ..database import SessionLocal, engine

router = APIRouter(
    prefix="/vehicles",
    tags=["vehicles"],
)

# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/", response_model=schemas.Vehicle)
def create_vehicle(vehicle: schemas.VehicleCreate, db: Session = Depends(get_db)):
    return crud.create_vehicle(db, vehicle)

@router.get("/", response_model=List[schemas.Vehicle])
def read_vehicles(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    vehicles = crud.get_vehicles(db, skip=skip, limit=limit)
    return vehicles

@router.get("/{vehicle_id}", response_model=schemas.Vehicle)
def read_vehicle(vehicle_id: int, db: Session = Depends(get_db)):
    db_vehicle = crud.get_vehicle(db, vehicle_id=vehicle_id)
    if db_vehicle is None:
        raise HTTPException(status_code=404, detail="Vehicle not found")
    return db_vehicle
