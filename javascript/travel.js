document.addEventListener("DOMContentLoaded", function () {
    const menu = document.querySelector(".navigationbar");
    const grid = document.querySelector(".hamburger .grid-list");

    menu.addEventListener("click", function () {
        grid.classList.toggle("show-dropdown");
    });
});

function copyFunction () {
    alert('Text copied successfully!');
}

