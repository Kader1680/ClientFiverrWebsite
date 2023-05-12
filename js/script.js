// togggle navbar 
let icon = document.querySelector('.Icon')
let list = document.querySelector('.list')
icon.addEventListener('click', ()=>{
    list.classList.toggle('blk')

})


//  x-Mark click
let x = document.querySelector('.fa-x')
let bars = document.querySelector('.fa-bars-staggered')

icon.addEventListener('click', ()=>{
    x.classList.toggle('xView')
    bars.classList.toggle('hide')

})
// x.addEventListener('click', ()=>{
//     x.classList.remove('xView')
//     icon.classList.add('Hiden')
// })

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
let vis = document.querySelector('.vis')

window.addEventListener('scroll', ()=>{
    console.log(window.scrollY)
    if (window.scrollY >= 400) {
        rht.classList.add('vis')
        rht_2.classList.add('vis')

    // }else if(window.scrollY >= 1960){
    //     rht.classList.add('vis')
    //     rht_2.classList.add('vis')
    // }
}
    else{
        rht.classList.remove('vis')
        rht_2.classList.remove('vis')
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
    },  1 / 10);
    
}


// wall element lft righ

let FirstLeft = document.querySelector('.FirstLeft')
let FirstRight = document.querySelector('.FirstRight')
let secndleft = document.querySelector('.secndleft')
let secndright = document.querySelector('.secndright')
let thrdleft = document.querySelector('.thrdleft')
let thrdright = document.querySelector('.thrdright')


window.addEventListener('scroll', ()=>{
    if (window.scrollY > 2400 || window.scrollY > 5000 ) {
        
        FirstLeft.classList.add('center')
        FirstRight.classList.add('center')
        
    } else{
        
        FirstLeft.classList.remove('center')
        FirstRight.classList.remove('center')
        
    }
})

window.addEventListener('scroll', ()=>{
    if (window.scrollY > 2500) {
        
        
        secndleft.classList.add('center')
        secndright.classList.add('center')
    } else{
        

        secndleft.classList.remove('center')
        secndright.classList.remove('center')
    }
})

window.addEventListener('scroll', ()=>{
    if (window.scrollY > 2900) {
        thrdleft.classList.add('center')
        thrdright.classList.add('center')
    } else{
        

        thrdleft.classList.remove('center')
        thrdright.classList.remove('center')
    }
})

// FAQ Question & Answer
let Accordium = document.getElementsByClassName('contentBx')

for (let i = 0; i < Accordium.length; i++) {
    
    Accordium[i].addEventListener('click', ()=>{
        Accordium[i].classList.toggle("active")
        Accordium[i].classList.toggle("questBg")

    })
}


let question = document.querySelector('.question')
question.addEventListener('click', ()=>{
    
    
})


// scroll to the top 
let scrollTop = document.querySelector('.scrollTop')
scrollTop.addEventListener('click', ()=>{
    
    window.scrollTo({
        top:0,
        behavior:"auto"
    })
})

window.addEventListener('scroll', ()=>{
    
    if (window.scrollY > 1400) {
        scrollTop.classList.add('scrollview')
    } else {
        scrollTop.classList.remove('scrollview')
        
    }
})

// nav hidden view 

let Nav = document.querySelector('.Nav')

window.addEventListener('scroll', ()=>{
    
    if (window.scrollY > 300) {
        Nav.classList.add('NavView')
    } else {
        Nav.classList.remove('NavView')
        
    }
})


// OPACITY ANIMATION JS

let cost = document.querySelector('.cost')
window.addEventListener('scroll', ()=>{
    
    if (window.scrollY > 3488) {
        cost.classList.add('opac')
    } else {
        cost.classList.remove('opac')
        
    }
})

let accordium = document.querySelector('.accordium')
window.addEventListener('scroll', ()=>{
    
    if (window.scrollY > 4270) {
        accordium.classList.add('opac')
    } else {
        accordium.classList.remove('opac')
        
    }
})

let convinced = document.querySelector('.convinced')
window.addEventListener('scroll', ()=>{
    
    if (window.scrollY > 4670) {
        convinced.classList.add('opac')
    } else {
        convinced.classList.remove('opac')
        
    }
})

let email = document.querySelector('.email')
window.addEventListener('scroll', ()=>{
    
    if (window.scrollY > 5030) {
        email.classList.add('opac')
    } else {
        email.classList.remove('opac')
        
    }
})
