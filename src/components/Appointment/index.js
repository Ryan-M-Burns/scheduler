import React from 'react';
import './styles.scss';
import Header from './Header';
import Show from './Show';
import Empty from './Empty';
import useVisualMode from 'hooks/useVisualMode';

const Appointment = props => {
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";

  const { interview, time } = props;
  const { mode, transition, back } = useVisualMode(interview ? SHOW : EMPTY);

  const interviewElement = () => {
    { mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />; }
    { mode === SHOW && <Show student={interview.student} interviewer={interview.interviewer} />; }
    { mode === CREATE && <CREATE interviewers={[]} />; }
  };

  return (
    <article className="appointment">
      <Header time={time} />
      {interviewElement()}
    </article>
  );

};

export default Appointment;