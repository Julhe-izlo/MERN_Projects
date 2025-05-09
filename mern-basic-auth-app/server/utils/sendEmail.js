const transporter = require("../config/emailConfig");

const sendEmail = async ({ to, subject, html }) => {
    const mailOptions = {
        from: `"MERN Auth App" <${process.env.EMAIL_USER}>`,
        to,
        subject,
        html,
    };
    
    try {
        await transporter.sendMail(mailOptions);
    } catch (err) {
        console.error("Email sending failed:", err);  // <== ADD THIS
        throw err; // Let controller catch it
    }
};

module.exports = sendEmail;
