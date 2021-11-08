'use strict';

//Import the Dialogflow module from the Actions on Google client library//

const {dialogflow} = require('actions-on-google');

//Import the firebase-functions package//

const functions = require('firebase-functions');

//Instantiate the Dialogflow client//

const app = dialogflow({debug: true});

//Handle the create_name intent//

   app.intent('create_name', (conv, {name}) => {

//Construct the conversational response//

    conv.ask('Nice to meet you ' + name + '. Would you like to hear a joke?');
});

//Set the DialogflowApp object to handle the HTTPS POST request//

exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);
