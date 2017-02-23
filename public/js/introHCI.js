'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
 $(".likeBtn").click(listener);
 function listener(event){
 	ga("send", "event", 'like', 'clicked');
 }
function initializePage() {

}