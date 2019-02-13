@extends('layouts.public')
@section('title', 'Reset Password') 

@section('content')
<div class="reset">
    <div class="container h-100">
        <div class="row justify-content-center h-100 align-items-center">
            <div class="col-12 col-sm-12 col-md-8 col-lg-5">
                <div class="reset-content">
                    <h1>
                        <small>Optimal Strength Gains</small>{{ __('Reset Password') }}
                    </h1>
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                    <form method="POST" action="{{ route('password.email') }}" class="login-form mt-4">
                        @csrf

                        <div class="form-group">

                            <input id="email" type="email" class="form-control {{ $errors->has('email') ? ' is-invalid' : '' }}" name="email" value="{{ old('email') }}" required>
                            <label for="email">{{ __('E-Mail Address') }}</label>

                            @if ($errors->has('email'))
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $errors->first('email') }}</strong>
                                </span>
                            @endif
                        </div>

                        <small class="form-text privacy-terms">
                            This page is protected by reCAPTCHA and subject to the GDPR Privacy <a href="{{ route('privacy') }}">Policy Data</a> Protection Regulation and <a href="{{ route('tos') }}"">Terms of Service.</a>
                        </small>

                        <div class="wrapper-btn text-center text-md-right mt-3">
                            <button type="submit" class="btn btn-yellow-gradient">
                                {{ __('Send Password Reset Link') }}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
