// src/App.jsx
import VehicleList from "./components/VehicleList";
import OdooVehicles from "./components/OdooVehicles";
import VehicleForm from "./components/VehicleForm";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-blue-700 text-white py-6 shadow-md">
        <h1 className="text-3xl font-bold text-center">Fleet Maintenance Tracker</h1>
      </header>

      <main className="max-w-5xl mx-auto py-10 px-4">
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">Add New Vehicle</h2>
          <VehicleForm />
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">Local Database Vehicles</h2>
          <VehicleList />
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">Odoo Vehicles</h2>
          <OdooVehicles />
        </section>
      </main>
    </div>
  );
}

export default App;
