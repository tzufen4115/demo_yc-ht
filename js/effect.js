// JavaScript Document
$(function () {
	$("#gotop").click(function () {
		jQuery("html,body").animate({
			scrollTop: 0
		}, 1000);
	});
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('#gotop').fadeIn("fast");
		} else {
			$('#gotop').stop().fadeOut("fast");
		}
	});
});
new WOW().init();


var options = {
	offset: 100,
	offsetSide: 'top',
	classes: {
		clone: 'header--clone',
		stick: 'header--stick',
		unstick: 'header--unstick'
	}
};

var header = new Headhesive('#header', options);
$("#header.header--clone").attr('id', 'header2').addClass('sb-site');

$('#header #navbar > ul').clone().appendTo('.sb-right');
$('.sb-right>ul').addClass('sb-menu');
$('.sb-right .sb-menu ul').addClass("sb-submenu");
$('.sb-right .sb-menu li:has("ul")>a').addClass('sb-toggle-submenu');
$('<span class="sb-caret"></span>').appendTo('.sb-menu li:has("ul")>a')
$('.sb-right .sb-menu li:has("ul")>a').removeAttr("href");
$('.sb-right ul').removeClass('dropdown-menu');

$.slidebars();

$('.sb-toggle-submenu').off('click').on('click', function () {
	$submenu = $(this).parent().children('.sb-submenu');
	$(this).add($submenu).toggleClass('sb-submenu-active');

	if ($submenu.hasClass('sb-submenu-active')) {
		$submenu.slideDown(200);
	} else {
		$submenu.slideUp(200);
	}
});
$('.banner').slick({
	dots: true,
	infinite: true,
	speed: 500,
	fade: true,
	cssEase: 'linear',
	autoplay: true,
});

var index_sub_title = $('.com-text p:first-child').clone();
$('.com-sub-title').append(index_sub_title);
// $('#left_menu > ul').append(qserch).append(member_info).append(main_nav).append(lang_div);

//readmore open
	$('.des-content .des-read').click(function () {
		$(this).parent().addClass('prodescOpen');
	});

	$(".dot-list a[href^='#'], .prodesc-title a[href^='#']").click(function (e) {
		e.preventDefault();

		var position = $($(this).attr("href")).offset().top - 115;

		$("body, html").animate({
			scrollTop: position
		});
            
	   });

//表格箭頭
$(window).on('resize', function () {
    $('.table-container').each(function () {

        var tableWidth = $(this).find('table').width(),
            tableOuterWidth = $(this).width();

        if (tableWidth > tableOuterWidth) {
            $(this).addClass('scroller');
        } else {
            $(this).removeClass('scroller');
        }

    });
}).trigger('resize');

//產品頁展開收合
$(document).ready(function () {
    $('.description').on('click', function () {
        $(this).find('.readbtn-group').toggleClass('active-open'),
			$(this).find('.des-content').toggleClass('active')
    })
})