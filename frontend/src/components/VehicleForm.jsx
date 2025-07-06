// src/components/VehicleForm.jsx
import { useState } from "react";
import { createVehicle } from "../api";

export default function VehicleForm({ onSuccess }) {
  const [form, setForm] = useState({ name: "", license_plate: "" });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      await createVehicle(form);
      setForm({ name: "", license_plate: "" });
      onSuccess?.();
    } catch (err) {
      setError("Failed to create vehicle");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md max-w-md space-y-4"
    >
      <input
        name="name"
        placeholder="Vehicle Name"
        value={form.name}
        onChange={handleChange}
        required
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        name="license_plate"
        placeholder="License Plate"
        value={form.license_plate}
        onChange={handleChange}
        required
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
      >
        Add Vehicle
      </button>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </form>
  );
}
