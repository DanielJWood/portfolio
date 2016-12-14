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

// var song = new Audio('../files/good-foot.mp3');

// $("#hitme").mouseover(function(){
// 	if (i===0) {
// 		song.play();
// 		i+=1;
// 		setInterval(function () {
// 	        song.pause();
// 	    // },5625);
// 	    },5625);

// 	}
// })



