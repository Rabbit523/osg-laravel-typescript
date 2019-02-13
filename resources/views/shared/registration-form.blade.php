<form method="POST" action="{{ route('register') }}">
    @csrf
    <div class="form-group row">
        <div class="col-12">
            <input type="text" name="name" id="name" class="form-control {{ $errors->has('name') ? ' is-invalid' : '' }}" value="{{ old('name') }}" required data-msg-required="Please enter your full name">
            <label for="name">Full name *</label>
            @if ($errors->has('name'))
            <span class="invalid-feedback" role="alert">
                <strong>{{ $errors->first('name') }}</strong>
            </span>
            @endif
        </div>
    </div>
    <div class="form-group row">
        <div class="col-12 col-sm-12 col-md-12 col-lg-6">
            <input type="text" name="phone" id="phone" class="form-control" required data-msg-required="Please enter your phone">
            <label for="phone">Phone number *</label>
        </div>
        <div class="col-12 col-sm-12 col-md-12 col-lg-6 mt-3 mt-lg-0">
            <input type="email" name="email" id="email" class="form-control {{ $errors->has('email') ? ' is-invalid' : '' }}" value="{{ request()->has('email') ? request()->get('email') : old('email') }}" required data-msg-required="Please enter your email address">
            <label for="email">E-mail *</label>
            @if ($errors->has('email'))
            <span class="invalid-feedback" role="alert">
                <strong>{{ $errors->first('email') }}</strong>
            </span>
            @endif
        </div>
    </div>
    <div class="form-group row">
        <div class="col-12 col-sm-12 col-md-12 col-lg-6">
            <input type="password" class="form-control {{ $errors->has('email') ? ' is-invalid' : '' }}" name="password" id="password" required data-msg-required="Please enter a password">
            <label for="password">Password *</label>
            @if ($errors->has('password'))
            <span class="invalid-feedback" role="alert">
                <strong>{{ $errors->first('password') }}</strong>
            </span>
            @endif
        </div>
        <div class="col-12 col-sm-12 col-md-12 col-lg-6 mt-3 mt-lg-0">
            <input type="password" class="form-control" name="password_confirmation" id="password_confirmation" equalTo="#password">
            <label for="password_confirmation">Retype password *</label>
        </div>
    </div>
    <div class="form-group row">
        <div class="col-12">
            <select name="role" class="form-control" id="role" required>
                <option {{ request()->has('personalTrainer')? "selected" : "" }} value="0">Personal Trainer</option>
                <option {{ request()->has('programDesigner')? "selected" : "" }} value="1">Program Designer</option>
                <option {{ request()->has('strengthAthlete')? "selected" : "" }} value="2">Strength Athlete</option>
            </select>
            <label for="role" class="labelfocus">Select type of user *</label>
        </div>
    </div>
    <div class="checkbox custom-checkbox">
        <label>
            <input type="checkbox" value="" id="agreement-checkbox">By signing up you agree to the <a href="{{ route('tos') }}">Terms of Service</a> & <a href="{{ route('privacy') }}">Privacy Policy</a>.
            <span class="checkmark"></span>
        </label>
    </div>
    <div class="wrapper-btn text-center text-md-right mt-3">
        <input type="submit" id="submit-button" value="SIGN UP" class="btn btn-green-gradient btn-block px-5 py-3">
    </div>
    <div class="no-sign-up text-center mt-3">
        <p>Already have an account? <a href="{{ route('login') }}">Login to your account.</a></p>
    </div>
</form>