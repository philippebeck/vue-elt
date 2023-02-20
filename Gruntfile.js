module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    concat: {
      btn: {
        src: [
          "src/lib-components/base/btn/btn-template.html",
          "src/lib-components/base/btn/btn-script.vue",
          "src/lib-components/base/btn/btn-var-style.css",
          "src/lib-components/base/btn/btn-scoped-style.vue",
        ], 
        dest: "src/lib-components/base/BtnElt.vue"
      },
      field: {
        src: [
          "src/lib-components/base/field/field-template.html",
          "src/lib-components/base/field/field-script.vue",
          "src/lib-components/base/field/field-var-style.css",
          "src/lib-components/base/field/field-scoped-style.vue",
        ], 
        dest: "src/lib-components/base/FieldElt.vue"
      },
      media: {
        src: [
          "src/lib-components/base/media/media-template.html",
          "src/lib-components/base/media/media-script.vue",
          "src/lib-components/base/media/media-var-style.css",
          "src/lib-components/base/media/media-scoped-style.vue",
        ], 
        dest: "src/lib-components/base/MediaElt.vue"
      },
      list: {
        src: [
          "src/lib-components/data/list/list-template.html",
          "src/lib-components/data/list/list-script.vue",
          "src/lib-components/data/list/list-var-style.css",
          "src/lib-components/data/list/list-scoped-style.vue",
        ], 
        dest: "src/lib-components/data/ListElt.vue"
      },
      slider: {
        src: [
          "src/lib-components/data/slider/slider-template.html",
          "src/lib-components/data/slider/slider-script.vue",
          "src/lib-components/data/slider/slider-var-style.css",
          "src/lib-components/data/slider/slider-scoped-style.vue",
        ], 
        dest: "src/lib-components/data/SliderElt.vue"
      },
      table: {
        src: [
          "src/lib-components/data/table/table-template.html",
          "src/lib-components/data/table/table-script.vue",
          "src/lib-components/data/table/table-var-style.css",
          "src/lib-components/data/table/table-scoped-style.vue",
        ], 
        dest: "src/lib-components/data/TableElt.vue"
      },
      card: {
        src: [
          "src/lib-components/main/card/card-template.html",
          "src/lib-components/main/card/card-script.vue",
          "src/lib-components/main/card/card-var-style.css",
          "src/lib-components/main/card/card-scoped-style.vue",
        ], 
        dest: "src/lib-components/main/CardElt.vue"
      },
      foot: {
        src: [
          "src/lib-components/main/foot/foot-template.html",
          "src/lib-components/main/foot/foot-script.vue",
          "src/lib-components/main/foot/foot-var-style.css",
          "src/lib-components/main/foot/foot-scoped-style.vue",
        ], 
        dest: "src/lib-components/main/FootElt.vue"
      },
      nav: {
        src: [
          "src/lib-components/main/nav/nav-template.html",
          "src/lib-components/main/nav/nav-script.vue",
          "src/lib-components/main/nav/nav-var-style.css",
          "src/lib-components/main/nav/nav-scoped-style.vue",
        ], 
        dest: "src/lib-components/main/NavElt.vue"
      },
      style: {
        src: [
          "src/lib-components/base/btn/btn-var-style.css",
          "src/lib-components/base/field/field-var-style.css",
          "src/lib-components/base/media/media-var-style.css",
          "src/lib-components/data/list/list-var-style.css",
          "src/lib-components/data/slider/slider-var-style.css",
          "src/lib-components/data/table/table-var-style.css",
          "src/lib-components/main/card/card-var-style.css",
          "src/lib-components/main/foot/foot-var-style.css",
          "src/lib-components/main/nav/nav-var-style.css",
        ], 
        dest: "dist/style.css"
      },
    }
  });

  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.registerTask("default", ["concat"]);
};