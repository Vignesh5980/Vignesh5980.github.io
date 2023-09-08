const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


const shadowHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('shadow-header')
                        : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

// Scroll up
const scrollHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('scroll-header')
                        : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

const contactForm =document.getElementById('contact-form'),
        contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()

    //serviceID - templateID - #form - publickey
    emailjs.sendForm('service_3s2nc8l','template_mbd3lds','#contact-form','ra3_7zQzQciEXl35i')
    .then(() =>{

        //Show sent message
        contactMessage.textContent = 'Message Sent Successfully ✅'

        // Remove message after five seconds
        setTimeout(() =>{
            contactMessage.textContent = ''
        }, 5000)

        // clear input fields
        contactForm.reset()
    }, () =>{
        // Show error message
        contactMessage.textContent = 'Message not sent (service error) ❌'
    })
}

contactForm.addEventListener('submit', sendEmail)


// Scroll Down
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


//Scroll sections active link//
const sections = document.querySelectorAll('section[Id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionID = current.getAttribute('id'),
        sectionClass = document.querySelectorAll('.nav__menu a[href*=' + sectionID + ']')

    if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
        sectionClass.classList.add('active-link')
    }else{
        sectionClass.classList.remove('active-link')
    }
    })
}
window.addEventListener('scroll', scrollActive)

//Dark Theme//

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

const selectedTheme = localStorage.getItem('selected-item')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => document.body.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

if(selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

//activating//
themeButton.addEventListener('click', () =>{
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})