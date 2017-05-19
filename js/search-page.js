$(document).ready( function() {
		
		var scroll_start = 0;
		var start_change = $('nav');
		var offset = start_change.offset();
		var check;
		
		var scrollFxn = function(){
			if(start_change.length){
				
					check = Math.abs(offset.top-80);
					scroll_start = $(window).scrollTop();
					
					
					if(scroll_start>check){
						$('nav').removeClass('drop-navbar');
					}
					else {
						$('nav').addClass('drop-navbar');
					}
				
			}
			 
		}

		var scroll_start_searchbox = 0;
		var stickyNavTop = $('.searchbox-wrapper');
		var offset_searchbox = stickyNavTop.offset().top;
		
		
   		var stickyNav = function(){
   			
   			if(stickyNavTop.length){
   				 $(document).scroll(function(){
   				 	var widnowWidth = $(window).width();
   					// var chec =Math.abs(offset_searchbox);
   					var chec =offset_searchbox-140;
   					var forSmall =offset_searchbox-500;
   					scroll_start_searchbox = $(window).scrollTop();
      				console.log('forSmall',forSmall,'scroll_start_searchbox',scroll_start_searchbox);
      					if(widnowWidth < 768){
      						if(scroll_start_searchbox>forSmall){ 
	   					
	    						$('.collapse-box').css('margin-top','-503px');

	   						} else {
	    						$('.collapse-box').css('margin-top','-475px');
	   						}	
      						
      					

      					} else{	
	   						if(scroll_start_searchbox>chec){ 
	   					
	    						$('.searchbox-wrapper').addClass('sticky2');

	   						} else {
	    						$('.searchbox-wrapper').removeClass('sticky2'); 
	   						}
	   					}
   				});
   			

   			}
   		}

   		$('#filter-btn').click(function(){

   			$('.active-search').toggle();	
   		});
   	$(window).scroll(function(){
   			stickyNav();
		scrollFxn();
	});
		
	});