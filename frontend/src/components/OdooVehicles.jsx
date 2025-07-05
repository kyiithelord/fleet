import { useEffect, useState } from "react";
import { fetchOdooVehicles } from "../api";

function OdooVehicles() {
  const [vehicles, setVehicles] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchOdooVehicles()
      .then(setVehicles)
      .catch((err) => setError(err.message));
  }, []);

  if (error) return <p>Error: {error}</p>;
  if (!vehicles.length) return <p>Loading Odoo vehicles...</p>;

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Odoo Vehicles</h2>
      <ul className="list-disc pl-5">
        {vehicles.map((v, i) => (
          <li key={i}>
            {v.name} - {v.license_plate}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OdooVehicles;
