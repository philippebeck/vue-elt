module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    concat: {
      btn: {
        src: [
          "components/elements/src/btn/btn-template.html",
          "components/elements/src/btn/btn-script.vue",
          "components/elements/src/btn/btn-var-style.css",
          "components/elements/src/btn/btn-scoped-style.vue",
        ], 
        dest: "components/elements/BtnElt.vue"
      },
      field: {
        src: [
          "components/elements/src/field/field-template.html",
          "components/elements/src/field/field-script.vue",
          "components/elements/src/field/field-var-style.css",
          "components/elements/src/field/field-scoped-style.vue",
        ], 
        dest: "components/elements/FieldElt.vue"
      },
      media: {
        src: [
          "components/elements/src/media/media-template.html",
          "components/elements/src/media/media-script.vue",
          "components/elements/src/media/media-var-style.css",
          "components/elements/src/media/media-scoped-style.vue",
        ], 
        dest: "components/elements/MediaElt.vue"
      },
      list: {
        src: [
          "components/elements/src/list/list-template.html",
          "components/elements/src/list/list-script.vue",
          "components/elements/src/list/list-var-style.css",
          "components/elements/src/list/list-scoped-style.vue",
        ], 
        dest: "components/elements/ListElt.vue"
      },
      slider: {
        src: [
          "components/elements/src/slider/slider-template.html",
          "components/elements/src/slider/slider-script.vue",
          "components/elements/src/slider/slider-var-style.css",
          "components/elements/src/slider/slider-scoped-style.vue",
        ], 
        dest: "components/elements/SliderElt.vue"
      },
      table: {
        src: [
          "components/elements/src/table/table-template.html",
          "components/elements/src/table/table-script.vue",
          "components/elements/src/table/table-var-style.css",
          "components/elements/src/table/table-scoped-style.vue",
        ], 
        dest: "components/elements/TableElt.vue"
      },
      card: {
        src: [
          "components/elements/src/card/card-template.html",
          "components/elements/src/card/card-script.vue",
          "components/elements/src/card/card-var-style.css",
          "components/elements/src/card/card-scoped-style.vue",
        ], 
        dest: "components/elements/CardElt.vue"
      },
      foot: {
        src: [
          "components/elements/src/foot/foot-template.html",
          "components/elements/src/foot/foot-script.vue",
          "components/elements/src/foot/foot-var-style.css",
          "components/elements/src/foot/foot-scoped-style.vue",
        ], 
        dest: "components/elements/FootElt.vue"
      },
      nav: {
        src: [
          "components/elements/src/nav/nav-template.html",
          "components/elements/src/nav/nav-script.vue",
          "components/elements/src/nav/nav-var-style.css",
          "components/elements/src/nav/nav-scoped-style.vue",
        ], 
        dest: "components/elements/NavElt.vue"
      },
      style: {
        src: [
          "node_modules/animadio/dist/style.css",
          "components/elements/src/btn/btn-var-style.css",
          "components/elements/src/field/field-var-style.css",
          "components/elements/src/media/media-var-style.css",
          "components/elements/src/list/list-var-style.css",
          "components/elements/src/slider/slider-var-style.css",
          "components/elements/src/table/table-var-style.css",
          "components/elements/src/card/card-var-style.css",
          "components/elements/src/foot/foot-var-style.css",
          "components/elements/src/nav/nav-var-style.css",
        ], 
        dest: "dist/style.css"
      },
    }
  });

  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.registerTask("default", ["concat"]);
};