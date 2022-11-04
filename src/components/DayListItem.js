import React from 'react';
import classNames from 'classnames';
import './DayListItem.scss';


const DayListItem = (props) => {

  const {
    name, // String
    spots, // Number
    selected, // Boolean
    setDay // Function
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

    <li onClick={() => setDay(name)} className={dayClass}>
      <h2 className="text--regular">{name}</h2>
      <h3 className="text--light">{formatSpots()}</h3>
    </li>

  );

};

export default DayListItem;