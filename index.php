<?php
	session_start();
?>
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
	<link rel="stylesheet" type="text/css" href="jquery.ime/css/jquery.ime.css"/>
	<link rel="stylesheet" type="text/css" href="css/example.css">
	<link rel="stylesheet" type="text/css" href="css/menusearch.css">
	
	<script type="text/javascript" src="js/hogan.js"></script>
	<script type="text/javascript" src="js/jquery-1.10.2-min.js"></script>
	<script type="text/javascript" src="js/bootstrap.min.js"></script>
	<script type="text/javascript" src="js/bootstrap-switch.js"></script>
	<script type="text/javascript" src="jquery.ime/src/jquery.ime.js"></script>
	<script type="text/javascript" src="jquery.ime/src/jquery.ime.selector.js"></script>
	<script type="text/javascript" src="jquery.ime/src/jquery.ime.preferences.js"></script>
	<script type="text/javascript" src="jquery.ime/src/jquery.ime.inputmethods.js"></script>
	<script type="text/javascript" src="js/typeahead.js"></script>
	<script type="text/javascript" src='js/langsearch.js'></script>

</head>
<body>
	
	<?php
		if(isset($_SESSION['username'])){
			include "lib/header-wrap-with-login.php";
		}
		else{
			include "lib/header-wrap-without-login.php";
		}
	?>

	<div class="container-fluid hero-unit">
		<h1>Language Coverage Matrix Dashboard</h1>
		<p>The Language Coverage Matrix dashboard would help automate the information about language support provided by the Language Engineering team</p>
		<!--
		<p>
			<a class="btn btn-primary btn-large">
				Learn more
			</a>
		</p>
	-->
	</div>
	<div class="container-fluid well">
		<div class="row-fluid">
			<div class="span2">
				Language Search
			</div>
			<div class="span4" >
				<div class="example example-twitter-oss" id="noanimate">
					<input class="typeahead" id="typeahead" type="text" placeholder="Language Search" >
				</div>
			</div>

			<label class="checkbox inline span2 center">
				<input type="checkbox" id="webfonts" value="webfonts"> Input Methods
			</label>

			<label class="checkbox inline span2">
				<input type="checkbox" id="webfonts" value="webfonts"> webfonts
			</label>

			<label class="checkbox inline span2">
				<input type="checkbox" id="webfonts" value="webfonts"> Internationlization Library
			</label>
		</div>

<!--
		<div class="row-fluid">
			<label class="checkbox inline span4 center">
				<input type="checkbox" id="webfonts" value="webfonts"> Input Methods
			</label>

			<label class="checkbox inline span4">
				<input type="checkbox" id="webfonts" value="webfonts"> webfonts
			</label>

			<label class="checkbox inline span4">
				<input type="checkbox" id="webfonts" value="webfonts"> Internationlization Library
			</label>
		</div>
-->
	</div>

	<div class="container-fluid well">
		This is language show section
	</div>
</body>
</html>