import React from 'react';
import classNames from 'classnames';
import './DayListItem.scss';


const DayListItem = (props) => {
  const {
    value, // String
    spots, // Number
    selected, // Boolean
    onChange // Function
  } = props;

  const dayClass = classNames("day-list__item", {
    "day-list__item--selected": selected,
    "day-list__item--full": spots === 0
  });

  const formatSpots = () => {

    if (spots === 1) {
      return "1 spot remaining";
    }
    if (spots > 1) {
      return `${spots} spots remaining`;
    }
    return 'no spots remaining';

  };

  return (

    <li onClick={onChange} className={dayClass}>
      <h2 className="text--regular">{value}</h2>
      <h3 className="text--light">{formatSpots()}</h3>
    </li>

  );

};

export default DayListItem;