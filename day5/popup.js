var pcs = (function () {
	function addClickHandler(elem, handler) {
		if (elem.addEventListener) { // Other browsers
			elem.addEventListener("click", handler);
		} else if (elem.attachEvent) { // IE 7
			elem.attachEvent("onclick", handler);
		} else {
			alert("Broken");
		}
	}
	
	function createButtonClickFunction(div, callback, button) {
		return function () {
			document.body.removeChild(div);
			if(callback) {
				callback(button);
			}
		};
	}
	
	return {
		popup: function (msg, buttons, callback) { 
			var div = document.createElement("div"),
				buttonDiv = document.createElement("div"),
				button,
				i;
				
			buttons = buttons || ["OK"];
			
			div.innerHTML = msg;
			div.style.border = "1px solid black";
			div.style.position = "absolute";
			div.style.width = "204px";
			div.style.padding = "6px";
			div.style.backgroundColor = "coral";
			div.style.left = "50%";
			div.style.marginLeft = "-102px";
			div.style.top = "50%";
			div.style.marginTop = "-67px";
			div.style.height = "134px";
			
			for(i = 0; i < buttons.length; i++) {
				button = document.createElement("button");
				button.innerHTML = buttons[i];
				buttonDiv.appendChild(button);
				addClickHandler(button, createButtonClickFunction(div, callback, buttons[i]));
			}
			
			buttonDiv.style.textAlign = "center";
			buttonDiv.style.position = "absolute";
			buttonDiv.style.bottom = "6px";
			buttonDiv.style.width = "100%";
			
			div.appendChild(buttonDiv);
			
			document.body.appendChild(div);
		}
	};
}());