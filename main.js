import './style.css'

document.addEventListener('DOMContentLoaded', () => {
    const formsSelect = document.querySelectorAll('.register');
    const isoBody = document.querySelector('#body');
    const register = document.querySelector('#register');
    const login = document.querySelector('#login');


    formsSelect.forEach((formSelect) => {
        formSelect.addEventListener('click', (e) => {
            e.preventDefault();
            if (!document.body.classList.contains('register-active')) {
                document.body.classList.add('register-active');
                document.title= 'Register | Fancy login';
            }else{
                document.body.classList.remove('register-active');
                document.title= 'Login | Fancy login';
            }
        });
    })
    register.addEventListener('submit', (e) => {
        e.preventDefault();
        e.stopPropagation();
    })
    login.addEventListener('submit', (e) => {
        e.preventDefault();
        e.stopPropagation();
    })
})
