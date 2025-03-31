const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});




// // Temporarily shows the last typed character
// function showBriefly(input) {
//     const value = input.value;
    
//     if (!input.dataset.realValue) {
//         input.dataset.realValue = "";
//     }
    
//     let storedValue = input.dataset.realValue;

//     if (value.length < storedValue.length) {
//         storedValue = storedValue.slice(0, value.length); // Handle deletions
//     } else if (value.length > storedValue.length) {
//         const newChar = value[value.length - 1];
//         storedValue += newChar; // Add new character
//     }
    
//     input.dataset.realValue = storedValue;

//     // Show last character briefly (mask the rest)
//     const maskedValue = storedValue.slice(0, -1).replace(/./g, "•") + storedValue.slice(-1);
//     input.type = "text";
//     input.value = maskedValue;

//     setTimeout(() => {
//         if (input.type === "text" && !input.classList.contains("show-password")) {
//             input.type = "password";
//             input.value = storedValue; // Restore real value (hidden)
//         }
//     }, 250);
// }

// // Toggle password visibility
// function togglePassword(button) {
//     const input = button.previousElementSibling;
//     const icon = button.querySelector("#eye-icon");

//     if (input.type === "password") {
//         input.type = "text";
//         icon.src = "icons/open.png"; // Show open eye
//     } else {
//         input.type = "password";
//         icon.src = "icons/close.png"; // Show closed eye
//     }
// }


let isPasswordVisible = false;

function togglePassword(button) {
  const container = button.closest(".password-container");
  const input = container.querySelector(".password-input");
  const icon = button.querySelector("img");

  if (input.type === "password") {
    input.type = "text";
    icon.src = "icons/open.png";
    icon.alt = "Hide password";
  } else {
    input.type = "password";
    icon.src = "icons/close.png";
    icon.alt = "Show password";
  }
  console.log("Found input:", input);
}

function handleInput(input) {
  if (!isPasswordVisible) {
    showBriefly(input);
  }
}

function showBriefly(input) {
  if (!input.dataset.realValue) {
    input.dataset.realValue = "";
  }

  let storedValue = input.dataset.realValue;
  let value = input.value;

  if (value.length < storedValue.length) {
    storedValue = storedValue.slice(0, value.length); // Handle deletions
  } else if (value.length > storedValue.length) {
    storedValue += value[value.length - 1]; // Append new character
  }

  input.dataset.realValue = storedValue;
  input.type = "text";
  input.value = storedValue.slice(0, -1).replace(/./g, "•") + storedValue.slice(-1);

  setTimeout(() => {
    if (!isPasswordVisible) {
      input.type = "password";
      input.value = storedValue;
    }
  }, 250);
}