import React from 'react';
import Confirm from './Confirm';
import Empty from './Empty';
import Error from './Error';
import Form from './Form';
import Header from './Header';
import Show from './Show';
import Status from './Status';

import useVisualMode from 'hooks/useVisualMode';

import './styles.scss';

const Appointment = props => {
  const CONFIRM = "CONFIRM";
  const CREATE = "CREATE";
  const DELETING = "DELETING";
  const EDIT = "EDIT";
  const EMPTY = "EMPTY";
  const SAVING = "SAVING";
  const SHOW = "SHOW";

  const { id, time, interview, interviewers, bookInterview, cancelInterview } = props;
  const { mode, transition, back } = useVisualMode(interview ? SHOW : EMPTY);

  const save = (name, interviewer) => {
    const interview = {
      student: name,
      interviewer
    };
    transition(SAVING);

    bookInterview(id, interview)
      .then(() => transition(SHOW));
  };

  const del = (name, interviewer) => {
    const interview = {
      student: name,
      interviewer
    };
    transition(DELETING);

    cancelInterview(id, interview)
      .then(() => transition(EMPTY));
  };

  return (
    <article className="appointment">
      <Header time={time} />
      {mode === CONFIRM && <Confirm
        message={"Are you sure you would like to cancel your interview?"}
        onCancel={() => transition(SHOW)}
        onConfirm={del}
      />}
      {mode === CREATE &&
        <Form
          onCancel={() => back()}
          onSave={save}
          interviewers={interviewers}
        />
      }
      {mode === DELETING && <Status message="Cancelling your interview" />}
      {mode === EDIT && <Form
        onCancel={() => transition(SHOW)}
        onSave={save}
        interviewers={interviewers}
        student={interview.student}
        interviewer={interview.interviewer.id}
      />
      }
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SAVING && <Status message="Saving..." />}
      {mode === SHOW &&
        <Show
          student={interview.student}
          interviewer={interview.interviewer}
          onEdit={() => transition(EDIT)}
          onDelete={() => transition(CONFIRM)}
        />
      }
    </article>
  );
};

export default Appointment;