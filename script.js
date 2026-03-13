function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open"); // Toggle the "open" class on the menu
    icon.classList.toggle("open");

}