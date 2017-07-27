<?php

namespace App\Http\Controllers;

class HomeController extends Controller {

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

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

	public function renderChessPage(){
		return view('chess-page');
	}

	public function renderBoomPage(){
		return view('boom-page');
	}
	
}