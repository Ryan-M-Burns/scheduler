import React from 'react';
import InterviewerListItem from './InterviewerListItem';
import "./InterviewerList.scss";
const InterviewerList = props => {

  const {
    interviewers, // array
    setInterviewer, // function
    interviewer, // number
  } = props;

  const interviewerList = interviewers.map(individual => {
    return (
      <InterviewerListItem
        id={individual.id}
        name={individual.name}
        avatar={individual.avatar}
        setInterviewer={setInterviewer}
        selected={individual.id === interviewer}
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

export default InterviewerList;