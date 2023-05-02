import React, {useState} from "react";
import "./index.css"; 
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Update({ shipment, onUpdate, onClose }) {
  const [date, setDate] = useState(shipment.date);
  const [status, setStatus] = useState(shipment.status);
  const [consignee, setConsignee] = useState(shipment.consignee);
  const [selectedDate, setSelectedDate] = useState(new Date(date));
  const [selectedStatus, setSelectedStatus] = useState(shipment.status);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setDate(date.toISOString());
  };

  const handleStatusChange = (e) => {
    setSelectedStatus(e.target.value);
    setStatus(e.target.value);
  };
  
  return (
    <div className="details-overlay"> 
      <div className="update-panel"> 
        <h2>UPDATE DETAILS</h2>
        <table>
          <tbody>
             <tr>
              <td>Date:</td>
              <td>
                <DatePicker selected={selectedDate} onChange={handleDateChange} />
              </td>
            </tr>
            <tr>
              <td>Status:</td>
              <td>
                <select value={selectedStatus} onChange={handleStatusChange}>
                  <option value="'Shipped'">	Shipped</option>
                  <option value="'In Transit'">In Transit</option>
                  <option value="'Delivered'">Delivered</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Consignee:</td>
              <td><input type="text" value={consignee} onChange={e => setConsignee(e.target.value)} /></td>
            </tr>
          </tbody>
        </table>
        <button className="update-button" onClick={() => {
            const updatedShipment = { ...shipment, date: date, status: status, consignee: consignee, };
            onUpdate(updatedShipment);
            onClose();
        }}>
          Update
        </button>
        <button className="close-button" onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
}

export default Update;

