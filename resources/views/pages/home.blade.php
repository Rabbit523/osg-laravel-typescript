@extends('layouts.public') 
@section('title', $title) 

@section('content')
    <div class="home">
        @include('pages.home.call-to-action')
        @include('pages.home.main-features')
        @include('pages.home.symbiose')
        @include('pages.home.profiles')
        @include('pages.home.sign-up')
    </div>
@endsection