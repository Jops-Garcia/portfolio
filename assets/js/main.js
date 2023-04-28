/*=============== FILTERS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),tabContents=document.querySelectorAll('[data-content]')
tabs.forEach(tab => {
    tab.addEventListener('click',() => {
        const target=document.querySelector(tab.dataset.target)

        tabContents.forEach(tc=>{
            tc.classList.remove('filters__active')
        })
        target.classList.add('filters__active')

        tabs.forEach(t=>{
            t.classList.remove('filter-tab-active')
        })
        tab.classList.add('filter-tab-active')
    })
})

/*=============== TEMA ESCURO ===============*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Topico selecionado anteriormente
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
//pega o tema atual que a interface está utilizando
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// verifica se há um tema selecionado
if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Ativar/Desativar tema
themeButton.addEventListener('click', () => {

    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL  ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance:'60px',
    duration:2500,
    delay:200, 
})

sr.reveal(`.profile__border`)
sr.reveal(`.profile__name`,{delay:500})
sr.reveal(`.profile__profession`,{delay:600})
sr.reveal(`.profile__social`,{delay:700})
sr.reveal(`.profile__info-group`,{interval:100, delay:700})
sr.reveal(`.profile__buttons`,{delay:800})
sr.reveal(`.filters__content`,{delay:900})
sr.reveal(`.filters`,{delay:1000})




