import ShipmentDetails from './DetailsPanel'
import Update from './UpdatePanel';
import React, { useState, useEffect } from 'react';
import './index.css'

function ShipmentTable({ shipments }) {
  const [selectedShipment, setSelectedShipment] = useState(null);
  const [shipmentsList, setShipmentsList] = useState(Array.isArray(shipments) ? shipments : []);
  const [selectedShipmentForUpdate, setSelectedShipmentForUpdate] = useState(null);

  useEffect(() => {
      setShipmentsList(shipments);
  }, [shipments]);
  
  const handleShowDetails = (shipment) => {
      setSelectedShipment(shipment);
  };
    
  const handleCloseDetails = () => {
      setSelectedShipment(null);
  };
    
  const handleDeleteShipment = (id) => {
    const updatedShipmentsList = shipmentsList.filter(
      (shipment) => shipment[shipmentKeys[0]] !== id
    );
    setShipmentsList(updatedShipmentsList);
  };

  const handleShowUpdate = (shipment) => {
      setSelectedShipmentForUpdate(shipment);
  };

  const handleCloseUpdate = () => {
      setSelectedShipmentForUpdate(null);
  };

  const handleUpdateShipment = (updatedShipment) => {
      const updatedShipmentsList = shipmentsList.map((shipment) => {
        if (shipment[shipmentKeys[0]] === updatedShipment[shipmentKeys[0]]) {
          return updatedShipment;
        } else {
          return shipment;
        }
    });
    setShipmentsList(updatedShipmentsList);
    setSelectedShipmentForUpdate(null);
  };  
    
  const shipmentKeys = shipmentsList.length > 0 ? Object.keys(shipmentsList[0]) : [];
    
  return (
      <div>
        <h1>Shipments Data</h1>
        <table>
          <thead>
            <tr>
              {shipmentKeys.map((key) => (
                <th key={key}>{key.toUpperCase()}</th>
              ))}
              <th></th>
            </tr>
          </thead>
          <tbody>
            {shipmentsList.map((shipment, index) => (
              <tr key={index}>
                {shipmentKeys.map((key) => (
                  <td key={key}>{shipment[key]}</td>
                ))}
                <td>
                  <button onClick={() => handleShowDetails(shipment)}>
                    Details
                  </button>
                  <button onClick={() => handleShowUpdate(shipment)}>
                    Update
                  </button>
                  <button onClick={() => handleDeleteShipment(shipment[shipmentKeys[0]])}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {selectedShipment && (
          <ShipmentDetails shipment={selectedShipment} onClose={handleCloseDetails} />
        )}
        {selectedShipmentForUpdate && (
          <Update shipment={selectedShipmentForUpdate} onUpdate={handleUpdateShipment} onClose={handleCloseUpdate}  />
        )}
      </div>
    );
}
    
export default ShipmentTable;
    
    