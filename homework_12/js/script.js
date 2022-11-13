'use strict'

document.addEventListener('DOMContentLoaded',function () {
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);
    const errorEmail = document.getElementById('__error-email')
    const errorPassword = document.getElementById('__error-password')
    const errorPasswordCon = document.getElementById('__error-passwordCon')
   

    let resultEmail='';
    let resultPass='';
    let resultPassCon='';
    let resultGender='';
    let resultAboutMe='';
    let resultApproval='';
    

   
    
    async function formSend(e) {
        e.preventDefault();
        
        let error=formFalidate(form);

        let formData = new FormData(form);

        if (error===0) {
            /* отправка*/
            let obj={
                mail:resultEmail,
                pass:resultPass,
                passCon:resultPassCon,
                gender:resultGender,
                aboutMe:resultAboutMe,
                approval:resultApproval,
            };
            console.log(obj);
        };
    
        
        
    }

    

    function formFalidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('._red')
        let formSecondary = document.querySelectorAll('._secondary')
        var passwordСonfirmation='';

        resultGender='';
        resultAboutMe='';
        resultApproval='';
        

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);
            if (input.classList.contains('_email')) {
                if (input.value==='') {
                    formAddError(input);
                    error++;
                    errorEmail.innerText = 'Поле обязательно для заполнения';
                }else if (!emailTest(input)) {
                    formAddError(input);
                    error++;
                    errorEmail.innerText = 'Email введён некорректно';
                }else{
                    errorEmail.innerText = '';
                    resultEmail=input.value;
                }
            }else if (input.classList.contains('_password')) {
                if (input.value==='') {
                    formAddError(input);
                    error++;
                    passwordСonfirmation=input.value;
                    errorPassword.innerText='Поле обязательно для заполнения';
                }else if (input.value.length<8) {
                    formAddError(input);
                    error++;
                    passwordСonfirmation=input.value;
                    errorPassword.innerText='Пароль должен содержать не менее 8 символов';
                }else{
                    passwordСonfirmation=input.value;
                    errorPassword.innerText='';
                    resultPass=input.value;
                }
            }else if (input.classList.contains('_passwordСonfirmation')) {
                if (input.value==='') {
                    formAddError(input);
                    error++;
                    errorPasswordCon.innerText='Пароли не совпадают';
                }else if (passwordСonfirmation!==input.value) {
                    formAddError(input);
                    error++;
                    errorPasswordCon.innerText='Пароли не совпадают';
                }else{
                    errorPasswordCon.innerText='';
                    resultPassCon=input.value;
                }
            }       
        }

        var rates = document.getElementsByName('gender');
        for(var i = 0; i < rates.length; i++){
            if(rates[i].checked){
                resultGender = rates[i].value;
                
            }
        }

        let aboyt=document.getElementById('about-me')
        resultAboutMe=aboyt.value;

        let approvalInd=document.getElementById('approval-input')
        resultApproval=approvalInd.checked;

        return error;
    }

    function formAddError(input) {
        // input.parentElement.classList.add('_error');
        input.classList.add('_error')
    }
    function formRemoveError(input) {
        // input.parentElement.classList.remove('_error');
        input.classList.remove('_error')
    }

    function emailTest(input) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        // console.log(ri.test(String(input).toLowerCase()));
        // console.log(ri.test(input.value));
        
        return re.test(input.value);
    }
});