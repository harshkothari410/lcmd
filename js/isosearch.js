$(function(){
	$('.example-twitter-oss .typeahead').typeahead({
		name: 'Language ISO list',
		prefetch: { 
			url : 'data/isodropdown.json',
			ttl : 2000
		},
		limit: 10
	});

	$('.typeahead').on('typeahead:autocompleted', function (e, datum) {
		isoEngname( datum.value );
	});

	$('.typeahead').on('typeahead:selected', function (e, datum) {
		isoEngname( datum.value );
	});
})

function isoEngname(iso) {
	console.log(iso);
	var engName = null;
	$.getJSON('data/isolist.json', function(json, textStatus) {
		console.log(json[iso]);
		engName = json[iso];
		$('#langname_eng').val(engName);
	});
}