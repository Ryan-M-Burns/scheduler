import React from 'react';

import Empty from './Empty';
import Error from './Error';
import Form from './Form';
import Header from './Header';
import Show from './Show';
import Status from './Status';

import useVisualMode from 'hooks/useVisualMode';

import './styles.scss';

const Appointment = props => {
  const CREATE = "CREATE";
  const EMPTY = "EMPTY";
  const SAVING = "SAVING";
  const SHOW = "SHOW";

  const { id, time, interview, interviewers, bookInterview } = props;
  const { mode, transition, back } = useVisualMode(interview ? SHOW : EMPTY);

  const save = (name, interviewer) => {
    const interview = {
      student: name,
      interviewer
    };

    transition(SAVING);

    bookInterview(id, interview)
      .then(() => {
        transition(SHOW);
      });
  };

  return (
    <article className="appointment">
      <Header time={time} />
      {mode === CREATE && <Form onCancel={() => back()} onSave={save} interviewers={interviewers} />}
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SAVING && <Status message="Booking your appointment..." />}
      {mode === SHOW && <Show student={interview.student} interviewer={interview.interviewer} />}
    </article>
  );
};

export default Appointment;