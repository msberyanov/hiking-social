import React from 'react';

export const PeriodSelector: React.FC = () => {
  return (
    <div className="outline-none border-solid border-1.5 rounded-lg p-1 pr-1.5 text-gray-500">
      <select className="outline-none p-1 text-sm">
        <option>Weekly</option>
        <option>Monthly</option>
        <option>Yearly</option>
        <option>All-Time</option>
      </select>
    </div>
  );
};
