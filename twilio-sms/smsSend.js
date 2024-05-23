require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = require('twilio')(accountSid, authToken); // Twilio client

const sendSMS = async (body) => {
    let msgOptions={
        from: process.env.TWILIO_PHONE_NUMBER,
        to: process.env.TO_PHONE_NUMBER,
        body: body
    }
    try {

        client.messages.create(msgOptions)
            .then((message) => console.log(message.sid))
            .catch((error) => console.log(error.message));
        
    } catch (error) {
        console.log(error.message);
    }
}

sendSMS('Hello, My name is Risvan!')