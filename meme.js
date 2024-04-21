document.addEventListener("DOMContentLoaded", function() {
    var images = [
        "image1.jpg",
        "image2.PNG",
        "image3.jpg",
        "image4.JPEG",
        // Add more image URLs as needed
    ];

    var randomIndex = Math.floor(Math.random() * images.length);
    var randomImage = images[randomIndex];
    document.getElementById("randomImage").src = randomImage;
});
