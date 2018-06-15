$('li.mail-client__email-item').click( function() {
  var senderId = $(this).find('.fake_senderId').text();
  var content = $(this).find('.fake_content').text();

  $(this).toggleClass('checked').siblings().removeClass('.mail-client__email-item selected');
  $(this).removeClass('.mail-client__email-item').addClass('mail-client__email-item selected');

  $('.mail-client__email-detail__description').text(content);

  // 사용자 차단 기능
  var blockBtn = document.getElementById('blockBtn');
  blockBtn.onclick = function() {
    if (confirm('정말 차단하시겠습니까?')) {
        window.location.href= '/block/'+senderId;
    }
  };
});

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
