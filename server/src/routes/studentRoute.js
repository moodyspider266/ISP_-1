import express from "express";

const studentRoute = express.Router();

//Endpoint for registering a student with Aadhar and Education details.

studentRoute.get("/", (req, res) => {
    res.send("students page");
});

export default studentRoute;