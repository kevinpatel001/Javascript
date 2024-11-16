// Get the button element by its ID
const button = document.getElementById("button");

// Add an event listener to the button
// The first parameter specifies the event type (e.g., "click")
// The second parameter is the callback function that runs when the event occurs
button.addEventListener("click", () => {
    // Log a message to the console when the button is clicked
    console.log("Button clicked");
});

// Get the submit button element by its ID
const submitButton = document.getElementById("submitButton");

// Add an event listener to the submit button
// This listens for a "click" event on the submit button
submitButton.addEventListener("click", () => {
    // Log a message to the console when the submit button is clicked
    console.log("submit button is clicked");
});

// Get the element for mouseover interaction by its ID
const mousemoveover = document.getElementById("mousemoveover");

// Add an event listener to the element for the "mouseover" event
// The event triggers when the mouse pointer moves over the element
mousemoveover.addEventListener("mouseover", () => {
    // Log a message to the console when the mouse moves over the element
    console.log("Mouse has been moved over the button");
});
