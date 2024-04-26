function validateForm() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var error = false;
  
    // Reset error messages
    document.getElementById('firstNameError').innerHTML = "";
    document.getElementById('lastNameError').innerHTML = "";
    document.getElementById('usernameError').innerHTML = "";
    document.getElementById('passwordError').innerHTML = "";
    document.getElementById('confirmPasswordError').innerHTML = "";
  
    // Validate first name
    if (firstName === "") {
      document.getElementById('firstNameError').innerHTML = "First name is required";
      error = true;
    }
  
    // Validate last name
    if (lastName === "") {
      document.getElementById('lastNameError').innerHTML = "Last name is required";
      error = true;
    }
  
    // Validate username
    if (username === "") {
      document.getElementById('usernameError').innerHTML = "Username is required";
      error = true;
    } else if (!/^[a-zA-Z0-9._-]{3,}$/.test(username)) {
      document.getElementById('usernameError').innerHTML = "Username must be at least 3 characters and can contain letters, numbers, periods, underscores, and hyphens";
      error = true;
    }
  
    // Validate password
    if (password === "") {
      document.getElementById('passwordError').innerHTML = "Password is required";
      error = true;
    } else if (password.length < 6) {
      document.getElementById('passwordError').innerHTML = "Password must be at least 6 characters";
      error = true;
    }
  
    // Validate confirm password
    if (confirmPassword === "") {
      document.getElementById('confirmPasswordError').innerHTML = "Confirm password is required";
      error = true;
    } else if (confirmPassword !== password) {
      document.getElementById('confirmPasswordError').innerHTML = "Passwords do not match";
      error = true;
    }
  
    // Submit level validation (optional, for more complex checks)
    if (!error) {
      // Simulate successful registration (replace with actual submission logic)
      alert("Registration Successful!");
    }
  
    return !error; // Prevent form submission if there are errors
  }
  