import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AppointmentTimeSlot = () => {
    const appointments = [
        {
            day: 'Mon 18',
            time: '03:00 PM',
            doctor: 'Dr. Andrew',
            treatment: 'Skin Treatment',
            duration: '03:00 PM - 04:00 PM',
        },
        {
            day: 'Mon 18',
            time: '12:00 PM',
            doctor: 'Dr. Smith',
            treatment: 'Dental Checkup',
            duration: '12:00 PM - 01:00 PM',
        },
        {
            day: 'Wed 20',
            time: '09:00 AM',
            doctor: 'Dr. Andrew',
            treatment: 'Hair Treatment',
            duration: '09:00 AM - 11:00 AM',
        },
        {
            day: 'Wed 20',
            time: '03:00 PM',
            doctor: 'Dr. Smith',
            treatment: 'Eye Checkup',
            duration: '03:00 PM - 06:00 PM',
        },
    ];

    const [selectedAppointment, setSelectedAppointment] = useState(null);

    const handleShow = (appointment) => {
        setSelectedAppointment(appointment);
    };

    const handleClose = () => {
        setSelectedAppointment(null);
    };

    return (
        <div className="container mx-auto">
            {/* Header */}
            <div className="flex justify-between items-center p-4 bg-gray-100 rounded-t-lg shadow">
                <h2 className="text-lg font-semibold">Appointment Time Slot</h2>
                <div className="flex items-center space-x-4">
                    <button className="text-blue-500">&lt;</button>
                    <span className="text-gray-600">18 June, 2022 - 23 June, 2022</span>
                    <button className="text-blue-500">&gt;</button>
                </div>
            </div>

            {/* Table */}
            <div className="overflow-y-auto h-96">
                <table className="min-w-full bg-white border-t border-l border-gray-200">
                    {/* Table Header */}
                    <thead>
                        <tr>
                            <th className="w-20 p-3 text-sm font-medium text-gray-600 text-left border-b border-r">Time</th>
                            {['Sun 17', 'Mon 18', 'Tue 19', 'Wed 20', 'Thu 21', 'Fri 22', 'Sat 23'].map((day) => (
                                <th key={day} className="w-40 p-3 text-sm font-medium text-gray-600 border-b border-r">
                                    {day}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    {/* Table Body */}
                    <tbody>
                        {['08 AM', '09 AM', '10 AM', '11 AM', '12 PM', '01 PM', '02 PM', '03 PM', '04 PM', '05 PM', '06 PM', '07 PM', '08 PM', '09 PM'].map(
                            (time, index) => (
                                <tr key={index}>
                                    <td className="p-3 text-sm text-gray-600 font-medium border-r">{time}</td>
                                    {/* Conditional Rendering for Appointments */}
                                    {index === 6 ? (
                                        <td colSpan="7" className="p-3 text-center text-gray-500 bg-gray-100">
                                            Lunch Time
                                        </td>
                                    ) : (
                                        ['No Schedule', 'Not Available', 'No Schedule'].map((status, idx) => {
                                            // Find the matching appointment for the current time and day
                                            const appointment = appointments.find(
                                                (apt) => apt.day === ['Sun 17', 'Mon 18', 'Tue 19', 'Wed 20', 'Thu 21', 'Fri 22', 'Sat 23'][idx] && apt.time === time
                                            );

                                            return (
                                                <td
                                                    key={idx}
                                                    className={`p-3 text-sm text-gray-500 text-center border-b border-r ${status === 'Not Available' ? 'bg-gray-200' : 'bg-white'}`}
                                                    onClick={() => appointment && handleShow(appointment)}
                                                >
                                                    {appointment ? (
                                                        <div className="text-blue-500 font-semibold cursor-pointer">
                                                            <p>{appointment.doctor}</p>
                                                            <p className="text-sm text-gray-600">{appointment.treatment}</p>
                                                            <p className="text-xs">{appointment.duration}</p>
                                                        </div>
                                                    ) : (
                                                        status
                                                    )}
                                                </td>
                                            );
                                        })
                                    )}
                                    {/* Add button in the Mon 18 slot */}
                                    {time === '12 PM' && (
                                        <td
                                            className="p-3 text-center border-b border-r cursor-pointer"
                                            onClick={() => handleShow({
                                                day: 'Mon 18',
                                                time: '12:00 PM',
                                                doctor: 'Dr. Smith',
                                                treatment: 'Dental Checkup',
                                                duration: '12:00 PM - 01:00 PM',
                                            })}
                                        >
                                            <button className="btn btn-primary">Book Appointment</button>
                                        </td>
                                    )}
                                    {/* Add appointment details in Wed 20 for 9 AM - 11 AM and 3 PM - 6 PM */}
                                    {time === '09 AM' && (
                                        <td
                                            className="p-3 text-center border-b border-r cursor-pointer"
                                            onClick={() => handleShow({
                                                day: 'Wed 20',
                                                time: '09:00 AM',
                                                doctor: 'Dr. Andrew',
                                                treatment: 'Hair Treatment',
                                                duration: '09:00 AM - 11:00 AM',
                                            })}
                                        >
                                            <button className="btn btn-primary">Book Appointment</button>
                                        </td>
                                    )}
                                    {time === '03 PM' && (
                                        <td
                                            className="p-3 text-center border-b border-r cursor-pointer"
                                            onClick={() => handleShow({
                                                day: 'Wed 20',
                                                time: '03:00 PM',
                                                doctor: 'Dr. Smith',
                                                treatment: 'Eye Checkup',
                                                duration: '03:00 PM - 06:00 PM',
                                            })}
                                        >
                                            <button className="btn btn-primary">Book Appointment</button>
                                        </td>
                                    )}
                                </tr>
                            )
                        )}
                    </tbody>
                </table>
            </div>

            {/* Appointment Modal */}
            {selectedAppointment && (
                <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" role="dialog" aria-labelledby="appointmentModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="appointmentModalLabel">Appointment Details</h5>
                                <button type="button" className="close" onClick={handleClose} aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p><strong>Day:</strong> {selectedAppointment.day}</p>
                                <p><strong>Time:</strong> {selectedAppointment.time}</p>
                                <p><strong>Doctor:</strong> {selectedAppointment.doctor}</p>
                                <p><strong>Treatment:</strong> {selectedAppointment.treatment}</p>
                                <p><strong>Duration:</strong> {selectedAppointment.duration}</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={handleClose}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AppointmentTimeSlot;
