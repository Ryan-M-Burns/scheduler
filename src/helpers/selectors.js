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


const getInterviewersForDay = (state, day) => {
  const dayObj = state.days.find(stateDay => stateDay.name === day);

  if (!dayObj) {
    return [];
  }

  const dayInterviewers = dayObj.interviewers.map(id => {
    return state.interviewers[id.toString()];
  });

  return dayInterviewers;
};


const getInterview = (state, interview) => {
  if (!interview) {
    return null;
  }
  const interviewer = state.interviewers[interview.interviewer];

  return { ...interview, interviewer };
};


export { getAppointmentsForDay, getInterview, getInterviewersForDay };
