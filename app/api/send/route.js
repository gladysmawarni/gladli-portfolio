const nodemailer = require('nodemailer');

export async function POST(req, res) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.FROM_EMAIL,
      pass: process.env.APP_PW,
    },
  });
    const{email, subject, message} = await req.json();
    
    const fromEmail = process.env.FROM_EMAIL;
    console.log(email, subject, message, fromEmail);
  try {
    const data = await transporter.sendMail({
      from: fromEmail,
      to: [fromEmail, email],
      subject: subject,
      html: `
        <h1>${subject}</h1>
        <p>Thank you for your message!</p>
        <p>I will get back to you as soon as possible.</p>
        <br />
        <p>Message:</p>
        <p>${message}</p>
      `,
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
