var elixir = require('laravel-elixir');

elixir(function(mix) {
	mix.copy('resources/assets/js/components', 'public/js/components');
	mix.webpack('resources/assets/js/main.js', 'public/js');
	mix.webpack('resources/assets/js/react.js', 'public/js');
});
