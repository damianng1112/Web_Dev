"use strict";
const $ = selector => document.querySelector(selector);

// the event handler for the click event of each h2 element
const toggle = evt => {
	const h2Element = evt.currentTarget;               // get the clicked h2
	const divElement = h2Element.nextElementSibling;   // get h2's sibling div
	
	const h2Elements = document.querySelectorAll("#faqs h2");
	if (h2Element.hasAttribute('class')){
		h2Element.removeAttribute('class');
		h2Element.nextElementSibling.removeAttribute('class');
	}else{
		for (let h2Element of h2Elements) {
			h2Element.removeAttribute('class');
			h2Element.nextElementSibling.removeAttribute('class');
		}
		h2Element.classList.toggle("minus");
		divElement.classList.toggle("open");
	}

	/*for (let h2Elem of h2Elements){
		if(h2Elem != h2Element){
			h2Elem.classList.remove('minus');
			h2Elem.nextElementSibling.classList.remove('open');
		}
	} */

	evt.preventDefault();           // cancel default action of h2's child <a>
};


document.addEventListener("DOMContentLoaded", () => {
	// get the h2 tags
	const h2Elements = document.querySelectorAll("#faqs h2");
	
	// attach event handler for each h2 tag
	for (let h2Element of h2Elements) {
		h2Element.addEventListener("click", toggle);
	}
	
	// set focus on first h2 tag's <a> tag
	h2Elements[0].firstChild.focus();
});
