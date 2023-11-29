/* 
    main.js file for (vanilla) JS single page application 
    - This version simply hides/reveals sections of the page
*/

// global object to store each answer
let answers = {
	red: 0,
	green: 0,
	blue: 0,
};

let inputs = document.querySelectorAll("input[name=color]");

// get references to each view
let views = {
	intro: document.querySelector("#intro"),
	vote: document.querySelector("#vote"),
	chart: document.querySelector("#chart"),
};
// console.log(views); // test

// on page load, if there is a hash in the url...
if (window.location.hash) {
	// show that page
	displayView(window.location.hash);
} else {
	// or show intro page by default
	displayView("intro");
}

// add listener to entire page
document.body.addEventListener("click", function (e) {
	// console.log(e.target.classList);
	// then determine the view to display by the target clicked
	if (e.target.classList.contains("introLink")) {
		displayView("intro");
	} else if (e.target.classList.contains("voteLink")) {
		displayView("vote");
	} else if (e.target.classList.contains("chartLink")) {
		displayView("chart");
	}
});
// submit listener
document.querySelector(".voteForm").addEventListener("submit", (e) => {
    e.preventDefault();
    submitVote();
});

// display the view
async function displayView(view) {
	// remove hash symbol (if found)
	view = view.replace("#", "");
	console.log(`${view}`);

	// hide all others
	for (var key in views) {
		if (views.hasOwnProperty(key)) {
			views[key].style.display = "none";
		}
	}
	// show the selected item
	views[view].style.display = "block";
	// update the page hash to reflect new page
	window.location.hash = `${view}`;
}

// tally the chart
function submitVote() {
	// tally results
	let answer = document.querySelector("input[name=color]:checked").value;
    // return early if no answer
	if (!answer) {
		alert("Please select an option");
		return;
	}
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
    // functions to run after chart view is display
    onDisplayChart();
    // uncheck them all 
    inputs.forEach(function (ele, i) {
        if (ele.type == "radio")
            ele.checked = false;
    })
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
