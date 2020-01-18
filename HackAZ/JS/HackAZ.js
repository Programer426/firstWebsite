$(addToPage());

function addToPage(){
	$('body').append('<div id="myChart" class="chart">');
	chart();
}

function chart(){
	$('#myChart').append('\
		<div class="wrapper">\
			<div class="profile">\
				<table id= "userdata" border="2">\
				</table>\
			</div>\
		</div>\
	')
}

$('#firstName').check(function(){
	$('#userdata').append('<th>First Name</th>')
})