// Get twilio-node from twilio.com/docs/libraries/node
const client = require('twilio');

// Your Auth Token from twilio.com/console
const authToken = '<auth-token-from-twilio-or-lambda-envvars>';

// Store Twilio's request URL (the url of your webhook) as a variable
const url = 'https://www.twilio.com/docs/taskrouter/api/event#event-types?url=https://www.twilio.com/docs/taskrouter/api/event#event-types'; //Example

// Store the application/x-www-form-urlencoded parameters from Twilio's request as a variable
// In practice, this MUST include all received parameters, not a
// hardcoded list of parameters that you receive today. New parameters
// may be added without notice.
const params = {
  // CallSid: 'CA1234567890ABCDE',
  // Caller: '+12349013030',
  // Digits: '1234',
  // From: '+12349013030',
  // To: '+18005551212',
};

// Store the X-Twilio-Signature header attached to the request as a variable
const twilioSignature = '67Zi2e5g8qoIqjlNCUHg8LpKxQs='; // Example, generate from index.js

// Check if the incoming signature is valid for your application URL and the incoming parameters
console.log(client.validateRequest(authToken, twilioSignature, url, params));