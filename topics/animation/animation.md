<!-- paginate: true -->

← [Learn Javascript](../../)

<a href="../../"><img width="150" src="../../assets/img/logos/logo-javascript-150w.png"></a>

# Animation

Creating movement using CSS and JS

<span class="slides-small"><a href="slides.html">slides</a> | <a href="animation.md">md</a></span>

<!--
Presentation comments ...
-->






---

## CSS Transitions 

<div class="twocolumn">
<div class="col">

<a href="https://web.dev/learn/css/transitions" target="_blank">CSS transitions</a> let you to change property values smoothly, over a given duration.

The below `div` will expand to 100% of its container over 2 seconds when you mouse over it (see code).

<!-- EXAMPLE -->
<style>
.cssTransitions {
  width: 10%;
  height: 100px;
  background-color: red;
  transition: width 2s;
}
.cssTransitions:hover {
  width: 100%;
}
</style>
<div class="cssTransitions"></div> 
<!-- \EXAMPLE -->

</div>
<div class="col">

```css
div {
  width: 10%;
  height: 100px;
  background-color: red;
  transition: width 2s;
}
div:hover {
  width: 100%;
}
```
<div class="caption slides-small">
    <a href="https://www.w3schools.com/css/tryit.asp?filename=trycss3_transition1" target="_blank">W3Schools</a>
</div>

</div>
</div>






---

## CSS Animation

<div class="twocolumn">
<div class="col">

<a href="https://web.dev/learn/css/animations" target="_blank">CSS animations</a> let you apply several property values across multiple points ("keyframes") in time.

The below `div` will move to several positions on the screen, and then return to its origin per the keyframes in the code sample.

<!-- EXAMPLE -->
<style>
.cssAnimation {
  width: 30px;
  height: 30px;
  background-color: red;
  position: relative;
  animation-name: dontBeASquare;
  animation-duration: 4s;
}
@keyframes dontBeASquare {
  0%   { left:0px; top:0px; }
  25%  { left:0px; top:-200px; }
  50%  { left:200px; top:-200px; }
  75%  { left:200px; top:0px; }
  100% { left:0px; top:0px; }
}
</style>
<div class="cssAnimation"></div> 
<script>
let cssAnimation = document.querySelector(".cssAnimation");
cssAnimation.addEventListener("click", function() {
    restartAnimation(cssAnimation,"dontBeASquare");
});
function restartAnimation(element, animName) {
  element.style.animationName = "none";
  requestAnimationFrame(function() { // Ensure the browser processes the change
    element.style.animationName = animName; 
  });
}
</script>
<!-- \EXAMPLE -->

</div>
<div class="col">

```css
div {
  width: 30px;
  height: 30px;
  background-color: red;
  position: relative;
  animation-name: dontBeASquare;
  animation-duration: 4s;
}
@keyframes dontBeASquare {
  0%   { left:0px; top:0px; }
  25%  { left:200px; top:0px; }
  50%  { left:200px; top:200px; }
  75%  { left:0px; top:200px; }
  100% { left:0px; top:0px; }
}
```
<div class="caption slides-small">
    <a href="https://www.w3schools.com/css/tryit.asp?filename=trycss3_animation3" target="_blank">W3Schools</a>
</div>

</div>
</div>




---

## CSS animation frameworks

There are several CSS frameworks dedicated to animation.

- https://animista.net/
- https://animate.style/
- https://animxyz.com/



---

<div class="twocolumn">
<div class="col">

## Using Javascript

Fundamentally, to animate is to *change properties over time*—something that Javascript can also do natively!

<!-- EXAMPLE -->
<style>
.jsAnimation {
  width: 30px;
  height: 30px;
  background-color: red;
  border-radius: 50%;
  position: relative;
}
</style>
<div class="jsAnimation"></div> 
<script>
// <![CDATA[  
let ele = document.querySelector(".jsAnimation");
let leftPos = 0; // starting position
function move(timestamp){
  leftPos += 5;
  ele.style.left = leftPos + 'px';
  console.log(ele.style.left)
  if (leftPos > window.innerWidth)
    leftPos = -100;
  // continue animating
  requestAnimationFrame(move);
}
// start the animation
requestAnimationFrame(move);
// ]]>
</script>
<!-- \EXAMPLE -->

The circle moves to the right by n pixels until its position reaches the width of the window and resets using Javascript and <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame" target="_blank">requestAnimationFrame()</a>

</div>
<div class="col">

```js
let ele = document.querySelector('div');
let leftPos = 0; // starting position
function move(timestamp){
  leftPos += 5;
  ele.style.left = leftPos + 'px';
  console.log(ele.style.left)
  if (leftPos > window.innerWidth)
    leftPos = -100;
  // continue animating
  requestAnimationFrame(move);
}
// start the animation
requestAnimationFrame(move);
```

</div>
</div>






--- 

## [Anime.js](https://animejs.com/)

Perhaps the most capable free JS framework available. My demos ([Bouncing ball](./demos/animejs-bouncing-ball/) and [Curtain transitions](./demos/animejs-curtain-transitions/)) are pale when compared to the examples in the <a href="https://animejs.com/documentation/" target="_blank">docs</a> and others you can find on <a href="https://codepen.io/search/pens?q=anime.js" target="_blank">codepen</a>

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="oZNYXB" data-pen-title="Anime.js v2.0 logo animation" data-user="juliangarnier" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
    <span>See the Pen <a href="https://codepen.io/juliangarnier/pen/oZNYXB">
    Anime.js v2.0 logo animation</a> by Julian Garnier (<a href="https://codepen.io/juliangarnier">@juliangarnier</a>)
    on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://public.codepenassets.com/embed/index.js"></script>



---

## Scroll Animation

Listed (I believe) by complexity, ascending...
 
- [AOS](https://michalsnik.github.io/aos/) (Animate On Scroll Library) [Github](https://github.com/michalsnik/aos), [Codepen](https://codepen.io/owenmundy/pen/NPNqERv?editors=1111)
- [ScrollMagic](https://scrollmagic.io/) - see install on [Github](https://github.com/janpaepke/ScrollMagic), [Codepen](https://codepen.io/michalsnik/pen/jrOYVO?editors=1000)
- LENIS [Smooth Scroll](https://lenis.darkroom.engineering/)
- GSAP (GreenSock Animation Platform) has [scroll features](https://gsap.com/scroll/) - [Codepen](https://codepen.io/owenmundy/pen/LENMedo?editors=0111) has many [demos](https://codepen.io/collection/DkvGzg)
