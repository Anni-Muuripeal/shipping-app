import React from "react";
import "./index.css";

function ShipmentDetails({ shipment, onClose }) {
  const keys = Object.keys(shipment);

  const leftCol = keys.map((key, index) => {
    if (index % 2 === 0) {
        return (
          <React.Fragment key={key}>
            <div>{key}</div>
            <div>{shipment[key]}</div>
          </React.Fragment>
        );
      } else {
        return null;
      }
    })

  const rightCol = keys.map((key, index) => {
           if (index % 2 !== 0) {
          return (
            <React.Fragment key={key}>
              <div>{key}</div>
              <div>{shipment[key]}</div>
            </React.Fragment>
          );
        } else {
          return null;
        }
      })

  return (
    <div className="details-overlay">
      <div className="details-panel">
        <h2>SHIPMENT DETAILS</h2>
        <table>
          <tbody>
            <tr>
              <td>{leftCol}</td>
              <td>{rightCol}</td>
            </tr>
          </tbody>
        </table>
        <button className="close-button" onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
}

export default ShipmentDetails;
