const form = document.getElementById("form");
const firstname_input = document.getElementById("firstname-input");
const lastname_input = document.getElementById("lastname-input");
const email_input = document.getElementById("email-input");
const password_input = document.getElementById("password-input");
const repeat_password_input = document.getElementById("repeat-password-input");
const error_message = document.getElementById("error-message");

form.addEventListener("submit", (e) => {
  let errors = [];

  if (firstname_input) {
    // If we have a firstname input then we are in the signup
    errors = getSignupFormErrors(
      firstname_input.value,
      lastname_input.value,
      email_input.value,
      password_input.value,
      repeat_password_input.value
    );
  } else {
    // If we don't have a firstname input then we are in the login
    errors = getLoginFormErrors(email_input.value, password_input.value);
  }

  if (errors.length > 0) {
    // If there are any errors
    e.preventDefault();
    error_message.innerText = errors.join(". ");
  }
});

function getSignupFormErrors(firstname, lastname, email, password, repeatPassword) {
  let errors = [];

  if (firstname === "" || firstname == null) {
    errors.push("Firstname is required");
    firstname_input.parentElement.classList.add("incorrect");
  }
  if (lastname === "" || lastname == null) {
    errors.push("Lastname is required");
    lastname_input.parentElement.classList.add("incorrect");
  }
  if (email === "" || email == null) {
    errors.push("Email is required");
    email_input.parentElement.classList.add("incorrect");
  }
  if (password === "" || password == null) {
    errors.push("Password is required");
    password_input.parentElement.classList.add("incorrect");
  }
  if (password.length < 8) {
    errors.push("Password must have at least 8 characters");
    password_input.parentElement.classList.add("incorrect");
  }
  if (password !== repeatPassword) {
    errors.push("Password does not match repeated password");
    password_input.parentElement.classList.add("incorrect");
    repeat_password_input.parentElement.classList.add("incorrect");
  }

  return errors;
}

function getLoginFormErrors(email, password) {
  let errors = [];

  if (email === "" || email == null) {
    errors.push("Email is required");
    email_input.parentElement.classList.add("incorrect");
  }
  if (password === "" || password == null) {
    errors.push("Password is required");
    password_input.parentElement.classList.add("incorrect");
  }

  return errors;
}

const allInputs = [
  firstname_input,
  lastname_input,
  email_input,
  password_input,
  repeat_password_input,
].filter((input) => input != null);

allInputs.forEach((input) => {
  input.addEventListener("input", () => {
    if (input.parentElement.classList.contains("incorrect")) {
      input.parentElement.classList.remove("incorrect");
      error_message.innerText = "";
    }
  });
});

// save signup data in local storage if in signup page and clicked signup and no errors found

document.getElementById("signup-button")?.addEventListener("click", (e) => {
  e.preventDefault();
  const errors = getSignupFormErrors(
    firstname_input.value,
    lastname_input.value,
    email_input.value,
    password_input.value,
    repeat_password_input.value
  );

  if (errors.length === 0) {
    const signupData = {
      firstname: firstname_input.value,
      lastname: lastname_input.value,
      email: email_input.value,
      password: password_input.value,
    };

    localStorage.setItem("signupData", JSON.stringify(signupData));
    window.location.href = "/index.html";
    // alert("Sign up successful");
  }
});

// retrieve local storage saved data to check if login data match login input data

const loginButton = document.getElementById("login-button");

loginButton.addEventListener("click", (e) => {
  e.preventDefault();

  const errors = getLoginFormErrors(email_input.value, password_input.value);

  if (errors.length === 0) {
    const savedData = JSON.parse(localStorage.getItem("signupData"));

    if (
      savedData &&
      savedData.email === email_input.value &&
      savedData.password === password_input.value
    ) {
      window.location.href = "/index.html";

      localStorage.setItem("loggedInUserId", savedData.email);
      alert(`Logged in as ${savedData.email}`);
    } else {
      error_message.innerText = "Invalid email or password";
      password_input.parentElement.classList.add("incorrect");
    }
  }
});
