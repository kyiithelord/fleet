import { useEffect, useState } from "react";
import { fetchVehicles, createVehicle } from "../api";

function VehicleList() {
  const [vehicles, setVehicles] = useState([]);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", license_plate: "" });

  const loadVehicles = () => {
    fetchVehicles()
      .then(setVehicles)
      .catch((err) => setError(err.message));
  };

  useEffect(() => {
    loadVehicles();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createVehicle(form);
      setForm({ name: "", license_plate: "" });
      loadVehicles(); // reload after adding
    } catch (err) {
      setError("❌ Failed to create vehicle");
      console.error(err);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4 bg-white shadow rounded-xl">
      <h2 className="text-xl font-bold mb-4">Local Database Vehicles</h2>

      <form onSubmit={handleSubmit} className="mb-4 space-y-2">
        <input
          name="name"
          placeholder="Vehicle Name"
          value={form.name}
          onChange={handleChange}
          required
          className="border px-3 py-2 rounded w-full"
        />
        <input
          name="license_plate"
          placeholder="License Plate"
          value={form.license_plate}
          onChange={handleChange}
          required
          className="border px-3 py-2 rounded w-full"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          ➕ Add Vehicle
        </button>
      </form>

      {error && <p className="text-red-600">{error}</p>}

      {vehicles.length === 0 ? (
        <p>No vehicles found.</p>
      ) : (
        <ul className="list-disc list-inside space-y-1">
          {vehicles.map((v, i) => (
            <li key={i}>
              {v.name} - {v.license_plate}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default VehicleList;
