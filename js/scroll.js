(function () {

  var aboutMinHeight = $('#about').css('min-height').match(/[0-9]+/)[0] - 60 + "px";
  $('#about').css({'min-height': aboutMinHeight});

  var portfolioMinHeight = $('#portfolio').css('min-height').match(/[0-9]+/)[0] - 60 + "px";
  $('#portfolio').css({'min-height': portfolioMinHeight});

  $('.home').on('click', function() {
    $('html, body').animate({
      scrollTop: $("#splash").offset().top
    }, 'slow');
  })

  $('.about').on('click', function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top - 60
    }, 'slow');
  })

  $('.portfolio').on('click', function() {
    $('html, body').animate({
        scrollTop: $("#portfolio").offset().top - 60
    }, 'slow');
  })

  $('.contact').on('click', function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top - 60
    }, 'slow');
  })
})();
