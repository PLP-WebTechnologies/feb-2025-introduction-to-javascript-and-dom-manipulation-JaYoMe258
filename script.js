// DOM Elements
const mainHeading = document.getElementById('main-heading');
const dynamicContent = document.getElementById('dynamic-content');
const changeTextBtn = document.getElementById('change-text');
const changeStyleBtn = document.getElementById('change-style');
const addElementBtn = document.getElementById('add-element');
const removeElementBtn = document.getElementById('remove-element');
const resetAllBtn = document.getElementById('reset-all');

// Change Text Content
changeTextBtn.addEventListener('click', function() {
    dynamicContent.innerHTML = '<p>Text content has been changed dynamically using JavaScript!</p>';
    mainHeading.textContent = 'DOM Updated Successfully!';
});

// Modify CSS Styles
changeStyleBtn.addEventListener('click', function() {
    dynamicContent.style.backgroundColor = '#e6f7ff';
    dynamicContent.style.border = '2px solid #0077cc';
    dynamicContent.style.color = '#003366';
    dynamicContent.classList.add('highlight');
});

// Add New Element
addElementBtn.addEventListener('click', function() {
    const newElement = document.createElement('div');
    newElement.innerHTML = '<p>This is a new element added dynamically!</p>';
    newElement.style.marginTop = '10px';
    newElement.style.padding = '10px';
    newElement.style.backgroundColor = '#f8f8f8';
    newElement.style.border = '1px dashed #ccc';
    dynamicContent.appendChild(newElement);
});

// Remove Last Element
removeElementBtn.addEventListener('click', function() {
    if (dynamicContent.children.length > 1) {
        dynamicContent.removeChild(dynamicContent.lastChild);
    } else {
        alert('No additional elements to remove!');
    }
});

// Reset All Changes
resetAllBtn.addEventListener('click', function() {
    dynamicContent.innerHTML = '<p>This content will change when you click the buttons below.</p>';
    dynamicContent.style = '';
    dynamicContent.className = '';
    mainHeading.textContent = 'DOM Manipulation Example';
});