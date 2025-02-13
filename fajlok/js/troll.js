document.addEventListener("DOMContentLoaded", function () {
    const trollButton = document.getElementById("troll");
    const popupImage = document.getElementById("popup-image");
    const overlay = document.getElementById("overlay");

    if (trollButton) {
        trollButton.addEventListener("click", function () {
            popupImage.style.display = "block";
            overlay.style.display = "block";
            
            setTimeout(function () {
                popupImage.style.display = "none";
                overlay.style.display = "none";
            }, 500); // Fél másodperc (500ms)
        });
    }
} );
