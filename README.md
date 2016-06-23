# bot-web-chat

install dependencies
`npm install`


run
`gulp`


### Recast.AI API

Create your bot on https://recast.ai and copy paste your `Request access token` found in settings tab in app.js line 11:

`var token = 'YOUR_TOKEN';`


### Methodes

_sendRequest(sentence)_
sentence: String (user input)

_addMessage(data, author)_
sentence: String
author: 'user' OR 'bot'

_addImage(data)_
data: 'IMAGE_URL'

_addVideo(data)_
data: 'VIDEO_URL'
