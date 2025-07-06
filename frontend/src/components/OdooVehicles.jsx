import { useEffect, useState } from "react";

function OdooFleetVehicles() {
  const [vehicles, setVehicles] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/vehicles/odoo")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch vehicles");
        return res.json();
      })
      .then((data) => setVehicles(data))
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading fleet vehicles...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Odoo Fleet Vehicles</h2>
      <ul className="list-disc pl-5 space-y-2">
        {vehicles.map((v) => (
          <li key={v.id} className="border p-2 rounded shadow-sm">
            <p>
              <strong>{v.name}</strong> - {v.license_plate || "No Plate"} -{" "}
              <em>{v.model_name || "No Model"}</em>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OdooFleetVehicles;
