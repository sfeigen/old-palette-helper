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
	<link rel="stylesheet" href="Palette/content/css/palette.css">
<head>
<body>
	<script src="Palette/palette.js"></script>
</body>
```

Use Directive
=======
Call <palette> as first object in body:
```html
<body>
	<palette></palette>
</body>
```

Edit and run Sass .bat file:
```sass
$dark: 		edit these...
$light: 	
$base: 		
$lightBase: 	
$accent: 	

double-click "sass.bat"
```
