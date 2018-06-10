$('li.mail-client__email-item').click( function() {
  var index = $(this).find('.fake_index').text();
  var title = $(this).find('.fake_title').text();
  var content = $(this).find('.fake_content').text();

  $(this).toggleClass('checked').siblings().removeClass('.mail-client__email-item selected');
  $(this).removeClass('.mail-client__email-item').addClass('mail-client__email-item selected');

  $('h4.mail-client__email-detail__title').text(title);
  $('.mail-client__email-detail__description').text(content);

  var editBtn = document.getElementById('editBtn');
  editBtn.onclick = function() {
    window.location.href = '/edit/'+index;
  };

  var deleteBtn = document.getElementById('deleteBtn');
  deleteBtn.onclick = function() {
    if (confirm('정말 삭제하시겠습니까?')) {
        window.location.href= '/delete/'+index;
    }
  };
});


// 수정 삭제 버튼 보이게 하기
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
