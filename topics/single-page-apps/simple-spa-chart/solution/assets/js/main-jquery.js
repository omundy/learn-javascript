/* main.js file for JS single page application */

// THE OLD JQUERY VERSION

// global object to store each answer
let answers = {
	red: 0,
	green: 0,
	blue: 0,
};

// display the view
function displayView(view, callback) {
	console.log(window.location.hash);
	// change the page hash
	window.location.hash = `${view}`;
	// load and insert the remote html page
	$("#main").load(`views/${view.replace("#", "")}.html`, function () {
		if (callback) callback();
	});
}

// on page load, if there is a hash...
if (window.location.hash) {
	// load that page
	displayView(window.location.hash);
} else {
	// or load intro page by default
	displayView("intro");
}

// events for the nav
$(document).on("click", "#intro", function () {
	displayView("intro");
});
$(document).on("click", "#vote", function () {
	displayView("vote");
});
$(document).on("click", "#chart", function () {
	displayView("chart", updateChart);
});

// click event to display voting page
$(document).on("click", ".displayVote", function () {
	displayView("vote");
});

// display the chart page
$(document).on("submit", ".voteForm", function () {
	// tally results
	let answer = $("input[name=color]:checked").val();

	if (!answer) {
		alert("Please select an option");
		return;
	}
	// testing
	console.log("vote was", answer);

	// determine which answer should be incremented
	if (answer == "red") {
		answers.red++;
	} else if (answer == "green") {
		answers.green++;
	} else if (answer == "blue") {
		answers.blue++;
	}
	// testing
	console.log("answers", answers);

	// display "chart" view and pass a callback function to update the data
	displayView("chart", updateChart);

	// don't perform default form behavior
	return false;
});

function updateChart() {
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
						"rgba(255, 0, 0, 1)",
						"rgba(0, 255, 0, 1)",
						"rgba(0, 0, 255, 1)",
					],
					borderWidth: 1,
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
