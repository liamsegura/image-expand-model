const model = document.querySelector('.model')
const previews = document.querySelectorAll('.gallery img')
const original = document.querySelector('.full-img')
const imgText = document.querySelector('.caption')

previews.forEach(preview => {
    preview.addEventListener('click', () => {
        model.classList.add('open')
        original.classList.add('open')
        const originalSrc = preview.getAttribute('data-original')
        original.src = `/assets/images/full/${originalSrc}`
        imgText.innerHTML = preview.getAttribute('alt')
    })
})

model.addEventListener('click', (e) => {
    if(e.target.classList.contains('model')){
        model.classList.remove('open')
        original.classList.remove('open')
    }
})