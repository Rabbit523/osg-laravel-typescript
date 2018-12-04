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

    var init = function () {
        routes.forEach(r => {
            if (window.location.pathname === r.path)
                new r.component();
        });
        initHeader();
    };
    init();
}