const showMenu = () => {
    let menu = document.getElementById('links-mobile');
    if (menu.style.display === 'none') {
        menu.style.display = 'flex';
    } else {
        menu.style.display = 'none';
    }
}