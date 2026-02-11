import Appointment from "../models/appointment.model.js";

export const createAppointment = async (req, res) => {
  const appointment = await Appointment.create(req.body);
  res.status(201).json(appointment);
};

export const getAppointments = async (req, res) => {
  const appointments = await Appointment.find()
    .populate("patient doctor");
  res.json(appointments);
};
