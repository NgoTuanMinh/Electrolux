var activeBannerImg,
activeBannerBtn,
bannersImg = document.querySelectorAll('.banner-img'),
bannersBtn = document.querySelectorAll('.banner-btn'),
bannerWrap = document.querySelector('.banner-imgs ul'),
btnLeftBanner = document.querySelector('.banner-btn-prev'),
btnRightBanner = document.querySelector('.banner-btn-next');


var index = 0;

btnRightBanner.onclick = function() {
    bannersImg[index].classList.add('banner-img-hiddenbynext');
    if (index == (bannersImg.length-1)) {
        bannersImg[0].classList.add('banner-img-showbynext');
    }
    else {
        bannersImg[index+1].classList.add('banner-img-showbynext');
    }
    bannersImg[index].addEventListener('webkitAnimationEnd',function() {
        bannersImg[index].classList.remove('banner-img-hiddenbynext');
        bannersImg[index].classList.remove('banner-img-active');
        bannersBtn[index].classList.remove('banner-btn-active');
        if (index == (bannersImg.length-1)) {
            bannersImg[0].classList.add('banner-img-active');
            bannersBtn[0].classList.add('banner-btn-active');
            bannersImg[0].classList.remove('banner-img-showbynext');
            }
        else {
            bannersImg[index+1].classList.add('banner-img-active');
            bannersBtn[index+1].classList.add('banner-btn-active');
            bannersImg[index+1].classList.remove('banner-img-showbynext');
        }
        index++;
        if (index >=3) {index = 0;}    
    })
    
}
btnLeftBanner.onclick = function() {
    bannersImg[index].classList.add('banner-img-hiddenbyprev');
    if (index == 0) {
        bannersImg[(bannersImg.length-1)].classList.add('banner-img-showbyprev');
    }
    else {
        bannersImg[index-1].classList.add('banner-img-showbyprev');
    }
    bannersImg[index].addEventListener('webkitAnimationEnd',function() {
        bannersImg[index].classList.remove('banner-img-hiddenbyprev');
        bannersImg[index].classList.remove('banner-img-active');
        bannersBtn[index].classList.remove('banner-btn-active');
        if (index == 0) {
            bannersImg[(bannersImg.length-1)].classList.add('banner-img-active');
            bannersBtn[(bannersImg.length-1)].classList.add('banner-btn-active');
            bannersImg[(bannersImg.length-1)].classList.remove('banner-img-showbyprev');
            }
        else {
            bannersImg[index-1].classList.add('banner-img-active');
            bannersBtn[index-1].classList.add('banner-btn-active');
            bannersImg[index-1].classList.remove('banner-img-showbyprev');
        }
        index--;
        if (index <0) {index = (bannersImg.length-1);}    
    })
    
}


// Hot Product
var hotProducts = document.querySelectorAll('.hot-product-menu li'),
productPages = document.querySelectorAll('.product-page');

hotProducts.forEach(function(hotproduct, index) {
    hotproduct.onclick = function() {
        for (let i = 0; i < productPages.length; i++) {
            productPages[i].classList.remove('product-page-active');
            hotProducts[i].classList.remove('hot-product-menu-active');
        }
        productPages[index].classList.add('product-page-active');
        hotProducts[index].classList.add('hot-product-menu-active');
    }
})