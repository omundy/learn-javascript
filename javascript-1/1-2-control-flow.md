
← [Introduction](1-0-introduction.md) | [Functions & Scope](1-3-functions-scope.md) →

[![js logo](../assets/img/logos/logo-javascript-75w.png)](../README.md)

# 1-1 Control Flow

Comparison and logical operators, conditional statements












## Web Forms


<form action="#">

  <input type="text" id="hi">
  <input type="submit">
</form>

document.addEventListener("submit", function(e){
	console.log(document.getElementById("hi").value);
  e.preventDefault();
})

https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
