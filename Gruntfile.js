module.exports = function(grunt) {
	var pkgJson = require('./package.json');
	// console.log(pkgJson);

	grunt.initConfig({
		jshint: {
			files: ['Gruntfile.js'
				// , 'src/**/*.js', 'test/**/*.js'
			],
			options: {
				jshintrc: true // tell JSHint to search for .jshintrc
			}
		},
		md2html: {
			one_file: {
				options: {
					layout: "assets/md2html/templates/bootstrap.html",
					templateData: {
						basePath: "",
						author: pkgJson.author,
						projectTitle: pkgJson.title,
						filename: function(src) {
							return src[0].match(/\/(.*).md/);
						},
					},
				},
				files: [{
					src: ['README.md'],
					dest: 'index.html'
				}]
			},
			multiple_files: {
				options: {
					layout: "assets/md2html/templates/bootstrap.html",
					templateData: {
						basePath: "../",
						author: pkgJson.author,
						projectTitle: pkgJson.title,
						filename: function(src) {
							return src[0].match(/\/(.*).md/);
						},
					},
				},
				files: [{
					expand: true,
					cwd: 'topics',
					src: ['*/*.md'],
					dest: 'www', // destination directory
					ext: '.html' // new file ext
				}]
			}
		},
		watch: {
			configFiles: {
				files: ['Gruntfile.js'], // watch/validate grunt config
				tasks: ['jshint'],
				options: {
					reload: true
				}
			},
			grunt: {
				files: ['Gruntfile.js', 'topics/*/*.md', 'assets/css/*', 'assets/md2html/templates/*'],
				tasks: ['shell', 'md2html', 'build_slides', 'alldone']
			},
		},
		shell: {
			command: [
				"echo [🙌 running grunt-shell]",
				// "touch hello.txt", //test
				// "marp", // call marp for slides

				// "./build.sh"

				// "sh run_pandoc.sh"
			].join(' && ')
		}
	});

	// because marp doesn't let you specify an output directory
	// see build_marp.sh for more
	grunt.task.registerTask('build_slides', '', function() {
		var exec = require('child_process').execSync;
		var result = exec("./build.sh", {
			encoding: 'utf8'
		});
		grunt.log.writeln(result);
	});

	// a custom task
	grunt.task.registerTask('alldone', 'run when finished', function() {
		console.log("🔥 all done");
	});


	// enable plugins, register tasks
	grunt.loadNpmTasks('grunt-md2html');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-shell');
	grunt.registerTask('default', ['jshint', 'md2html', 'build_slides', 'alldone']);
};
