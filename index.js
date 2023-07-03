
const openMenu = document.getElementById('open-menu');
const closeMenu= document.getElementById('close-menu');
const menuLinks = document.querySelector('.menu-links');
const menuCircle = document.querySelector('.menu-circle');
const imgBox = document.querySelector('.img-box');
const tagNav = document.querySelectorAll('nav');

openMenu.addEventListener("click", function(){
    menuLinks.style.display = "block";
    menuLinks.style.display = "flex";
    menuLinks.style.flexDirection = "column";
    menuLinks.style.justifyContent = "space-between";
    menuCircle.style.display = "block";
    openMenu.style.display = "none";
    closeMenu.style.display = "block";
    imgBox.style.display = "none"
    tagNav.forEach (Element => {
        Element.style.width = '375px';
    });

});
closeMenu.addEventListener("click", function(){
    menuLinks.style.display = "none";
    menuCircle.style.display = "none";
    openMenu.style.display = "block";
    closeMenu.style.display = "none";
    imgBox.style.display = "block";
    tagNav.forEach (Element => {
        Element.style.width = '340px';
    });
});

