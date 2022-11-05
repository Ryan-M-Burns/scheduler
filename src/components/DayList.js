import React from 'react';
import DayListItem from './DayListItem';

const DayList = props => {

  const {
    days, // array
    value, // string
    onChange // function
  } = props;

  const dayList = days.map(day => {
    return (
      <DayListItem
        key={day.id}
        value={day.value} // String
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