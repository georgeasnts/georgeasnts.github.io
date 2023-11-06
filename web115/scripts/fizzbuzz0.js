document.addEventListener("DOMContentLoaded", function() {
	document.getElementById('submit').addEventListener('click', function(event) {
	    event.preventDefault(); // Prevent the form from submitting and page reload
    
	    // Get the values entered in the form fields
	    let firstName = document.getElementById('first_name').value;
	    let middleName = document.getElementById('middle_initial').value;
	    let lastName = document.getElementById('last_name').value;
    
	    // Combine the values to create the user's full name
	    let fullName = `${firstName} ${middleName}. ${lastName}`;
    
	    // Create a new greeting message using the user's full name
	    let newGreeting = `Welcome to User Utopia, ${fullName}!`;
    
	    // Update the greeting displayed on the page with the new greeting
	    document.getElementById('greeting').textContent = newGreeting;
	});

    });
    