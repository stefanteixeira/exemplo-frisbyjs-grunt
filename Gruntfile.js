module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      all: ["src/**/*.js"],
      options: {
        undef: true,
        globals: {
          require: true,
          module: true,
          console: true
        }
      }
    },
    jasmine_node: {
      options: {
        forceExit: true,
        match: '.',
        matchall: false,
        extensions: 'js',
        specNameMatcher: 'spec',
        jUnit: {
          report: true,
          savePath: "./build/reports/jasmine/",
          useDotNotation: true,
          consolidate: true
        }
      },
      all: ['spec/']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jasmine-node');

  grunt.registerTask("default", ["jshint", "jasmine_node"]);
};
