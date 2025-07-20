import React from 'react';
import { CarInfo } from '../types/CarInfo';

interface CarInfoDisplayProps {
  carInfo: CarInfo;
}

const CarInfoDisplay: React.FC<CarInfoDisplayProps> = ({ carInfo }) => {
  return (
    <div className="mt-8 p-4 border border-gray-300 rounded-lg bg-white">
      <h2 className="text-2xl font-bold mb-4">Car Information</h2>
      <table className="min-w-full bg-white">
        <tbody>
          <tr>
            <td className="border px-4 py-2 font-semibold">Registration Number</td>
            <td className="border px-4 py-2">{carInfo.registrationNumber}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2 font-semibold">Tax Status</td>
            <td className="border px-4 py-2">{carInfo.taxStatus}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2 font-semibold">Tax Due Date</td>
            <td className="border px-4 py-2">{carInfo.taxDueDate}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2 font-semibold">MOT Status</td>
            <td className="border px-4 py-2">{carInfo.motStatus}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2 font-semibold">Make</td>
            <td className="border px-4 py-2">{carInfo.make}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2 font-semibold">Year of Manufacture</td>
            <td className="border px-4 py-2">{carInfo.yearOfManufacture}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2 font-semibold">Engine Capacity</td>
            <td className="border px-4 py-2">{carInfo.engineCapacity}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2 font-semibold">CO2 Emissions</td>
            <td className="border px-4 py-2">{carInfo.co2Emissions}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2 font-semibold">Fuel Type</td>
            <td className="border px-4 py-2">{carInfo.fuelType}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2 font-semibold">Marked for Export</td>
            <td className="border px-4 py-2">{carInfo.markedForExport ? 'Yes' : 'No'}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2 font-semibold">Colour</td>
            <td className="border px-4 py-2">{carInfo.colour}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2 font-semibold">Type Approval</td>
            <td className="border px-4 py-2">{carInfo.typeApproval}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2 font-semibold">Revenue Weight</td>
            <td className="border px-4 py-2">{carInfo.revenueWeight}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2 font-semibold">Euro Status</td>
            <td className="border px-4 py-2">{carInfo.euroStatus}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2 font-semibold">Date of Last V5C Issued</td>
            <td className="border px-4 py-2">{carInfo.dateOfLastV5CIssued}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2 font-semibold">MOT Expiry Date</td>
            <td className="border px-4 py-2">{carInfo.motExpiryDate}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2 font-semibold">Wheelplan</td>
            <td className="border px-4 py-2">{carInfo.wheelplan}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2 font-semibold">Month of First Registration</td>
            <td className="border px-4 py-2">{carInfo.monthOfFirstRegistration}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CarInfoDisplay;
