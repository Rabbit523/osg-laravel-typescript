<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'Frontend\PagesController@index')->name("home");
Route::get('/about', 'Frontend\PagesController@about')->name("about");
Route::get('/how-it-works', 'Frontend\PagesController@howItWorks')->name("how-it-works");
Route::get('/features', 'Frontend\PagesController@features')->name("features");
Auth::routes();