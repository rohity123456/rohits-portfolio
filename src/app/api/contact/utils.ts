import { EmailParams, MailerSend, Recipient, Sender } from 'mailersend';

const mailersend = new MailerSend({
  apiKey: process.env.MAILERSEND_API_KEY as string
});
export const sendEmail = async (body: any) => {
  try {
    const { name, email, message } = body;
    const mailTo = process.env.MAIL_TO as string;
    const mailFrom = process.env.MAIL_FROM as string;

    const recipients = [new Recipient(mailTo, `Portfolio Contact | ${name}`)];
    const htmlString = `
    <div style="font-family: Arial, sans-serif; background-color: #50514F; padding: 20px; color: #fff; font-size: 16px;">
      <h1 style="color: #FFED65;">Portfolio Contact Form</h1>
      <p style="">Name: ${name}</p>
      <p style="color: #FFA69E;">Email: ${email}</p>
      <p style="">Message: ${message}</p>
    </div>
    
    `;
    const emailParams = new EmailParams()
      .setFrom(new Sender(mailFrom, 'Portfolio Contact Form'))
      .setTo(recipients)
      .setSubject(`Portfolio Contact | ${name}`)
      .setHtml(htmlString)
      .setText('Name: ' + name + '\nEmail: ' + email + '\nMessage: ' + message);

    const response = await mailersend.email.send(emailParams);
    console.log(response);
    return { message: 'Message sent successfully.', success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      message: 'An error occurred while sending the email.',
      success: false
    };
  }
};
