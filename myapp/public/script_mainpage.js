
$('li.mail-client__email-item').click( function() {
    var index = $(this).index();
    var title = $(this).find('h5.mail-client__email-item__from').text();
    var content = $(this).find('.mail-client__email-item__preview').text();

    console.log(index);
    $(this).toggleClass('checked').siblings().removeClass('.mail-client__email-item selected');

    $(this).removeClass('.mail-client__email-item').addClass('mail-client__email-item selected');

    $('h4.mail-client__email-detail__title').text(title);
    $('.mail-client__email-detail__description').text(content);
    console.log(content);

    //    $('p.mail-client__email-item__preview').text('바뀌나요');
})


$('li.emoji').click( function(){
    var index = $(this).index();
    console.log(index);
    
    $('li.emoji').not(this).removeClass('emoji-selected').addClass('.emoji');
    $(this).removeClass('.emoji').addClass('emoji-selected');
})
