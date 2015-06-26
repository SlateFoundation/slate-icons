module.exports = function(grunt) {

    grunt.initConfig({
        svgmin: {
            options: {
                plugins: [
                    { removeViewBox: false },
                    { removeUselessStrokeAndFill: false }
                ]
            },
            dist: {
                expand: true,
                cwd: 'src/',
                src: ['**/*.svg'],
                dest: 'build/'
            }
        },

        svgstore: {
            options: {
                prefix: 'icon-',
                cleanup: [
                    'version',
                    'enable-background'
                ],
                svg: {
                    hidden: true,
                    id: 'slate-icons',
                    xmlns: 'http://www.w3.org/2000/svg'
                },
                formatting: {
                    indent_size: 4
                }
            },
            default: {
                files: {
                    'build/slate-icons.svg': 'build/*.svg'
                }
            }
        }
        
    });

    grunt.loadNpmTasks('grunt-svgmin');
    grunt.loadNpmTasks('grunt-svgstore');
    grunt.registerTask('default', [ 'svgmin', 'svgstore' ]);

};