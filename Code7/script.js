 // Example variable to store a string
 var message = "Hello, world!";
 console.log(message); // Print the string to the console
 

// Function to display an alert message
function showAlert() {
    alert("This is an alert message!");
  }

function averageLifespan() {
     // Variables for average lifespan and weeks per year
  const averageLifespan = 78; // Adjust as needed
  const weeksPerYear = 52;
  
  // Calculate and display average number of weeks in a lifetime
  const averageWeeks = averageLifespan * weeksPerYear;
  document.getElementById("averageWeeks").innerHTML = "Average weeks in a human lifetime: " + averageWeeks;
  
}
 
  // Function to determine time of day
  function getTimeOfDay() {
    const date = new Date();
    const hours = date.getHours();
  
    if (hours >= 5 && hours < 12) {
      document.getElementById("currentTime").innerHTML = "Good Morning!";
    } else if (hours >= 12 && hours < 17) {
      document.getElementById("currentTime").innerHTML = "Good Afternoon!";
    } else {
      document.getElementById("currentTime").innerHTML = "Good Night!";
    }
  }
  
  // Call the getTimeOfDay function on page load
  getTimeOfDay();
  
 