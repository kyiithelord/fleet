from sqlalchemy import Column, Integer, String, Date, Boolean
from app.db.database import Base

class Vehicle(Base):
    __tablename__ = "vehicles"
    id = Column(Integer, primary_key=True, index=True)
    license_plate = Column(String, unique=True, index=True)
    model = Column(String)
    purchase_date = Column(Date)
    active = Column(Boolean, default=True)
