(function () {
  var aboutHeight = $('#about').css('min-height').match(/[0-9]+/)[0] - 60 + "px";
  $('#about').css({'min-height': aboutHeight});

  var portfolioHeight = $('#portfolio').css('min-height').match(/[0-9]+/)[0] - 60 + "px";
  $('#portfolio').css({'min-height': portfolioHeight});

  $('.home').on('click', function() {
    $('html, body').animate({
      scrollTop: $("#splash").offset().top
    }, 'slow');
  })

  $('.about').on('click', function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top - 59
    }, 'slow');
  })

  $('.portfolio').on('click', function() {
    $('html, body').animate({
        scrollTop: $("#portfolio").offset().top - 59
    }, 'slow');
  })

  $('.contact').on('click', function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top - 59
    }, 'slow');
  })
})();
