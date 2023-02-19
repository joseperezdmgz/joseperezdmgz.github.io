$(document).ready( () => {
    // Dark mode
    darkMode = () => {
        document.documentElement.classList.toggle('dark-mode')
         darkModeImg()
    }
    if(window.matchMedia("(prefers-color-scheme : dark)").matches){
        $(".dark-mode-img").attr("src","./assets/img/sun.webp");
        document.documentElement.classList.toggle('dark-mode')
    }else{
        $(".dark-mode-img").attr("src","./assets/img/moon.webp");
    }
    darkModeImg =()=>{
        let classHtml = document.querySelector('html').classList.value;
        if(classHtml == "dark-mode"){
            $(".dark-mode-img").attr("src","./assets/img/sun.webp");
        }else{
            $(".dark-mode-img").attr("src","./assets/img/moon.webp");
        }
    }
    // Menu Mobile
    $(".menu-mobile .burger").click( () => {
        $("aside").toggleClass('open');
        $(".burger").toggleClass('open');
        if($("aside").hasClass('open')) $("body").css('overflow','hidden');
        else $("body").css('overflow','auto');
    })
    $("aside ul li a").click( () => {
        $("aside").removeClass('open');
        $(".burger").removeClass('open');
        $("body").css('overflow','auto');
    })
    })
    
    