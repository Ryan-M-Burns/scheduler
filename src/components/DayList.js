import React from 'react';
import DayListItem from './DayListItem';

//generate day pieces for sidebar
const DayList = props => {
  const { days, value, onChange } = props;

  const dayList = days.map(day => {
    return (
      <DayListItem
        key={day.id}
        value={day.name} // String
        spots={day.spots} // Number
        selected={day.name === value} // Boolean
        onChange={() => onChange(day.name)}
      />
    );
  });

  return (
    <ul>
      {dayList}
    </ul>
  );
};

export default DayList;