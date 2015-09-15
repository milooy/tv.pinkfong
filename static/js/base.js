$(document).ready(function() {
    // 윈도우 리사이즈시 캐러셀 비율 변경
    $('.content-wrapper').css('top', $(window).width() * 8 / 17);
    $(window).resize(function() {
        var responsiveHeight = $(window).width() * 8 / 17;
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

    // 모바일시 우측 하단 메뉴
    $('.i-menu').on('click', function() {
      var $menu = $(this).closest('.home-menu')
      $menu.toggleClass('menu-toggle');
      if($menu.hasClass('menu-toggle')) {
        $menu.find('ul').animate({'top': '-=245px'}, 300);
      } else {
        $menu.find('ul').animate({'top': '+=245px'}, 300);
      }
      // $(this).closest('.home-menu').find('ul').animate({
      //   'top': '-=220px'

      // }, 'slow');
      // $(this).closest('.home-menu').find('ul').slideToggle('slow');

      // $(this).closest('.home-menu').find('ul').toggle(
      //     function(){
      //         console.log("hahahahaha");
      //         debugger;
      //         $('this').animate({
      //             // 'top': '-=220px'
      //             'bottom': '+=220px'

      //         }, 500);
      //     },
      //     function(){
      //         $('this').animate({
      //             'bottom': '0px',
      //             // opacity: 0
      //         }, 500);
      // });
    });
});

