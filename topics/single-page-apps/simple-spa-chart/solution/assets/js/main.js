/* main.js file for (vanilla) JS single page application */

// global object to store each answer
let answers = {
	red: 0,
	green: 0,
	blue: 0,
};

// on page load, if there is a hash in the url...
if (window.location.hash) {
	// load that page
	displayView(window.location.hash);
} else {
	// or load intro page by default
	displayView("intro");
}

// add listener to entire page
document.body.addEventListener("click", function (e) {
	// then determine the view to load by the target clicked
	if (e.target.id == "intro") {
		displayView("intro");
	} else if (e.target.id == "vote") {
		displayView("vote");
	} else if (e.target.id == "chart") {
		displayView("chart");
	}
});

// functions to run after each view is loaded
let onViewLoaded = {
	intro: () => {
		console.log("Intro page loaded");
		document.querySelector(".displayVote").addEventListener("click", () => {
			displayView("vote");
		});
	},
	vote: () => {
		console.log("Vote page loaded");
		document.querySelector(".voteForm").addEventListener("submit", (e) => {
			e.preventDefault();
			submitVote();
		});
	},
	chart: () => {
		console.log("Chart page loaded");
		onDisplayChart();
		document.querySelector(".displayVote").addEventListener("click", () => {
			displayView("vote");
		});
	},
};

// display the view
async function displayView(view) {
	// remove hash symbol (if found)
	view = view.replace("#", "");
	// console.log(`displayView() view=${view}`);
	// fetch, then insert the remote html page
	let url = `views/${view.replace("#", "")}.html`;
	let page = await fetchHtmlAsText(url);
	document.querySelector("#main").innerHTML = page;
	// callbacks
	onViewLoaded[view]();
	// update the page hash to reflect new page
	window.location.hash = `${view}`;
}

// reference https://stackoverflow.com/a/52349344/441878
async function fetchHtmlAsText(url) {
	const response = await fetch(url);
	return await response.text();
}

// tally the chart
function submitVote() {
	// tally results
	let answer = document.querySelector("input[name=color]:checked").value;

	if (!answer) {
		alert("Please select an option");
		return;
	}
	// testing
	// console.log("vote was", answer);
	// determine which answer should be incremented
	if (answer == "red") {
		answers.red++;
	} else if (answer == "green") {
		answers.green++;
	} else if (answer == "blue") {
		answers.blue++;
	}
	console.log("answers", answers);
	displayView("chart");
	// don't perform default form behavior
	return false;
}

function onDisplayChart() {
	// get a reference to the canvas where the chart will appear
	let ctx = document.getElementById("myChart").getContext("2d");
	// create a new chart and supply the appropriate settings
	let myChart = new Chart(ctx, {
		type: "horizontalBar",
		data: {
			labels: ["Red", "Green", "Blue"],
			datasets: [
				{
					label: "# of Votes",
					data: [answers.red, answers.green, answers.blue],
					backgroundColor: [
						"rgba(255, 0, 0, 0.3)",
						"rgba(0, 255, 0, 0.3)",
						"rgba(0, 0, 255, 0.3)",
					],
					borderColor: [
						"rgba(255, 0, 0, 0.5)",
						"rgba(0, 255, 0, 0.5)",
						"rgba(0, 0, 255, 0.5)",
					],
					borderWidth: 2,
				},
			],
		},
		options: {
			scales: {
				xAxes: [
					{
						ticks: {
							beginAtZero: true,
						},
					},
				],
			},
		},
	});
}
