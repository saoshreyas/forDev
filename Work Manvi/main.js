const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

function showBriefly(input) {
    const value = input.value;
    
    // Keep the real password stored
    if (!input.dataset.realValue) {
        input.dataset.realValue = "";
    }
    
    let storedValue = input.dataset.realValue;

    // If text was deleted, update stored password
    if (value.length < storedValue.length) {
        storedValue = storedValue.slice(0, value.length);
    } else {
        // Add only the new character
        let newChar = value[value.length - 1];
        storedValue += newChar;
    }
    
    input.dataset.realValue = storedValue;
    input.value = storedValue; // Sync real password (but hidden due to type="password")

    // Temporarily show the last character
    input.type = "text";
    setTimeout(() => {
        input.type = "password";
    }, 250);
}

function showPassword(icon) {
    let input = icon.previousElementSibling;
    if (input) {
        input.type = "text"; // Show real password (stored in .value)
    }
}

function hidePassword(icon) {
    let input = icon.previousElementSibling;
    if (input) {
        input.type = "password"; // Hide password (but real value is preserved)
    }
}