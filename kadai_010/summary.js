$(function() {
  $('#change-color').on('click', function() {
    $('#target').css('color', 'red');
  });

  $('#change-text').on('click', function() {
    $('#target').text('Hello!');
    $('#target').css('color', 'red');
  });

  $('#fade-out').on('click', function() {
    $('#target').fadeOut();
  });

  $('#fade-in').on('click', function() {
    $('#target').fadeIn();
  });
});