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

/*  */
Controllers.home = function () {
    var init = function () {
        new osg.Controllers.floaLabel('#get-started .form-control');
    };
    init();
};

var osg = {
    Controllers: Controllers
};