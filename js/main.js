$(document).ready(function(){
     if (window.location.hash.substring(1).length >= 1){
         var page =  window.location.hash.substring(1);
          $("#home").hide();
          $("h2:not(div div > h2)").hide();
          $("#"+page).show();
     }

})

$("a").click(function() {

if ($(this).data("link").length !== false){

	var link = $(this).data("link");
     $("#home").hide();
     $("h2:not(div div > h2)").hide();
     $("#"+link).show();
     window.location.hash = link;

}


});

$("h1, .home").click(function() {

     $("div > div").hide();
     $("#home").show();
     $("h2").show();
     window.location.replace("#", "");

});
		
(function($) {

     $.fn.konami = function(callback, code) {
          if(code == undefined) code = "38,38,40,40,37,39,37,39,66,65";
          
          return this.each(function() {
               var kkeys = [];
               $(this).keydown(function(e){
                    kkeys.push( e.keyCode );
                    if ( kkeys.toString().indexOf( code ) >= 0 ){
                         $(this).unbind('keydown', arguments.callee);
                         callback(e);
                    }
               }, true);
          });
     }

})(jQuery);