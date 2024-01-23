// MedicineList.js
import React from 'react';

const MedicineList = ({ medicines, onDelete }) => {
  return (
    <ul>
      {medicines.map((medicine, index) => (
        <li key={index}>
          {medicine.name} - {medicine.dosage}
          {medicine.reminder && (
            <span style={{ marginLeft: '10px', fontStyle: 'italic' }}>
              (Take medicine by {new Date(medicine.reminder).toLocaleTimeString()})
            </span>
          )}
          <button onClick={() => onDelete(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default MedicineList;