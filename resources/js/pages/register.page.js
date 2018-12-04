import RegistrationForm from '../components/registration-form.component';

export default function(){
    var selector = ".register";
    var init = function(){
        new RegistrationForm(`${selector} .sign-up-form-wrapper`);
    };
    init();
}