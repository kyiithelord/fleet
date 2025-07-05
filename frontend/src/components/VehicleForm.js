// frontend/src/components/VehicleForm.js
import React, { useState } from "react";
import { createVehicle } from "../api";

export default function VehicleForm({ onCreated }) {
  const [name, setName] = useState("");
  const [licensePlate, setLicensePlate] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newVehicle = await createVehicle({ name, license_plate: licensePlate, description });
      onCreated(newVehicle);
      setName("");
      setLicensePlate("");
      setDescription("");
    } catch (err) {
      alert("Failed to create vehicle");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
      <input value={licensePlate} onChange={(e) => setLicensePlate(e.target.value)} placeholder="License Plate" required />
      <input value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
      <button type="submit">Add Vehicle</button>
    </form>
  );
}
