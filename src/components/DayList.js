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
        key={singleDay.key}
        name={singleDay.name} // String
        spots={singleDay.spots} // Number
        selected={singleDay.selected} // Boolean
        setDay={singleDay.setDay}
      />
    );
  
  });
  return (
    <ul>

    </ul>
  );
};

export default DayList;