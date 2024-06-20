// Remove all existing HTML elements
document.body.innerHTML = "";

// Create a new h1 element
var h1 = document.createElement("h1");
h1.textContent = "DOWN";

// Apply styles to make the h1 cover the entire page and center its content
h1.style.width = "100%";
h1.style.height = "100vh"; // vh stands for viewport height, making it cover the entire viewport
h1.style.display = "flex";
h1.style.justifyContent = "center";
h1.style.alignItems = "center";
h1.style.fontSize = "10vw"; // Using vw (viewport width) units for responsive font size

// Add a media query to adjust font size based on screen width
var style = document.createElement("style");
style.textContent = `
h1 {margin: 0;}
  @media (min-width: 600px) {
    h1 {
      font-size: 6rem; /* Adjust font size for larger screens */
    }
  }
`;

// Append the style element to the head
document.head.appendChild(style);

// Append the h1 element to the body
document.body.appendChild(h1);
