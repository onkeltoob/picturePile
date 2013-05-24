jQuery plugin picturePile
=========================

This jQuery plugin creates a pile of images from a list containing one list item for each image including some additional data. It's heavily untested, but at least it works for me in Chrome. I will do some further testing, of course. Or maybe.
Usage
-----
In your HTML you need a list (ordered, unordered, doesn't matter) containing the data items:
```
<ul class="picturePile">
	<li data-target="http://example.com/1" data-image="http://lorempixel.com/300/250" data-title="First placeholder image"></li>
	<li data-target="http://example.com/2" data-image="http://lorempixel.com/300/250" data-title="Second placeholder image"></li>
	<li data-target="http://example.com/3" data-image="http://lorempixel.com/300/250" data-title="Third placeholder image"></li>
	<li data-target="http://example.com/4" data-image="http://lorempixel.com/300/250" data-title="And so on..."></li>
</ul>
```
If you don't want the pictures to be links then you can just omit the ```data-target``` attribute (or leave it blank). And then there's the header part:

```
<head>
	<!-- 
		Usual header stuff (including link to jQuery) goes here. I'm aware of the discussion 
		about scripts being called within the head element or from some place at the end of 
		the page. It doesn't matter here, though.
	-->
	
	<!-- Include the plugin -->
	<script src="js/picturePile/jquery.toob.picturePile.js"></script>
	
	<!-- Link to the plugin specific stylesheet -->
	<link href="js/picturePile/jquery.toob.picturePile.css" rel="stylesheet" media="all">
	
	<!-- Call the plugin -->
	<script>
		$(document).ready(function () {
			$('.picturePile').picturePile({
				maxRotationLeft: 10,
				maxRotationRight: 10
			});
		});
	</script>
</head>
```
Settings
--------
As you can see above there are some settings (very few, in fact). Here they are (default values included):
* ```targetAttributeName: 'target'```: The name of the data attribute containing the target for an image that is supposed to be a link
* ```imageAttributeName: 'image'```: The name of the data-attribute containing the path to the image
* ```titleAttributeName: 'title'```: The name of the data-attribute containing the title to be displayed on the image
* ```maxRotationLeft': 5```: The maximum number of degrees to rotate an image to the left
* ```maxRotationRight': 5```: The maximum number of degrees to rotate an image to the right

One will probably never need the attribute name settings. I just generally like to include them in order to definately avoid naming clashes.

And that is pretty much it right now.
