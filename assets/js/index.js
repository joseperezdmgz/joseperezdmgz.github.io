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

    formatDate=(monthYear)=>{
        const fecha = monthYear
        const arrMeses = ['Ene.', 'Feb.', 'Mar.', 'Abr.', 'May.', 'Jun.', 'Jul.', 'Ago.', 'Sep.', 'Oct.', 'Nov.', 'Dic.'];
        const fechaFormateada = arrMeses[fecha.getMonth()] + ' ' + fecha.getFullYear();
        return fechaFormateada;
    }
    currentJob=()=>{
        dateIni='Oct. 2022'
        let fechaInicio = new Date(dateIni);
        let fechaFin = new Date();

            var years = fechaFin.getFullYear() - fechaInicio.getFullYear();
            var months = fechaFin.getMonth() - fechaInicio.getMonth();
          
            if (months < 0) {
              months += 12;
              years -= 1;
            }
            if(years >= 0){
                $("#current_job").html(dateIni +" - "+ formatDate(fechaFin)+ " · "+months +" meses")
            }else if(years >= 1){
                $("#current_job").html(dateIni +" - "+ formatDate(fechaFin)+ " · "+years +" año"+ " "+months +" meses")
            }else{
                $("#current_job").html(dateIni +" - "+ formatDate(fechaFin)+ " · "+years +" años"+ " "+months +" meses")
            }
          }
          currentJob()
})