import React from 'react';
import classNames from 'classnames';

const InterviewerListItem = props => {

  const { name, avatar } = props;

  const InterviewerItemClass = classNames("interviewers__item", {"--selected": name})

  return (
    <li onClick={() => setDay(name)} className={InterviewerItemClass}>
      <img
        className="interviewers__item-image"
        src={avatar}
        alt={name}
      />
      {name}
    </li>
  );

};

export default InterviewerListItem;