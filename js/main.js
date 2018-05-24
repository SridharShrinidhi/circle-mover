var $ball = $('.ball');

$('#btn-right').on('click', function () {
  var newLeft = $ball.offset().left + 10;

  $ball.css('left', newLeft);
});

$('#btn-left').on('click', function () {
  var newRight = $ball.offset().left - 10;

  $ball.css('left', newRight);
});

$('#btn-up').on('click', function () {
  var newUp = $ball.offset().top - 10;

  $ball.css('top', newUp);
});

$('#btn-down').on('click', function () {
  var newDown = $ball.offset().top + 10;

  $ball.css('top', newDown);
});
