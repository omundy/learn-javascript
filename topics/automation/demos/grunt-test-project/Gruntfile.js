module.exports = function (grunt) {
	// configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		watch: {
            grunt: {
				files: ['*'],
				tasks: ['shell']
			},
        },
        shell: {
			command: [
                "echo ",
				"echo 👉 NOTE: The following output is being output on save from Gruntfile.js...",
				"echo 🙌 running grunt-shell",
                "echo 🔥 another command!"
			].join(' && ')
		}
	});

	// enable plugins
	grunt.task.loadNpmTasks('grunt-shell');
    grunt.task.loadNpmTasks('grunt-contrib-watch');

	// register tasks
	grunt.registerTask("default", ["shell"]);
};
