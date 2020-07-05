$(function() {
      function buildHTML(message){
        if ( message.image ) {
          var html =
           `<div class="message-info">
              <div class="chat_main__message_nametime">
                <div class="chat_main__message_user-name">
                  ${message.user_name}
                </div>
                <div class="chat_main__message_time">
                  ${message.created_at}
                </div>
              </div>
              <div class="chat_main__message_coment">
                <p class="lower-message__content">
                  ${message.content}
                </p>
              </div>
              <img src=${message.image} >
            </div>`
          return html;
        } else {
          var html =
           `<div class="message-info">
              <div class="chat_main__message_nametime">
                <div class="chat_main__message_user-name">
                  ${message.user_name}
                </div>
                <div class="chat_main__message_time">
                  ${message.created_at}
                </div>
              </div>
              <div class="chat_main__message_coment">
                <p class="lower-message__content">
                  ${message.content}
                </p>
              </div>
            </div>`
          return html;
        };
      }
  $('#new_message').on('submit',function(e) {
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data) {
      var html = buildHTML(data);
      $('.chat_main__message_list').append(html);
      $('form')[0].reset();
      $('.send_btn').prop('disabled', false);
      $('.chat_main__message_list').animate({ scrollTop: $('.chat_main__message_list')[0].scrollHeight});
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
      $('.send_btn').prop('disabled', false);
    });
  })
});
