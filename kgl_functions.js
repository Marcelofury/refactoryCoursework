
// COURSEWORK 2: KGL INVENTORY PROCESSING SYSTEM

//Part A
console.log("\n PART A \n");

// 1. Function to calculate procurement cost
function calculateProcurementCost(tonnageInKg, pricePerKg) {
    // Check if both parameters are numbers and not negative
    if (typeof tonnageInKg !== 'number' || typeof pricePerKg !== 'number') {
        return "Invalid input";
    }
    
    if (tonnageInKg < 0 || pricePerKg < 0) {
        return "Invalid input";
    }
    
    // Calculate and return total cost
    return tonnageInKg * pricePerKg;
}

// Test the function
console.log("Test calculateProcurementCost:");
console.log("1500kg at 5000 per kg:", calculateProcurementCost(1500, 5000));
console.log("Invalid input (string):", calculateProcurementCost("1500", 5000));
console.log("Invalid input (negative):", calculateProcurementCost(-100, 5000));

// 2. Arrow function to validate buyer name
const validateBuyerName = (buyerName) => {
    // Check if name length is at least 2 and not empty
    if (buyerName && buyerName.length >= 2) {
        return true;
    }
    return false;
};

// Test the function
console.log("\nTest validateBuyerName:");
console.log("'John Doe':", validateBuyerName("John Doe"));
console.log("'A':", validateBuyerName("A"));
console.log("Empty string:", validateBuyerName(""));

// 3. Function with switch statement for user authorization
function checkUserAuthorization(role) {
    switch (role) {
        case 'Manager':
            return "procurement_and_sales";
        case 'Sales Agent':
            return "sales_only";
        case 'Director':
            return "view_aggregations";
        default:
            return "unauthorized";
    }
}

// Test the function
console.log("\nTest checkUserAuthorization:");
console.log("Manager:", checkUserAuthorization("Manager"));
console.log("Sales Agent:", checkUserAuthorization("Sales Agent"));
console.log("Director:", checkUserAuthorization("Director"));
console.log("Clerk:", checkUserAuthorization("Clerk"));

console.log("\n=== PART B: OBJECT CREATION AND MANIPULATION ===\n");

// 4. Function to create sales record
function createSalesRecord(produceName, tonnage, buyerName, amountPaid) {
    return {
        id: Math.floor(Math.random() * 9000) + 1000, // Random number between 1000-9999
        produceName: produceName,
        tonnageInKgs: tonnage,
        buyerName: buyerName,
        amountPaid: amountPaid,
        saleDate: new Date(),
        isCreditSale: false
    };
}

// 5. Create a sales record and manipulate it
let salesRecord = createSalesRecord("Beans", 1200, "John Doe", 6600000);
console.log("Initial sales record:");
console.log(salesRecord);

// Add branch property using dot notation
salesRecord.branch = "Maganjo";

// Modify isCreditSale property
salesRecord.isCreditSale = true;

// Add dueDate property using bracket notation
salesRecord['dueDate'] = new Date('2026-02-01');

console.log("\nModified sales record:");
console.log(salesRecord);

// Use Object.keys() to get all property names
let propertyNames = Object.keys(salesRecord);
console.log("\nAll property names:");
console.log(propertyNames);

// 6. Use for...in loop to iterate over the object
console.log("\nIterating over sales record:");
for (let property in salesRecord) {
    console.log(`Property: ${property}, Value: ${salesRecord[property]}`);
}

console.log("\n=== PART C: LOOP IMPLEMENTATION AND DATA PROCESSING ===\n");

// 7. Calculate weekly tonnage statistics using traditional for loop
let weeklyTonnage = [1200, 1500, 980, 2000, 1100, 1800, 1300];

let totalTonnage = 0;
for (let i = 0; i < weeklyTonnage.length; i++) {
    totalTonnage += weeklyTonnage[i];
}

let averageTonnage = totalTonnage / weeklyTonnage.length;

console.log("Weekly Tonnage Analysis:");
console.log("Daily tonnages:", weeklyTonnage);
console.log("Total tonnage for the week:", totalTonnage, "kg");
console.log("Average daily tonnage:", averageTonnage.toFixed(2), "kg");

// 8. Create array of sales records and count credit sales using for...of loop
console.log("\n=== Credit Sales Analysis ===");

let salesRecords = [
    createSalesRecord("Beans", 1200, "John Doe", 6600000),
    createSalesRecord("Grain Maize", 1500, "Jane Smith", 7200000),
    createSalesRecord("Cow peas", 1100, "Peter Mukasa", 6600000),
    createSalesRecord("G-nuts", 900, "Mary Nakato", 6480000),
    createSalesRecord("Soybeans", 1300, "David Okello", 7540000)
];

// Manually set some as credit sales
salesRecords[0].isCreditSale = true;
salesRecords[2].isCreditSale = true;
salesRecords[4].isCreditSale = true;

console.log("All sales records created");

let creditSalesCount = 0;
for (let record of salesRecords) {
    // Skip non-credit sales using continue
    if (!record.isCreditSale) {
        continue;
    }
    
    creditSalesCount++;
    console.log(`Credit sale found: ${record.produceName} - ${record.buyerName}`);
}

console.log(`Total credit sales: ${creditSalesCount}`);

// 9. Simulate stock check using for loop with break
console.log("\n=== Stock Check Alert System ===");

let inventory = [
    {name: 'Beans', tonnage: 500},
    {name: 'Maize', tonnage: 0},
    {name: 'G-nuts', tonnage: 300}
];

for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].tonnage === 0) {
        console.log(`Manager Alert: ${inventory[i].name} is out of stock`);
        break; // Exit immediately when first out-of-stock item is found
    }
}

console.log("\n=== COURSEWORK 2 COMPLETE ===");
