import Home from './home.page';
import Register from './register.page';
import Login from './login.page';

export default function () {

    var routes = [
        { path: '/', component: Home },
        { path: '/register', component: Register },
        { path: '/login', component: Login }
    ];

    var initHeader = function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 1) {
                $('header nav').addClass("sticky");
            } else {
                $('header nav').removeClass("sticky");
            }
        });
    }

    var anchorAnimate = function (){
        $('a.anchor').click(function(){
            $('html, body').animate({
                scrollTop: $( $(this).attr('href') ).offset().top
            }, 500);
            return false;
        });
    }

    var init = function () {
        routes.forEach(r => {
            if (window.location.pathname === r.path)
                new r.component();
        });
        initHeader();
        anchorAnimate();
    };
    init();
}