// esse código serve para mostrar os elementos quando descer a página no scroll

const myObserver = new IntersectionObserver(( entries ) => {
    entries.forEach( (entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    } )
} ) 

const elements = document.querySelectorAll('.hidden')

elements.forEach( (element) => myObserver.observe(element) )

