// Media Social Side Menu
$('.toggle-btn').click(function () {
  $('.side-menu').toggleClass('active');
  $(this).toggleClass('fa-chevron-right');
});

// Scroll Up
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 40) {
      $('.go-top-btn').fadeIn();
    } else {
      $('.go-top-btn').fadeOut();
    }
  });
  $('.go-top-btn').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 800);
  });
});

// Fade Animation
AOS.init();
