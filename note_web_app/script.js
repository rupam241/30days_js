const create_button = document.getElementById('btn');
const notes_container = document.querySelector('.note_place_container');

// Function to show notes from local storage
const showNotes = () => {
    notes_container.innerHTML = localStorage.getItem("notes") || "";
}

// Function to update local storage with current notes
const updateStorage = () => {
    localStorage.setItem("notes", notes_container.innerHTML);
}
console.log(updateStorage);

// Add event listener for creating new note
create_button.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement('img');
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "notes-app-img/images/delete.png";
    inputBox.appendChild(img);
    notes_container.appendChild(inputBox);

    // Update local storage when a new note is added
    updateStorage();
});

// Add event listener for deleting note
notes_container.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        // Update local storage when a note is deleted
        updateStorage();
    }
});

// Add event listener for editing note
notes_container.addEventListener("input", () => {
    // Update local storage when a note is edited
    updateStorage();
});

// Load notes from local storage when the page is loaded
document.addEventListener("DOMContentLoaded", showNotes);

// Handle Enter key press to insert line break
document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak")
        event.preventDefault();
    }
});
