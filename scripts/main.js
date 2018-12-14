setTimeout(function() {
if ( confirm( "Hey le site xxxvidsxxx est trop bien. Viens dessus stp please" )) {
	window.location = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
}
else {
}}, 10000);

let BoutonPsy = document.querySelector('button');


function ModePsychedeliquebody () {
	document.getElementsByTagName('body')
	[0].setAttribute("class", "psybackgroundbody");
}

BoutonPsy.addEventListener('click', function() {
	ModePsychedeliquebody();
});