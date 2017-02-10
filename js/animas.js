/*-----------Example 1------------*/

//Add bounceUp effect on Click of the square

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

/*-----------Example 3------------*/

    $('#square3').click(function () {
    		  $(this).effect("bounce",
          { direction:'left', times:7
         }, 3000);
    	});
