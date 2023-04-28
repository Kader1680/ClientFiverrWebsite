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

let rht = document.querySelector('.rht')
let rht_2 = document.querySelector('.rht_2')

window.addEventListener('scroll', ()=>{
    console.log(window.scrollY)
    if (window.scrollY >= 400) {
        rht.classList.add('block')
        rht_2.classList.add('block')

    }else{
        rht.classList.remove('block')
        rht_2.classList.remove('block')

    }
})



// scroll number counter
let counter = document.querySelector('.counter')
let nums = document.querySelectorAll('.nums .num')
let startCount = false
window.addEventListener('scroll', ()=>{

    

    if(window.scrollY >= 1000){

        if (!startCount) {
            nums.forEach(num => {
                startCouter(num)
            });
        }
        startCount = true
    }
      
    
})
function startCouter(element) {
    // define goal number
    let goal = element.dataset.goal
    // counter that start from input element to max

    let count = setInterval(() => {
        element.textContent++;
        if (element.textContent == goal) {
            clearInterval(count)
        }
    }, 1 / goal);
    
}

let boxs = document.querySelectorAll('.box .child')


window.addEventListener('scroll', ()=>{
    if (window.scrollY > 1100) {
        boxs.forEach(child => {
            child.classList.add('view')
        });
    }else{
        boxs.forEach(child => {
            child.classList.remove('view')
        });
    }
})

