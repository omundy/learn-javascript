<!-- paginate: true -->

← [Learn Javascript](../../)

<a href="../../"><img width="150" src="../../assets/img/logos/logo-javascript-150w.png"></a>

# Javascript – Data Visualization

Data visualization with Javascript







---

## Frameworks - D3 vs. Chart.js

[Chart.js](https://www.chartjs.org/) | [d3.js](https://d3js.org/)
--- | ---
Ready-made charts (like [Google Charts](https://developers.google.com/chart)) | Create custom charts, maps, and interactive visualizations
Create [a bar chart](https://codepen.io/createwithdata/pen/axgoaQ?editors=1010) with a few lines of code | More overhead to learn, [and more code to create similar charts](https://www.tutorialsteacher.com/d3js/create-bar-chart-using-d3js) 
Limited options (changing data, basic CSS, and [documentation](https://www.chartjs.org/docs/)) | More options for specialized visualizations
Great for creating basic charts like the [samples they provide](https://www.chartjs.org/samples/latest/) | D3 for everything else






---

## Frameworks - D3 & Chart.js


<div class="twocolumn">
<div class="col">

### Chart.js

Tutorials
- [chartjs.org](https://www.chartjs.org/)
- André Gardi [How to use Chart.js](https://javascript.plainenglish.io/exploring-chart-js-e3ba70b07aa4) (2018)

Examples
- The Tally Saves the Internet [Leaderboard](https://tallysavestheinternet.com/leaderboard#month) and [Player Profiles](https://tallysavestheinternet.com/profile/grumpyprinter37#month) 
- Illuminus.io [Risk Detection tool](https://illuminus.io/app/en/sample/load_data) 


</div>
<div class="col">

### D3

Tutorials
- https://d3js.org/getting-started 
- [Interactive Data Visualization for the Web, 2nd Ed.](https://alignedleft.com/work/d3-book-2e) by Scott Murray [code](https://github.com/scotthmurray/d3-book)
- [d3indepth.com](https://www.d3indepth.com/introduction/)
- [TutorialsTeacher](https://www.tutorialsteacher.com/d3js)

Examples
- [Reducing Uncertainty](https://reducinguncertainty.org/) uses D3 to chart the margin of errors in census data
- https://observablehq.com/@d3/gallery

</div>
</div>





---

## D3 Essential Knowlege

- Know what version you are using! Code examples you find online might be the wrong version and won't work. Because D3 is somewhat of a specialized project, there are changes each new version.
- D3 documentation is a pain: Github > D3 organization 


---

## D3 - Scale

- Scale is essentially a map function, where you have input range (domain) and output range (actually called “range”) which you can reuse to “map” values in your data to positions in pixels in your graph.
- Create a [scale](https://www.tutorialsteacher.com/d3js/scales-in-d3) based on the type of data then use that to make the [axis](https://www.tutorialsteacher.com/d3js/axes-in-d3). 






---

## Inspiration

- [Dear Data](http://www.dear-data.com/theproject) by [Stefanie Posavec](http://www.stefanieposavec.com/) and [Giorgia Lupi](http://giorgialupi.com/)  (2016)
- Collections
	- https://flowingdata.com/
- Mike Bostock
	- [Revenue by Music Format, 1973–2018](https://observablehq.com/@mbostock/revenue-by-music-format-1973-2018) (2020)
	- [The Wealth & Health of Nations](https://observablehq.com/@mbostock/the-wealth-health-of-nations) (2019) per-capita income, life expectancy and population of 180 nations over the last 209 years
	- [Tadpoles](https://observablehq.com/@mbostock/tadpoles) (2018) flocking example
	- [Phases of the Moon](https://observablehq.com/@mbostock/phases-of-the-moon)(2018)




