function validateForm() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var error = false;
  
    // Reset error messages
    document.getElementById('firstNameError').innerHTML = "";
    document.getElementById('lastNameError').innerHTML = "";
    document.getElementById('emailError').innerHTML = "";
    document.getElementById('passwordError').innerHTML = "";
    document.getElementById('confirmPasswordError').innerHTML = "";
  
    // Validate first name
    if (firstName === "") {
      document.getElementById('firstNameError').innerHTML = "First name is required";
      error = true;
    }
  
    // Validate last name
    if(lastName === "") {
      document.getElementById("lastNameError").innerHTML = "Last name is required";
      error = true;
    }
  
    // Validate email
    if (email === "") {
      document.getElementById('emailError').innerHTML = "Email is required";
      error = true;
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      document.getElementById('emailError').innerHTML = "Invalid email format";
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

    if(!error) {
        alert("Registration successful");
    }
  
    return !error; // Prevent form submission if there are errors
  }
  