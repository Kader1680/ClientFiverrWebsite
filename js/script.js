// togggle navbar 
let icon = document.querySelector('.fa-bars-staggered')
let list = document.querySelector('.list')
icon.addEventListener('click', ()=>{
    list.classList.toggle('blk')
})
// scroll animation
let head = document.querySelector('.head')

window.addEventListener('scroll', ()=>{
    // console.log(window.scrollY)
    if (window.scrollY >= 200) {
        head.classList.add('show')
    }else{
        head.classList.remove('show')

    }
})

// scroll left right animation
let lft = document.querySelector('.lft')
let lft_2 = document.querySelector('.lft_2')

window.addEventListener('scroll', ()=>{
    console.log(window.scrollY)
    if (window.scrollY >= 400) {
        lft.classList.add('block')
        lft_2.classList.add('block')

    }else{
        lft.classList.remove('block')
        lft_2.classList.remove('block')

    }
})
