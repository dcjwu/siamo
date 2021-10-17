const videoPreview = document.getElementById('videoPreview'),
      videoButton = document.getElementById('videoButton'),
      videoModal = document.getElementById('videoModal'),
      modalClose = document.querySelectorAll('[data-bs-dismiss="modal"]')
      vidSrc = 'https://www.youtube.com/embed/J6p58Y1Fhps'

if (videoPreview) {
    videoPreview.addEventListener('click', e => {
        e.preventDefault()
    })
}

if (videoButton) {
    videoButton.addEventListener('click', () => {
        videoModal.style.display = 'block'
        document.body.classList.add('modal-open')
        document.getElementById('modalVid').src = vidSrc
    })
}

if (modalClose) {
    modalClose.forEach(closeBtn => {
        closeBtn.addEventListener('click', e => {
            e.preventDefault()
            document.getElementById('modalVid').src = ''
            closeModal()
        })
    })
}

function closeModal() {
    videoModal.style.display = 'none'
    document.body.classList.remove('modal-open')
}

