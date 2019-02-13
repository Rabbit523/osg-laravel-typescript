@extends('layouts.public')
@section('title', 'Sign in') 

@section('content')
    <div class="login">
        <div class="container h-100">
            <div class="row justify-content-center h-100 align-items-center">
                <div class="col-12 col-sm-12 col-md-8 col-lg-5">
                    <div class="login-content">
                        <h1>
                            <small>Optimal Strength Gains</small>Login
                        </h1>
                        <form method="POST" action="{{ route('login') }}" class="login-form mt-4">
                            @csrf
                            <div class="form-group">
                                <input type="email" name="email" id="email" class="form-control {{ $errors->has('email') ? ' is-invalid' : '' }}" value="{{ old('email') }}" required data-msg="Please enter your email">
                                <label for="email">Email *</label>

                                @if ($errors->has('email'))
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                                @endif
                            </div>
                            <div class="form-group">
                                <input type="password" name="password" id="password" class="form-control" required data-msg="Please enter your password">
                                <label for="password">Password *</label>
                                
                                @if ($errors->has('password'))
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                                @endif

                                <a href="{{ route('password.request') }}" class="forgot-password">Forgot password?</a>
                            </div>
                            <small class="form-text privacy-terms">
                                This page is protected by reCAPTCHA and subject to the GDPR Privacy <a href="{{ route('privacy') }}">Policy Data</a> Protection Regulation and <a href="{{ route('tos') }}"">Terms of Service.</a>
                            </small>
                            <div class="wrapper-btn text-center text-md-right mt-3">
                                <button type="submit" class="btn btn-yellow-gradient">Login</button>
                            </div>
                            <small class="form-text sign-up-link">
                                Don't have an account? <a href="{{ route('register') }}">Sign up today.</a>
                            </small>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
