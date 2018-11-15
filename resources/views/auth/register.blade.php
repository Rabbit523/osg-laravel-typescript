@extends('layouts.public')
@section('title', 'Sign up') 

@section('content')
    <div class="register">
        <!-- Comment this out to write/test your implementation, just do not delete it so we can wire things up later. -->
        <!-- Begin Laravel default form -->
        <!-- <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="card">
                        <div class="card-header">{{ __('Register') }}</div>

                        <div class="card-body">
                            <form method="POST" action="{{ route('register') }}">
                                @csrf

                                <div class="form-group row">
                                    <label for="name" class="col-md-4 col-form-label text-md-right">{{ __('Name') }}</label>

                                    <div class="col-md-6">
                                        <input id="name" type="text" class="form-control{{ $errors->has('name') ? ' is-invalid' : '' }}" name="name" value="{{ old('name') }}" required autofocus>

                                        @if ($errors->has('name'))
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $errors->first('name') }}</strong>
                                            </span>
                                        @endif
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label for="email" class="col-md-4 col-form-label text-md-right">{{ __('E-Mail Address') }}</label>

                                    <div class="col-md-6">
                                        <input id="email" type="email" class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}" name="email" value="{{ old('email') }}" required>

                                        @if ($errors->has('email'))
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $errors->first('email') }}</strong>
                                            </span>
                                        @endif
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label for="password" class="col-md-4 col-form-label text-md-right">{{ __('Password') }}</label>

                                    <div class="col-md-6">
                                        <input id="password" type="password" class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}" name="password" required>

                                        @if ($errors->has('password'))
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $errors->first('password') }}</strong>
                                            </span>
                                        @endif
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label for="password-confirm" class="col-md-4 col-form-label text-md-right">{{ __('Confirm Password') }}</label>

                                    <div class="col-md-6">
                                        <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required>
                                    </div>
                                </div>

                                <div class="form-group row mb-0">
                                    <div class="col-md-6 offset-md-4">
                                        <button type="submit" class="btn btn-primary">
                                            {{ __('Register') }}
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->
        <!-- End Laravel default form -->
        <div class="container-fluid p-0">
            <div class="row m-0">
                <div class="col-12 col-sm-6  p-0 sign-up-benefits-wrapper">
                    <div class="benefits container">
                        <h2>
                            <small>Benefits as a</small>Member
                        </h2>
                        <div class="benefits-content">
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
                <div class="col-12 col-sm-6 sign-up-form-wrapper">
                    <div class="content-form h-100">
                        <div class="row justify-content-center">
                            <div class="col-12 col-sm-10 col-md-8 align-self-center">
                                <h2>
                                    <small>Optimal Strength Gains</small>Sign up
                                </h2>
                                <form action="">
                                    <div class="form-group row">
                                        <div class="col-12">
                                            <input type="text" name="fullName" id="fullName" class="form-control">
                                            <label for="fullName">Full name *</label>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <div class="col-12 col-sm-6">
                                            <input type="text" name="phone" id="phone" class="form-control">
                                            <label for="phone">Phone number *</label>
                                        </div>
                                        <div class="col-12 col-sm-6">
                                            <input type="email" name="e-mail" id="e-mail" class="form-control">
                                            <label for="e-mail">E-mail *</label>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <div class="col-12 col-sm-6">
                                            <input type="password" class="form-control" name="password" id="password">
                                            <label for="password">Password *</label>
                                        </div>
                                        <div class="col-12 col-sm-6">
                                            <input type="password" class="form-control" name="password_1" id="password_1">
                                            <label for="password_1">Retype password *</label>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <div class="col-12">
                                            <select name="type-user" id="type-user" class="form-control" id="">
                                                <option value="">Strength Athlete</option>
                                                <option value="">Strength Athlete</option>
                                                <option value="">Strength Athlete</option>
                                            </select>
                                            <label for="type-user" class="labelfocus">Select type of user *</label>
                                        </div>
                                    </div>
                                    <div class="checkbox custom-checkbox">
                                        <label>
                                            <input type="checkbox" value="">By signing up you agree to the <a href="">Terms of Service</a> & <a href="">Privacy Policy</a>.
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>
                                    <div class="wrapper-btn text-center text-md-right mt-3">
                                        <input type="submit" value="GET STARTED" class="btn btn-green-gradient px-5 py-3">
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
