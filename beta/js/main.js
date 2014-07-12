$('#content-wrapper').css('height', window.innerHeight+'px');

$(window).resize(function() {
	$('#content-wrapper').css('height', window.innerHeight+'px');
});

divCount = $('.name').length;
hide = function(seconds) {
		var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
		good = $('.name:visible').attr('data-slide');
		


		$('[data-slide="'+good+'"').delay(seconds).queue(function(){
    		$(this).toggleClass("hidden").dequeue();
    		good++;
    		
    		if(good == divCount){
    			good = 1;
    		}
			$('[data-slide="'+good+'"').toggleClass("hidden").css("color", hue);

    		hide(seconds);
    	});

}

// $('#scottweiss').animate(
// 	{fontSize: "120px"}, { duration: 200, queue: false });
var intro = true;
$(function () {
    $('.name').animate({
    	fontSize: "160px",
    	opacity: 1
    }, { duration: 4000, queue: false });
   // colorChanger(".name", 20);


var gocrazy = hide(70);
});
   $('body').on("click", function(){
   		if ($('.name').css("font-size") != "40px"){
   			$('.name').animate({
   			fontSize: "40px"
   			}, { duration: 300, queue: false }, function(){
   				$('.name').stop();	
   			}).removeClass('center').css("text-align", "left");
	
   		}
   
   });

// var intervalID = setInterval(alert, 1000); 
// setInterval(colorChanger("#scottweiss", 200), 10);
// setInterval(console.log("hello"), 100);

// $.Color('#scott-weiss', 'color').red('200');
// $('#scott-weiss').animate( { color: red(),  green(),  blue(), 1   }, 10);