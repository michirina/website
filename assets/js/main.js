$(function () {

    "use strict";

    //===== Prealoder

    $(window).on('load', function (event) {
        $('.preloader').delay(500).fadeOut(500);
    });


  //===== Sticky

    $(window).on('scroll', function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 20) {
            $(".header_navbar").removeClass("sticky");
        } else {
            $(".header_navbar").addClass("sticky");
        }
    });
    
    
    //===== Section Menu Active

    var scrollLink = $('.page-scroll');
    // Active link switching
    $(window).scroll(function () {
        var scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function () {

            var sectionOffset = $(this.hash).offset().top - 73;

            if (sectionOffset <= scrollbarLocation) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        });
    });
    
    
    //===== close navbar-collapse when a  clicked

    $(".navbar-nav a").on('click', function () {
        $(".navbar-collapse").removeClass("show");
    });

    $(".navbar-toggler").on('click', function () {
        $(this).toggleClass("active");
    });

    $(".navbar-nav a").on('click', function () {
        $(".navbar-toggler").removeClass('active');
    });    


    ///===== Progress Bar

    if ($('.progress_line').length) {
        $('.progress_line').appear(function () {
            var el = $(this);
            var percent = el.data('width');
            $(el).css('width', percent + '%');
        }, {
            accY: 0
        });
    }




    //===== Back to top

    // Show or hide the sticky footer button
    $(window).on('scroll', function (event) {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn(200)
        } else {
            $('.back-to-top').fadeOut(200)
        }
    });


    //Animate the scroll to yop
    $('.back-to-top').on('click', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });

//===== Document Panels Toggle

function togglePanel(header) {
    const panel = header.parentElement;
    const content = panel.querySelector('.panel-content');
    const toggle = panel.querySelector('.panel-toggle');
    
    // Toggle expanded class
    content.classList.toggle('expanded');
    toggle.classList.toggle('expanded');
}

// Make dates editable on double-click
$(document).ready(function() {
    $('.panel-date span').each(function() {
        $(this).on('dblclick', function() {
            const currentText = $(this).text();
            const input = $('<input>', {
                type: 'text',
                value: currentText,
                css: {
                    'border': 'none',
                    'background': 'transparent',
                    'font-size': 'inherit',
                    'color': 'inherit',
                    'width': '100%',
                    'outline': 'none'
                }
            });
            
            $(this).empty().append(input);
            input.focus().select();
            
            const saveEdit = () => {
                $(this).text(input.val() || currentText);
            };
            
            input.on('blur', saveEdit);
            input.on('keypress', function(e) {
                if (e.which === 13) { // Enter key
                    saveEdit();
                }
            });
        });
    });
});


});
