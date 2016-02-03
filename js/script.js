var pbubTextData = [
[["Sugarbloom Bakery"],["Headed up by designer turned classically trained pastry chef Sharon Wang, Sugarbloom Bakery creates addictive sweets and treats for LA. At CAVA, we’re serving Sugarbloom’s Triple Threat Chocolate Chunk Cookie, enriched with three types of chocolate and a sprinkle of sea salt."],["partners_sugarbloom.png"]],
[["Garden School Foundation"],["The Garden School Foundation is a community-based organization that aims to meaningfully educate underserved youth through garden-based learning. CAVA happily bolsters the foundation’s efforts through financial support, program promotion, and volunteer service."],["partners_gardenSchoolFoundation.png"]],
[["Chefs to End Hunger"],["Chefs to End Hunger provides meals to the hungry by redistributing the excess prepared food that might normally go to waste in restaurants and other foodservice operations to local food agencies. CAVA contributes its unused produce and ingredients to the organization’s efforts."],["partners_chefsToEndHunger.png"]],
[["LA Kitchen"],["LA Kitchen’s Culinary Job Training Program is designed to help marginalized men and women secure careers in the foodservice industry. CAVA is working with LA Kitchen to hire its graduates into a supportive work environment that allows them ample opportunity for growth."],["partners_LAKitchen.png"]],
[["Hedley & Bennett"],["Hedley & Bennett handcrafts its beloved aprons right here in downtown LA, sewing each piece from start-to-finish with top-notch materials. Hedley & Bennett has outfitted our CAVA team in its chef-preferred styles, and has stepped up as our tour guide on the West Coast."],["partners_hedleyAndBennett.png"]]
];

document.getElementById("pbub1").onmouseover = function() {pbubMouse("0")};
document.getElementById("pbub2").onmouseover = function() {pbubMouse("1")};
document.getElementById("pbub3").onmouseover = function() {pbubMouse("2")};
document.getElementById("pbub4").onmouseover = function() {pbubMouse("3")};
document.getElementById("pbub5").onmouseover = function() {pbubMouse("4")};

var pbubText = document.getElementById("partner-info");
var pbubpic = document.getElementById("partner-pic-sub");


function pbubMouse(d) {
	var e = parseInt(d) + 1;

	document.getElementById("pbub1").className="";
	document.getElementById("pbub2").className="";
	document.getElementById("pbub3").className="";
	document.getElementById("pbub4").className="";
	document.getElementById("pbub5").className="";
	document.getElementById("pbub" + e).className = "active";

	pbubText.innerHTML = '<h4 class="white-text bold">' + pbubTextData[d][0] + '</h4>' +
		'<p class="serif white-text">' + pbubTextData[d][1] + '</p>';

	pbubpic.src =  "files/pngs/" + pbubTextData[d][2];
}


