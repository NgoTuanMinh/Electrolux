var activeBannerImg,
activeBannerBtn,
bannersImg = document.querySelectorAll('.banner-img'),
bannersBtn = document.querySelectorAll('.banner-btn'),
bannerWrap = document.querySelector('.banner-imgs ul'),
btnLeftBanner = document.querySelector('.banner-btn-prev'),
btnRightBanner = document.querySelector('.banner-btn-next');


var index = 0;

btnRightBanner.onclick = function() {
    if (index == 0) {
        bannersImg[0].classList.add('banner-img-hiddenbynext');
        bannersImg[1].classList.add('banner-img-showbynext');
        bannersImg[0].addEventListener('webkitAnimationEnd', function() {
            bannersImg[0].classList.remove('banner-img-hiddenbynext');
            bannersImg[1].classList.remove('banner-img-showbynext');
            bannersImg[0].classList.remove('banner-img-active');
            bannersImg[1].classList.add('banner-img-active');
            bannersBtn[0].classList.remove('banner-btn-active');
            bannersBtn[1].classList.add('banner-btn-active');
        })
        index = 1;
    }
    else if (index == 1) {
        bannersImg[1].classList.add('banner-img-hiddenbynext');
        bannersImg[0].classList.add('banner-img-showbynext');
        bannersImg[1].addEventListener('webkitAnimationEnd', function() {
            bannersImg[1].classList.remove('banner-img-hiddenbynext');
            bannersImg[0].classList.remove('banner-img-showbynext');
            bannersImg[1].classList.remove('banner-img-active');
            bannersImg[0].classList.add('banner-img-active');
            bannersBtn[1].classList.remove('banner-btn-active');
            bannersBtn[0].classList.add('banner-btn-active');
        })
        index = 0;
    }
}
btnLeftBanner.onclick = function() {
    if (index == 0) {
        bannersImg[0].classList.add('banner-img-hiddenbyprev');
        bannersImg[1].classList.add('banner-img-showbyprev');
        bannersImg[0].addEventListener('webkitAnimationEnd', function() {
            bannersImg[0].classList.remove('banner-img-hiddenbyprev');
            bannersImg[1].classList.remove('banner-img-showbyprev');
            bannersImg[0].classList.remove('banner-img-active');
            bannersImg[1].classList.add('banner-img-active');
            bannersBtn[0].classList.remove('banner-btn-active');
            bannersBtn[1].classList.add('banner-btn-active');
        })
        index = 1;
    }
    else if (index == 1) {
        bannersImg[1].classList.add('banner-img-hiddenbyprev');
        bannersImg[0].classList.add('banner-img-showbyprev');
        bannersImg[1].addEventListener('webkitAnimationEnd', function() {
            bannersImg[1].classList.remove('banner-img-hiddenbyprev');
            bannersImg[0].classList.remove('banner-img-showbyprev');
            bannersImg[1].classList.remove('banner-img-active');
            bannersImg[0].classList.add('banner-img-active');
            bannersBtn[1].classList.remove('banner-btn-active');
            bannersBtn[0].classList.add('banner-btn-active');
        })
        index = 0;
    }
}

bannersBtn.forEach(function(btn,index) {
    btn.onclick = function() {
        for (let i = 0; i < bannersBtn.length; i++) {
            bannersBtn[i].classList.remove('banner-btn-active');
            bannersImg[i].classList.remove('banner-img-active');
        }
        bannersBtn[index].classList.add('banner-btn-active');
        bannersImg[index].classList.add('banner-img-active');
    }
})


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

// Animation Menu

var barsBtn = document.querySelector('.bars-btn'),
    navigationMobile = document.querySelector('.navigation__menu-on-mobile'),
    overlayNavigation = document.querySelector('.navigation-overlay'),
    navigationElement = document.querySelector('.navigation');

barsBtn.addEventListener('click', function() {
    navigationMobile.classList.add('navigation__menu-show');
    navigationElement.classList.add('navigation-hidden');
});

overlayNavigation.onclick = function() {
    navigationMobile.classList.remove('navigation__menu-show');
    navigationElement.classList.remove('navigation-hidden');
}


var plusBtnFooter = document.querySelectorAll('.footer .l-2 h2'),
listFooter = document.querySelectorAll('.footer .l-2 ul');
plusBtnFooter.forEach(function(btn,index) {
    plusBtnFooter[index].onclick = function() {
        if (index == 2) {
            listFooter[index].classList.toggle('hide-on-mobile');
            listFooter[index+1].classList.toggle('hide-on-mobile');
        }
        else {
            listFooter[index].classList.toggle('hide-on-mobile');
        }
    }
})