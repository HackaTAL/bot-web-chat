$(document).ready(function () {

  // constructor or your Bot
  var Bot = function () {
    this.data = {};
  };

  // AJAX request sent to Recast.AI API
  Bot.prototype.sendRequest = function (sentence) {

    var token = null;
    if (token === null) { addMessage('Add your Recast.AI token, please', 'bot'); return; }

    var language = 'fr';

    $.ajax({
      type: 'POST',
      url: 'https://api.recast.ai/v1/request',
      headers: { Authorization: 'Token ' + token },
      data: { text: sentence, language: language },
      success: function(data) {

        var result = data.results;

        console.log(data);

        if (!result.intents[0]) {
          addMessage('I don\'t understand', 'bot');
          return ;
        }

        addMessage('You are talking about ' + result.intents[0], 'bot');
        addVideo('http://media.w3.org/2010/05/bunny/movie.ogv');
      }
    });
  };

  // new Instance of your Bot
  var MyBot = new Bot();

  // create a message in the chat
  function addMessage (data, author) {
    var element = document.createElement('div');
    element.innerHTML = '<p>' + data + '</p>';
    element.className = 'message author--' + author;

    var container = document.getElementById('js-messages');
    container.appendChild(element);
    container.scrollTop += container.scrollHeight + 50;
  }

  // add image in data section
  function addImage (data) {
    var element = document.createElement('div');
    element.innerHTML = '<img src="' + data +'" />';

    var container = document.getElementById('data--container');
    container.appendChild(element);
  }

  // add Video in data section
  function addVideo (data) {
    var element = document.createElement('div');
    element.innerHTML = '<video controls  autoplay src="' + data + '">Your user agent does not support the HTML5 Video element</video>';

    var container = document.getElementById('data--container');
    container.appendChild(element);
  }

  // Handle submit form
  $('form').on('submit', function (e) {
    e.preventDefault();

    var msg = document.getElementById('request').value;
    addMessage(msg, 'user');
    MyBot.sendRequest(msg);
    document.getElementById('request').value = '';

  });

});
