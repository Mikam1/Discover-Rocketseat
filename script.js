function toggleMode(){
    const html = document.documentElement
    html.classList.toggle('light')

    const image = document.querySelector(".profile img")

    if (html.classList.contains('light')){
        image.setAttribute('src', './assets/avatar-light.png')
        image.setAttribute('alt', 'Profile light-image')
    } else {
        image.setAttribute('src', './assets/Avatar.png')
        image.setAttribute('alt', 'Profile image')
    }
};