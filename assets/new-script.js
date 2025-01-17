const readLocalStorage = function (key) {
  const data = JSON.parse(localStorage.getItem(key));
  return data ? data : [];
};

const storeLocalStorage = function (key, data) {
 
  localStorage.setItem(key, JSON.stringify(data));
};


const groupMembers = readLocalStorage('groupMembers');
const tripCost = readLocalStorage('tripCost');

const addMemberButton = document.getElementById('add-groupMember-btn');
addMemberButton.addEventListener('click', getTripData);

const addCostButton = document.getElementById('add-cost-btn');
addCostButton.addEventListener('click', getCost);

function getTripData() {
  while (true) {
    const name = window.prompt("Enter the name of a group member:");
    if (name) {
      groupMembers.push(name);
    }

    const addAnother = window.confirm("Would you like to add another group member?");
    if (!addAnother) break;
  }
storeLocalStorage("groupMembers", groupMembers)
}

function getCost() {
  while (true) {
    const itemCost = parseFloat(window.prompt("Enter the cost of the item:"));
    if (!isNaN(itemCost) && itemCost > 0) {
      tripCost.push(itemCost);
    } else {
      alert("Please enter a valid cost.");
      continue;
    }

    const keepGoing = window.confirm("Would you like to add another item?");
    if (!keepGoing) break;
  }
  storeLocalStorage("tripCost", tripCost)
  calculateCostSplit();
}

function calculateCostSplit() {
  const totalCost = tripCost.reduce((sum, cost) => sum + cost, 0);
  const perPersonCost = totalCost / groupMembers.length;

  // Append results to the table
  const resultsTable = document.getElementById('resultsTable');

  // Clear previous table rows (if any)
  resultsTable.innerHTML = '';

  // Add each group member and their cost to the table
  groupMembers.forEach((member) => {
    const row = document.createElement('tr');

    // Add member name
    const memberCell = document.createElement('td');
    memberCell.textContent = member;
    row.appendChild(memberCell);

    // Add total cost
    // const totalCostCell = document.createElement('td');
    // totalCostCell.textContent = `$${totalCost.toLocaleString(undefined, { minimumFractionDigits: 2 })}`;
    // row.appendChild(totalCostCell);

    // Add per person cost
    const perPersonCostCell = document.createElement('td');
    perPersonCostCell.textContent = `$${perPersonCost.toLocaleString(undefined, { minimumFractionDigits: 2 })}`;
    row.appendChild(perPersonCostCell);

    // Append the row to the table
    resultsTable.appendChild(row);
  });

const totalCostEl = document.querySelector('.totalCost');
totalCostEl.textContent = ` Total Cost: $${totalCost.toLocaleString(undefined, { minimumFractionDigits: 2 })}`;


}



// Start the program
//getTripData();

//LocalStorage

const renderTrip = function () {
  const tripData = readLocalStorage('tripCost');
  if (!tripData.length) {
      return;
  }

  tripData.forEach((post) => {
      const article = document.createElement('article');
      buildElement(getCost, getTripData, calculateCostSplit);
  });
  };

// TODO: Call the `renderBlogList` function

renderTrip();