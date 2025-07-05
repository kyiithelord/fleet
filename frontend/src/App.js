import VehicleList from './components/VehicleList';
import OdooVehicles from './components/OdooVehicles';

function App() {
  return (
    <div style={{ padding: '1rem' }}>
      <h1>Fleet Maintenance Tracker</h1>

      <section style={{ marginTop: '2rem' }}>
        <h2>Local Database Vehicles</h2>
        <VehicleList />
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>Odoo Vehicles</h2>
        <OdooVehicles />
      </section>
    </div>
  );
}

export default App;
