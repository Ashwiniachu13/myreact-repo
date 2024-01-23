// MedicineForm.js
import React, { useState } from 'react';

const MedicineForm = ({ onAdd }) => {
  const [medicine, setMedicine] = useState({ name: '', dosage: '', reminder: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMedicine((prevMedicine) => ({ ...prevMedicine, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ ...medicine, reminder: new Date(medicine.reminder).toISOString() });
    setMedicine({ name: '', dosage: '', reminder: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Medicine Name:
        <input type="text" name="name" value={medicine.name} onChange={handleChange} required />
      </label>
      <br></br>
      <label>
        Dosage:
        <input type="text" name="dosage" value={medicine.dosage} onChange={handleChange} required />
      </label>
      <br></br>
      <label>
        Reminder:
        <input type="datetime-local" name="reminder" value={medicine.reminder} onChange={handleChange} required />
      </label>
      <br></br>
      <button type="submit">Add Medicine</button>
    </form>
  );
};

export default MedicineForm;