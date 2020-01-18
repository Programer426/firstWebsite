$(addToPage());

function addToPage(){
	$('body').append('<div id="mySidenav" class="sidenav">');
	$("<div id = 'divButtons'><span style='font-size:30px;cursor:pointer' onclick='openNav()'id='sidenavButton' >&#9776;</span></div>").insertBefore('body');
	$("<br></br>").insertAfter('#divButtons');
	navBar();
}

function openNav() {
	document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  navBar();
}

function navBar(){
	$('#mySidenav').empty();
	$('#mySidenav').append('<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>');
	$('#mySidenav').append('<a href="../html/home.html">Home</a>');
	$('#mySidenav').append('<a href="../html/ascii.html">Ascii</a>');
	$('#mySidenav').append('<a href="../html/13MonthCal.html">13 Month Calendar</a>');
	$('#mySidenav').append('<a href="../html/Dice.html">Dice</a>');
	$('#mySidenav').append('<a href="../html/Bases.html">Math Bases</a>');
	$('#mySidenav').append('<a onclick="gameBar()" class = "folder" id="gamesDrop">Games</a>');
	$('#mySidenav').append('<a onclick="codingBar()" class = "folder" id="codingDrop">Coding</a>');
	//$('#mySidenav').append('<a href="../html/Contact.html">Contact me</a>');
	//console.log(mySidenav);
}

function gameBar() {
	navBar();
	$('<a onclick="navBar()" id="gameDrop" >Games</a>').insertBefore('#gamesDrop');
	$('#gameDrop').append('<a href="../html/Tetris.html" class = "inFolder">Tetris</a>');
	$('#gameDrop').append('<a href="../html/CYOA.html" class = "inFolder">Choose your own adventure</a>');
	$('#gameDrop').append('<a href="../html/SnakeGame.html" class = "inFolder">Snake Game</a>');
	$('#gameDrop').append('<a href="../html/BrickBreaker.html" class = "inFolder">Brick Breaker</a>');
	$('#gameDrop').append('<a href="../html/Pong.html" class = "inFolder">Pong</a>');
	$('#gameDrop').append('<a href="../html/Stroop.html" class = "inFolder">Stroop</a>');
	$('#gamesDrop').remove();
	console.log(mySidenav);
}

function codingBar(){
	navBar();
	$('<a onclick="navBar()" id="codeDrop">Coding</a>').insertBefore('#codingDrop');
	$('#codeDrop').append('<a onclick="unavailable()" class = "inFolder">JS</a>');
	$('#codeDrop').append('<a href="../html/JQ.html" class = "inFolder">JQ</a>');
	$('#codeDrop').append('<a onclick="unavailable()" class = "inFolder">CSS</a>')
	$('#codeDrop').append('<a href="../html/htmlPage.html" class = "inFolder">HTML</a>')
	$('#codingDrop').remove();
	console.log(mySidenav);
}

function unavailable(){
	alert('Sorry this does not exist yet');
} 

//style="visibility: hidden"
