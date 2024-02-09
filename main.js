const popOver = document.getElementById('myPopOver');
const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');


openBtn.addEventListener('click', () => {
    popOver.style = "display:block"
})

closeBtn.addEventListener('click', () => {
    popOver.style = "display:none"
})
