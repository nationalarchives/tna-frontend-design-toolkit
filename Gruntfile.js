module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                files: {
                    'dist/css/<%= pkg.name %>.<%= pkg.version %>.css': 'scss/tna-toolkit.scss'
                }
            }
        },
        cssmin: {
            options: {
                sourceMap: true
            },
            target: {
                files: {
                    'dist/css/<%= pkg.name %>.<%= pkg.version %>.min.css': ['dist/css/<%= pkg.name %>.<%= pkg.version %>.css']
                }
            }
        },
        copy: {
            main: {
                files: [{
                    expand: false,
                    src: 'node_modules/highlight.js/styles/github.css',
                    dest: 'css/github.css'
                }]
            }
        },
        watch: {
            css: {
                files: 'scss/**/*.scss',
                tasks: ['sass', 'cssmin', 'copy']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // Default task(s).
    grunt.registerTask('default', ['sass', 'cssmin', 'copy', 'watch']);

};
