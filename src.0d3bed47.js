parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"BLgO":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;const e="https://filmoteka-f211d-default-rtdb.europe-west1.firebasedatabase.app";function t(){return fetch(`${e}/watches.json`).then(e=>e.json())}var s=t;exports.default=s;
},{}],"FjzB":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;const e="https://filmoteka-f211d-default-rtdb.europe-west1.firebasedatabase.app";function t(){return fetch(`${e}/queues.json`).then(e=>e.json())}var s=t;exports.default=s;
},{}],"Xkgc":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;const e="https://filmoteka-f211d-default-rtdb.europe-west1.firebasedatabase.app";function t(){return fetch(`${e}/watches.json`,{method:"DELETE"})}var s=t;exports.default=s;
},{}],"Qg1q":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;const e="https://filmoteka-f211d-default-rtdb.europe-west1.firebasedatabase.app";function t(){return fetch(`${e}/queues.json`,{method:"DELETE"})}var s=t;exports.default=s;
},{}],"ZDl3":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;const e="https://filmoteka-f211d-default-rtdb.europe-west1.firebasedatabase.app";function t(t){return fetch(`${e}/watches/${t}.json`,{method:"DELETE"})}var s=t;exports.default=s;
},{}],"p99A":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;const e="https://filmoteka-f211d-default-rtdb.europe-west1.firebasedatabase.app";function t(t){return fetch(`${e}/queques/${t}.json`,{method:"DELETE"})}var s=t;exports.default=s;
},{}],"nD62":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;const e="https://filmoteka-f211d-default-rtdb.europe-west1.firebasedatabase.app";function t(t){return fetch(`${e}/watches.json`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(e=>e.json())}var o=t;exports.default=o;
},{}],"nVSY":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;const e="https://filmoteka-f211d-default-rtdb.europe-west1.firebasedatabase.app";function t(t){return fetch(`${e}/queues.json`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(e=>e.json())}var o=t;exports.default=o;
},{}],"ITTi":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;const e="https://api.themoviedb.org/3",t="30b880cb8af36a78b014f41021bfb163";async function o(o){if(o)try{return(await fetch(`${e}/search/movie?api_key=${t}&query=${o}`)).json()}catch(a){console.log(a)}}var a=o;exports.default=a;
},{}],"r1ns":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;const e="https://api.themoviedb.org/3",t="30b880cb8af36a78b014f41021bfb163";async function o(){try{return(await fetch(`${e}/trending/movie/week?api_key=${t}`)).json()}catch(o){console.log(o)}}var a=o;exports.default=a;
},{}],"aA9E":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;const e="https://api.themoviedb.org/3",t="30b880cb8af36a78b014f41021bfb163";async function o(o){try{return(await fetch(`${e}/movie/${o}?api_key=${t}`)).json()}catch(a){console.log(a)}}var a=o;exports.default=a;
},{}],"uoEA":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;const e="https://api.themoviedb.org/3",t="30b880cb8af36a78b014f41021bfb163";async function o(){try{return(await fetch(`${e}/genre/movie/list?api_key=${t}`)).json()}catch(o){console.log(o)}}var a=o;exports.default=a;
},{}],"clu1":[function(require,module,exports) {

},{"./../images/header/main-mobile.jpg":[["main-mobile.7d22fc20.jpg","dNhM"],"dNhM"],"./../images/header/main-mobile2.jpg":[["main-mobile2.c1dfb37b.jpg","gWsI"],"gWsI"],"./../images/header/main-tablet.jpg":[["main-tablet.4edb4904.jpg","Ukr4"],"Ukr4"],"./../images/header/main-tablet2.jpg":[["main-tablet2.5775efd0.jpg","zvcZ"],"zvcZ"],"./../images/header/main-max.jpg":[["main-max.6b41c43e.jpg","kx6O"],"kx6O"],"./../images/header/main-max2.jpg":[["main-max2.9ed8e7fc.jpg","CbO4"],"CbO4"]}],"MwSK":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;const e={gallery:document.querySelector(".list_film"),library:document.querySelector("[data-library]"),home:document.querySelector("[data-home]"),navigate:document.querySelector(".navigate__list")};var t=e;exports.default=t;
},{}],"NAtb":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;const e=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}];var i=e;exports.default=i;
},{}],"XBdL":[function(require,module,exports) {
"use strict";function d(){return window.onload=function(){document.body.classList.add("loaded_hiding"),window.setTimeout(function(){document.body.classList.add("loaded"),document.body.classList.remove("loaded_hiding")},500)}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=d;exports.default=e;
},{}],"lE72":[function(require,module,exports) {
"use strict";var e=l(require("../api/fetchFavoritesMovies")),t=l(require("../ollRefs/refs")),n=l(require("./arrayGenres")),a=l(require("./preloader"));function l(e){return e&&e.__esModule?e:{default:e}}function i(e){const t=[];for(const a of n.default)e.includes(a.id)&&t.push(a.name);return e.length>2&&t.splice(2,t.length-2,"Other"),t.join(", ")}function s(e){return e.map(({id:e,poster_path:t,title:n,release_date:a,genre_ids:l})=>{const s=a.split("-")[0];return`\n      <li class='list_film_item' id=${e}>\n        <img class="list_film_image" style = "border-radius: 5px" src='https://image.tmdb.org/t/p/w500${t}' alt='Обложка фильма' loading='lazy' />\n        <div class='info'>\n            <p class='info-title'>\n              <b>${n}</b>\n            </p>\n            <p class='info-date'>\n              <span>${i(l)} | ${s}</span>\n            </p>\n        </div>\n      </li>\n      `}).join("")}function r(n){n.preventDefault(),t.default.home.classList.contains("active")||(t.default.home.classList.add("active"),t.default.library.classList.remove("active"),(0,e.default)().then(e=>{(0,a.default)(),t.default.gallery.innerHTML="",t.default.gallery.insertAdjacentHTML("beforeend",s(e.results))}))}(0,e.default)().then(e=>{(0,a.default)(),t.default.gallery.insertAdjacentHTML("beforeend",s(e.results))}),t.default.home.addEventListener("click",r);
},{"../api/fetchFavoritesMovies":"r1ns","../ollRefs/refs":"MwSK","./arrayGenres":"NAtb","./preloader":"XBdL"}],"Pd8X":[function(require,module,exports) {
"use strict";var e=s(require("../ollRefs/refs")),t=s(require("./arrayGenres")),a=s(require("../api/fetchSearchMovies")),i=s(require("../api/fetchFavoritesMovies")),n=s(require("./preloader"));function s(e){return e&&e.__esModule?e:{default:e}}function r(e){const a=[];for(const i of t.default)e.includes(i.id)&&a.push(i.name);return e.length>2&&a.splice(2,a.length-2,"Other"),a.join(", ")}function l(e){return e.map(({id:e,poster_path:t,title:a,release_date:i,genre_ids:n,vote_average:s})=>{const l=i.split("-")[0];return`\n      <li class='list_film_item' id=${e}>\n        <img class="list_film_image" style = "border-radius: 5px" src='https://image.tmdb.org/t/p/w500${t}' alt='Обложка фильма' loading='lazy' />\n        <div class='info'>\n            <p class='info-title'>\n              <b>${a}</b>\n            </p>\n            <p class='info-date'>\n              <span>${r(n)} | ${l}</span>\n              <span class="info-average">${s}</span>\n            </p>\n        </div>\n      </li>\n      `}).join("")}function d(t){t.preventDefault(),e.default.library.classList.contains("active")||(e.default.home.classList.remove("active"),e.default.library.classList.add("active"),(0,a.default)("The Fast and the Furious;").then(t=>{(0,n.default)(),e.default.gallery.innerHTML="",e.default.gallery.insertAdjacentHTML("beforeend",l(t.results))}))}e.default.library.addEventListener("click",d);
},{"../ollRefs/refs":"MwSK","./arrayGenres":"NAtb","../api/fetchSearchMovies":"ITTi","../api/fetchFavoritesMovies":"r1ns","./preloader":"XBdL"}],"Focm":[function(require,module,exports) {
"use strict";var e=o(require("./js/db/getWatchesFilms")),r=o(require("./js/db/getQueuesFilms")),i=o(require("./js/db/removeAllWatchesFilms")),s=o(require("./js/db/removeAllQueuesFilms")),u=o(require("./js/db/removeWatchedFilm")),a=o(require("./js/db/removeQueueFilm")),t=o(require("./js/db/setWatchedFilm")),l=o(require("./js/db/setQueueFilm")),m=o(require("./js/api/fetchSearchMovies")),q=o(require("./js/api/fetchFavoritesMovies")),d=o(require("./js/api/fetchDetailsMovie")),j=o(require("./js/api/fetchGenresMovies"));require("./sass/main.scss");var c=o(require("./js/main/renderMain")),n=o(require("./js/main/renderMainLibrary"));function o(e){return e&&e.__esModule?e:{default:e}}
},{"./js/db/getWatchesFilms":"BLgO","./js/db/getQueuesFilms":"FjzB","./js/db/removeAllWatchesFilms":"Xkgc","./js/db/removeAllQueuesFilms":"Qg1q","./js/db/removeWatchedFilm":"ZDl3","./js/db/removeQueueFilm":"p99A","./js/db/setWatchedFilm":"nD62","./js/db/setQueueFilm":"nVSY","./js/api/fetchSearchMovies":"ITTi","./js/api/fetchFavoritesMovies":"r1ns","./js/api/fetchDetailsMovie":"aA9E","./js/api/fetchGenresMovies":"uoEA","./sass/main.scss":"clu1","./js/main/renderMain":"lE72","./js/main/renderMainLibrary":"Pd8X"}]},{},["Focm"], null)
//# sourceMappingURL=/filmoteka/src.0d3bed47.js.map