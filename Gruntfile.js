module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    concat: {
      btn: {
        src: [
          "src/lib-components/src/btn/btn-template.html",
          "src/lib-components/src/btn/btn-script.vue",
          "src/lib-components/src/btn/btn-var-style.css",
          "src/lib-components/src/btn/btn-scoped-style.vue",
        ], 
        dest: "src/lib-components/BtnElt.vue"
      },
      field: {
        src: [
          "src/lib-components/src/field/field-template.html",
          "src/lib-components/src/field/field-script.vue",
          "src/lib-components/src/field/field-var-style.css",
          "src/lib-components/src/field/field-scoped-style.vue",
        ], 
        dest: "src/lib-components/FieldElt.vue"
      },
      media: {
        src: [
          "src/lib-components/src/media/media-template.html",
          "src/lib-components/src/media/media-script.vue",
          "src/lib-components/src/media/media-var-style.css",
          "src/lib-components/src/media/media-scoped-style.vue",
        ], 
        dest: "src/lib-components/MediaElt.vue"
      },
      list: {
        src: [
          "src/lib-components/src/list/list-template.html",
          "src/lib-components/src/list/list-script.vue",
          "src/lib-components/src/list/list-var-style.css",
          "src/lib-components/src/list/list-scoped-style.vue",
        ], 
        dest: "src/lib-components/ListElt.vue"
      },
      slider: {
        src: [
          "src/lib-components/src/slider/slider-template.html",
          "src/lib-components/src/slider/slider-script.vue",
          "src/lib-components/src/slider/slider-var-style.css",
          "src/lib-components/src/slider/slider-scoped-style.vue",
        ], 
        dest: "src/lib-components/SliderElt.vue"
      },
      table: {
        src: [
          "src/lib-components/src/table/table-template.html",
          "src/lib-components/src/table/table-script.vue",
          "src/lib-components/src/table/table-var-style.css",
          "src/lib-components/src/table/table-scoped-style.vue",
        ], 
        dest: "src/lib-components/TableElt.vue"
      },
      card: {
        src: [
          "src/lib-components/src/card/card-template.html",
          "src/lib-components/src/card/card-script.vue",
          "src/lib-components/src/card/card-var-style.css",
          "src/lib-components/src/card/card-scoped-style.vue",
        ], 
        dest: "src/lib-components/CardElt.vue"
      },
      foot: {
        src: [
          "src/lib-components/src/foot/foot-template.html",
          "src/lib-components/src/foot/foot-script.vue",
          "src/lib-components/src/foot/foot-var-style.css",
          "src/lib-components/src/foot/foot-scoped-style.vue",
        ], 
        dest: "src/lib-components/FootElt.vue"
      },
      nav: {
        src: [
          "src/lib-components/src/nav/nav-template.html",
          "src/lib-components/src/nav/nav-script.vue",
          "src/lib-components/src/nav/nav-var-style.css",
          "src/lib-components/src/nav/nav-scoped-style.vue",
        ], 
        dest: "src/lib-components/NavElt.vue"
      },
      style: {
        src: [
          "node_modules/animadio/dist/style.css",
          "src/lib-components/src/btn/btn-var-style.css",
          "src/lib-components/src/field/field-var-style.css",
          "src/lib-components/src/media/media-var-style.css",
          "src/lib-components/src/list/list-var-style.css",
          "src/lib-components/src/slider/slider-var-style.css",
          "src/lib-components/src/table/table-var-style.css",
          "src/lib-components/src/card/card-var-style.css",
          "src/lib-components/src/foot/foot-var-style.css",
          "src/lib-components/src/nav/nav-var-style.css",
        ], 
        dest: "dist/style.css"
      },
    }
  });

  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.registerTask("default", ["concat"]);
};