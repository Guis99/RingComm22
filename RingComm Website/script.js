(function ($) {
  $(document).ready(function(){

    // hide .navbar first
    $(".navbar").hide();

    // fade in .navbar
    $(function () {
        $(window).scroll(function () {

                 // set distance user needs to scroll before we start fadeIn
            if ($(this).scrollTop() > 1200) {
                $('.navbar-1').fadeIn();
            } else {
                $('.navbar-1').fadeOut();
            }
        });
    });

});
  }(jQuery));
