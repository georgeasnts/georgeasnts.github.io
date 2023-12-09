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
   
    // Loop to output 125 lines related to the theme
    let outputList = document.getElementById('outputList');
    outputList.innerHTML = ''; // Clear previous content

    for (let i = 0; i < 125; i++) {
        let themeWord1 = "User";
        let themeWord2 = "Utopia";
        let line = `${themeWord1} ${themeWord2}`;

        // Append a new list item directly to the ordered list
        outputList.innerHTML += `<li>${line}</li>`;
    }

});

document.getElementById('reset').addEventListener('click', function() {
    // Reset the greeting to the original text
    document.getElementById('greeting').textContent = originalGreeting;

    // Clear the content of the ordered list
    document.getElementById('outputList').innerHTML = '';
});
