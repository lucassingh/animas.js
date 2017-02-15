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

	 	$(document).click(function() {
  	$('#square7' ).fadeIn( 3000, function() {
    $( "#square7" ).fadeIn( 100 );
  });
	return false;
 });
