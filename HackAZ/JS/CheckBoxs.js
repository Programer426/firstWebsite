$(addToPage());

function addToPage(){
	$('body').append('<div id="mySidenav" class="sidenav">');
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
	$('#mySidenav').append('<label>What do you want to see</label>');
	$('#mySidenav').append('<label class = "checkBox"><input type="checkbox" id="firstName" checked>First Name</label><br>');
	$('#mySidenav').append('<label class = "checkBox"><input type="checkbox" id="lastName" checked>Last Name</label><br>');
	$('#mySidenav').append('<label class = "checkBox"><input type="checkbox" id="age" checked>Age</label><br>');
	$('#mySidenav').append('<label class = "checkBox"><input type="checkbox" id="height">Height</label><br>');
	$('#mySidenav').append('<label class = "checkBox"><input type="checkbox" id="weight">Weight</label><br>');
	$('#mySidenav').append('<label class = "checkBox"><input type="checkbox" id="location">Location</label><br>');
	$('#mySidenav').append('<label class = "checkBox"><input type="checkbox" id="education">Education</label><br>');
	$('#mySidenav').append('<label class = "checkBox"><input type="checkbox" id="income">Income</label><br>');
	$('#mySidenav').append('<label class = "checkBox"><input type="checkbox" id="maritalStatus">Marital Status</label><br>');
}