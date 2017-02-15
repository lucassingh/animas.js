/*-----------Example 1------------*/

$(function(){
	$('#square0').click(function () {
		  $(this).effect("bounce", { times:7
      }, 3000);
	});
});

/*-----------Example 2------------*/

$('#square1').click(function () {
		  $(this).effect("bounce",
     { direction:'down', times:7
   }, 3000);
	});

/*-----------Example 3------------*/

  $('#square2').click(function () {
  		  $(this).effect("bounce",
       { direction:'right', times:7
     } , 3000);
  	});

/*-----------Example 4------------*/

    $('#square3').click(function () {
    		  $(this).effect("bounce",
          { direction:'left', times:7
         }, 3000);
    	});

/*-----------Example 5------------*/

	$('#square4').click(function() {
	for(i=0;i<3;i++) {
		$(this).fadeTo('fast', 0.5).fadeTo('fast', 1.0);
		}
	});

	/*-----------Example 6------------*/

	$(document).ready(function() {
				$("#square5").click(function(){
					 $("#square5").effect( "pulsate", {times:3}, 3000 );
				});

		 });

	 /*-----------Example 7------------*/

		$(document).ready(function() {
			$("#square6").click(function(){
				 $("#square6").effect( "shake", {times:4}, 500 );
			});
	 });

	/*-----------Example 8------------*/

	$(document).ready(function(){
    $(".btn1").click(function(){
        $('#square7').fadeOut(1000);
    });
    $(".btn2").click(function(){
        $('#square7').fadeIn(1000);
    });
	});

	/*-----------Example 9------------*/

	$(document).ready(function(){
  $('.btn3').click(function(){
		$('#square-a').delay(500).fadeIn();
		$('#square-b').delay(900).fadeIn();
		$('#square-c').delay(1300).fadeIn();
	  });
	$('.btn4').click(function(){
		$('#square-a').hide();
		$('#square-b').hide();
		$('#square-c').hide();
		});
	});

	/*-----------Example 10------------*/

	$(document).ready(function(){
    $(".btn5").click(function(){
        $('#square9').hide();
    });
    $(".btn6").click(function(){
        $('#square9').show();
	    });
		});

/*-----------Example 11------------*/

$(document).ready(function() {
	$('.btn7').click(function() {
      $('#square10').animate({
			'marginLeft' : "+=10px" //moves right
		});

  $('.btn8').click(function() {
        $('#square10').animate({
        'marginLeft' : "-=10px" //moves left
        });
    	});
		});
  });

	/*-----------Example 12------------*/

	$(document).ready(function() {
    $('.btn9').click(function() {
        $('#square11').animate({
        'marginTop' : "+=5px"
        });
    });
    $('.btn10').click(function() {
        $('#square11').animate({
        'marginTop' : "-=5px"
        });
    	});
		});

	/*-----------Example 13------------*/

	$(document).ready(function(){
    $('.header-slider').click(function(){
        $('.content-slider').slideToggle("slow");
    	});
		});

	/*-----------Example 14------------*/

	$(document).ready(function(){
    $('.header-slider-2').click(function(){
      $('.content-slider-2').animate({width:'toggle'},350);
    	});
		});

	/*-----------Example 15------------*/

	$(document).ready(function(){
    $('.btn11').click(function(){
      $('.cont-box-color').css('background-image', 'url("img/bg.jpg")');
			  $('.btn11').css('opacity','0');
    	});
		});
