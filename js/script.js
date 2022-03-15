document.addEventListener("DOMContentLoaded",function(){
    let slider = document.querySelector(".for-flex__slider");
    let leftBtn = document.querySelector("#left");
    let rightBtn = document.querySelector("#right");
    let img = document.querySelectorAll(".our-team__card");
    let value = 0; //slider Value
    let scrollUp = document.querySelector(".slider-up");
    let HeaderElement = document.querySelector(".for-fixed");
    let NavList = document.querySelectorAll(".navigation-item .navigation-item__link");
    let HeaderLogo = document.querySelector(".header-logo");
    let NavBtnBars = document.getElementById("btn");
    let NavBtnCancel = document.getElementById("close")
    let NavItems = document.querySelector(".navigation-items");
    const loaded = document.querySelector(".loader");
    const Body = document.querySelector("body")
    // Loader 
    setTimeout(() => {
        loaded.style.opacity = '0';
        Body.classList.remove("hidden");
        HeaderElement.classList.remove("opacity-0")
        setTimeout(() => {
            loaded.style.display = "none";
        }, 1000);
    }, 3000);
    // Header Code 
    NavBtnBars.addEventListener("click",()=>{
        NavItems.classList.add("navigation-items__active")
        NavBtnBars.classList.add("btn-disabled")
        NavBtnCancel.classList.remove("btn-disabled")
    })
    NavBtnCancel.addEventListener("click",()=> {
        NavItems.classList.remove("navigation-items__active");
        NavBtnCancel.classList.add("btn-disabled")
        NavBtnBars.classList.remove("btn-disabled")
    })
    NavList.forEach(item=>{
        item.addEventListener("click",function(){
            NavItems.classList.remove("navigation-items__active");
            NavBtnBars.classList.remove("btn-disabled")
            NavBtnCancel.classList.add("btn-disabled")
        })
    })
    window.addEventListener("scroll",function(){
        HeaderElement.classList.toggle("header-scroll__active",window.scrollY > 0 )
        HeaderLogo.classList.toggle("header-logo__active",window.scrollY > 0)
        NavList.forEach(item => {
            item.classList.toggle("nav-list__active",window.scrollY > 0)
        })
    })
    // Slider Code 
    function ChangeSlide() {
        if(value>=img.length ) {
            value=0;
        }
        else if (value<0) {
            value = img.length -1
        }
        slider.style.transform =`translateX(${-value*100}%)`;

    };
    rightBtn.addEventListener("click", function(){
        value++;
        ChangeSlide();
    })
    leftBtn.addEventListener("click", function(){
        value--;
        ChangeSlide();
    });
    // ScrollTop Btn 
    window.addEventListener("scroll", function(){
        scrollUp.classList.toggle("active",this.scrollY > 500);
    })
    scrollUp.addEventListener('click',function(){
        NavItems.classList.remove("navigation-items__active")
        NavBtnCancel.classList.add("btn-disabled")
        NavBtnBars.classList.remove("btn-disabled")
        document.body.scrollTop =0;
        document.documentElement.scrollTop = 0;
    })
})
