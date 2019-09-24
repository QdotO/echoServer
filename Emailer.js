let nodemailer = require('nodemailer');
let transporter;

module.exports = (toEmail = 'quincyobeng@gmail.com') => {
    transporter = setupEmail();
    transporter = sendMail(getMailOptions(), (error, info) => {
        log(`Sent email to ${toEmail}`);
        log(info);
        if (error){
            log(error);
        } else {
            log(`Email sent: ` + info.response);
        }
    });
}

getMailOptions = (toEmail) => {
    let mailOptions = {
        from: 'Quincyobeng1@gmail.com',
        to: toEmail,
        subject: 'Sending Email using Node.js',
        text: 'That was easy'
    };
    return mailOptions;
}

setupEmail = () => {
    return nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'quincyobeng1@gmail.com',
            password: 'Qo100490'
        }
    });
};