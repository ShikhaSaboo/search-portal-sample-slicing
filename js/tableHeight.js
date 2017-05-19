$(document).ready(function(){
	
	var firstElementHeights=$('.first-row').map(function(){
		return $(this).height();
	}).get();
	var secondElementHeights=$('.second-row').map(function(){
		return $(this).height();
	}).get();
	var thirdElementHeights=$('.third-row').map(function(){
		return $(this).height();
	}).get();
	// console.log("elementHeights",elementHeights);
	
	var firstMaxHeight=Math.max.apply(null,firstElementHeights);
	$('.first-row').height(firstMaxHeight);

	var secondMaxHeight=Math.max.apply(null,secondElementHeights);
	$('.second-row').height(secondMaxHeight);

	var thirdMaxHeight=Math.max.apply(null,thirdElementHeights);
	$('.third-row').height(thirdMaxHeight);

});
