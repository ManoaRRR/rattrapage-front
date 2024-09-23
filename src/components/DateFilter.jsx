import React, { useState } from 'react';

const DateFilter = ({ onDateChange }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onDateChange(startDate, endDate);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Date de début:
        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
      </label>
      <label>
        Date de fin:
        <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
      </label>
      <button type="submit">Appliquer</button>
    </form>
  );
};

export default DateFilter;
