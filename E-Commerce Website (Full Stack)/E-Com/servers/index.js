const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const nodemailer = require("nodemailer");
const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(cors());


// Nodemailer transporter setup
// IMPORTANT: Replace with your own email and app password.
// It's recommended to use environment variables for security.
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "muhammad.f336s@gmail.com", // Replace with your Gmail address
        pass: "bpqh rzub zeff ehhc", // Replace with your Gmail app password
    },
});

// Database connection
mongoose
    .connect("mongodb://localhost:27017/Sample")
    .then(() => {
        console.log(`Connected to MongoDb`);
    })
    .catch((err) => {
        console.log(`Error connecting to MongoDb ${err}`);
    });

// Schema
const sampleSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
});

// Model
const Sample = mongoose.model("Sample", sampleSchema);

// Routes
app.post("/message", async (req, res) => {
    console.log("Received a request on /message");
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).send({ error: "Name, email, and message are required." });
    }

    const sample = new Sample({
        name,
        email,
        message,
    });

    try {
        await sample.save();

        // Get current time in PKT
        const now = new Date();
        const pktTime = new Date(now.getTime() + 5 * 60 * 60 * 1000);

        // Email options
        const mailOptions = {
            from: "muhammad.f336s@gmail.com", // Replace with your Gmail address
            to: "muhammad.f336s@gmail.com",
            replyTo: email,// Replace with your email address to receive notifications
            subject: "New Message from Contact Form",
            html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p><strong>Time (PKT):</strong> ${pktTime.toUTCString()}</p>
      `,
        };

        // Send email
        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully");

        res.status(200).send(sample);
    } catch (error) {
        console.log(`Error processing request: ${error}`);
        res.status(500).send(error);
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
