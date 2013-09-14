$(function(){
	$.ajax({
		url: 'php/langdetailapi.php',
		type: 'GETs',
		dataType: 'json',
		success : function(data){
			//console.log(data[2]['langname_eng']);
			for (var i = 0; i < data.length; i++) {
				$('#languages').append('<option>' + data[i]['langname_eng'] + '</option>');
			};
		},
		error: function(data){

		}
	})
	
	

	$('#tool,#language,#req_button').hide();
	$( "#query" ).change(function() {
		//alert($('#query').val());
		$('#tool,#language').hide();
		var query = $('#query').val();
		$('#'+query).show();
		$('#req_button').show();
	});
})