


function scroller(id){
const head = document.getElementById('header')

    if (pageYOffset>199){
         
    head.classList.add("new-header")
    
    }
    else{
        head.classList.remove("new-header")
    }
    
}

window.addEventListener("scroll",() => scroller('header'))
