//Check to see if you can add CSS file via Javascript in the angular directive
//Can you pass a .css file in as a dependency?

(function() {
	var app=angular.module('Palette', [ ]);

	app.directive('palette', function() {
		return {
			restrict: 'E',
			templateUrl: 'directives/Palette/content/directives/palette.html',
			controller: function($scope) {
				//variables
				var rgbString, parts, hexString, i, color, hex, textColor, r, g, b, yiq;
				//rgb->hex
				this.converter = function(color) {
					rgbString = color;
					parts = rgbString.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
					delete (parts[0]);

					for (i=1; i<=3; ++i) {
						parts[i] = parseInt(parts[i]).toString(16);
						if (parts[i].length == 1) parts[i] = '0' + parts[i];
					};
					hexString ='#'+parts.join('').toUpperCase();
					return hexString;
				};
				//hover+hex append
				this.colorHover = function() {
					$('.color').hover(function() {
						if ($(this).hasClass('expanded')) {
							$(this).animate({'width':'50px','height':'50px'}, 500);
							$(this).removeClass('expanded');
							$('.textBox').remove();
						} else {
							$(this).animate({'width':'100px','height':'50px'}, 500, function() {
								$('.textBox').remove();
								color = $(this).css("background-color");
								//convert and contrast
								hex = $scope.palette.converter(color);
								textColor = $scope.palette.contrast(hex);
								$(this).css('color', textColor);
								$(this).append("<div class='textBox'>"+hex+"</div>");
							});
							$(this).addClass('expanded');
						};
					});
				};
				//contrast text
				this.contrast = function(hex) {
					r = parseInt(hex.substr(1,2),16);
					g = parseInt(hex.substr(3,2),16);
					b = parseInt(hex.substr(5,2),16);
					yiq = ((r*299)+(g*587)+(b*114))/1000;
					return (yiq >= 128) ? 'black' : 'white';
				};
				this.clear = function() {
					$('.clear').click(function() {
						$('.textBox').remove();
						$('.color').animate({'width':'50px','height':'50px'}, 500);
					});
				};
			},
			controllerAs: 'palette'
		};		
	});
})();