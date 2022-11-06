// Ask mentor

const getAppointmentsForDay = (state, day) => {
  const appointments = state.days.filter(stateDay => stateDay.name === day);
  const appointmentsForDay = [];

  if (appointments[0]) {
    appointments.map(id => {
      for (let appointment in state.appointments) {
        if (id === appointment.id) {
          appointsmentsForDay.push(appointment);
        }
      }
    });
  }
  return appointmentsForDay;
};

export { getAppointmentsForDay };