// Get elements from the HTML
const noteContainer = document.getElementById("note-container");
const noteTextarea = document.getElementById("note");
const saveButton = document.getElementById("save-btn");

// Load saved note from local storage
if (localStorage.getItem("note")) {
  noteTextarea.value = localStorage.getItem("note");
}

// Save note to local storage when save button is clicked
saveButton.addEventListener("click", function() {
  localStorage.setItem("note", noteTextarea.value);
});

// Make the note container draggable
let isDragging = false;
let offset = [0,0];

noteContainer.addEventListener("mousedown", function(e) {
  isDragging = true;
  offset = [
    noteContainer.offsetLeft - e.clientX,
    noteContainer.offsetTop - e.clientY
  ];
}, true);

document.addEventListener("mouseup", function() {
  isDragging = false;
}, true);

document.addEventListener("mousemove", function(e) {
  e.preventDefault();
  if (isDragging) {
    noteContainer.style.left = (e.clientX + offset[0]) + 'px';
    noteContainer.style.top = (e.clientY + offset[1]) + 'px';
  }
}, true);
