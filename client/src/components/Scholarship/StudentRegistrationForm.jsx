import { useState, useEffect } from "react";
import axios from "axios";

function RegistrationForm({ aadharNumber }) {
    const [aadharDetails, setAadharDetails] = useState({});
    const [educationDetails, setEducationDetails] = useState({
        institute_name: "",
        degree: "",
        domain: "",
        qualification: "",
        start_date: "",
        graduation_date: "",
        current_year: ""
    });

    //handleInputChange function here is used to update the changes in the education details filled.

    function handleInputChange(event) {
        const { name, value } = event.target;
        setEducationDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    useEffect(() => {
        //Fetch aadhar details when component mounts.
        async function fetchAadharDetails() {
            try {
                const response = await axios.get(`/api/aadhar-details/${aadharNumber}`);
                const result = response.data;
                setAadharDetails(result);
            } catch (error) {
                console.error("Error fetching aadhar details:", error);
            }
        };
        fetchAadharDetails();
    }, [aadharNumber]);

    async function handleSubmit() {
        // Combining Aadhar details and education details for submission
        const formData = { aadharDetails, ...educationDetails };

        try {
            //Making a POST request to our backend to insert data into the students table:
            await axios.post(`/api/register-student`, formData);
            console.log("Registration successful!");
        } catch (error) {
            console.error("Error registering student:", error);
        }
    }

    return;
};

export default RegistrationForm;