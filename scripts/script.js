var hosted = false;

////////////////////screen loading animation////////////////////
window.addEventListener("load",function(){
	var load_screen = document.getElementById("loadscreen");
	setTimeout(function(){
		$("#loadscreen").fadeToggle(1000);
	},500);
});

$(function(){
	//insert the loading screen at the beginning of the page//
	$("<div id=\"loadscreen\"><div id=\"loading\" class=\"vertAlign\">loading...</div></div>").insertBefore($(".background"));
});

$(document).ready(function(){

	var anim = true;

	//set up naviation bar links
	links = $("#header > ul:first > li > a");

	if($(window).width() < 768 ){
		//enable the menu toggle
		for(var i=0;i<links.length;i++){
			links[i].setAttribute("data-toggle","collapse");
			links[i].setAttribute("data-target","#header");
			$("nav").css("opacity","1");
		}
	}
	//if the screen is big enough for desktop use
	else{
		//disable menu toggle
		for(var i=0;i<links.length;i++){
			links[i].removeAttribute("data-toggle");
			links[i].removeAttribute("data-target");
			$("nav").css("opacity","0.85");
		}
	}

	//Check if the screen is resized
	$(window).resize(function() {
		//if the screen is small enough for mobile use
		if($(window).width() < 768 ){
			//enable the menu toggle
			for(var i=0;i<links.length;i++){
				links[i].setAttribute("data-toggle","collapse");
				links[i].setAttribute("data-target","#header");
				$("nav").css("opacity","1");
			}
		}
		//if the screen is big enough for desktop use
		else{
			//disable menu toggle
			for(var i=0;i<links.length;i++){
				links[i].removeAttribute("data-toggle");
				links[i].removeAttribute("data-target");
				$("nav").css("opacity","0.85");
			}
		}
	});

	//Glide transition for inner links on page
	$('a[href^="#"]').on('click',function (e) {
		if(anim==true){
			e.preventDefault();

			var target = this.hash;
			var $target = $(target);

			$('html, body').stop().animate({
				'scrollTop': $target.offset().top
			}, 900, 'swing', function () {
				window.location.hash = target;
			});
		}
	});

	/*Click on category
	$('.category>button').on('click',function(e){
		$('#currentCat').removeAttr("id");
		$(this).parent().attr("id","currentCat");
		$("#productListContainer").load(document.URL + " #productListContainer");
	});
	*/
});