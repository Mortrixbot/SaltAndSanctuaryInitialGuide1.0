/*-------------------------------------------------------------------------------------------------------------------------------*/
/* = = = | Abre e Fecha o Menu Ao Clicar no Icone Dos Tracinhos| = = = */

const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}
/* = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =  = = = */
/*-------------------------------------------------------------------------------------------------------------------------------*/
/* = = = | Esconder o Menu Ao Clicar Em Um De Seus Itens| = = = */

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}
/* = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = */
/*-------------------------------------------------------------------------------------------------------------------------------*/
/* = = = | Mudar o Header Da Página Ao Scroll | = = = */

const header = document.querySelector('#header')
const navHeight = header.offsetHeight
function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    // Scroll é Maior Que a Altura Do Header //
    header.classList.add('scroll')
  } else {
    // Scrol é Menor Que a Altura Do Header //
    header.classList.remove('scroll')
  }
}

/* = = = = = = = = = = = = = = = = = = = = = = = = = */
/*-------------------------------------------------------------------------------------------------------------------------------*/
/* = = = | Teslmonials Carousel/slider/swiper | = = = */

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

/* = = = = = = = = = = = = = = = = = = = = = = = = = */
/*-------------------------------------------------------------------------------------------------------------------------------*/
/* = = = | ScrollReveal: Mostrar elementos ao dar scroll na página | = = = */

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #lore .image, #lore .text,
  #character header, #character .card,
  #testimonials header, #testimonials .testimonials,
  footer .brand, footer .social
  `,
  { interval: 100 }
)
/* = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = */
/*-------------------------------------------------------------------------------------------------------------------------------*/
/* = =  = = = = = = = = | Botão "Back to top" | = = = = = = = = = = */

const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/* = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = */
/*-------------------------------------------------------------------------------------------------------------------------------*/
/* = =  = = = = = = = = | MMenu Ativo Conforme a Seção Visível Na Página | = = = = = = = = = = */

const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window, innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

// When Scroll //
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
})
