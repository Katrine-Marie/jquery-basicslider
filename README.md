# jQuery Basicslider Plugin

## How To Use
Add `<link rel="stylesheet" href="plugin/reset.css">´ and ´<link rel="stylesheet" href="plugin/basicslider.css">` to the `HEAD` section.

Add a link to jQuery (eg.: `<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>`) before the closing `BODY` tag.

After jQuery, insert the following code:
`<script>
  $(function() {
    $('#basic-slider').basicslider();
  });
</script>`

## Example markup
`<div id="basic-slider">
  <ul class="slides">
    <li class="slide"> <img src="http://fjordstudio.dk/assets/img/IMG_0316.jpg"> </li>
    <li class="slide">Slide 2</li>
    <li class="slide">Slide 3</li>
    <li class="slide">Slide 4</li>
    <li class="slide"><img src="http://fjordstudio.dk/assets/img/IMG_4400.jpg"></li>
    <li class="slide">Slide 6</li>
  </ul>
</div>`

## About the functionality
The slider fits 100% of the container it is places in, and scales accordingly.

On hover, the slider pauses to allow the user more time to view the content. Otherwise it slides automatically.
