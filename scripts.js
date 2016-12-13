
	
$(document).ready(function(){
	$('button').click(function(){
		var whatToDo = $(this).attr('toDo')
		if(whatToDo == "hide"){
		$('#thing').hide();
	}else if(whatToDo == "show"){
		$('#thing').show();
	}else if(whatToDo == "toggle"){
		$('#thing').toggle();
	}else if(whatToDo == "html"){
		$('#thing').html('<table border="1"><tr><td>Im a table now!</td></tr></table>');
	}else if(whatToDo == "prepend"){
		$('#thing').prepend('<table border="1"><tr><td> I have a friend to my right now</td></tr></table>')
	}else if(whatToDo == "append"){
		$('#thing').append('<table border="1"><tr><td> I have a friend to my left now</td></tr></table>')
	}

	});

});




