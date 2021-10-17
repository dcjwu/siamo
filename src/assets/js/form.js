const contactForm = document.querySelector('#contactForm'),
    loginForm = document.querySelector('#loginForm'),
    signupForm = document.querySelector('#signupForm'),
    name = document.querySelector('#name'),
    email = document.querySelector('#email'),
    message = document.querySelector('#message'),
    username = document.querySelector('#username'),
    password = document.querySelector('#password'),
    nameNew = document.querySelector('#nameNew'),
    surnameNew = document.querySelector('#surnameNew'),
    emailNew = document.querySelector('#emailNew'),
    passwordNew = document.querySelector('#passwordNew'),
    password2New = document.querySelector('#password2New')


if (contactForm) {
    contactForm.addEventListener('submit', e => {
        e.preventDefault()

        checkContactForm()
    })
}

if (loginForm) {
    loginForm.addEventListener('submit', e => {
        e.preventDefault()

        checkLoginForm()
    })
}

if (signupForm) {
    signupForm.addEventListener('submit', e => {
        e.preventDefault()

        checkSignUpForm()
    })
}

function checkContactForm() {
    const nameValue = name.value.trim(),
        emailValue = email.value.trim(),
        messageValue = message.value.trim()

    if (nameValue === '') {
        setErrorFor(name, 'Name cannot be blank!')
    } else if (nameValue.length < 4) {
        setErrorFor(name, 'Name is too short!')
    } else {
        setSuccessFor(name)
    }

    if (emailValue === '') {
        setErrorFor(email, 'Email cannot be blank!')
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email is not valid!')
    } else {
        setSuccessFor(email)
    }

    if (messageValue === '') {
        setErrorFor(message, 'Message cannot be blank!')
    } else if (messageValue.length < 10) {
        setErrorFor(message, 'Message is too short!')
    } else {
        setSuccessFor(message)
    }
}

function checkLoginForm() {
    const usernameValue = username.value.trim(),
        passwordValue = password.value.trim()

    if (usernameValue === '') {
        setErrorFor(username, 'Username cannot be blank!', 'form-control form-control--login error')
    } else {
        setSuccessFor(username, 'form-control form-control--login success')
    }

    if (passwordValue === '') { // Решить, насколько длинные могут быть пароли.
        setErrorFor(password, 'Password cannot be blank!', 'form-control form-control--login error')
    } else {
        setSuccessFor(password, 'form-control form-control--login success')
    }
}

function checkSignUpForm() {
    const nameValue = nameNew.value.trim(),
        surnameValue = surnameNew.value.trim(),
        emailValue = emailNew.value.trim(),
        passwordValue = passwordNew.value.trim(),
        password2Value = password2New.value.trim()

    if (nameValue === '') {
        setErrorFor(nameNew, 'Name cannot be blank!')
    } else {
        setSuccessFor(nameNew)
    }

    if (surnameValue === '') {
        setErrorFor(surnameNew, 'Surname cannot be blank!')
    } else {
        setSuccessFor(surnameNew)
    }

    if (emailValue === '') {
        setErrorFor(emailNew, 'Email cannot be blank!')
    } else if (!isEmail(emailValue)) {
        setErrorFor(emailNew, 'Email is not valid!')
    } else {
        setSuccessFor(emailNew)
    }

    if (passwordValue === '') {
        setErrorFor(passwordNew, 'Password cannot be blank!')
    } else if (passwordValue.length < 8) {
        setErrorFor(passwordNew, 'Password is too short!')
    } else {
        setSuccessFor(passwordNew)
    }

    if (password2Value === '') {
        setErrorFor(password2New, 'Password cannot be blank!')
    } else if (password2Value.length < 8) {
        setErrorFor(password2New, 'Password is too short!')
    } else if (password2Value !== passwordValue) {
        setErrorFor(password2New, 'Password does not match!')
    } else {
        setSuccessFor(password2New)
    }
}

function setErrorFor(input, message, className = 'form-control error') {
    const formControl = input.parentElement
    const small = formControl.querySelector('small')
    formControl.className = className
    small.innerText = message
}

function setSuccessFor(input, className = 'form-control success') {
    const formControl = input.parentElement
    formControl.className = className
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}