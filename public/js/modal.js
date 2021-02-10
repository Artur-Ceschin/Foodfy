

const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for(let card of cards) {
    card.addEventListener('click', () => {
        modalOverlay.classList.add('active')
        const imgId = card.getAttribute('id')

        const recipe = card.querySelector('.card-recipe').textContent
        const author = card.querySelector('.card-author').textContent

        modalOverlay.querySelector('img').src = `./public/assets/${imgId}.png`
        modalOverlay.querySelector('.recipe-title').innerHTML = recipe
        modalOverlay.querySelector('.author').innerHTML = author
    })
}

document.querySelector('.close-modal').addEventListener('click', () => {
    modalOverlay.classList.remove('active')
})