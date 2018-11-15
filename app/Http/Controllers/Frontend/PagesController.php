<?php

namespace App\Http\Controllers\Frontend;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use App\Http\Controllers\Controller;


class PagesController extends Controller
{
    public function index() {
        return (Auth::check()) 
            ? view('pages.spa') : view('pages.home', ['title' => 'Home']);
    }

    public function about(){
        return view('pages.about', ['title' => 'About']);
    }

    public function howItWorks(){
        return view('pages.how-it-works', ['title' => 'How it works']);
    }

    public function features(){
        return view('pages.features', ['title' => 'Features']);
    }
}
