import React, { useEffect, useState } from "react";
import { fetchVehicles } from "../api";

export default function VehicleList() {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    fetchVehicles().then(setVehicles).catch(console.error);
  }, []);

  return (
    <div>
      <h2>Vehicles</h2>
      <ul>
        {vehicles.map((v) => (
          <li key={v.id}>
            {v.name} ({v.license_plate}) - {v.description || "No description"}
          </li>
        ))}
      </ul>
    </div>
  );
}
