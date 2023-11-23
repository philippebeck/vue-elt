module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    concat: {
      btn: {
        src: [
          "src/lib-components/elements/src/btn/btn-template.html",
          "src/lib-components/elements/src/btn/btn-script.vue",
          "src/lib-components/elements/src/btn/btn-var-style.css",
          "src/lib-components/elements/src/btn/btn-scoped-style.vue",
        ], 
        dest: "src/lib-components/elements/BtnElt.vue"
      },
      field: {
        src: [
          "src/lib-components/elements/src/field/field-template.html",
          "src/lib-components/elements/src/field/field-script.vue",
          "src/lib-components/elements/src/field/field-var-style.css",
          "src/lib-components/elements/src/field/field-scoped-style.vue",
        ], 
        dest: "src/lib-components/elements/FieldElt.vue"
      },
      media: {
        src: [
          "src/lib-components/elements/src/media/media-template.html",
          "src/lib-components/elements/src/media/media-script.vue",
          "src/lib-components/elements/src/media/media-var-style.css",
          "src/lib-components/elements/src/media/media-scoped-style.vue",
        ], 
        dest: "src/lib-components/elements/MediaElt.vue"
      },
      list: {
        src: [
          "src/lib-components/elements/src/list/list-template.html",
          "src/lib-components/elements/src/list/list-script.vue",
          "src/lib-components/elements/src/list/list-var-style.css",
          "src/lib-components/elements/src/list/list-scoped-style.vue",
        ], 
        dest: "src/lib-components/elements/ListElt.vue"
      },
      slider: {
        src: [
          "src/lib-components/elements/src/slider/slider-template.html",
          "src/lib-components/elements/src/slider/slider-script.vue",
          "src/lib-components/elements/src/slider/slider-var-style.css",
          "src/lib-components/elements/src/slider/slider-scoped-style.vue",
        ], 
        dest: "src/lib-components/elements/SliderElt.vue"
      },
      table: {
        src: [
          "src/lib-components/elements/src/table/table-template.html",
          "src/lib-components/elements/src/table/table-script.vue",
          "src/lib-components/elements/src/table/table-var-style.css",
          "src/lib-components/elements/src/table/table-scoped-style.vue",
        ], 
        dest: "src/lib-components/elements/TableElt.vue"
      },
      card: {
        src: [
          "src/lib-components/elements/src/card/card-template.html",
          "src/lib-components/elements/src/card/card-script.vue",
          "src/lib-components/elements/src/card/card-var-style.css",
          "src/lib-components/elements/src/card/card-scoped-style.vue",
        ], 
        dest: "src/lib-components/elements/CardElt.vue"
      },
      foot: {
        src: [
          "src/lib-components/elements/src/foot/foot-template.html",
          "src/lib-components/elements/src/foot/foot-script.vue",
          "src/lib-components/elements/src/foot/foot-var-style.css",
          "src/lib-components/elements/src/foot/foot-scoped-style.vue",
        ], 
        dest: "src/lib-components/elements/FootElt.vue"
      },
      nav: {
        src: [
          "src/lib-components/elements/src/nav/nav-template.html",
          "src/lib-components/elements/src/nav/nav-script.vue",
          "src/lib-components/elements/src/nav/nav-var-style.css",
          "src/lib-components/elements/src/nav/nav-scoped-style.vue",
        ], 
        dest: "src/lib-components/elements/NavElt.vue"
      },
      style: {
        src: [
          "node_modules/animadio/dist/style.css",
          "src/lib-components/elements/src/btn/btn-var-style.css",
          "src/lib-components/elements/src/field/field-var-style.css",
          "src/lib-components/elements/src/media/media-var-style.css",
          "src/lib-components/elements/src/list/list-var-style.css",
          "src/lib-components/elements/src/slider/slider-var-style.css",
          "src/lib-components/elements/src/table/table-var-style.css",
          "src/lib-components/elements/src/card/card-var-style.css",
          "src/lib-components/elements/src/foot/foot-var-style.css",
          "src/lib-components/elements/src/nav/nav-var-style.css",
        ], 
        dest: "dist/style.css"
      },
    }
  });

  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.registerTask("default", ["concat"]);
};