# bot-web-chat

install dependencies

`npm install`


run

`gulp`


### Recast.AI API

Create your bot on https://recast.ai and copy paste your `Request access token` found in settings tab in app.js line 11:

`var token = 'YOUR_TOKEN';`


### Methodes

*sendRequest(sentence)*


sentence: String (user input)

*addMessage(data, author)*


sentence: String

author: 'user' OR 'bot'

*addImage(data)*


data: 'IMAGE_URL'

*addVideo(data)*


data: 'VIDEO_URL'
