// Task 2: Adding Employee Cards Dynamically

const employeeContainer = document.getElementById("employeeContainer");

// This is the function to create an employeeCard, it will take a name and positon as parameters
function createEmployeeCard(name, position) {
    const employeeCard = document.createElement("div");
    employeeCard.setAttribute("class", "employee-Card");

// Creating employeeName and employeePosition and appending them to the employeeCard (changed on task 5)
    const employeeName = document.createElement("h3");
    employeeName.textContent = `Employee Name: ${name}`;
    employeeCard.appendChild(employeeName);

    const employeePosition = document.createElement("p");
    employeePosition.textContent = `Position: ${position}`;
    employeeCard.appendChild(employeePosition);

// creating a button and assigning it to removeButton
const removeButton = document.createElement("button"); 
    removeButton.textContent = "Remove"

// (Task 4) When we click the remove button, we will stop the event from being registered elsewhere, and we will remove the employee card from employeeContainer
    removeButton.addEventListener("click", function(click) {
        click.stopPropagation(); 
        employeeContainer.removeChild(employeeCard);
});

// (Task 5) 
// Creating the edit button
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";

/* Theres a lot of code that runs when we click the button. Two input fields are created with placeholder text equal to
 the employeeName and employeePosition. A save button is also created, and when that is clicked it will upadate name and 
 position to match the input field, then it will remove the input fields and the save button  */ 
    editButton.addEventListener("click", function(edit) {
        edit.stopPropagation();

        const blank = document.createElement("div");
        employeeCard.appendChild(blank); // this just creates white space

// Creating input fields
        const inputField = document.createElement("input");
        inputField.value = employeeName.textContent;
        employeeCard.appendChild(inputField);

        const inputField2 = document.createElement("input");
        inputField2.value = employeePosition.textContent;
        employeeCard.appendChild(inputField2);

        const saveButton = document.createElement("button");
        saveButton.textContent = "Save";

// On clicking save we set text content to the input field values, and delete any trace of the input field or save button
        saveButton.addEventListener("click", function(save) {
            save.stopPropagation();
            employeeName.textContent = inputField.value;
            employeePosition.textContent = inputField2.value;
            employeeCard.removeChild(saveButton);
            employeeCard.removeChild(inputField);
            employeeCard.removeChild(inputField2);
        })
        // Appending the save button only when we click the edit button
        employeeCard.appendChild(saveButton);
    })

// appending the button to the employeeCard
    employeeCard.appendChild(removeButton);
// appending edit button to employeeCard
    employeeCard.appendChild(editButton);
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

// Task 4: Implementing Removal of Employee Cards with Event Bubbling

// Clicking anywhere (aside from remove) in an employeeContainer will log Employee Container Clicked
employeeContainer.addEventListener(`click`, function() {
    console.log("Employee Container Clicked");
});

// Task 5: Inline Editing of Employee Details
// Lines 31-65