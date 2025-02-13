let currentImage = 0;
            const images = document.querySelectorAll('.image_valto img');
            
            function showNextImage() {
                images[currentImage].style.display = 'none'; // Elrejti az aktuális képet
                currentImage = (currentImage + 1) % images.length; // Következő képre vált
                images[currentImage].style.display = 'block'; // Megjeleníti az új képet
            }
        
            // Kezdőképként az első kép látszik
            images[currentImage].style.display = 'block';
        
            // Képváltás minden 2 másodpercben
            setInterval(showNextImage, 2500);