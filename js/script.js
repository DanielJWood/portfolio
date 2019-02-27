// var img = new Image();
// img.src = '../files/dan/dan_fold.jpg';

// img.onload = function() {
//     $("#bg0").parents().addBack().fadeIn(1000)
// };

var i = 0;

$(document).ready(function(){
	$("body").hide(0)
});

$(window).on("load", function() {
	$("body").fadeIn(2000)
	// console.log("test3")
});

$(document).scroll(function() {
		var width = $(document).width();
		var now = $(document).scrollTop()
		if (now <=(5*width / 6)) {
			$("#bg0").fadeIn(100)
			// $("#title").fadeIn(100)
			
		}
		else if (now >= (5*width / 6)){
			$("#bg0").fadeOut(100)
			// $("#title").fadeOut(100)
		};

})

var hashTagActive = "";
$(".scroll").on("click touchstart" , function (event) {
    if(hashTagActive != this.hash) { //this will prevent if the user click several times the same link to freeze the scroll.
        event.preventDefault();
        //calculate destination place
        var dest = 0;
        if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
            dest = $(document).height() - $(window).height();
        } else {
            dest = $(this.hash).offset().top;
        }
        //go to destination
        $('html,body').animate({
            scrollTop: dest
        }, 2000, 'swing');
        hashTagActive = this.hash;
    }
});


