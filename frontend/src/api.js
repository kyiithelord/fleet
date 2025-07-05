// frontend/src/api.js
const API_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:8000";

export async function fetchVehicles() {
  const response = await fetch(`${API_URL}/vehicles/`);
  if (!response.ok) throw new Error("Failed to fetch vehicles");
  return response.json();
}

export async function createVehicle(vehicle) {
  const response = await fetch(`${API_URL}/vehicles/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(vehicle)
  });
  if (!response.ok) throw new Error("Failed to create vehicle");
  return response.json();
}

// ✅ Add this export:
export async function fetchOdooVehicles() {
  const response = await fetch(`${API_URL}/vehicles/odoo`);
  if (!response.ok) throw new Error("Failed to fetch Odoo vehicles");
  return response.json();
}
