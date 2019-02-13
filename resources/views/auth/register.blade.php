@extends('layouts.public')
@section('title', 'Sign up') 

@section('content')
    <div class="register">
        <div class="row m-0">
            <div class="col-12 col-sm-12 col-md-12 col-lg-6 p-0">
                <div class="sign-up-benefits-wrapper">
                    <div class="row justify-content-center m-0">
                        <div class="col-12 col-sm-12 col-md-8">
                            <div class="benefits">
                                <div class="text-center mb-5">
                                    <h2>
                                        <small>Benefits as a</small>Member
                                    </h2>
                                </div>
                                <ul>
                                    <li>Lorem ipsum dolor sit amet consectetur ipsum dolor</li>
                                    <li>Lorem ipsum dolor sit amet consectetur ipsum dolor</li>
                                    <li>Lorem ipsum dolor sit amet consectetur ipsum dolor</li>
                                    <li>Lorem ipsum dolor sit amet consectetur ipsum dolor</li>
                                    <li>Lorem ipsum dolor sit amet consectetur ipsum dolor</li>
                                    <li>Lorem ipsum dolor sit amet consectetur ipsum dolor</li>
                                    <li>Lorem ipsum dolor sit amet consectetur ipsum dolor</li>
                                    <li>Lorem ipsum dolor sit amet consectetur ipsum dolor</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-sm-12 col-md-12 col-lg-6">
                <div class="sign-up-form-wrapper">
                    <div class="content-form h-100">
                        <div class="row justify-content-center">
                            <div class="col-12 col-sm-10 col-md-8 align-self-center">
                                <div class="text-center mb-4">
                                    <h2>
                                        <small>Optimal Strength Gains</small>Sign up
                                    </h2>
                                </div>
                                @include('shared.registration-form')
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
