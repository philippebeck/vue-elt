# Vue Elt

Vue Single File Component Library

[![NPM Version](https://badgen.net/npm/v/vue-elt)](https://www.npmjs.com/package/vue-elt)
[![NPM Downloads](https://badgen.net/npm/dt/vue-elt)](https://www.npmjs.com/package/vue-elt)
[![jsDelivr Downloads](https://badgen.net/jsdelivr/hits/npm/vue-elt)](https://www.jsdelivr.com/package/npm/vue-elt)
[![GitHub Last Commit](https://badgen.net/github/last-commit/philippebeck/vue-elt)](https://github.com/philippebeck/vue-elt/commits/master)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/4734dc65c4a24319aef25e663ffd1a7e)](https://www.codacy.com/gh/philippebeck/vue-elt/dashboard)
[![Maintainability](https://api.codeclimate.com/v1/badges/5f55590e709b455b7648/maintainability)](https://codeclimate.com/github/philippebeck/vue-elt/maintainability)
[![GitHub Top Language](https://img.shields.io/github/languages/top/philippebeck/vue-elt)](https://github.com/philippebeck/vue-elt)
[![Code Size](https://img.shields.io/github/languages/code-size/philippebeck/vue-elt)](https://github.com/philippebeck/vue-elt/tree/master)

## Overview

Vue Elt is a Vue Single File Component Library, where you can find 3 families of components :
-  Base Components  
-  Data Components  
-  Main Components  

## Summary

-   [Package](#package)  
-   [CDN](#CDN)  
-   [Download](#download)  
-   [Content](#content)  
-   [Usage](#usage)  

---

## Package

NPM : `npm i vue-elt`  
Yarn : `yarn add vue-elt`  

---

## CDN 

-   Development : [https://cdn.jsdelivr.net/npm/vue-elt@0.3.0/dist/vue-elt.esm.js](https://cdn.jsdelivr.net/npm/vue-elt@0.3.0/dist/vue-elt.esm.js)  
-   Production : [https://cdn.jsdelivr.net/npm/vue-elt@0.3.0/dist/vue-elt.min.js](https://cdn.jsdelivr.net/npm/vue-elt@0.3.0/dist/vue-elt.min.js)  

---

## Download

[Latest Release](https://github.com/philippebeck/vue-elt/releases)  

`git clone https://github.com/philippebeck/vue-elt.git`  
  
---

## Content

Available SFC :  
-   **BtnElt** *(b)*  
-   **FieldElt** *(b)*  
-   **FootElt** *(m)*  
-   **ListElt** *(d)*  
-   **TableElt** *(d)*  

Upcoming SFC :  
-   **CardElt** *(m)*  
-   **ImgElt** *(b)*  
-   **NavElt** *(m)*  
-   **SliderElt** *(d)*  

---

## Usage

1.  In `main.js` of Vue3, import `vue-elt` like this : `import element from "vue-elt"`
2.  Then, add this line after creating App but before mounting : `app.use(element)` ([example](https://github.com/philippebeck/links2code/blob/master/src/main.js))
3.  Then use it in yours components like in these examples : 
    -  `<ListElt :items=items />` ([example](https://github.com/philippebeck/links2code/blob/master/src/views/HomeView.vue))  
    -  `<FieldElt id="email" />` ([example](https://github.com/philippebeck/links2code/blob/master/src/views/ContactView.vue))  
