// togggle navbar 
let icon = document.querySelector('.fa-bars-staggered')
let list = document.querySelector('.list')
icon.addEventListener('click', ()=>{
    list.classList.toggle('blk')
})
// scroll animation
let head = document.querySelector('.head')

window.addEventListener('scroll', ()=>{
    console.log(window.scrollY)
    if (window.scrollY === 540) {
        alert('gfgfdgdfg')
        // head.classList.add('show')
    } else {
        // head.classList.remove('show')
        
    }
})