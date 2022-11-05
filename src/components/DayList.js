import React from 'react';
import DayListItem from './DayListItem';

const DayList = (props) => {

  const {
    days, // array
    day, // string
    setDay // function
  } = props;

  const dayList = days.map(singleDay => {
    return (
      <DayListItem
        key={singleDay.id}
        name={singleDay.name} // String
        spots={singleDay.spots} // Number
        selected={singleDay.name === day} // Boolean
        setDay={setDay}
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