

// App.js
import React, { useState, useEffect } from 'react';


import './App.css';
import MedicineForm from './reminders/medicineform';
import MedicineList from './reminders/medicinelist';
import { useToasts } from 'react-toast-notifications';


const App = () => {
  const { addToast } = useToasts;
  const [medicines, setMedicines] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      checkReminders();
    }, 1000); // Check reminders every second (adjust as needed)

    return () => clearInterval(intervalId);
  }, [medicines]);

  const addMedicine = (newMedicine) => {
    setMedicines((prevMedicines) => [...prevMedicines, newMedicine]);
  };

  const deleteMedicine = (index) => {
    setMedicines((prevMedicines) => prevMedicines.filter((_, i) => i !== index));
  };

  const checkReminders = () => {
    const now = new Date();
    const upcomingReminders = medicines.filter((medicine) => {
      const reminderTime = new Date(medicine.reminder);
      return reminderTime > now && reminderTime - now <= 1000; // Within the next second
    });

    if (upcomingReminders.length > 0) {
      showReminderNotification(upcomingReminders);
    }
  };

  const showReminderNotification = (medicines) => {
   

    medicines.forEach((medicine) => {
      alert(`It's time to take ${medicine.name} - ${medicine.dosage}!`);
      
    });
  };
  

 

      

  return (
    <div className="container">
      <h1>Medicine Reminder</h1>
      
      <MedicineForm onAdd={addMedicine} />
      <MedicineList medicines={medicines} onDelete={deleteMedicine} />
    </div>
  );
};

export default App;

