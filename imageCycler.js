$(document).ready(function() {
    // This function runs once the document is fully loaded.

    let slidenum = 0; // Initialize the current slide number.
    let slide_image = $('#slide_image'); // Get the image element by ID.
    let slide_text = $('#slide_text'); // Get the caption element by ID.
    let slide_link = $('#slide_link'); // Get the link element by ID.

    function cycle() {
        // This function advances the slideshow and updates content.
        slidenum = slidenum + 1; 
        if (slidenum === slides.length) {
            slidenum = 0; 
        }

        // Update the image, caption, and link with data from the 'slides' array.
        slide_image.attr('src', slides[slidenum].src);
        slide_text.html(slides[slidenum].caption);
        slide_link.attr('href', slides[slidenum].url);

        if (slides[slidenum].url.length > 0) {
            slide_image.css('cursor', 'pointer');
            slide_image.off('click'); // Remove previous click handlers
            slide_image.click(function() {
                openUrl(slides[slidenum].url); // Handle click event.
            });
        }

        setTimeout(cycle, 3000); // Call the 'cycle' function recursively every 3 seconds.
    }

    function openUrl(url) {
        // Function to open the URL when the image is clicked.
        window.location.href = url;
    }

    cycle(); // Start the slideshow cycle when the page loads.
});
