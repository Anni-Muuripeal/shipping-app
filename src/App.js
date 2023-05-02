import React, {useState, useEffect} from "react";
import ShipmentTable from "./MainPanel"

function App() {
  const [shipments, setShipments] = useState([]);

  useEffect(() => {
    fetch("https://my.api.mockaroo.com/shipments.json?key=5e0b62d0")
      .then((response) => response.json())
      .then((data) => setShipments(data));
  }, []);

  return <ShipmentTable shipments={shipments} />;
}

export default App;
