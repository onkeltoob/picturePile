/*
* jQuery Toob disCo
* http://tobias-reinhardt.de
*
* Copyright 2013, Tobias Reinhardt
* Free to use and abuse under the MIT license.
* http://www.opensource.org/licenses/mit-license.php
* 
* May 2013
*
* This plugin provides functionality to pile up pictures and make them look 
* like they were taken with one of those old instant cameras. The images can be links to web pages, too.
* Don't blame me for anything, I simply don't know any better. Or don't want to do so.
*/
(function($) {
  $.extend($.fn, {
		picturePile: function(options) {
			var settings = $.extend({
				// The maximum number of degrees to rotate an image to the left
				'maxRotationLeft': 5,
				// The maximum number of degrees to rotate an image to the right
				'maxRotationRight': 15,
				// The name of the data-attribute containing the target for an image that is supposed to be a link
				'targetAttributeName': 'target',
				// The name of the data-attribute containing the path to the image
				'imageAttributeName': 'image',
				// The name of the data-attribute containing the title to display on the image
				'titleAttributeName': 'title',
				// Use following width for all pictures (with zero setting no fixed width)
				'fixedWidth': 0,
				// Use following height for all pictures (with zero setting no fixed height)
				'fixedHeight': 0
			}, options);

			// Create data attributes, if settings do not start with "data-"
			settings.targetAttributeName = (!/^data\-(.)+$/.test(settings.targetAttributeName)) ? 'data-' + settings.targetAttributeName : settings.targetAttributeName;
			settings.imageAttributeName = (!/^data\-(.)+$/.test(settings.imageAttributeName)) ? 'data-' + settings.imageAttributeName : settings.imageAttributeName;
			settings.titleAttributeName = (!/^data\-(.)+$/.test(settings.titleAttributeName)) ? 'data-' + settings.titleAttributeName : settings.titleAttributeName;
			
			// Correct negative rotation values
			settings.maxRotationLeft = Math.abs(settings.maxRotationLeft);
			settings.maxRotationRight = Math.abs(settings.maxRotationRight);
			
			this.each(function() {
				$(this).addClass='picturePile'
				var container = $(this);
				
				$(this).find('li').each(function () {
					$(this).css('z-index', Math.floor(Math.random() * 1000));
				
					var figure = $(document.createElement('figure'));
					figure.css("transform", 'rotate(' + (-settings.maxRotationLeft + Math.floor(Math.random() * (settings.maxRotationLeft + settings.maxRotationRight + 1))) + 'deg)');
					
					var image = $(document.createElement('img'));
					image.attr('src', $(this).attr(settings.imageAttributeName));
					image.attr('alt', $(this).attr(settings.titleAttributeName));
					if(settings.fixedWidth>0){
						image.css('width',settings.fixedWidth + 'px');
					}
					if(settings.fixedHeight>0){
						image.css('height',settings.fixedHeight + 'px');
					}
					
					var caption = $(document.createElement('figcaption'));
					caption.text($(this).attr(settings.titleAttributeName));
					
					figure.append(image);
					figure.append(caption);
					
					if($(this).attr(settings.targetAttributeName)){
						var link = $(document.createElement('a'));
						link.attr('href', $(this).attr(settings.targetAttributeName));
						link.append(figure);
						
						$(this).append(link);
					} else {
						$(this).append(figure);
					}
				});
			});

			return this;
		}
	});
})(jQuery);
