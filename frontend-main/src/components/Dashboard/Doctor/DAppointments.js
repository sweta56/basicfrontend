import React from "react";

import {
    pendingAppointments,
    approvedAppointments,
    rejectedAppointments,
} from "../../Appointments/parappointments"

import DoctorAppointmentsList from "./DoctorAppointmentList";

const DoctorAppointments = () => {
    return (
        <div className="ml-[200px]">
            <h2 className="text-xl">Hello, Doctor</h2>
            <h5>Here are your appointments:</h5>

            <div className="mt-5">
                <DoctorAppointmentsList
                    list={pendingAppointments}
                    status="Pending"
                    role="user"
                />
            </div>

            <div className="mt-5">
                <DoctorAppointmentsList
                    list={approvedAppointments}
                    status="Approved"
                    role="user"
                />
            </div>

            <div className="mt-5">
                <DoctorAppointmentsList
                    list={rejectedAppointments}
                    status="Rejected"
                    role="user"
                />
            </div>
        </div>
    );
};

export default DoctorAppointments;