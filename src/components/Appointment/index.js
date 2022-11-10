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
  const {
    id,
    time,
    interview,
    interviewers,
    bookInterview,
    cancelInterview
  } = props;

  const CONFIRM = "CONFIRM";
  const CREATE = "CREATE";
  const DELETING = "DELETING";
  const EDIT = "EDIT";
  const EMPTY = "EMPTY";
  const ERROR_DELETE = "ERROR_DELETE";
  const ERROR_SAVE = "ERROR_SAVE";
  const SAVING = "SAVING";
  const SHOW = "SHOW";

  const {
    mode,
    transition,
    back
  } = useVisualMode(interview ? SHOW : EMPTY);

  const save = (name, interviewer) => {

    if (name && interviewer) {
      const interview = {
        student: name,
        interviewer
      };

      transition(SAVING);
    }

    bookInterview(id, interview)
      .then(() => transition(SHOW))
      .catch(() => transition(ERROR_SAVE, true));
  };


  const destroy = (name, interviewer) => {
    const interview = {
      student: name,
      interviewer
    };

    transition(DELETING, true);

    cancelInterview(id, interview)
      .then(() => transition(EMPTY))
      .catch(() => transition(ERROR_DELETE, true));
  };

  return (
    <article className="appointment">
      <Header time={time} />
      {mode === CONFIRM &&
        <Confirm
          message={"Are you sure you would like to cancel your interview?"}
          onCancel={() => transition((SHOW))}
          onConfirm={destroy}
        />
      }
      {mode === CREATE &&
        <Form
          onCancel={() => back()}
          onSave={save}
          interviewers={interviewers}
        />
      }
      {mode === DELETING && <Status message="Cancelling your interview" />}
      {mode === EDIT &&
        <Form
          onCancel={() => transition(SHOW)}
          onSave={save}
          interviewers={interviewers}
          student={interview.student}
          interviewer={interview.interviewer.id}
        />
      }
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === ERROR_DELETE &&
        <Error
          message="There was an error when deleting"
          onClose={() => back()}
        />
      }
      {mode === ERROR_SAVE &&
        <Error
          message="There was an error when saving"
          onClose={() => back()}
        />
      }
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