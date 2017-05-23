
var elixir = require('laravel-elixir');
require('laravel-elixir-vue-2');

elixir(function(mix) {
	mix.webpack('resources/assets/js/main.js', 'public/js');
	mix.webpack('resources/assets/js/vue.js', 'public/js');
	mix.webpack('resources/assets/js/react.js', 'public/js');
	mix.rollup('resources/assets/js/jsx/mainComponent.jsx', 'public/js/main-react.js');
});
