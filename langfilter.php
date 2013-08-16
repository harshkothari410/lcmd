<!DOCTYPE html>
<html lang="en">
<head>
	
	<meta http-equiv="content-type" content="text-html; charset=utf-8">	
	<meta charset="utf-8">
	<meta name="author" content="Harsh Kothari">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	
	<link rel="stylesheet" type="text/css" href="css/bootstrap.css" media="screen">
	<link rel="stylesheet" type="text/css" href="css/bootstrap-responsive.css">
	<link rel="stylesheet" type="text/css" href="css/bootstrap-switch.css">
	<link rel="stylesheet" type="text/css" href="css/boxed.css">
	
	<script type="text/javascript" src="js/jquery-1.10.2-min.js"></script>
	<script type="text/javascript" src="js/bootstrap.min.js"></script>
	<script type="text/javascript" src="js/bootstrap-switch.js"></script>
	<script type="text/javascript" src="js/langlist.js"></script>	
	<script type="text/javascript" src='js/filter.js'></script>

</head>

<body>
	<div class="navbar navbar-static-top navbar-inverse">
		<div class="navbar-inner ">
			<a class="brand" href="#">LCM - Dashboard</a>
			<ul class="nav pull-right nav-pills">
				<li><a href="index.html">Home</a></li>
				<li><a href="#">About Us</a></li>
				<li class="active"><a href="langsearch.php">Language Search</a></li>
			</ul>
		</div>
	</div>

	<div class='well'>
		<div class='row-fluid'>
			<div class='span4' id='langcount'>
			</div>
		</div>
	</div>

	<div class='row-fluid'>


		<div class='alert span3 alert-success ' id="filterLabel" align='center' style='display:none'>
			Active Filters
		</div>

		<div class='span9' id="filtershow">

		</div>
</div>
	<div class='row-fluid'>
	<div class='span3 well'>

		<div class='control-group'>
		<label class="checkbox inline">
  			<input type="checkbox" id="jquery_ime" value="jquery_ime"> jquery.ime
		</label>
		</div>
		
		<div class='control-group'>
		<label class="checkbox inline">
  			<input type="checkbox" id="webfonts" value="webfonts"> Webfonts
		</label>
		</div>
		
		<div class='control-group'>
		<label class="checkbox inline">
  			<input type="checkbox" id="jquery_webfonts" value="jquery_webfonts"> jquery.webfonts
		</label>
		</div>

		<div class='control-group'>
		<label class="checkbox inline">
  			<input type="checkbox" id="i18n_mw_core" value="i18n_mw_core"> i18n mw core
		</label>
		</div>

		<div class='control-group'>
		<label class="checkbox inline">
  			<input type="checkbox" id="jquery_i18n" value="jquery_i18n"> jquery.i18n
		</label>
		</div>

		<div class='control-group'>
		<label class="checkbox inline">
  			<input type="checkbox" id="jquery_uls" value="jquery_uls"> jquery.uls
		</label>
		</div>

		<div class='control-group'>
		<label class="checkbox inline">
  			<input type="checkbox" id="translate" value="translate"> Translate
		</label>
		</div>

		<div class='control-group'>
		<label class="checkbox inline">
  			<input type="checkbox" id="dictionary" value="dictionary"> Dictionary
		</label>
		</div>

		<div class='control-group'>
		<label class="checkbox inline">
  			<input type="checkbox" id="spellchecker" value="spellchecker"> Spellchecker
		</label>
		</div>

		<div class='control-group'>
		<label class="checkbox inline">
  			<input type="checkbox" id="glossary" value="glossary"> Glossary
		</label>
		</div>

		<div class='control-group'>
		<label class="checkbox inline">
  			<input type="checkbox" id="f_or_i" value="f_or_i"> Feature
		</label>
		</div>
	</div>

	<div class='span9 well' id=''>
		<table class='table table-striped' id='langlist'>

		</table>
	</div>

	<div class='row-fluid'>
	<script type="text/javascript">
	$(function(){
		$('td').click(function(){
			$this = $(this);
			var lang = $this.children().children(".span8").children(".text-info").text();
			console.log(lang);
			window.location.href = 'language.html?'+lang;
		})
		})
	</script>
</body>
</html>