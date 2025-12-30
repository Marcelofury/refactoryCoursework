
// COURSEWORK 1: KGL DATA VALIDATION SYSTEM

//Part A
console.log("\n PART A \n");

// 1. Declare variables using appropriate keywords (let or const)

/* 
 * Using const for companyName because the company name should not change
 * throughout the application lifecycle
 */
const companyName = "Karibu Groceries LTD";

/* 
 * Using const for minimumTonnage as it represents a business rule
 * that should remain constant
 */
const minimumTonnage = 1000;

/* 
 * Using const for isOperational as it represents a fixed operational status
 * at declaration time
 */
const isOperational = true;

// Using let for managerName as it will be assigned a value later
let managerName;

/* 
 * Using let for closedBranches as this value might change when branches
 * are closed or reopened
 */
let closedBranches = null;

// 2. Use typeof operator to check and log the data type of each variable
console.log("Data Types:");
console.log(`companyName: ${typeof companyName}`); // string
console.log(`minimumTonnage: ${typeof minimumTonnage}`); // number
console.log(`isOperational: ${typeof isOperational}`); // boolean
console.log(`managerName: ${typeof managerName}`); // undefined
console.log(`closedBranches: ${typeof closedBranches}`); // object (null is type object)


//Part B
console.log("\n PART B \n");

// 4. Declare dealerNameInput with extra spaces and inconsistent capitalization
let dealerNameInput = " james BOND ";

// 5. String cleaning and formatting
// Remove leading and trailing whitespace
let trimmedName = dealerNameInput.trim();

// Convert to proper title case (first letter of each word capitalized)
let cleanDealerName = trimmedName
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

// Log result using template literal
console.log(`Cleaned Dealer Name: ${cleanDealerName}`);

// 6. Validation check using comparison operators
let isValidLength = cleanDealerName.length >= 2;
let isNotEmpty = cleanDealerName !== "";
let isValidDealerName = isValidLength && isNotEmpty;

if (isValidDealerName) {
    console.log("Valid dealer name");
} else {
    console.log("Invalid dealer name");
}

// Part C
console.log("\n PART C \n");

// 7. Create variables for a procurement record
let userRole = 'Sales Agent';
let procurementTonnage = 1500;
let produceType = 'Beans';
let costInUgx = '50000';

// 8. Implement KGL business rules using if...else if...else statements

// Rule 1: No sales agent is allowed to record any produce entry
if (userRole === 'Sales Agent') {
    console.log("ERROR: Sales Agents are not authorized to record produce entries.");
} else {
    // Rule 2: For individual dealers, tonnage must be at least 1000kg
    if (procurementTonnage >= minimumTonnage) {
        console.log("Tonnage requirement met: " + procurementTonnage + "kg");
        
        // Rule 3: The cost must be at least 5 digits (>= 10000)
        let costNumber = Number(costInUgx);
        
        if (costNumber >= 10000) {
            console.log("Cost requirement met: " + costNumber + " UGX");
        } else {
            console.log("ERROR: Cost must be at least 10000 UGX (5 digits)");
        }
    } else {
        console.log("ERROR: Tonnage must be at least " + minimumTonnage + "kg for individual dealers");
    }
}

// 9. Use logical AND operator to check if BOTH tonnage and cost conditions are met
let costNumber = Number(costInUgx);
let isTonnageValid = procurementTonnage >= minimumTonnage;
let isCostValid = costNumber >= 10000;
let isRecordValid = isTonnageValid && isCostValid;

if (isRecordValid) {
    console.log("Procurement record valid");
} else {
    console.log("Procurement record invalid");
}

//Part D
console.log("\n PART D \n");

// 10. Create array of produce types
let kglProduce = ['Beans', 'Grain Maize', 'Cow peas', 'G-nuts', 'Soybeans'];
console.log("Initial produce array:", kglProduce);

// 11. Array manipulation operations

// Add "Green Peas" to the end of the array
kglProduce.push("Green Peas");
console.log("After adding Green Peas:", kglProduce);

// Remove the first item from the array (simulate oldest stock being sold)
let removedItem = kglProduce.shift();
console.log("Removed item (oldest stock):", removedItem);
console.log("After removing first item:", kglProduce);

// Check if "G-nuts" exists in the array
let hasGnuts = kglProduce.includes("G-nuts");
console.log("G-nuts exists in array:", hasGnuts);

// Log final array and its length
console.log("Final kglProduce array:", kglProduce);
console.log("Array length:", kglProduce.length);

// 12. Merge arrays using concat method
let branch2Produce = ['Maize', 'Beans'];
let allProduce = kglProduce.concat(branch2Produce);

console.log("\nbranch2Produce:", branch2Produce);
console.log("All produce (merged):", allProduce);
console.log("Total produce types:", allProduce.length);

