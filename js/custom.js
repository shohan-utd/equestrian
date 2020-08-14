var owl = $("#test_car");
owl.owlCarousel({
    items:1,
    loop:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    nav:true,
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})


// Scroll To top

$(window).scroll(function(){

	if($(window).scrollTop() > 500)
	{
		$(".scroll_to_top").fadeIn();
	}
	else
	{
		$(".scroll_to_top").fadeOut();
	}

});


$(".scroll_to_top").click(function(){
	$("html").animate({
		scrollTop:0,
	},2000);
});


// sticky menu
var scrollLink = $(".scroll");
window.addEventListener("scroll",function(){
	var header = document.querySelector(".header_section");
	header.classList.toggle("sticky",window.scrollY > 500)
})


$('.hamburger').click(function(){
	$('.nav_box').toggle();
});

//bodymoving

var animation = bodymovin.loadAnimation({
  container: document.getElementById('bm'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'data.json'
})