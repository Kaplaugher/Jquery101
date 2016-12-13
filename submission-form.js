$(document).ready(function(){
    $('.submisson-form').submit(function(event){
    	event.preventDefault();
    })


    $('input').each(function(){
    	var currentTagClass = $(this).attr('class');
    	var errorClass = '.' + currentTagClass + '-error';
    	console.log(errorClass);
    	if($(this).val() == ''){
    		$(errorClass).html('fields cannot be empty');
    		$(errorClass).show();
    	}else{
    		$(errorClass).hide();
    	}
    })

});