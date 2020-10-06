const nav = document.getElementById("nav"),
    btnMenu = document.getElementById("btnMenu"),
    logo = document.getElementById("headerLogo"),
    hamburgerIcon = document.getElementById("hamburgerIcon"),
    headerLinks = document.querySelectorAll("a")




    function disableScroll(){  
        window.scrollTo("0", "0")
    }

    const mostrarMenu = () => {
        nav.classList.remove("hidden")
        logo.setAttribute("src", "./assets/images/logo-bookmarkwhite.svg")
        hamburgerIcon.setAttribute("src", "./assets/images/icon-close.svg")
        window.addEventListener("scroll", disableScroll)
    }

    const ocultarMenu = () => {
        nav.classList.add("hidden")
        logo.setAttribute("src", "./assets/images/logo-bookmark.svg")
        hamburgerIcon.setAttribute("src", "./assets/images/icon-hamburger.svg")
        window.removeEventListener("scroll", disableScroll)
    }


    document.addEventListener("click", (e) => {
        if(e.target === hamburgerIcon || e.target === btnMenu){
            if(nav.classList.contains("hidden")){
                mostrarMenu()
            } else {
                ocultarMenu()
            }
        } else {
            ocultarMenu()
        }
    })