const nodeMailer = require('nodemailer');
const config = require('config');

let transporter;

/*
    - This function creates the transporter. A transporter is what going to connect you to which ever host domain that you're
      using or services that you like to connect to.
    - It is called once when sending the first email as the transporter will not be created then. After that this transporter
      will be used everytime an email is being sent.
    - The service, user email and password are retreived from the config files and then passed to the createTransport function
      to finally create the transporter.
*/

function transportCreation() {
    const service = config.get('mail.service');
    const user = config.get('mail.auth.user');
    const pass = config.get('mail.auth.pass');

    const transporter = nodeMailer.createTransport({
        service, //https://nodemailer.com/smtp/well-known/
        auth: {
            user,
            pass
        }
    });

    return transporter;
}

/*
    - This is the main function for sending emails.
    - A transport is created once.
    - In mailOptions:
        "from": can be changed in case the service used is not outlook. In case the service is gmail, only the sender
        name can be changed, but the email will be the same as the email that was given to the transporter.
        "to", "subject", and "text" will be the ones that are passed to the function as parameters.
    - Finally the mail is sent using transporter.sendMail given the mailOptions specified above.
*/

module.exports = async function (to, subject, text) {

    if (!transporter) transporter = transportCreation();

    const mailOptions = {
        from: "DO NOT REPLY <task_test101@gmail.com>",
        to,
        subject,
        text
    };

    return await transporter.sendMail(mailOptions);
};
