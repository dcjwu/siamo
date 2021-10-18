const closeBtn = document.querySelectorAll('[data-bs-dismiss="modal"]'),
    modalPhoto = document.querySelector('#photoModal')

document.querySelectorAll('.photo').forEach(photo => {
        photo.addEventListener('click', showPhoto)
    }
)

document.querySelector('.fa-arrow-circle-left').addEventListener('click', prevPhoto)
document.querySelector('.fa-arrow-circle-right').addEventListener('click', nextPhoto)

closeBtn.forEach(btn => {
    btn.addEventListener('click', e => {
        e.preventDefault()
        closeModal()
    })
})

function showPhoto() {
    const darken = document.createElement('div')
    darken.className = 'modal-backdrop fade show'
    document.body.append(darken)
    document.querySelector('#photoModal').style.display = 'block'
    document.body.classList.add('modal-open')

    modalPhoto.querySelector('img').src = this.getAttribute('src')
}

function closeModal() {
    document.querySelector('.modal-backdrop.fade.show').remove()
    document.querySelector('#photoModal').style.display = 'none'
    document.body.classList.remove('modal-open')
}

function returnNewImgArr() {
    const allPhotos = document.querySelector('.photos').querySelectorAll('img'),
        photoArr = []
    for (let i = 0; i < allPhotos.length; i++) {
        photoArr.push(allPhotos[i].src)
    }
    return photoArr.map((item) => item.replace(/.+?(?=assets)/, ''))
}

function prevPhoto() {
    const newPhotoArr = returnNewImgArr(),
        photoSrc = document.querySelector('.modal__photo')
    let currentI = newPhotoArr.indexOf(photoSrc.getAttribute('src'))
    if (currentI === 0) {
        photoSrc.src = newPhotoArr[newPhotoArr.length - 1]
    } else {
        photoSrc.src = newPhotoArr[--currentI]
    }
}

function nextPhoto() {
    const newPhotoArr = returnNewImgArr(),
        photoSrc = document.querySelector('.modal__photo')
    let currentI = newPhotoArr.indexOf(photoSrc.getAttribute('src'))
    if (currentI === newPhotoArr.length - 1) {
        photoSrc.src = newPhotoArr[0]
    } else {
        photoSrc.src = newPhotoArr[++currentI]
    }
}