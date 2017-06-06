<?php

namespace App\Http\Controllers;

class HomeController extends Controller {

	public function test(){
		return "sdfadsfdsa";
	}

	public function index(){
		return view('index');
	}

	public function renderVuePage(){
		return view('vue-page');
	}

	public function renderReactPage(){
		return view('react-page');
	}

	public function renderGalaxyPage(){
		return view('galaxy-page');
	}
	
}