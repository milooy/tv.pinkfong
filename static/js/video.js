$(function(){
    var link = $(".nav-series a");
    link.on("click" , function(){
        var $this = $(this);
        var page = $this.data("page");
        $("body").removeClass().addClass(page);
        link.removeClass("active");
        $this.addClass("active");
    });





  // Video view JS. 분리 필요
    var closeHeight = '8em';
    var moreText    = '더보기';
    var lessText    = '접기';
    var duration    = '100';
    var easing = 'linear';

    var current = $('.video-desc-content');
    current.data('fullHeight', current.height()).css('height', closeHeight);

    // Insert "Read More" link
    current.after('<a href="javascript:void(0);" class="more-link closed">' + moreText + '</a>');


    // Link functinoality
    var openSlider = function() {
        link = $(this);
        var openHeight = link.prev('.video-desc-content').data('fullHeight') + 'px';
        link.prev('.video-desc-content').animate({'height': openHeight}, {duration: duration }, easing);
        link.text(lessText).addClass('open').removeClass('closed');
        link.unbind('click', openSlider);
        link.bind('click', closeSlider);
    }

    var closeSlider = function() {
        link = $(this);
        link.prev('.video-desc-content').animate({'height': closeHeight}, {duration: duration }, easing);
        link.text(moreText).addClass('closed').removeClass('open');
        link.unbind('click');
        link.bind('click', openSlider);
    }

        // Attach link click functionality
    $('.more-link').on('click', openSlider);

});
