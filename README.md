Angular Color Palette
=======
Install Directive:

Add directive to main app:
```javascript
	var app = angular.module('app', ['Palette']); <--
```

Add 2 files to Index [palette.css, palette.js]
```html
<head>
	<link rel="stylesheet" href="Palette/css/palette.css">
<head>
<body>
	<palette></palette>
	<script src="Palette/palette.js"></script>
</body>
```


Edit and run Sass .bat file:
```
	double-click "sass.bat"
```

Edit: 

Some bugs when you rapidly scroll -- added bottom reset panel.
