import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import { StudentRegistrationGuidelines, OrganizationRegistrationGuidelines } from "./Scholarship/NewRegistrationPage";
import AadharStudentRegistration from "../components/Scholarship/StudentRegistration";
import OrgRegistration from "./Scholarship/OrganizationRegistration";
import OrgLogin from "./Scholarship/OrganisationLogin";
import OrgScholarshipForm from "./Scholarship/OrgScholarshipForm";
import StudentRegistrationForm from "./Scholarship/StudentRegistrationForm";
import StudentLogin from "./Scholarship/StudentLogin";

function App() {

    return (
        <Routes>
            <Route path="/" element={<Home />} /> //Path to Home Page
            <Route path="/registration-student" element={<StudentRegistrationGuidelines />} />  //Path to Guidelines Page for Students
            <Route path="/student-registration" element={<AadharStudentRegistration />} />  // Path to Aadhar Registration for Students
            <Route path="/student-registration-form/:aadharNumber" element={<StudentRegistrationForm />} /> //Path to Registration Form for Students
            <Route path="/student-login/:aadharNumber" element={<StudentLogin />} /> //Path to Login for Students
            <Route path="/registration-organization" element={<OrganizationRegistrationGuidelines />} />  //Path to Guidelines Page for Organisations
            <Route path="/organization-registration" element={<OrgRegistration />} />  //Path to TAN Registration for Organisations
            <Route path="/organisation-login/:tanNumber" element={<OrgLogin />} />  //Path to Login Page for Organisations
            <Route path="/fill-scheme-details/:tanNumber" element={<OrgScholarshipForm />} />   //Path to fill scholarship form for Organisations
        </Routes>
    );
}

export default App;