// require the package
var CronJob = require('cron').CronJob;
// create a new instance
var job = new CronJob(
	'* * * * * *',
	function() {
		console.log('The local time is: '+ new Date().toLocaleString());
	},
	null, true, 'America/New_York'
);