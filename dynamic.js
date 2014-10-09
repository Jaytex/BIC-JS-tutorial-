/*
	getWidth() 	: Helper function for obtaining browser's width 

	parameters	: None

	return		: The width of the browser's windoow
*/

function getWidth(){

		/* Checking what to return */

		if (window.innerWidth){
			return window.innerWidth; // This will return the width of the viewport in pixels
		}	
		else if (document.documentElement && document.documentElement.clientWidth != 0){
			return document.documentElement.clientWidth; // 
		}
		else if (document.body){
			return document.body.clientWidth;
		}		
			return 0; // defualt
}

/* 
	changeLayout() 	: Helper function for changing the layout based on the one we specified

	parameters		: The name of the layout

	return			: void
*/

function changeLayout(layoutname){
	document.body.className = layoutname; 

}


/*
	Main Function
*/

function dynamic(){

	var browserWidth = getWidth(); // get's the browser's width
	var page = document.URL;

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
	

*/

function addEvent( obj, type, fn ){ 

	   if (obj.addEventListener){ 
	      obj.addEventListener( type, fn, false );
	   }
	   else if (obj.attachEvent){ 
	      obj["e"+type+fn] = fn; 

	      obj[type+fn] = function(){ obj["e"+type+fn]( window.event ); } 

	      obj.attachEvent( "on"+type, obj[type+fn] ); 
	   } 
} 

//load based on the effects of dynamic function
addEvent(window, 'load', dynamic);

//resize based the effects of dynamic function
addEvent(window, 'resize', dynamic);