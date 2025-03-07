// Task 2: Adding Employee Cards Dynamically

const employeeContainer = document.getElementById("employeeContainer");

// This is the function to create an employeeCard, it will take a name and positon as parameters
function createEmployeeCard(name, position) {
    const employeeCard = document.createElement("div");
    employeeCard.setAttribute("class", "employee-Card");

// Decided to make defining the name and position done with .innerHTML so I didn't have to initialize a unique variable for each
    employeeCard.innerHTML = 
    `<h3>Employee: ${name}</h3>
    <p>Position: ${position}</p>`;

// Chose to make create the remove button with createElement because it felt more intuitive
const removeButton = document.createElement("button"); // creating a button and assigning it to removeButton
    removeButton.textContent = "Remove"

// appending the button to the employeeCard
    employeeCard.appendChild(removeButton);
// appending employeeCard to the employeeContainer div
    employeeContainer.appendChild(employeeCard); 
};

createEmployeeCard("Casey", "CEO"); 
createEmployeeCard("Elise", "Manager");

// Task 3: Converting Nodelists to arrays for bulk updates

const employeeCardSelector = document.querySelectorAll(".employee-Card");
const employeeCardArray = Array.from(employeeCardSelector); // Converting NodeList into an array

// For each individual card in the array, we are making applying each of these style properties
employeeCardArray.forEach((card) => { 
    card.style.padding = `10px`;
    card.style.margin = '10px';
    card.style.backgroundColor = 'lightblue';
    card.style.borderRadius = '5px';
    card.style.display ='inline-block';
}); // This is based on the HTML code that was given for coding challenge 12