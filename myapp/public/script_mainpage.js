$('li.mail-client__email-item').click( function() {
  var index = $(this).find('.fake_index').text();
  var title = $(this).find('.fake_title').text();
  var content = $(this).find('.fake_content').text();
  var date = $(this).find('.fake_date').text();
  var cover = $(this).find('.fake_cover').text();

  // 게시글 목록 눌렀을 때 내용 보여주기
  $(this).toggleClass('checked').siblings().removeClass('.mail-client__email-item selected');
  $(this).removeClass('.mail-client__email-item').addClass('mail-client__email-item selected');

  $('h4.mail-client__email-detail__title').text(title);
  $('.mail-client__email-detail__description').text(content);
  $('.mail-client__email-item__time').text(date);

  // 게시글마다 지정된 커버 적용
  if (cover) {
    $('body').css({
      "background-image": "url(./cover/" + cover + ".jpg)",
      "background-size": "contain"
    });
  } else {
    $('body').css({
      "background-image": "none",
      "background-color": "#636c94"
    });
  }

  // 게시글 수정
  var editBtn = document.getElementById('editBtn');
  editBtn.onclick = function() {
    window.location.href = '/edit/'+index;
  };

  // 게시글 삭제
  var deleteBtn = document.getElementById('deleteBtn');
  deleteBtn.onclick = function() {
    if (confirm('정말 삭제하시겠습니까?')) {
        window.location.href= '/delete/'+index;
    }
  };
});

// 게시글 눌렀을때만 수정 삭제 버튼 보이게 하기
var $editBtn = $('.mail-client__search-container');
var $content = $('.mail-client__email-item');
var $title = $('.mail-client__email-detail__title');
var bClicked = false;

$content.click( function(){
    console.log("exists");
    $editBtn.css("display", "flex");
    bClicked = true;
});
if(bClicked==false){
    $editBtn.css("display", "none");
}
