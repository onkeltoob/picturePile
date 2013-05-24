jQuery plugin picturePile
===========

This jQuery plugin creates a pile of images from a list containing one list item for each image including some additional data. It's heavily untested, but at least it works for me in Chrome. I will do some further testing, of course. Or maybe. Here's the basics:
In your HTML you need a list (ordered, unordered, doesn't matter) containing the data items
`
<ul class="picturePile">
  <li data-href="http://example.com/1" data-img="http://lorempixel.com/300/250" data-text="First placeholder image"></li>
	<li data-href="http://example.com/2" data-img="http://lorempixel.com/300/250" data-text="Second placeholder image"></li>
	<li data-href="http://example.com/3" data-img="http://lorempixel.com/300/250" data-text="Third placeholder image"></li>
	<li data-href="http://example.com/4" data-img="http://lorempixel.com/300/250" data-text="And so on..."></li>
</ul>
`
