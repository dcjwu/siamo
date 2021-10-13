const loginForm = document.getElementById('formLogin'),
    usernameLogin = document.getElementById('usernameLogin'),
    passLogin = document.getElementById('passwordLogin')

if (loginForm) {
    loginForm.addEventListener('submit', e => {
        e.preventDefault()

        checkInputsLogin()
    })
}

function checkInputsLogin() {
    const usernameValue = usernameLogin.value.trim();
    const passwordValue = passLogin.value.trim();

    if (usernameValue === '') {
        setErrorFor(usernameLogin, 'Username cannot be blank!');
    } else {
        setSuccessFor(usernameLogin);
    }

    if (passwordValue === '') {
        setErrorFor(passLogin, 'Password cannot be blank!');
    } else {
        setSuccessFor(passLogin);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'login__form-control error';
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'login__form-control success';
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

// Login Button
const loginBtn = document.querySelector('#loginBtn')
if (loginBtn) {
    loginBtn.addEventListener('click', e => {
        e.preventDefault()
        document.querySelector('.login__form').classList.toggle('visible')
    })
}