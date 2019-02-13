import  Form  from './form.component';

export default function(selector){

    var $agreement, $submit;
    var bindEvents = function(){
        $agreement.on('change', () => $submit.prop('disabled', !$agreement.is(":checked")));
    };

    var init = function(){
        new Form(`${selector} form`);
        $agreement = $(`${selector} #agreement-checkbox`);
        $submit = $(`${selector} #submit-button`);
        $submit.prop('disabled', true);
        bindEvents();
    };

    init();
}