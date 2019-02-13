import RegistrationForm from '../components/registration-form.component';

export default function(){
    var selector = '.home';
    
    var init = function(){
        new RegistrationForm(`${selector} #get-started`);
    };
    init();
}
