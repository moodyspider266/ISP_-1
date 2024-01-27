import express from "express";
import * as studentAPI from "../services/studentService.js";
import * as otpAPI from "../services/otpService.js";

const studentRoute = express.Router();

studentRoute.use(express.json());

//Endpoint for registering a student with Aadhar and Education details.
studentRoute.post("/api/register-student", studentAPI.registerStudent );

export default studentRoute;