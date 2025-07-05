import { useEffect, useState } from 'react';

const API_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:8000";

const VehicleList = () => {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const response = await fetch(`${API_URL}/vehicles/odoo`);
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        setVehicles(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchVehicles();
  }, []);

  if (loading) return <p>Loading vehicles...</p>;
  if (error) return <p>Error loading vehicles: {error}</p>;

  return (
    <div>
      <h2>Odoo Vehicles</h2>
      {vehicles.length === 0 ? (
        <p>No vehicles found.</p>
      ) : (
        <ul>
          {vehicles.map((vehicle, index) => (
            <li key={index}>
              {vehicle.name} - {vehicle.license_plate}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default VehicleList;