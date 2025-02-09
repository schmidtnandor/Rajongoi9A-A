let imageExists = false;  // Track if the image already exists

// Get the audio element by its ID
let audio = document.getElementById('easterEggAudio');

// Add a listener to check if the audio has loaded
audio.addEventListener('canplaythrough', function() {
    console.log("Audio is ready to play");
});

audio.addEventListener('error', function(e) {
    console.log("Audio failed to load:", e);
});

// Add click event listener to the button
document.getElementById('easteregg').addEventListener('click', function(event) {
    event.preventDefault();

    // Prevent multiple images from spawning if one is already visible
    if (imageExists) {
        return;  // Do nothing if the image already exists
    }

    // Get the image path from the hidden div (or another element)
    const imagePath = document.getElementById('imagePath').getAttribute('data-image');
    if (!imagePath) {
        console.error("Image path not found!");
        return;
    }

    // Create the image element and set up its properties
    var eastereggImage = document.createElement('div');  // Create a <div> instead of <img>
    eastereggImage.id = 'eastereggImage';
    eastereggImage.style.width = '200px'; // Set width of the image
    eastereggImage.style.height = '200px'; // Set height of the image
    eastereggImage.style.position = 'absolute';
    eastereggImage.style.display = 'none'; // Initially hide it
    eastereggImage.style.backgroundImage = `url("${imagePath}")`;  // Use the image path from the HTML
    eastereggImage.style.backgroundSize = 'contain'; // Ensure the image is contained in the div
    eastereggImage.style.backgroundPosition = 'center'; // Center the background image
    eastereggImage.style.border = 'none'; // Remove any borders
    eastereggImage.style.backgroundColor = 'transparent'; // Ensure background color is transparent
    document.body.appendChild(eastereggImage);

    // Mark that an image exists
    imageExists = true;

    // Play the audio when the image becomes visible
    audio.play().catch(function(error) {
        console.log("Error playing audio:", error);
    });

    // Make the image visible and start the bouncing
    eastereggImage.style.display = 'block';
    startBounce(eastereggImage);
});

function startBounce(image) {
    var imageWidth = 150;  // Set the width of the image
    var imageHeight = 80;  // Set the height of the image
    var margin = 10; // Set a 10px margin to avoid going out of bounds

    var x = margin;  // Starting horizontal position
    var y = margin;  // Starting vertical position
    var dx = 2; // Horizontal speed
    var dy = 2; // Vertical speed

    var bounceInterval = setInterval(function() {
        var windowWidth = window.innerWidth;
        var windowHeight = window.innerHeight;

        // Update the position of the image
        x += dx;
        y += dy;

        // If the image hits the right or left edge, reverse horizontal direction
        if (x + imageWidth + margin >= windowWidth || x - margin <= 0) {
            dx = -dx;
        }

        // If the image hits the bottom or top edge, reverse vertical direction
        if (y + imageHeight + margin >= windowHeight || y - margin <= 0) {
            dy = -dy;
        }

        // Apply the new position
        image.style.left = x + 'px';
        image.style.top = y + 'px';
    }, 10);  // Update position every 10 milliseconds


}
