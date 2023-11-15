// sets the original greeting as a constant variable
let originalGreeting = document.getElementById('greeting').textContent;
//adds an event listener to the submit button when clicked
document.getElementById('submit').addEventListener('click', function(event) {
    
	//gets the values for the input fields
    let firstName = document.getElementById('first_name').value;
    let middleName = document.getElementById('middle_initial').value;
    let lastName = document.getElementById('last_name').value;

     //capitalizes the first letter of 
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }

    firstName = capitalizeFirstLetter(firstName);
    middleName = capitalizeFirstLetter(middleName);
    lastName = capitalizeFirstLetter(lastName);

    //ceates a full name by combining the inputs
    let fullName = `${firstName} ${middleName}. ${lastName}`;
    // creates a new greeting with the created full name
    let newGreeting = `Welcome to User Utopia, ${fullName}!`;
	//updates the greeting that appears on the page
    document.getElementById('greeting').textContent = newGreeting;
    alert(`Welcome, ${fullName}!`);
    prompt(`How high do you want to count, ${fullName}?`);

});

//adds an event listener to the reset button when clicked
document.getElementById('reset').addEventListener('click', function() {
	//gets the greeting back to the original text
    document.getElementById('greeting').textContent = originalGreeting;
});
