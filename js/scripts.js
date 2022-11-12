// light gallery initialization
lightGallery(document.getElementById('animated-thumbnails-gallery'), {
  plugins: [lgZoom, lgThumbnail],
  licenseKey: 'your_license_key',
  speed: 500,
});

// color navbar bar after scroll
$(function() {
  var header = $("header .navbar");

  $(window).scroll(function() {    
      var scroll = $(window).scrollTop();
      if (scroll >= 50) {
          header.addClass("bg-dark");
      } else {
          header.removeClass("bg-dark");
      }
  });
});

// active exist navbar link
$(window).on('hashchange', function() {
  let hash = window.location.hash;
  $('a').closest('li').removeClass('active');
  $('a[href=\"' + hash + '\"]').closest('li').addClass('active');
});
