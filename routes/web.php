<?php

Route::get('/', 'HomeController@index');
Route::get('/vue', 'HomeController@renderVuePage');
Route::get('/react', 'HomeController@renderReactPage');
Route::get('/galaxy', 'HomeController@renderGalaxyPage');
Route::get('/chess', 'HomeController@renderChessPage');
Route::get('/boom', 'HomeController@renderBoomPage');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

