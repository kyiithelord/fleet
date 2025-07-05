import React, { useState } from "react";
import VehicleList from "./components/VehicleList";
import VehicleForm from "./components/VehicleForm";

function App() {
  const [reloadFlag, setReloadFlag] = useState(false);

  return (
    <div>
      <h1>Fleet Maintenance Tracker</h1>
      <VehicleForm onCreated={() => setReloadFlag((f) => !f)} />
      <VehicleList key={reloadFlag} />
    </div>
  );
}

export default App;
