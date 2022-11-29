let deletebtn = document.querySelectorAll('.btn-delete');

for (let i = 0; i < deletebtn.length; i++) {
    deletebtn[i].addEventListener('click', function() {
        deletebtn[i].parentElement.parentElement.remove();

    })


}
let bouttonplus = document.getElementsByClassName(`btn-plus`);
for (let i = 0; i < bouttonplus.length; i++) {
    bouttonplus[i].addEventListener('click', function() {
        bouttonplus[i].previousElementSibling.innerText++;
    });
}
let bouttonmoins = document.getElementsByClassName(`btn-moins`);
for (let i = 0; i < bouttonmoins.length; i++) {
    bouttonmoins[i].addEventListener('click', function() {
        if (bouttonmoins[i].nextElementSibling.innerText > 0) { bouttonmoins[i].nextElementSibling.innerText--; }

    })
}
let heart = document.getElementsByClassName('fas fa-heart');
for (let i = 0; i < heart.length; i++) {
    heart[i].addEventListener('click', function() {
        if (heart[i].style.color === 'grey') {
            heart[i].style.color = 'red'
        } else { heart[i].style.color = 'grey' }
    });

}
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}