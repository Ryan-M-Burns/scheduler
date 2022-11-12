import { useState, useEffect } from "react";
import axios from "axios";

const useApplicationData = () => {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers")
    ])
      .then(all => {
        const days = all[0].data;
        const appointments = all[1].data;
        const interviewers = all[2].data;

        setState(prev => ({ ...prev, days, appointments, interviewers }));
      });
  }, []);

  const setDay = day => setState(prev => ({ ...prev, day }));

  const updateSpots = (appointments) => {
    const currentDay = state.days.find(day => day.name === state.day);
    const nullAppointments = currentDay.appointments.filter(id => appointments[id].interview === null);
    const spots = nullAppointments.length;
    const newDay = { ...currentDay, spots };
    const newDays = state.days.map(day => day.name === state.day ? newDay : day);

    return newDays;
  };

  const bookInterview = (id, interview) => {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    const days = updateSpots(appointments);

    return axios.put(`/api/appointments/${id}`, { interview })
      .then(() => setState(prev => ({ ...prev, days, appointments })));
  };

  const cancelInterview = (id, interview) => {
    const appointment = {
      ...state.appointments[id],
      interview: null
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    const days = updateSpots(appointments);

    return axios.delete(`/api/appointments/${id}`, { interview })
      .then(() => setState(prev => ({ ...prev, days, appointments })));
  };

  return { state, setDay, bookInterview, cancelInterview };
};

export default useApplicationData;