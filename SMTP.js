const nodemailer = require("nodemailer");

// Create a transporter with Gmail service
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'narsireddychalla12@gmail.com',
    pass: 'narsireddy12' // Use your Gmail app password here
  }
});

// Define mail options
const mailOptions = {
  from: 'narsireddychalla12@gmail.com',
  to: 'jrjagan143@gmail.com',
  subject: 'Sending email using NodeJS',
  text: 'Hello, this is the body of the email.' // Add the body of your email
};

// Send the email
transporter.sendMail(mailOptions, function(error, info) {
  if (error) {
    console.error('Error sending email:', error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
