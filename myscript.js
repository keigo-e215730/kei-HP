$(function(){
  // ページの読み込みが完了すると実行


  // ブラウザバック禁止
  history.pushState(null, null, null);
  $(window).on('popstate', function(e){
    if(!e.originalEvent.state){
      history;pushState(null, null, null)
      return;
    }
  })
});


  // モーダル表示
  $('.modal').modal({dismissible: false});
  $('#alert').modal('open');
  $('#close').click(function(){
    $('#alert').modal('close');
  });