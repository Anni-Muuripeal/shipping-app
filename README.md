# Shipment Management App

This React application allows you to view, update and delete shipment data from a mock API.
Installation

    -Clone the repository to your local machine

    -Navigate into the project directory

    -Install dependencies

npm install

    -Start the application

npm start


## Usage

Upon starting the application, you will be presented with a table displaying all of the shipments in the mock API.

The table displays shipment data, including the date, status, and consignee.


## Components

App - This component fetches the data from the mock API and passes it down to the ShipmentTable component.

ShipmentTable - This component displays the shipment data in a table format. It also allows the user to view, update and delete shipments.

ShipmentDetails - This component displays more detailed information about a specific shipment.

Update - This component allows the user to update the date, status, and consignee of a specific shipment.


## Dependencies

This application uses the following dependencies:

    react
    react-datepicker
    react-dom
    react-scripts
