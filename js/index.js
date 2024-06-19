(function ($) {
  "use strict";

  /* 
    Navbar Bar
    */

  $(".navbar-nav .nav-link").on("click", function () {
    var toggle = $(".navbar-toggler").is(":visible");
    if (toggle) {
      $(".navbar-collapse").collapse("hide");
    }
  });

  /* 
    Fixed Menu
    */

  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 50) {
      $(".top-header").addClass("fixed-menu");
    } else {
      $(".top-header").removeClass("fixed-menu");
    }
  });

  /* 
    Gallery
    */

  $(document).ready(function () {
    $(".popup-gallery").magnificPopup({
      delegate: "a",
      type: "image",
      tLoading: "Loading image #%curr%...",
      mainClass: "mfp-img-mobile",
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
      },
      image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        titleSrc: function (item) {
          return item.el.attr("title") + "<small>by Marsel Van Oosten</small>";
        },
      },
    });
  });
})(jQuery);

$(document).ready(function () {
  $("#js-main-slider")
    .pogoSlider({
      autoplay: true,
      autoplayTimeout: 5000,
      displayProgess: true,
      preserveTargetSize: true,
      targetWidth: 1000,
      targetHeight: 300,
      responsive: true,
    })
    .data("plugin_pogoSlider");

  var transitionDemoOpts = {
    displayProgess: false,
    generateNav: false,
    generateButtons: false,
  };
});

// index.js

$(document).ready(function () {
  // Function to switch language
  $(".switch-language").click(function (e) {
    e.preventDefault(); // Prevent the default action (navigation)

    // Toggle visibility of English and Spanish content
    $("#packages-heading-en, #packages-text-en").toggle();
    $("#packages-heading-es, #packages-text-es").toggle();
  });
});
