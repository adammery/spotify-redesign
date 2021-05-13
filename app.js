function isHidden (el) {
	var style = window.getComputedStyle(el);
	return (style.display === 'none')
}

function fadeOut (element) {
	var op = 1;  // initial opacity
	var timer = setInterval(function () {
		if (op <= 0.1) {
			clearInterval(timer);
			element.style.display = 'none';
		}
		element.style.opacity = op;
		element.style.filter = 'alpha(opacity=' + op * 100 + ")";
		op -= op * 0.1;
	}, 10);
}

function fadeIn (element, display) {
	var op = 0.1;  // initial opacity
	element.style.display = display;
	var timer = setInterval(function () {
		if (op >= 1) {
			clearInterval(timer);
		}
		element.style.opacity = op;
		element.style.filter = 'alpha(opacity=' + op * 100 + ")";
		op += op * 0.1;
	}, 10);
}


// Nájdeme všetky elementy ktore majú klassu platform-categories
let menuCategories = document.querySelectorAll(".categories");

// Prejdeme si všetky tieto elementy
menuCategories.forEach((item) => {

	//Ak klikneme na konkretny element
	item.addEventListener("click", (e) => {

		if ([...e.target.classList].includes("categories__title")) {
			// Nájdeme si položku ktorá je hneď dalsia
			let polozky = e.target.nextElementSibling;

			// Skontrolujeme či sú položky schovane
			if (isHidden(polozky)) {
				// Ak sú schovane tak zobrazíme
				fadeIn(polozky, "block");
			} else {
				// Ak sú viditelne tak vypneme
				fadeOut(polozky);
			}
		}
	});

});