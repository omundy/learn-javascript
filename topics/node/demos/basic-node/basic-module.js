// Create a module that returns date and time formatted as ISO:
exports.dateTimeISO = function () {
	return new Date().toISOString();
};
