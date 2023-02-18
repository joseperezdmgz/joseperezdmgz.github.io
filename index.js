$(document).ready( () => {
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
    darkmode = () => {
        document.documentElement.classList.toggle('dark-mode')
    }
})