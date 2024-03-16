const bg = document.querySelector('header .background'),
    img = document.querySelector('.images'),
    descriptions = document.querySelector('.what'),
    left = document.querySelector('.arrow-left'),
    right = document.querySelector('.arrow-right')


let bgSc = 0,
    imgSc = 0,
    desSc = 0

right.addEventListener('click', moveRight)
left.addEventListener('click', moveLeft)

function moveRight() {
    const bgW = bg.clientWidth,
        imgW = img.clientWidth,
        desW = descriptions.clientWidth

    if(bgSc < (bgW*2)) {
        bg.scrollLeft = bgSc+bgW
        bgSc += bgW

        img.scrollLeft = imgSc+imgW
        imgSc+=imgW

        descriptions.scrollLeft = desSc+desW
        desSc+=desW
    }
}

function moveLeft() {
    const bgW = bg.clientWidth,
        imgW = img.clientWidth,
        desW = descriptions.clientWidth

    if(bgSc > 0) {
        bg.scrollLeft = bgSc-bgW
        bgSc -= bgW

        img.scrollLeft = imgSc-imgW
        imgSc-=imgW

        descriptions.scrollLeft = desSc-desW
        desSc-=desW
    }

}
const nav = document.querySelector('header nav')

window.addEventListener('scroll', ()=> {
    if(window.scrollY>0) {
        nav.classList.add('bg')
    } else {
        nav.classList.remove('bg')
    }
})