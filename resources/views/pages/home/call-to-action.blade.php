<section id="main-call-to-action">
    <img src="images/header-bg.png" class="w-100 img-fluid mx-auto d-block" alt="">
    <div class="content-cta">
        <div class="container h-100">
            <div class="row justify-content-center align-items-center h-100">
                <div class="col-12 col-sm-12 col-md-12 col-lg-10">
                    <h2><small>A NEW WAY TO</small>  CREATE, FIND & EXECUTE <br>STRENGTH TRAINING PROGRAMS</h2>
                    <div class="stars">
                        <img src="images/stars.png" class="img-fluid d-block mx-auto" alt="">
                    </div>
                    <div class="row justify-content-center mt-4">
                        <div class="col-12 col-sm-12 col-md-10 col-lg-8">
                            <form class="get-started" method="GET" action="{{route('register')}}">
                                <div class="form-group row">
                                    <div class="col-12 col-sm-6 col-lg-7"><input type="email" id="e-mail" name="email" placeholder="E-mail address" class="form-control py-3"></div>
                                    <div class="col-12 col-sm-6 col-lg-5"><button type="submit" class="btn btn-green-gradient btn-block px-5 py-3 mt-3 mt-sm-0">Get started</button></div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <a href="#learn-more" class="view-more anchor"><i class="fa fa-angle-down"></i></a>
    </div>
</section>

<a name="learn-more" id="learn-more"></a>
<section id="secondary-call-to-action">
    <div class="row no-gutters">
        <div class="col-12 col-sm-12 col-md-4 col-lg-4">
            <div class="call-to-action">
                <img src="images/girl-training.jpg" class="w-100 img-fluid mx-auto d-block" alt="">
                <div class="content">
                    <h2><small>I am a </small>Strength Athlete</h2>
                    <p>Complete programs and see how you responded compared to your mirror athletes. Learn which program designs that suits you best. </p>
                    <div class="buttons">
                        <a class="btn btn-green-gradient py-3 px-4 mr-0 mr-md-4" href="{{route('register', ['strengthAthlete'])}}">Sign Up</a>
                        <a class="learn-more" href="#">Learn More</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-12 col-lg-4 col-sm-12 col-md-4">
            <div class="call-to-action">
                <img src="images/list.jpg" class="w-100 img-fluid mx-auto d-block" alt="">
                <div class="content">
                    <h2><small>I am a </small>Program Designer</h2>
                    <p>Create and publish programs. Get feedback on how different strength athletes responds to your program through the Experience bank and strength athlete reviews. </p>
                    <div class="buttons">
                        <a class="btn btn-green-gradient py-3 px-4 mr-0 mr-md-4" href="{{route('register', ['programDesigner'])}}">Sign Up</a>
                        <a class="learn-more" href="#">Learn More</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-12 col-lg-4 col-sm-12 col-md-4">
            <div class="call-to-action personal-trainer">
                <img src="images/hands-five.jpg" class="w-100 img-fluid mx-auto d-block" alt="">
                <div class="content">
                    <h2><small>I am a </small>Personal Trainer</h2>
                    <p>Interact with your clients. Let Optimal Strength Gains find the best strength training programs for strength athletes with different needs and goals, freeing up your time and reducing frustration. </p>
                    <div class="buttons">
                        <a class="btn btn-green-gradient py-3 px-4 mr-0 mr-md-4" href="{{route('register', ['personalTrainer'])}}">Sign Up</a>
                        <a class="learn-more" href="#">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
