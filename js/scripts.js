lightGallery(document.getElementById('animated-thumbnails-gallery'), {
  plugins: [lgZoom, lgThumbnail],
  licenseKey: 'your_license_key',
  speed: 500,
  // ... other settings
});

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

