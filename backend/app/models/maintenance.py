from sqlalchemy import Column, Integer, String, Date, ForeignKey
from sqlalchemy.orm import relationship
from app.db.database import Base

class Maintenance(Base):
    __tablename__ = "maintenance"
    id = Column(Integer, primary_key=True)
    vehicle_id = Column(Integer, ForeignKey("vehicles.id"))
    description = Column(String)
    date = Column(Date)
    cost = Column(Integer)

    vehicle = relationship("Vehicle")
