/*
	JS file that deals with the dynamism
	Author	: Jay Bamimore
	Date	: 09 - 10 - 2014
*/


/*
	getWidth() 	: Helper function for obtaining browser's width 

	parameters	: None

	return		: The width of the browser's windoow
*/

function getWidth(){

		/* Checking what to return (various sanity checks) */

		if (window.innerWidth){
			return window.innerWidth; // This will return the width of the viewport in pixels
		}	
		else if (document.documentElement && document.documentElement.clientWidth != 0){
			return document.documentElement.clientWidth; 
		}
		else if (document.body){
			return document.body.clientWidth;
		}		
			return 0; // defualt
}

/* 
	changeLayout() 	: Helper function for changing the layout based on the one we specified

	parameters		: The name of the layout

	return			: None
*/

function changeLayout(layoutname){
	document.body.className = layoutname; 
}


/*
	dynamic() 	: Changes the layout of the page based on the width

	parameters	: None

	return		: None


*/

function dynamic(){

	var browserWidth = getWidth(); // get's the browser's width

	if (browserWidth < 680){
		changeLayout("thin");
	}

	if ((browserWidth >= 680) && (browserWidth <= 950)){
		changeLayout("wide");
	}

	if (browserWidth > 950){ 
		changeLayout("wider");
	}
}

/*
	addEvent 	: attach an event handler  to the window

	parameters	: object, type , function

	return		: none
*/

function addEvent( obj, type, fn ){ 
	   if (obj.addEventListener){ 
	      obj.addEventListener( type, fn, false ); // event to attach
	   }
	   else if (obj.attachEvent){ 
	      obj["e"+type+fn] = fn; 
	      obj[type+fn] = function(){ obj["e"+type+fn]( window.event ); } 
	      obj.attachEvent( "on"+type, obj[type+fn] ); //bind function to an event 
	   } 
	} 
	
// Handle window load and resize with dynamic function 
addEvent(window, 'load', dynamic);
addEvent(window, 'resize', dynamic);