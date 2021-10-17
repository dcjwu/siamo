// Burger
const burgerMenu = document.querySelector('.navbar-toggler')
if (burgerMenu) {
    burgerMenu.addEventListener('click', e => {
        e.preventDefault()
        document.querySelector('#navbarSupportedContent').classList.toggle('show')
    })
}

// Login Button
const loginBtn = document.querySelector('#loginBtn')
if (loginBtn) {
    loginBtn.addEventListener('click', e => {
        e.preventDefault()
        document.querySelector('.login__form').classList.toggle('visible')
    })
}