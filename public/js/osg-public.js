var Controllers = {};

Controllers.floaLabel = function (element){
    $(element).focusout(function () {
        var text_val = $(this).val();
        $("label[for='" + this.id + "']").toggleClass('labelfocus', text_val !== "");
    }).focusout();

    $(element).focus(function () {
        $("label[for='" + this.id + "']").addClass("labelfocus");
    }).blur(function () {
        if (!$(this).val()) {
            $("label[for='" + this.id + "']").removeClass("labelfocus");
        } else {
            $("label[for='" + this.id + "']").addClass("labelfocus");
        }
    });
};

Controllers.addStickyMenu = function (){
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1) {
            $('header nav').addClass("sticky");
            //nodes.contentWrapper.addClass("sticky");
        } else {
            $('header nav').removeClass("sticky");
            //nodes.contentWrapper.removeClass("sticky");
        }
    });
};

/*  */
Controllers.home = function () {
    var init = function () {
        new osg.Controllers.floaLabel('#get-started .form-control');
        new osg.Controllers.floaLabel('.sign-up-form-wrapper .form-control');
        new osg.Controllers.floaLabel('.login-content .login-form .form-control');
        new osg.Controllers.floaLabel('.reset-content .login-form .form-control');
        new osg.Controllers.addStickyMenu();
    };
    init();
};

var osg = {
    Controllers: Controllers
};