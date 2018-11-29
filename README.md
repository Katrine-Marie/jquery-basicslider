# jQuery Basicslider Plugin

## How To Use
Add `<link rel="stylesheet" href="PATH_TO_PLUGIN/reset.css">´ and ´<link rel="stylesheet" href="PATH_TO_PLUGIN/basicslider.css">` to the `HEAD` section.

Add a link to jQuery (eg.: `<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>`) before the closing `BODY` tag.

After jQuery, insert the following code:
```
<script>
  $(function() {
    $('#basic-slider').basicslider();
  });
</script>
```

## Options
You have two options, which you can set when initializing the plugin. One is the speed of the slide animation, and the other is the length of the pause between slide animations (ie.: How long each slide is visible).

These can be set as follows (shown with default values):
```
$(function() {
  $('#basic-slider').basicslider({
    animationSpeed: 1000,
    pause: 3000
  });
});
```

## Example markup
For a full example file, see the `/demo` folder. 

Here's a sneakpeak:
```
<div id="basic-slider">
  <ul class="slides">
    <li class="slide"> <img src="http://fjordstudio.dk/assets/img/IMG_0316.jpg"> </li>
    <li class="slide">Slide 2</li>
    <li class="slide">Slide 3</li>
    <li class="slide">Slide 4</li>
    <li class="slide"><img src="http://fjordstudio.dk/assets/img/IMG_4400.jpg"></li>
    <li class="slide">Slide 6</li>
  </ul>
</div>
```

## About the functionality
The slider fits 100% of the container it is places in, and scales accordingly.

On hover, the slider pauses to allow the user more time to view the content. Otherwise it slides automatically.
