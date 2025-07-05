from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from . import models, schemas, crud
from .database import engine, Base, SessionLocal
from fastapi import Depends
from sqlalchemy.orm import Session
from .odoo_client import get_fleet_vehicles

Base.metadata.create_all(bind=engine)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/vehicles")
def read_vehicles(db: Session = Depends(get_db)):
    return crud.get_vehicles(db)

@app.post("/vehicles/")
def create_vehicle(vehicle: schemas.VehicleCreate, db: Session = Depends(get_db)):
    return crud.create_vehicle(db, vehicle)

@app.get("/vehicles/odoo")
def read_odoo_vehicles():
    return get_fleet_vehicles()
