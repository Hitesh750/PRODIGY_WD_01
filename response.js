document.addEventListener("DOMContentLoaded", function () {
    var header = document.querySelector("header");

    // Change background color on scroll
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            header.style.backgroundColor = "#E26EE5";
        } else {
            header.style.backgroundColor = "#7E30E1";
        }
    });
});
 