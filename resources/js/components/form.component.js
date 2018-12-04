export default function(selector){
    var $el;

    var initLabels = function(){
        $el.find('.form-control').focusout(function () {
            var text_val = $(this).val();
            $el.find("label[for='" + this.id + "']").toggleClass('labelfocus', text_val !== "");
        }).focusout();
    
        $el.find('.form-control').focus(function () {
            $el.find("label[for='" + this.id + "']").addClass("labelfocus");
        }).blur(function () {
            if (!$(this).val()) {
                $el.find("label[for='" + this.id + "']").removeClass("labelfocus");
            } else {
                $el.find("label[for='" + this.id + "']").addClass("labelfocus");
            }
        });
    };

    var initValidation = function(){
        $(selector).validate({
            errorClass: 'is-invalid',
            errorElement: 'span',
            errorPlacement: function (error, element) {
                error.addClass('invalid-feedback');
                error.insertAfter(element);
            }
        });
    };

    var init = function(){
       $el = $(selector);
       initLabels();
       initValidation();
    };
    init();
}