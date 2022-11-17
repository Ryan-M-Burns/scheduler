import React from 'react';
import classNames from 'classnames';
import './DayListItem.scss';

// generate day tab
const DayListItem = props => {
  const { value, spots, selected, onChange } = props;

  const dayClass = classNames("day-list__item", {
    "day-list__item--selected": selected,
    "day-list__item--full": spots === 0
  });

  // adjust available spots for day
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
    <li onClick={onChange} className={dayClass} data-testid="day">
      <h2 className="text--regular">{value}</h2>
      <h3 className="text--light">{formatSpots()}</h3>
    </li>
  );
};

export default DayListItem;