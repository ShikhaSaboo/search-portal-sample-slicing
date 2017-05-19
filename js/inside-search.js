$(document).ready( function() {
		
		

		var scroll_start_searchbox = 0;
		var stickyNavTop = $('.searchbox-wrapper');
		var offset_searchbox = stickyNavTop.offset().top;
		console.log("scroll_start_searchbox",scroll_start_searchbox);
		
   		var stickyNav = function(){
   			
   			if(stickyNavTop.length){
   				 $(document).scroll(function(){
   				 	var widnowWidth = $(window).width();
   					// var chec =Math.abs(offset_searchbox);
   					var chec =offset_searchbox;
   					var forSmall =offset_searchbox-500;
   					scroll_start_searchbox = $(window).scrollTop();
      				
      						
	   						if(scroll_start_searchbox>chec){
	   							//console.log("scroll_start_searchbox",scroll_start_searchbox,"chec",chec); 
	   					
	    						$('.searchbox-wrapper').addClass('sticky-inside-search');


	   						} else {
	    						$('.searchbox-wrapper').removeClass('sticky-inside-search'); 
	    						//console.log("else-content","scroll_start_searchbox",scroll_start_searchbox,"chec",chec); 
	   						}
	   					
   				});
   			

   			}
   		}

   		$('#filter-btn').click(function(){

   			$('.active-search').toggle();	
   		});
   	$(window).scroll(function(){
   			stickyNav();
		
	});
		
	});