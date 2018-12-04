import Form from '../components/form.component';

export default function(){
    var selector = '.login';
    var init = function(){
        new Form(`${selector} form`);
    };
    init();
}