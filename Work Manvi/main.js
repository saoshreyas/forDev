const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});
function showSignIn() {
  document.getElementById("signInScreen").classList.add("active");
  document.getElementById("sinny").classList.add("active");
  document.getElementById("sinup").classList.add("active");
  
}


function showSolo(){
  document.getElementById("sinup").classList.add("active");
  document.getElementById("soloSign").classList.add("active");
}
function showStudent(){
  document.getElementById("sinup").classList.add("active");
  document.getElementById("studentSign").classList.add("active");
}
function showTeacher(){
  document.getElementById("sinup").classList.add("active");
  document.getElementById("teacherSign").classList.add("active");
}
function showParent(){
  document.getElementById("sinup").classList.add("active");
  document.getElementById("parSign").classList.add("active");
}


const SUPABASE_URL = 'https://hmxttrmcbnzzrcjsgine.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhteHR0cm1jYm56enJjanNnaW5lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYyNjg5OTMsImV4cCI6MjA2MTg0NDk5M30.rzckIwg7ICwCga9sb8YyVw9eb39sKbW68Pz67InUbbk';

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);





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
const signupForm = document.getElementById("signup-form");

function togglePassword2(button) {
  const container = button.closest(".password-container2");
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

// signupForm.addEventListener("submit", async (event) => {
//   event.preventDefault();

//   // Get form values
//   const username = document.getElementById("signup-username").value;
//   const email = document.getElementById("signup-email").value;
//   const password = document.getElementById("signup-password").value;
//   const confirmPassword = document.getElementById("signup-confirm-password").value;

//   if (password !== confirmPassword) {
//     alert("Passwords do not match.");
//     return; // Stop the form submission
//   }

//   // Insert into Supabase
//     // const { data, error } = await supabase.auth.signUp
//     // .from("profiles") 
//     // .insert([{ username, email, password }]); 
//     // ({
//     //   email,
//     //   password,
//     // });
//     const { data, error } = await supabaseClient.auth.signUp({
//       email: email,
//       password: password,
//       options: {
//         data: { username: username }
//       }
//     });
//   if (error) {
//     console.error("Signup error:", error.message);
//     alert("Signup failed: " + error.message);
//   } else {
//     alert("Signup successful!");
//     console.log("Inserted data:", data);
//     signupForm.reset();
//   }
//   //const user_id = data.user.id;
//   const {
//     data: { user },
//     error: userError
//   } = await supabaseClient.auth.getUser();
  
//   if (userError) {
//     console.error("Error fetching authenticated user:", userError.message);
//     alert("User not authenticated.");
//     return;
//   }
  
//   console.log("Authenticated user ID:", user.id);

//   const { error: profileError } = await supabaseClient
//   .from("profiles")
//   .insert([
//     { user_id, username: username, email: email } // adjust fields to match your table
//   ]);

//   if (profileError) {
//   alert("Profile creation failed: " + profileError.message);
//   } else {
//   alert("Signup successful!");
//   signupForm.reset();
//   }
// });


// function handleInput(input) {
//   if (!isPasswordVisible) {
//     showBriefly(input);
//   }
// }

// function showBriefly(input) {
//   if (!input.dataset.realValue) {
//     input.dataset.realValue = "";
//   }

//   let storedValue = input.dataset.realValue;
//   let value = input.value;

//   if (value.length < storedValue.length) {
//     storedValue = storedValue.slice(0, value.length); // Handle deletions
//   } else if (value.length > storedValue.length) {
//     storedValue += value[value.length - 1]; // Append new character
//   }

//   input.dataset.realValue = storedValue;
//   input.type = "text";
//   input.value = storedValue.slice(0, -1).replace(/./g, "•") + storedValue.slice(-1);

//   setTimeout(() => {
//     if (!isPasswordVisible) {
//       input.type = "password";
//       input.value = storedValue;
//     }
//   }, 250);
// }