document.querySelector('.navbar-toggler').addEventListener('click', e => {
    e.preventDefault()
    document.querySelector('#navbarSupportedContent').classList.toggle('show')
})