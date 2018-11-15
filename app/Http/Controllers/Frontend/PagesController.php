<?php

namespace App\Http\Controllers\Frontend;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use App\Http\Controllers\Controller;


class PagesController extends Controller
{
    public function index() {
        return (Auth::check()) 
            ? view('pages.dashboard') : view('pages.home', ['title' => 'Hjem']);
    }
}
