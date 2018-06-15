$('li.mail-client__email-item').click( function() {
  var index = $(this).find('.fake_index').text();
  var title = $(this).find('.fake_title').text();
  var content = $(this).find('.fake_content').text();

  $(this).toggleClass('checked').siblings().removeClass('.mail-client__email-item selected');
  $(this).removeClass('.mail-client__email-item').addClass('mail-client__email-item selected');

  $('h4.mail-client__email-detail__title').text(title);
  $('.mail-client__email-detail__description').text(content);
});

// var sendButton = document.getElementById('sendButton');
// var textarea = document.getElementById('textarea');
var chattheme = document.getElementById('chattheme');
var log = chattheme.getElementsByClassName('log')[0];
var blank = document.createElement('div');

// var time;
// var username;

//
// if (sendButton) {
//     sendButton.addEventListener('click', sendChat, false);
// }
//
// wSocket.onmessage = function (event) {
//   var getmsg = JSON.parse(event.data);
//   console.log(getmsg);
//
//   if (getmsg.type === 'message') {
//     var onemsg = document.createElement('div');
//     getTime();
//
//     onemsg.className = 'onemsg';
//     onemsg.innerHTML = '<div class="box">' +
//       '<div class="name">' + getmsg.username + '</div>' +
//       '<div class="balloon"></div>' +
//       '<div class="content">' + getmsg.data + '</div>' +
//       '<div class="time">' + time + '</div></div>';
//     blank.className = 'blank';
//
//     log.appendChild(onemsg);
//     log.appendChild(blank);
//
//     log.scrollTop = log.scrollHeight;
//
//     onemsg.firstChild.childNodes[2].addEventListener('click', function () {
//       var like = document.createElement('div');
//       like.className = 'like';
//       onemsg.firstChild.appendChild(like);
//     });
//   }
// };
//
// function sendChat () {
//   var msg = {
//     type: 'message',
//     data: textarea.value,
//     username: username,
//     channel: 'my, not so secret, channel',
//     key: 'eDBE76deU7L0H9mEBgxUKVR0VCnq0XBd'
//   };
//   wSocket.send(JSON.stringify(msg));
//   textarea.value = '';
// }
//
// function getTime () {
//   var d = new Date();
//   var ampm = (d.getHours() > 12 ? 'PM' : 'AM');
//   var h = (d.getHours() > 12 ? d.getHours() - 12 : d.getHours());
//   var m = d.getMinutes();
//   time = ampm + '' + h + ':' + m;
// }
