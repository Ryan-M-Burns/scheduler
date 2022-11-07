// Ask mentor

const getAppointmentsForDay = (state, day) => {
  const dayObj = state.days.find(stateDay => stateDay.name === day);

  if (!dayObj) {
    return [];
  }
  const dayAppointments = dayObj.appointments.map(id => {
    return state.appointments[id.toString()];
  });

  return dayAppointments;
};

const getInterview = (state, interview) => {
  if (!interview) {
    return null;
  }
  const interviewer = state.interviewers[interview.interviewer];

  return { ...interview, interviewer };
};


export { getAppointmentsForDay, getInterview };
