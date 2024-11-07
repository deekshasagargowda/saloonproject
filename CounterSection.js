// src/components/CounterSection.js
// src/components/CounterSection.js
import React, { useEffect, useState } from 'react';
import './CounterSection.css';

function CounterSection() {
  const targetCounts = [878, 10, 588, 66]; // Set specific target counts for each counter
  const [counts, setCounts] = useState([0, 0, 0, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts(prevCounts => 
        prevCounts.map((count, index) => 
          count < targetCounts[index] ? count + 1 : count
        )
      );
    }, 10);
    return () => clearInterval(interval);
  }, []);

  const labels = ["Happy Customers", "Years in Business", "Total Services", "Awards Won"];

  return (
    <div className="counter-container">
      {labels.map((label, index) => (
        <div key={index} className="counter-box">
          <div className="counter-label">{label}</div>
          <div className="counter-value">{counts[index]}</div>
        </div>
      ))}
    </div>
  );
}

export default CounterSection;

