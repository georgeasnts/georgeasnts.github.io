// sets the original greeting as a constant variable
let originalGreeting = document.getElementById('greeting').textContent;

//adds an event listener to the submit button when clicked
document.getElementById('submit').addEventListener('click', function(event) {
    //gets the values for the input fields
    let firstName = document.getElementById('first_name').value;
    let middleName = document.getElementById('middle_initial').value;
    let lastName = document.getElementById('last_name').value;

    //capitalizes the first letter  
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }

    firstName = capitalizeFirstLetter(firstName);
    middleName = capitalizeFirstLetter(middleName);
    lastName = capitalizeFirstLetter(lastName);

    //creates a full name by combining the inputs
    let fullName = `${firstName} ${middleName}. ${lastName}`;
    //creates a new greeting with the created full name
    let newGreeting = `Welcome to User Utopia, ${fullName}!`;

    //updates the greeting that appears on the page
    document.getElementById('greeting').textContent = newGreeting;
    alert(`Welcome, ${fullName}!`);

    // Clear previous content
    let outputList = document.getElementById('outputList');
    outputList.innerHTML = '';

    // Loop to output 140 lines 
    let themeWord = "Aesthetic";
    for (let i = 1; i <= 140; i++) {
        let themeWord = '';
        if (i % 3 === 0) {
            themeWord += "Appealing ";
        }
        if (i % 5 === 0) {
            themeWord += "Elegant";
        }
        if (!themeWord) {
            themeWord = "Aesthetic";
        }

        let line = `${i}. ${themeWord}`;
        
        // New list item
        let listItem = document.createElement('li');
        listItem.textContent = line;
        outputList.appendChild(listItem);
    }
});

document.getElementById('reset').addEventListener('click', function() {
    // Reset the greeting 
    document.getElementById('greeting').textContent = originalGreeting;

    // Clear list content
    document.getElementById('outputList').innerHTML = '';
});
