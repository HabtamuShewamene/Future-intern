const nodemailer = require('nodemailer');

const buildTransporter = () => {
  const emailConfig = process.env.EMAIL_SERVICE
    ? {
        service: process.env.EMAIL_SERVICE,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      }
    : {
        host: process.env.EMAIL_HOST,
        port: Number(process.env.EMAIL_PORT || 587),
        secure: String(process.env.EMAIL_SECURE).toLowerCase() === 'true',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      };

  return nodemailer.createTransport(emailConfig);
};

const sendContactNotification = async ({ name, email, message }) => {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    throw new Error('Email credentials are missing. Set EMAIL_USER and EMAIL_PASS.');
  }

  const transporter = buildTransporter();
  const recipient = process.env.ADMIN_EMAIL || process.env.EMAIL_USER;
  const fromAddress = process.env.EMAIL_FROM || process.env.EMAIL_USER;

  const mailOptions = {
    from: fromAddress,
    to: recipient,
    replyTo: email,
    subject: `New portfolio contact message from ${name}`,
    text: `You received a new contact message.\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    html: `
      <h2>New Contact Message</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br />')}</p>
    `
  };

  return transporter.sendMail(mailOptions);
};

module.exports = {
  sendContactNotification
};
