
#  Data Visualization
Data visualization with Javascript

#### Contents

<!-- TOC depthFrom:2 depthTo:3 withLinks:1 updateOnSave:1 orderedList:0 -->

- [Tutorials](#tutorials)
	- [D3 - Books & Tutorials](#d3-books-tutorials)
	- [Chart.js Docs, Books & Tutorials](#chartjs-docs-books-tutorials)
- [FAQ & Tips](#faq-tips)
	- [D3 vs. Chart.js](#d3-vs-chartjs)

<!-- /TOC -->



## Inspiration


https://flowingdata.com/




## Tutorials

### D3 - Books & Tutorials
- [d3js.org](https://d3js.org/)
- [Interactive Data Visualization for the Web, 2nd Ed.](https://alignedleft.com/work/d3-book-2e) by Scott Murray [code](https://github.com/scotthmurray/d3-book)
- [D3 in Depth](https://www.d3indepth.com/introduction/)
- [TutorialsTeacher](https://www.tutorialsteacher.com/d3js)

### Chart.js Docs, Books & Tutorials
- [chartjs.org](https://www.chartjs.org/)
- André Gardi [How to use Chart.js](https://javascript.plainenglish.io/exploring-chart-js-e3ba70b07aa4) (2018)







1. Create a [scale](https://www.tutorialsteacher.com/d3js/scales-in-d3) based on the type of data then use that to make the [axis](https://www.tutorialsteacher.com/d3js/axes-in-d3). Scale is essentially a map function, where you have input range (domain) and output range (actually called “range”) which you can reuse to “map” values in your data to positions in pixels in your graph.





#### Samples

- The Tally Saves the Internet [Leaderboard](https://tallysavestheinternet.com/leaderboard#month) and [Player Profiles](https://tallysavestheinternet.com/profile/grumpyprinter37#month) use Chart.js
- Illuminus.io [Risk Detection tool](https://illuminus.io/app/en/sample/load_data) uses Chart.js
- [Reducing Uncertainty](https://reducinguncertainty.org/) uses D3 to chart the margin of errors in census data









## FAQ & Tips


### D3 vs. Chart.js
- While many charting libraries like [Chart.js](https://www.chartjs.org/) provide ready-made charts, [D3](https://d3js.org/) consists of a large set of building blocks to create custom charts, maps, and any other interactive visualization.
- Creating [a bar chart with Chart.js](https://codepen.io/createwithdata/pen/axgoaQ?editors=1010) is just a few lines of code, but your options are limited to changing the data, basic CSS rules, and any options Chart.js provides ([documentation](https://www.chartjs.org/docs/)).
- D3 requires more overhead to learn, as well as lines of code [to create a similar chart](https://www.tutorialsteacher.com/d3js/create-bar-chart-using-d3js). However one has considerably more options to create specialized visualizations with D3.
- In short, use Chart.js if you are creating basic charts using the [samples they provide](https://www.chartjs.org/samples/latest/), and D3 for everything else.
