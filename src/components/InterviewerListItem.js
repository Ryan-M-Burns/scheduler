import React from 'react';
import classNames from 'classnames';

import "./InterviewerListItem.scss";

const InterviewerListItem = props => {

  const {
    name, // string
    avatar, // url
    selected, // boolean
    onChange // function
  } = props;

  const InterviewerItemClass = classNames("interviewers__item", { "interviewers__item--selected": selected });

  return (
    <li className={InterviewerItemClass} onClick={onChange}>
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