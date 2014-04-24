var pcs = {};

pcs.tools = (function () {
	function get(id) {
		return document.getElementById(id);
	}
	
	function getCSS(elem, style) {
		return window.getComputedStyle(elem, null).getPropertyValue(style);
	}
	
	function addClickHandler(elem, handler) {
		if (elem.addEventListener) { // Other browsers
			elem.addEventListener("click", handler);
		} else if (elem.attachEvent) { // IE 7
			elem.attachEvent("onclick", handler);
		} else {
			alert("Broken");
		}
	}
	
	return {
		get: get,
		getCSS: getCSS,
		addClickHandler: function (id, handler) {
			var elem = get(id);
			addClickHandler(elem, handler);
		}
	};
}());

pcs.wrap = function (id) {
	var elem = pcs.tools.get(id),
		anims = [];
	return {
		stop: function() {
			var i;
			for(i = 0; i < anims.length; i++) {
				clearInterval(anims[i]);
			}
			return this;
		},
		pulsate: function(times) {
			var originalSize = parseFloat(pcs.tools.getCSS(elem, "font-size")),
				size = originalSize,
				counter = 0,
				step = 1,
				repeats = times || 1,
				anim = setInterval(function() {
					++counter;
					if (counter < 10) {
						size += step;
					} else if (counter < 30) {
						size -= step;
					} else if (counter < 40) {
						size += step;
					} else {
						counter = 0;
						if (--repeats === 0) {
							clearInterval(anim);
							// remove finished anim from array - we didnt cover this in class
							anims.splice(anims.indexOf(anim), 1);
						}
						size = originalSize;
					}
					elem.style.fontSize = size + "px";
				}, 30);
			anims.push(anim);
			return this;
		},
		colorize: function (times) {
			var originalColor = pcs.tools.getCSS(elem, "color"),
				r = 0,
				g = 0,
				b = 0,
				step = 50,
				repeats = times || 1,
				anim = setInterval(function () {
					if (b < 255) {
						b += step;
					} else if (g < 255) {
						b = 0;
						g += step;
					} else if (r < 255) {
						b = 0;
						g = 0;
						r += step;
					} else {
						if (--repeats === 0) {
							clearInterval(anim);
							// remove finished anim from array - we didnt cover this in class
							anims.splice(anims.indexOf(anim), 1);
							elem.style.color = originalColor;
							return;
						}
						r = 0;
						g = 0;
						b = 0;
					}
					elem.style.color = "rgb(" + r + ", " + b + ", " + g + ")";
				}, 1);
			anims.push(anim);
			return this;
		}
	};
};