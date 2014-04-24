var cssChanger = (function () {
	function get(id) {
		return document.getElementById(id);
	}
	
	function set(elem, style, value) {
		elem.style[style] = value;
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
		addClickHandler: function (id, handler) {
			var elem = get(id);
			addClickHandler(elem, handler);
		},
		set: function (id, style, value) {
			var elem = get(id);
			set(elem, style, value);
		}
	};
}());