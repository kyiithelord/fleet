from pydantic import BaseModel

class VehicleBase(BaseModel):
    name: str
    model: str

class VehicleCreate(VehicleBase):
    pass

class Vehicle(VehicleBase):
    id: int

    class Config:
        orm_mode = True
