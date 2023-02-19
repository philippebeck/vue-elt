module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    concat: {
      options: {
        banner: "/*! <%= pkg.name %> v<%= pkg.version %> | <%= pkg.homepage %> | <%= pkg.license %> */\n\n", 
        footer: "\n/* Author: <%= pkg.author.name %> <<%= pkg.author.email %>>\n Updated: <%= grunt.template.today('dS mmm yyyy @ h:MM:ss TT') %> */"
      },
      css: {
        src: [
          "src/lib-components/base/btn/btn.css",
          "src/lib-components/base/field/field.css",
          "src/lib-components/base/media/media.css",
          "src/lib-components/data/list/list.css",
          "src/lib-components/data/slider/slider.css",
          "src/lib-components/data/table/table.css",
          "src/lib-components/main/card/card.css",
          "src/lib-components/main/foot/foot.css",
          "src/lib-components/main/nav/nav.css",
        ], 
        dest: "dist/style.css"
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.registerTask("default", ["concat"]);
};