from sqlalchemy import Column, Integer, String
from .database import Base

class Vehicle(Base):
    __tablename__ = "vehicles"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    model = Column(String)
