document.addEventListener("DOMContentLoaded", function() {
    const themeButton = document.getElementById("theme-toggle-button");
    let toggled = false;

    themeButton.addEventListener("click", function() {
        const szovegcolElements = document.querySelectorAll(".szovegcol h1, .szovegcol p");
        if (!toggled) {
            document.body.style.backgroundColor = "#c6c";
            szovegcolElements.forEach(element => {
                element.style.color = "#c6c";
            });
        } else {
            document.body.style.backgroundColor = "#35beda";
            szovegcolElements.forEach(element => {
                element.style.color = "";
            });
        }
        toggled = !toggled;
    });
});