let slider = document.querySelector('.slider')
let slideItems = document.querySelectorAll('.slider__item')
let slideList = document.querySelector('.slider__list')
let activate = 0

let preBtn = document.querySelector('#btn__pre')
let postBtn = document.querySelector('#btn__post')
let lenItems = slideItems.length - 1

let dots = document.querySelectorAll('.dot__item')
let refreashslide = setInterval(()=>{postBtn.click()},5000);

postBtn.addEventListener('click', ()=>{
    if (activate + 1 > lenItems){
        activate=0
    }
    else{
        activate +=1 
    }
    LoadSliderNext();
})
preBtn.addEventListener('click',()=>{
    if (activate-1<0){
        activate = lenItems
    }
    else{
        activate-=1
    }
    LoadSliderNext();
})

function LoadSliderNext(){
    let checkleft = slideItems[activate].offsetLeft;
    slideList.style.left = - checkleft +'px';

    let lastActiveDot = document.querySelector('.activate')
    lastActiveDot.classList.remove('activate')

    dots[activate].classList.add('activate')
}


