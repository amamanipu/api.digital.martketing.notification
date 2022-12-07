const nodemailer = require('nodemailer');
const inlineBase64 = require('nodemailer-plugin-inline-base64');
const dotenv = require('dotenv');

dotenv.config();

const mail = async (to, cc, subject, message) => {
  const transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
      user: 'digital.marketing.upc@outlook.com',
      pass: 'ampmeu2022',
    },
  });

  const options = {
    from: {
      name: 'Digital Marketing',
      address: 'digital.marketing.upc@outlook.com',
    },
    to,
    cc,
    subject,
    html: message,
  };

  transporter.use('compile', inlineBase64(options));
  transporter.sendMail(options, (error, info) => {
    if (error) console.log(error);
    else console.log(info);
  });
};

module.exports = {
  mail,
};
