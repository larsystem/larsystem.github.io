// Store data
var cartTotal = (function () {
	return {
		cartCallback: function (data) {
			console.log(data);
			if (data.items.length) {
				$("body").addClass("carted");
				$(".cart-count").text("(" + data.items.length + ")");
			} else {
				$("body").removeClass("carted");
				$(".cart-count").text("");
			}
		},
	};
})();

//Per-page init
function initPage() {
	//body id changes to current page
	$("body").attr("id", $("#pageid").data("val"));
	$("#pageid").remove();

	$(".item-image").unveil(300);

	$("#image-gallery").glassCase({
		heightDisplay: 400,
		zoomPosition: "inner",
	});
}

$(document).ready(function () {
	initPage();
});

//Initial loader removal -
$(window).on("load", function () {
	$("body").removeClass("loading");
	$("body").removeClass("initial-load");
});

//initialize Swup
const swup = new Swup({
	plugins: [new SwupPreloadPlugin()],
	containers: ["#content"],
});

swup.on("contentReplaced", function () {
	initPage();
	if (window.ga) {
		gtag("config", "UA-148205485-62", { page_path: location.pathname });
	}
	$("html, body").scrollTop(0);
});
