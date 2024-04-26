function validateForm(event) {
    event.preventDefault(); // Prevent the form from submitting

    var firstName = document.getElementById("firstName").value.trim();
    var lastName = document.getElementById("lastName").value.trim();
    var organization = document.getElementById("organization").value.trim();
    var hobbies = document.getElementById("hobbies").value.trim();
    var email = document.getElementById("email").value.trim();

    // Simple email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Displaying the details
    var details = "First Name: " + firstName + "\n" +
                  "Last Name: " + lastName + "\n" +
                  "Organization: " + organization + "\n" +
                  "Hobbies: " + hobbies + "\n" +
                  "Email: " + email;

    alert("Registration Successful!\n\n" + details);
}
