$(document).ready(function() {
    // 윈도우 리사이즈시 캐러셀 비율 변경
    $('.content-wrapper').css('top', $(window).width() * 5 / 10);
    $(window).resize(function() {
        var responsiveHeight = $(window).width() * 5 / 10;
        $('.content-wrapper').css('top', responsiveHeight);
    });

    // 최상단 캐러셀
    $("#main-carousel").owlCarousel({
         navigation : true, // Show next and prev buttons
         slideSpeed : 300,
         paginationSpeed : 400,
         singleItem:true
     });
    $("#main-carousel").trigger('owl.play',3000);

    // 시리즈 캐러셀
    $("#series-carousel").owlCarousel({
      items : 5, //10 items above 1000px browser width
      itemsDesktop : [1000,5], //5 items between 1000px and 901px
      itemsDesktopSmall : [900,3], // betweem 900px and 601px
      itemsTablet: [600,2], //2 items between 600 and 0
      itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
    });
    $("#series-carousel").trigger('owl.play',3000); //owl.play event accept autoPlay speed as second parameter

    // 스토어 드롭다운
    // $('.store-toggle').on('click', function(event) {
    //   event.preventDefault();
    //   $(this).closest('.store-dropdown').toggleClass('toggleStore');
    // });

    // $('.store-toggle').on('click').closest('.store-dropdown').toggleClass('toggleStore');

    $('.social-toggle').on('click', function() {
      $(this).next().toggleClass('open-menu');
    });
});

