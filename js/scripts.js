$(document).ready(function(){
	
	$('.counter, .comments').parallax("50%", 0.1);

})
$(document).ready(function() {
// ############# mixITUp init ######################
	$("#portfolio_grid").mixItUp();

	$(".s_portfolio li").click(function() {
		$(".s_portfolio li").removeClass("active");
		$(this).addClass("active");
	});
//########### POPUP Plugin magnificPopup ###########
	$(".popup").magnificPopup({type:"image"});
	$(".popup_content").magnificPopup({
		type:"inline",
		midClick: true
	});
	// ################ ANIMATION ##############
	$('.section_header').waypoint(function(down) {
		$(this).addClass('animation');
		$(this).addClass('fadeInUp');
	}, { offset: '100%' });
	
	$(".top_text h1").animated("fadeInDown", "fadeOutUp");
	$(".top_text p").animated("fadeInUp", "fadeOutDown");
	
	$('.feature, .plan').waypoint(function(down) {
		$(this).addClass('animation');
		$(this).addClass('flipInY');
	}, { offset: '100%' });
	
	$('.purchase_i, .purchase_title, .p-btn').waypoint(function(down) {
		$(this).addClass('animation');
		$(this).addClass('fadeInLeft');
	}, { offset: '100%' });
	
	$('.team_item').waypoint(function(down) {
		$(this).addClass('animation');
		$(this).addClass('flipInX');
	}, { offset: '100%' });
	$('.animation1').waypoint(function(down) {
		$(this).addClass('animation');
		$(this).addClass('fadeInUp');
	}, { offset: '100%' });
	
	$('.left .timeline_item').waypoint(function(down) {
		$(this).addClass('animation');
		$(this).addClass('slideInLeft');
	}, { offset: '100%' });
	$('.right .timeline_item').waypoint(function(down) {
		$(this).addClass('animation');
		$(this).addClass('slideInRight');
	}, { offset: '100%' });
	/*function heightDetect() {
		$(".fw_slider").css("height", $(window).height());
		$(".top").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});*/
	
	$(".toggle_mnu").click(function() {
		$(".sandwich").toggleClass("active");
	});

	$(".top_mnu ul a").click(function() {
		$(".top_mnu").fadeOut(600);
		$(".sandwich").toggleClass("active");
		$(".top_text").css("opacity", "1");
	}).append("<span>");

	$(".toggle_mnu").click(function() {
		if ($(".top_mnu").is(":visible")) {
			$(".top_text").css("opacity", "1");
			$(".top_mnu").fadeOut(600);
			$(".top_mnu li a").removeClass("fadeInUp animated");
		} else {
			$(".top_text").css("opacity", ".1");
			$(".top_mnu").fadeIn(600);
			$(".top_mnu li a").addClass("fadeInUp animated");
		};
	});

	$(".portfolio_item").each(function(i) {
		$(this).find("a.link").attr("href", "#work_" + i);
		$(this).find(".podrt_descr").attr("id", "work_" + i);
	});

	$("input, select, textarea").jqBootstrapValidation();

	$(".top_mnu ul a, .slider_caption a.btn").mPageScroll2id();

	
	//########### slide toggle read more ####################
	$(".stoggle").click(function() {
  $(".hide_more").animate({ opacity: 1.0 },200).slideToggle(500, function() {
    $(".stoggle").text($(this).is(':visible') ? "Show less" : "Read more");
  });
});

$(".ttoggle").click(function() {
  $(".hide_tm").animate({ opacity: 1.0 },200).slideToggle(500, function() {
    $(".ttoggle").text($(this).is(':visible') ? "Show less" : "Read more");
  });
});
});
$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide",
	directionNav: false,
	animation: "fade",
	controlsContainer: ".slider_bullet"
  });
});
$(window).load(function() {
  $('.com_inner').flexslider({
    animation: "slide",
	directionNav: false,
	
	controlsContainer: ".com_slider_bul"
  });
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

	

}); 

jQuery(document).ready(function($) {
            $('.counter_number').counterUp({
                delay: 10,
                time: 1000
            });
        });
// ############### GOOGLE MAP #################		
function initialize() {
        var mapCanvas = document.getElementById('map');
        var mapOptions = {
          center: new google.maps.LatLng(44.5403, -78.5463), //// Location
          zoom: 8,
		  scrollwheel: false,
    navigationControl: false,
    mapTypeControl: false,
    scaleControl: false,
    draggable: false,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions)
		map.set('styles', [
  {
        "featureType": "landscape",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 65
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 51
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 30
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.local",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 40
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "transit",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "lightness": -25
            },
            {
                "saturation": -100
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#ffff00"
            },
            {
                "lightness": -25
            },
            {
                "saturation": -97
            }
        ]
    }
]);
      }
google.maps.event.addDomListener(window, 'load', initialize);