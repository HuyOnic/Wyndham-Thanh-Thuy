introScreen = document.querySelector('.intro');
introBtn = document.querySelector('#intro-btn');
introExit = document.querySelector('.intro__exit');
introBtn.addEventListener('click',()=>{
    introScreen.style.display='block'
})

introExit.addEventListener('click',()=>{
    introScreen.style.display='none'
})

