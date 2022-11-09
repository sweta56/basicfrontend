import React from "react";

const DoctorAppointment = ({
    _id,
    user,
    doctor,
    phone,
    status,
    role = "user",
    date,
    index,
}) => {
    const btnClassName = "px-3 py-1 rounded";

    return (
        <div>
            {
                index === 0 &&  <div className="flex items-center justify-between capitalize text-sm w-full bg-gray-200 py-2 px-2 text-gray-700 font-semibold">
                <p className="block text-center w-full border border-blue-300 px-6">{role}</p>
                <p className="block text-center w-full  border border-blue-300 px-6">
                    date
                </p>
                <p className="block text-center w-full  border border-blue-300 px-6">
                    phone
                </p>
                <p className="block text-center w-full  border border-blue-300 px-6">
                    status
                </p>
                <p className="block text-center w-full  border border-blue-300 px-6">
                    action
                </p>
            </div>
            }
            
           
            
            
        <div
            className={`flex items-center justify-between  py-2 px-2 ${
                index % 2 === 0 ? "bg-gray-100" : "bg-gray-50"
            }`}
        >
            <div className="flex flex-col">
                <span className="capitalize">
                    {role === "user" ? user?.username : doctor?.username}
                </span>
                <span className="text-sm text-gray-600">
                    {role === "user" ? user?.email : doctor?.email}
                </span>
            </div>

            <div className="p-5 ml-1">
                <span className="text-gray-600">Nov 9 2022</span>
            </div>

            <div className="text-sm text-gray-600">
                <span>{phone}</span>
            </div>

           

            <div className="px-5">
                <span className="text-gray-600">{status}</span>
            </div>

            {status === "pending" && role === "user" ? (
                <div className="flex flex-col space-y-2 ml-7">
                    <button className={`${btnClassName} bg-blue-400`}>
                        Approve
                    </button>
                    <button className={`${btnClassName} bg-red-400`}>
                        Reject
                    </button>
                </div>
            ) : (
                <button className={`${btnClassName} bg-red-400`}>delete</button>
            )}
        </div>
            </div>

    );
};

export default DoctorAppointment;