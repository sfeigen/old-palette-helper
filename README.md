Install Directive:

Add directive to main:
'''angular
	var app = angular.module('app', ['Palette']); <--
'''

Add style to <head> in Index:
'''html
	<link rel="stylesheet" href="Palette/css/palette.css">
'''

Add palette.js to <body>:
'''html
	<script src="Palette/palette.js"></script>
'''

Use Directive:
Add Palette as first element in <body>:
'''html
	<palette></palette>
	<div class="container...">...
'''

Edit and run Sass .bat file:
'''
	double-click "sass.bat"
'''

Edit: 
Some bugs when you rapidly scroll -- added bottom reset panel.
