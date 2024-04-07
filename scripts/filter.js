let priceFilter = document.querySelector('#price_filter');
let priceComp = document.querySelector('.filter__with--price');
priceFilter.addEventListener('click',function(){
    priceComp.classList.toggle('toogle-comp')
    console.log(priceComp)
});


let areaFilter = document.querySelector('#area_filter');
let areaComp = document.querySelector('.filter__with--area');
areaFilter.addEventListener('click',function(){
    areaComp.classList.toggle('toogle-comp')
    console.log(areaComp)
});