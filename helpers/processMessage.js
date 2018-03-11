const request = require('request');
const sendTextMessage = (senderId, text) => {
    request({
        url: 'https://graph.facebook.com/v2.6/me/messages',
        qs: { access_token: 'EAAbQWJJiLPkBAMbMbDjBz2fSUvPmOgpGKF3FqfGpAB9cqs6JUMiPwHeKPtWxgKZCZA5nYSaCGu7SfczqWYDpAeY2gJ3WX3SQeTHqG32NNn4SmGv6ZB3IWdhom24scy4ZC7BPb9ZBKUaNdWOOEaGxmnZBfSTVdHpHr8En5t6nCMZAAZDZD' },
        method: 'POST',
        json: {
            recipient: { id: senderId },
            message: { text },
        }
    });
};

module.exports = (event) => {
    const senderId = event.sender.id;
    const message = event.message.text;

    var apiai = require('apiai');
    var apiAiClient = apiai("0fe4f6ae45044b02bb9c6dee50be9f5d");

    const apiaiSession = apiAiClient.textRequest(message, { sessionId: 'crowdbotics_bot' });
    apiaiSession.on('response', (response) => {
      var result;
      if(response.result.parameters.Feeling)
      {
        const feelingIntent = require('feelings');
        result = feelingIntent(response);
      }
      else
      {
        result = response.result.fulfillment.speech;
      }

      sendTextMessage(senderId, result);
    });
    apiaiSession.on('error', error => console.log(error));
    apiaiSession.end();
};
