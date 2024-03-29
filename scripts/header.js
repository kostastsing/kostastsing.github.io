const isMobile = window.matchMedia("only screen and (max-width: 900px)");
isMobile.addListener(respondToMediaChange);
respondToMediaChange(isMobile);

function respondToMediaChange(isMobile) {
  if (!isMobile.matches) {
    if ($('.top-menu').hasClass('pressed')) {
      $('.top-menu').removeClass('pressed');
      $('#header').css({ "height": "80px" });
      $('.menu-toggle').removeClass('change');
    }
  }
  var currPath = window.location.pathname;
  if (currPath == '/gallery.html') {
    if (isMobile.matches) {
      $('#sidebar-info').css({ "display": "none" });
    }
    else {
      $('#sidebar-info').css({ "display": "block" });
    }
  }
}

$(document).ready(function () {
  $('.menu-toggle').click(function () {
    $('.top-menu').toggleClass('pressed');
    if ($('.top-menu').hasClass('pressed')) {
      $('.menu-toggle').toggleClass('change');
      $("#header").css({ "height": "400px" });
    }
    else {
      $('.menu-toggle').toggleClass('change');
      $("#header").css({ "height": "80px" });
    }
  });
});

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 80) {
      $("#header").css({ "height": "80px" });
      $('.menu-toggle').removeClass('change');
      $('.top-menu').removeClass('pressed');
    }
  });
});
