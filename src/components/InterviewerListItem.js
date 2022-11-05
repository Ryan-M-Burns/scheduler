import React from 'react';
import classNames from 'classnames';

import "./InterviewerListItem.scss";

const InterviewerListItem = props => {

  const { name,
    avatar, // url
    setInterviewer, // function
    selected // boolean
  } = props;

  const InterviewerItemClass = classNames("interviewers__item", { "interviewers__item--selected": selected });

  return (
    <li onClick={setInterviewer} className={InterviewerItemClass}>
      <img
        className="interviewers__item-image"
        src={avatar}
        alt={name}
      />
      {selected && name}
    </li>
  );

};

export default InterviewerListItem;