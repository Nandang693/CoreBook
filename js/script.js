window.addEventListener('scroll', () => {
    let nav = document.getElementById('containerNav');
  

    if(window.scrollY > 50) {
        nav.classList.add('scrolled')
    } else {
        nav.classList.remove('scrolled');
    }
});