zaloScreen = document.querySelector('.show__zalo--qr')
zaloBTns = document.querySelectorAll('.show_zalo')

Array.from(zaloBTns).forEach(function(zaloBTn) {
    zaloBTn.addEventListener('click',()=>{
        zaloScreen.style.display='flex'
    });
});

zaloScreen.addEventListener('click',()=>{
    zaloScreen.style.display='none'
})