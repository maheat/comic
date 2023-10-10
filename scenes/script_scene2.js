document.addEventListener("DOMContentLoaded", function() {
    const svgElement = document.getElementById("Layer_1");
    
    // Add a click event listener to the SVG element
    svgElement.addEventListener("click", function() {
        // Redirect to scene1.html when the SVG is clicked
        window.location.href = "./scene1.html";
    });
});