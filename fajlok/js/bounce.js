document.getElementById('easteregg').addEventListener('click', function(event) {
    event.preventDefault();

    var eastereggImage = document.getElementById('eastereggImage');
    eastereggImage.style.display = 'block';  // Show the image
    
    // Start the bouncing effect
    startBounce(eastereggImage);
});

function startBounce(image) {
    var imageWidth = 150;  // Width of the image
    var imageHeight = 80;  // Height of the image

    var x = 0;  // Starting horizontal position
    var y = 0;  // Starting vertical position
    var dx = 2; // Speed of horizontal movement
    var dy = 2; // Speed of vertical movement

    var bounceInterval = setInterval(function() {
        // Get the current width and height of the window
        var windowWidth = window.innerWidth;
        var windowHeight = window.innerHeight;

        // Update the position of the image
        x += dx;
        y += dy;

        // If the image hits the right edge, reverse horizontal direction
        if (x + imageWidth >= windowWidth || x <= 0) {
            dx = -dx;
        }

        // If the image hits the bottom edge, reverse vertical direction
        if (y + imageHeight >= windowHeight || y <= 0) {
            dy = -dy;
        }

        // Apply the new position to the image
        image.style.left = x + 'px';
        image.style.top = y + 'px';
    }, 10);  // Update every 10 milliseconds

}
