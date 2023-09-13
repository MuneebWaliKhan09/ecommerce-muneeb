const nodemailer = require("nodemailer");


const sendEmail = async options => {

    const transporter = nodemailer.createTransport({
        service: process.env.SMTP_SERVICE,
        host: "587",
        auth: {
            user: process.env.SMTP_MAIL,
            pass: process.env.SMTP_PASSWORD
        }
    })

    const mailOptions = ({
        from: process.env.SMTP_MAIL,
        to: options.email,
        subject: options.subject,
        text: options.message
    
    })


    await transporter.sendMail(mailOptions);

}


module.exports = sendEmail;