import db from "../db.js";
import express from "express";
import { error, log } from "console";


//Fetching aadhar details from database for a particular aadhar number :

const fetchAadharDetails = async (req, res) => {
    const aadharNumber = req.params.aadharNumber;

    //Checking if aadhar number exists or not in the table.
    try {
        const result = await db.query(`SELECT * FROM aadhar_details WHERE aadhar_no=${aadharNumber}`);
        if (result.rows.length > 0) {
            const aadharDetails = result.rows;
            // console.log(aadharDetails);
            res.json(aadharDetails);
        } else {
            res.status(404).json({ error: "Aadhar details not found!" });
        }
    } catch (error) {
        console.error("Error fetching aadhar details:", error);
        res.json({ error: "Internal server error!" });
    }
}

//Verification of Aadhar Number:

const verifyAadhar = async (req, res) => {
    try {
        console.log('Request Body:', req.body);
        const { aadharNumber } = req.body;
        console.log('Aadhar Number:', aadharNumber);

        const aadharVerificationResult = await db.query(`SELECT * FROM aadhar_details WHERE aadhar_no=${aadharNumber}`);

        if (aadharVerificationResult.rows.length === 0) {
            return res.status(404).json({ message: "Aadhar number not verified." });
        } else {
            return res.status(200).json({ message: "Aadhar verified successfully!" });
        }
    } catch (error) {
        console.error("Error verifying aadhar: ", error);
        res.status(500).json({ error: "Internal server error." });
    }
}

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

export {verifyAadhar, fetchAadharDetails, registerStudent};