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