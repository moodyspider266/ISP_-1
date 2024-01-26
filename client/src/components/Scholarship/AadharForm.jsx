import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from "axios"

const AadhaarForm = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = React.useState({
        fullName: "",
        motherName: "",
        dob: "",
        gender: "",
        pan: "",
        casteCertificate: "",
        MobileNo: ""
    });


    const handleInputChange = (e) => {

        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });


    };


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("formSubmitted");
        console.log(formData);
    }

    return (
        <div className="bg-gray-100 h-full flex items-center justify-center p-10">
            <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
                <h2 className="text-2xl font-bold mb-4 text-center">Enter Your Educational Details</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">
                            Full Name:
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="fullName"
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            placeholder="full name"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="motherName">
                            Mother's Name:
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="motherName"
                            type="text"
                            name="motherName"
                            value={formData.motherName}
                            onChange={handleInputChange}
                            placeholder="mother's name"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dob">
                            Date Of Birth:
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="dob"
                            type="date"
                            name="dob"
                            value={formData.dob}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gender">
                            Gender:
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="gender"
                            type="text"
                            name="gender"
                            value={formData.gender}
                            onChange={handleInputChange}
                            placeholder="gender"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pan">
                            Parents PAN ID:
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="pan"
                            type="text"
                            name="pan"
                            value={formData.pan}
                            onChange={handleInputChange}
                            placeholder="xxx-yyy-zzz"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="casteCertificate">
                            Caste Certificate No:
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="casteCertificate"
                            type="text"
                            name="casteCertificate"
                            value={formData.casteCertificate}
                            onChange={handleInputChange}
                            placeholder="xxx-yyy-zzz"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="MobileNo">
                            Mobile No:
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="MobileNo"
                            type="text"
                            name="MobileNo"
                            value={formData.MobileNo}
                            onChange={handleInputChange}
                            placeholder="999-xxx-666"
                        />
                    </div>

                    <div className="flex items-center justify-center">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type='submit'
                        >
                            Upload Your Educational Details
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AadhaarForm;