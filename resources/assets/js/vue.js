window.Vue = require('vue');

var example = Vue.component('example', require('./components/Example.vue'));

var derp = Vue.component('derp', require('./components/derp.vue'));

// import example from './components/Example.vue';
// import derp from './components/derp.vue';

const app = new Vue({
    el: '#vue_container',
    components: {
    	'example' : example,
    	'derp' : derp
    }
});