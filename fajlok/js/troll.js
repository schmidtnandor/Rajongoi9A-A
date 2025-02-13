document.addEventListener("DOMContentLoaded", function () {
    const trollButton = document.getElementById("troll");
    const popupImage = document.getElementById("popup-image");
    const overlay = document.getElementById("overlay");
    const popupText = document.getElementById("popup-text");
    const sound = new Audio(document.getElementById("popup-sound").src);

    if (trollButton) {
        trollButton.addEventListener("click", function () {
            popupImage.style.display = "block";
            overlay.style.display = "block";
            popupText.style.display = "block";
            sound.play();
            
            setTimeout(function () {
                popupImage.style.display = "none";
                overlay.style.display = "none";
                popupText.style.display = "none";
            }, 500); // Fél másodperc (500ms)
        });
    }
} );
