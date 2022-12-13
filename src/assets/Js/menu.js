alert("¿Ya o Que?")
const toggleButton = document.getElementsByClassName('.navbar-toggle')[0];
const navbarLinks = document.getElementsByClassName('.navbar-links');

toggleButton.addEventListener('click', function() {

    for(var i=0; i<navbarLinks.length; i++)
    navbarLinks[i].classList.toggle('active');

});