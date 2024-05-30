// Select the login button, login form, exit logo, and list button elements
const loginButton = document.getElementById(`login-button`);
const loginForm = document.getElementById(`login-form`);
const addmemButton = document.getElementById(`addmem-button`);
const addmemForm = document.getElementById(`addmem-form`);
// Get unique IDs for each exit logo
const exitLoginIcon = document.getElementById(`exit-login-icon`);
const exitAddMemIcon = document.getElementById(`exit-addmem-icon`);
const listButton = document.getElementById(`list-button`);
// selecting login button, the first and second input to check for authentication and also 
// the addMenber btn on the main page
const firstInput = document.getElementById("Username");
const secondInput = document.getElementById("password");

// creating a function for authentication
function authenUser(firstVal, secondVal)
{
  first = `frema@sec.lug.club`;
  second = `logMeIntoIt`;

  if (firstVal === first && secondVal === second)
    return true
  else
    return false
}

// Event listener for the login button
loginButton.addEventListener(`click`, () => {
  // Show the login form with a smooth transition
  loginForm.style.display = `grid`; // Show the form
  loginForm.style.transition = `opacity 0.5s ease-in-out`; // Set transition effect
  setTimeout(() => { // Delay the opacity change
    loginForm.style.opacity = 1; // Set opacity to 1 after the delay
  }, 10); // 10 milliseconds delay

  
});

// Event listener for the addmem button
addmemButton.addEventListener(`click`, () => {
  // getting authData from localStorage
  userDataCol = JSON.parse(localStorage.getItem("listData"))
    if (userDataCol !== null && authenUser(userDataCol.firstVal, userDataCol.secondVal)){
    // the form for the membership form can now be shown
    // Show the addMem form with a smooth transition
    addmemForm.style.display = `grid`; // Show the form
    addmemForm.style.transition = `opacity 0.5s ease-in-out`; // Set transition effect
    setTimeout(() => { // Delay the opacity change
      addmemForm.style.opacity = 1; // Set opacity to 1 after the delay
    }, 10); // 10 milliseconds delay
  }else{
    alert("PLease Log in first");
    window.location.href = `index.html`;
  }
});

// Event listener for the exit logo button for login form
exitLoginIcon.addEventListener(`click`, () => {
  // Hide the login form with a smooth transition
  // loginForm.style.opacity = 1; // Start with opacity 1
  loginForm.style.transition = `opacity 0.5s ease-in-out`; // Set transition effect
  setTimeout(() => { // Delay the opacity change
    loginForm.style.opacity = 0; // Set opacity to 0 after the delay
    loginForm.style.display = `none`; // Hide the form after the delays
  }, 10); // 10 milliseconds delay
});

// Event listener for the exit logo button for add member form
exitAddMemIcon.addEventListener(`click`, () => {
  // Hide the add member form with a smooth transition
  addmemForm.style.opacity = 1; // Start with opacity 1
  addmemForm.style.transition = `opacity 0.5s ease-in-out`; // Set transition effect
  setTimeout(() => { // Delay the opacity change
    addmemForm.style.opacity = 0; // Set opacity to 0 after the delay
    addmemForm.style.display = `none`; // Hide the form after the delays
  }, 10); // 10 milliseconds delay
});

// Event listener for the members list button
listButton.addEventListener(`click`, () => {
  // getting authData from localStorage
  userDataCol = JSON.parse(localStorage.getItem("listData"))
  if (userDataCol !== null && authenUser(userDataCol.firstVal, userDataCol.secondVal)){
    // Redirect to the list.html page
    window.location.href = 'list.html';
  }else{
    alert("PLease Log in first");
  }
});

// addding event listener to be able to validate user input when submit is clicked


