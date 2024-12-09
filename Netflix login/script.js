document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("login-form");
    var netflixScreen = document.getElementById("netflix-screen");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        form.parentElement.style.transform = "scale(0.1)";
        form.parentElement.style.opacity = "0";
        setTimeout(function() {
            form.parentElement.style.display = "none";
            netflixScreen.classList.add("active");
        }, 1000);
    });
});
