/*=============== FILTERS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tc =>{
            tc.classList.remove('filters__active')
        })
        target.classList.add('filters__active')

        tabs.forEach(t =>{
            t.classList.remove('filter-tab-active')
        })
        tab.classList.add('filter-tab-active')
    })
})

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal(`.profile__border`)
sr.reveal(`.profile__name`, {delay: 500})
sr.reveal(`.profile__profession`, {delay: 600})
sr.reveal(`.profile__social`, {delay: 700})
sr.reveal(`.profile__info-group`, {interval: 100, delay: 700})
sr.reveal(`.profile__buttons`, {delay: 800})
sr.reveal(`.profile__buttons-small`, {delay: 800})
sr.reveal(`.filters__content`, {delay: 900})
sr.reveal(`.filters`, {delay: 1000})


/*===== THEME SHOW =====*/
const navCustom = document.getElementById('nav-custom'),
      navTheme = document.getElementById('custom-theme')
      navThemeClose = document.getElementById('close-theme')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navTheme){
  navTheme.addEventListener('click', () =>{
    navCustom.classList.add('settings-menu-height')
  })
}
if(navThemeClose){
  navThemeClose.addEventListener('click', () =>{
    navCustom.classList.remove('settings-menu-height')
  })
}
var root = document.querySelector(':root');
const colorPalette = document.querySelectorAll('.choose-color span')
const changeActiveColorClass = () => {
  colorPalette.forEach(colorPicker => {
    colorPicker.classList.remove('active');
  })

}
colorPalette.forEach(color => {
  color.addEventListener('click', () => {
    let primary;
    changeActiveColorClass();
    if(color.classList.contains('color-1')){
      primaryHue = 250;
    } else if(color.classList.contains('color-2')){
      primaryHue = 52;
    } else if(color.classList.contains('color-3')){
      primaryHue = 340;
    } else if(color.classList.contains('color-4')){
      primaryHue = 142;
    } else if(color.classList.contains('color-5')){
      primaryHue = 202;
    }
    color.classList.add('active');
    root.style.setProperty('--hue', primaryHue);
  })
})