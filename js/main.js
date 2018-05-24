var $ball = $('.ball');

$('#btn-right').on('click', function () {
  var newLeft = $ball.offset().left + 10;
  $ball.css('left', newLeft);
});
