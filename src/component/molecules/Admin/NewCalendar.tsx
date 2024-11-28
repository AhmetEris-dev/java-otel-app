import React, { useState } from 'react';
import './Calendar.css';

const Calendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const today = new Date();

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayIndex = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

  const handleDateClick = (day: number) => {
    setSelectedDate(day);
  };

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button className="nav-button" onClick={handlePrevMonth}>❮</button>
        <span className="calendar-title">
          {currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}
        </span>
        <button className="nav-button" onClick={handleNextMonth}>❯</button>
      </div>
      <div className="calendar-grid">
        {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
          <div key={day} className="calendar-day-name">
            {day}
          </div>
        ))}
        {Array.from({ length: 42 }).map((_, index) => {
          const day = index - firstDayIndex + 1;
          const isToday =
            day === today.getDate() &&
            currentDate.getMonth() === today.getMonth() &&
            currentDate.getFullYear() === today.getFullYear();

          return (
            <div
              key={index}
              className={`calendar-day ${day === selectedDate ? 'selected' : ''} ${
                isToday ? 'today' : ''
              } ${day < 1 || day > daysInMonth ? 'inactive' : ''}`}
             
            >
              {day > 0 && day <= daysInMonth ? day : ''}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
