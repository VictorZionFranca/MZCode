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

// Código para deixar o background do menu visivel no scroll

const menu = document.querySelector('.menu-static')

function activeScroll(){
    menu.classList.toggle('menu-static-ativo', scrollY > 155)
}

window.addEventListener('scroll', activeScroll)

// Código para o botão de scroll para o topo

window.addEventListener('scroll', function() {
    let scroll = document.querySelector('.scrollTop')
        scroll.classList.toggle('active', window.scrollY > 800)
})
function backTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}