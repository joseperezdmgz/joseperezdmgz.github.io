$(document).ready( () => {
    // Dark mode
    darkMode = () => {
        document.documentElement.classList.toggle('dark-mode')
         darkModeImg()
    }
    if(window.matchMedia("(prefers-color-scheme : dark)").matches){
        $(".dark-mode-img").attr("src","./assets/img/sun.webp");
        $("html").css("background-image","./assets/img/back-black.wwebp");
        document.documentElement.classList.toggle('dark-mode')
    }else{
        $(".dark-mode-img").attr("src","./assets/img/moon.webp");
        $("html").css("background-image","./assets/img/back-white.wwebp");
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

    formatDate=(monthYear)=>{
        const fecha = monthYear
        const arrMeses = ['Ene.', 'Feb.', 'Mar.', 'Abr.', 'May.', 'Jun.', 'Jul.', 'Ago.', 'Sep.', 'Oct.', 'Nov.', 'Dic.'];
        const fechaFormateada = arrMeses[fecha.getMonth()] + ' ' + fecha.getFullYear();
        return fechaFormateada;
    }
    currentJob=()=>{
        dateIni='Oct. 2022'
        let fechaInicio = new Date("2022-10-01");
        let fechaFin = new Date();

            let years = fechaFin.getFullYear() - fechaInicio.getFullYear();
            let months = fechaFin.getMonth() - fechaInicio.getMonth();
          
            if (months < 0) {
              months += 12;
              years -= 1;
            }
            $("#current_job").html(dateIni +" - "+ formatDate(fechaFin)+ " · "+ years + (years == 1 ? (" año"):(" años")) + " "+ months + (months == 1 ?(" mes"):(" meses")))
          }
          currentJob()
})