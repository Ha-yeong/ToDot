$('li.mail-client__email-item').click( function() {
  var senderId = $(this).find('.fake_senderId').text();
  var content = $(this).find('.fake_content').text();

  $(this).toggleClass('checked').siblings().removeClass('.mail-client__email-item selected');
  $(this).removeClass('.mail-client__email-item').addClass('mail-client__email-item selected');

  $('.mail-client__email-detail__description').text(content);

  var blockBtn = document.getElementById('blockBtn');
  blockBtn.onclick = function() {
    if (confirm('정말 차단하시겠습니까?')) {
        window.location.href= '/block/'+senderId;
    }
  };
});

// var sendButton = document.getElementById('sendButton');
// var textarea = document.getElementById('textarea');

// 게시글 눌렀을때만 수정 삭제 버튼 보이게 하기
var $blockBtn = $('.mail-client__search-container');
var $content = $('.mail-client__email-item');
var bClicked = false;

$content.click( function(){
    $blockBtn.css("display", "flex");
    bClicked = true;
});
if(bClicked==false){
    $blockBtn.css("display", "none");
}


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
