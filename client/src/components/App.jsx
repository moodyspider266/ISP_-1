import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import { StudentRegistrationGuidelines, OrganizationRegistrationGuidelines } from "./Scholarship/NewRegistrationPage";
import StudentRegistration from "../components/Scholarship/StudentRegistration";
import OrgRegistration from "./Scholarship/OrganizationRegistration";
import OrgLogin from "./Scholarship/OrganisationLogin";
import RegisterScholarshipForm from "./Scholarship/ScholarshipForm";
import AadhaarForm from "./Scholarship/AadhaarForm";

function App() {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/registration-student" element={<StudentRegistrationGuidelines />} />
            <Route path="/student-registration" element={<StudentRegistration />} />
            <Route path="/registration-organization" element={<OrganizationRegistrationGuidelines />} />
            <Route path="/organization-registration" element={<OrgRegistration />} />
            <Route path="/organisation-login/:tanNumber" element={<OrgLogin />} />
            <Route path="/fill-scheme-details/:tanNumber" element={<RegisterScholarshipForm />} />
            <Route path="/aadhar-form" element={<AadhaarForm />} />
        </Routes>
    );
}

export default App;