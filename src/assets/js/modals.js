const videoPreview = document.getElementById('videoPreview'),
      videoButton = document.getElementById('videoButton'),
      videoModal = document.getElementById('videoModal'),
      modalClose = document.querySelectorAll('[data-bs-dismiss="modal"]')

videoPreview.addEventListener('click', e => {
    e.preventDefault()
})

videoButton.addEventListener('click', () => {
    videoModal.style.display = 'block'
    document.body.classList.add('modal-open')
})

modalClose.forEach(closeBtn => {
    closeBtn.addEventListener('click', e => {
        e.preventDefault()
        closeModal()
    })
})

function closeModal() {
    videoModal.style.display = 'none'
    document.body.classList.remove('modal-open')
}

