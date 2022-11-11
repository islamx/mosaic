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

$(function(){
  var current = location.pathname;
  $('.navbar-nav .nav-item .nav-link').each(function(){
      var $this = $(this);
      // if the current path is like this link, make it active
      if($this.attr('href').indexOf(current) !== -1){
          $this.addClass('active');
      }
  })
})

$(window).on('hashchange', function() {
  let hash = window.location.hash;
  $('a').closest('li').removeClass('active');
  $('a[href=\"' + hash + '\"]').closest('li').addClass('active');
});
