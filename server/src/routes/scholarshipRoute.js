import express from "express";
import * as api from "../apiFunctions.js"

const scholarshipRoute = express.Router();

scholarshipRoute.use(express.json());

//Endpoint for verifying TAN number and registering the organisation.
scholarshipRoute.post("/api/register-organisation/:tanNumber", api.registerOrganisation);

//Endpoint for sending OTP:
scholarshipRoute.post("/api/send-otp", api.sendOTP);

//Endpoint for verifying OTP:
scholarshipRoute.post("/api/verify-otp", api.verifyOTP);

//Endpoint for filling out a scholarship form.
scholarshipRoute.post("/api/fill-scholarship-form/:tanNumber", api.fillScholarshipForm);

export default scholarshipRoute;
