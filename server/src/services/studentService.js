import db from "../db.js";
import express from "express";
import { error, log } from "console";

//Registering a student:

const registerStudent = async (req, res) => {
    try {
        const { aadharNumber, educationDetails } = req.body;

        //Fetch aadhar number from the aadhar_details table for the provided aadhar number thus double checking it.
        const aadharResult = await db.query(`SELECT * FROM aadhar_details WHERE aadhar_no=${aadharNumber}`);

        if (aadharResult.rows.length === 0) {
            res.sendStatus(404).json({ error: "Aadhar details not found!" });
        } 
        else {
            const aadharDetails = aadharResult.rows[0];

            const query = `
                INSERT INTO students (aadhar_no, institute_name, degree, domain, qualification, start_date, graduation_date, current_year)
                VALUES ($1,$2,$3,$4,$5,$6,$7,$8);`;

            const values = [
                aadharDetails.aadhar_no,
                educationDetails,
            ];

            const result = await db.query(query, values);
            console.log(result.rows);

            res.status(201).json({ message: "Student registered successfully." })
        }
    } catch (error) {
        console.error("Error registering student: ", error);
        res.status(500).json({ error: "Internal server error." });
    }
}

export default registerStudent;