//Стандартный экспорт модуля в nodejs
module.exports = function (grunt) {
    var cssdir = 'css/';
    var jsdir = 'js/';
    var appName = 'style';
//    var imgdir = 'catalog/view/theme/default/image/';
//    var imgdirdist = 'catalog/view/theme/default/image/dist/';
    // Инициализация конфига GruntJS
    grunt.initConfig({

        //Настройки различных модулей GruntJS, их нужно предварительно установить через менеджер пакетов npm, или добавить в файл package.json перед запуском npm install

        //Например проверка кода javascript с помощью утилиты jshint
        //jshint: {},

        clean: {
            start: [ cssdir + "dist/uikit.css", cssdir + "dist/"+appName+".css"]
        },
        /*concat: {
            // Склеивание css-файлов
            css: {
                src: [
                    cssdir + 'search_ajax.css',
                    cssdir + 'stylesheet.css',
                    cssdir + 'site-disign-style.css'
                ],
                dest: cssdir + 'ttk.css'
            },
            // Склеивание js-файлов
			js: {
                src: [
                    jsdir + 'common.js',
                    jsdir + 'search_ajax.js'
                ],
                dest: jsdir + 'ttk.js'
            }
        },

        cssmin: {
            // Минификация
            css: {
                src: cssdir+'dist/'+appName+'.css',
                dest: cssdir + 'dist/' + appName + '.min.css'
            }/*,

			jquerycss: {
				src: 'catalog/view/javascript/jquery/ui/themes/ui-lightness/jquery-ui-1.8.16.custom.css',
                dest: 'catalog/view/javascript/jquery/ui/themes/ui-lightness/jquery-ui-1.8.16.custom.css'
			}
        },
         */

        /*uglify: {
            js: {
                src: '<%= concat.js.dest %>',
                dest: jsdir + 'ttk.min.js'
            },
            jqueryjs: {
                src: 'catalog/view/javascript/jquery/ui/jquery-ui-1.8.16.custom.min.js',
                dest: 'catalog/view/javascript/jquery/ui/jquery-ui-1.8.16.custom.min.js'
            }
        },

        imagemin: {
            png: {
                options: {
                    optimizationLevel: 7
                },
                files: [
                    {
                        // Set to true to enable the following options…
                        expand: true,
                        // cwd is 'current working directory'
                        cwd: imgdirdist,
                        src: ['***.png'],
                        dest: imgdir,
                        ext: '.png'
                    }
                ]
            }
        }*/

		less: {
            development1: {

                options: {
                    paths: [cssdir+"dist/"],
                    compress: false,
                    cleancss: false,
                    sourceMap: true,
                    outputSourceFiles: true,
                    sourceMapFilename: 'css/dist/uikit.css.map',
                    //sourceMapBasepath: '/' + cssdir + 'dist/',
                    sourceMapURL: '../../' + cssdir + 'dist/uikit.css.map'
                },
                files: {
                    "css/dist/uikit.css": "css/source/less/uikit.less"
                }
            },
            development2: {

                options: {
                    paths: [cssdir+"dist/"],
                    compress: false,
                    cleancss: false,
                    sourceMap: true,
                    outputSourceFiles: true,
                    sourceMapFilename: 'css/dist/style.css.map',
                    //sourceMapBasepath: '/' + cssdir + 'dist/',
                    sourceMapURL: '../../' + cssdir + 'dist/style.css.map'
                },
                files: {
                    "css/dist/style.css": "css/source/"+appName+".less"
                }
            }
        },

		watch: {
			css: {
			  files: [cssdir+'source/less/*.less', cssdir+'source/less/core/*.less', cssdir+'source/less/components/*.less', cssdir+'source/'+appName+'.less'],
			  tasks: ['clean:start', 'less:development1', 'less:development2']
			}
		  }

    });

    /*grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');*/
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    //grunt.loadNpmTasks('grunt-contrib-cssmin');
	//grunt.loadNpmTasks('grunt-ftp-deploy');

    //grunt.registerTask('images', ['imagemin:png']);


    //grunt.registerTask('jq', ['cssmin:jquerycss','uglify:jqueryjs']);



    //Эти задания будут выполнятся сразу же когда вы в консоли напечатание grunt, и нажмете Enter
    grunt.registerTask('default', ['clean:start', 'less:development1', 'less:development2']);
};