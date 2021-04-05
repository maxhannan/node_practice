import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    // user: email here!
    // pass: password here!
  }
})

const mailOptions = {
  // from: email here!,
  // to: email(s) here!,
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function (error, info){
  if(error) {
    console.log(error)
  } else {
    console.log('Email sent: ' + info.response);
  }
})