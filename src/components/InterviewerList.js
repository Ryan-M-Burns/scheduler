import React from 'react';
import PropTypes from "prop-types";
import InterviewerListItem from './InterviewerListItem';
import "./InterviewerList.scss";

const InterviewerList = props => {
  const {
    interviewers,
    onChange,
    value,
  } = props;

  const interviewerList = interviewers.map(interviewer => {
    return (
      <InterviewerListItem
        key={interviewer.id}
        name={interviewer.name}
        avatar={interviewer.avatar}
        selected={interviewer.id === value}
        onChange={() => onChange(interviewer.id)}
      />
    );
  });

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">
        Interviewer
      </h4>
      <ul className="interviewers__list">
        {interviewerList}
      </ul>
    </section>
  );
};

InterviewerList.propTypes = {
  interviewers: PropTypes.array.isRequired
};

export default InterviewerList;