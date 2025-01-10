// Get a reference to the #add-employees-btn element
const addUserBtn = document.querySelector("#addUserBtn");
const addExpenseBtn = document.querySelector("#addExpenseBtn");

// Collect employee data
const collectFriends = function () {
  // TODO: Get user input to create and return an array of employee objects
  const friends = [
  ];

 // let employee = { firstName: "", lastName: "", salary: 0 };

  let addFriends = true;
  while (addFriends) {

    let costDescription = prompt("Enter employee last name:");
    let costOfExpense = prompt("Enter employee first name:");
    //let salary = prompt("Enter employee salary:");

    


   const employee = {
      firstName: firstName,
      lastName: lastName,
      salary: parseInt(salary),
   };


    employees.push(employee);

    addEmployee = confirm("Would you like to add another employee?");
  }
  return employees;
};

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
  let totalSalary = 0;
  for (let i = 0; i < employeesArray.length; i++) {
    totalSalary += employeesArray[i].salary;
  }
  const averageSalary = totalSalary / employeesArray.length;
  console.log(`The average employee salary between our ${employeesArray.length} employee(s) is $${averageSalary.toFixed(2)}`);

  return averageSalary;
};

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  console.log("Random Employee:");
  const randomEmployee = employeesArray[randomIndex];
  console.log(
    `Congratulations to ${randomEmployee.firstName} ${randomEmployee.lastName}, our random drawing winner!`
  );
};

//Example
// const function1 = function () {
//   const f1 = ["1", "2" ,"3"]
//   function2(f1)
// }
// const function2 = function (info2) {
// for (const number of info2){
//   console.log(number);
// }
// }
// function1()

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector("#employee-table");

  // Clear the employee table
  employeeTable.innerHTML = "";

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];
    console.log(currentEmployee);

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log("==============================");

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener("click", trackEmployeeData);
