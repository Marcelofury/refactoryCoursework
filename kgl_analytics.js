
// COURSEWORK 3: KGL ANALYTICS AND REPORTING SYSTEM

//Part A
console.log("\n PART A \n");


// 1. Create array of procurement record objects
let procurementRecords = [
    {
        id: 1001,
        dealerName: "John Mukasa",
        produceType: "Beans",
        tonnageInKgs: 1200,
        costInUgx: 6600000,
        procurementDate: new Date('2025-12-20')
    },
    {
        id: 1002,
        dealerName: "Mary Nakato",
        produceType: "Grain Maize",
        tonnageInKgs: 1500,
        costInUgx: 7200000,
        procurementDate: new Date('2025-12-21')
    },
    {
        id: 1003,
        dealerName: "Peter Okello",
        produceType: "Cow peas",
        tonnageInKgs: 800,
        costInUgx: 4800000,
        procurementDate: new Date('2025-12-22')
    },
    {
        id: 1004,
        dealerName: "Sarah Namugga",
        produceType: "G-nuts",
        tonnageInKgs: 1100,
        costInUgx: 7920000,
        procurementDate: new Date('2025-12-23')
    },
    {
        id: 1005,
        dealerName: "David Ssali",
        produceType: "Soybeans",
        tonnageInKgs: 1300,
        costInUgx: 7540000,
        procurementDate: new Date('2025-12-24')
    },
    {
        id: 1006,
        dealerName: "Butera Marcel",
        produceType: "Beans",
        tonnageInKgs: 950,
        costInUgx: 5225000,
        procurementDate: new Date('2025-12-25')
    }
];

console.log("Initial procurement records created:", procurementRecords.length, "records\n");

// 2. Use .map() to add costPerKg property
let recordsWithCostPerKg = procurementRecords.map(record => {
    return {
        ...record, // Spread operator to copy all original properties
        costPerKg: record.costInUgx / record.tonnageInKgs
    };
});

console.log("Records with costPerKg calculated:");
recordsWithCostPerKg.forEach(record => {
    console.log(`${record.produceType} - ${record.dealerName}: ${record.costPerKg.toFixed(2)} UGX/kg`);
});

// 3. Use .filter() to get records meeting minimum tonnage requirement
console.log("\n=== Filtering Records (Minimum 1000kg requirement) ===");

let validTonnageRecords = procurementRecords.filter(record => {
    return record.tonnageInKgs >= 1000;
});

console.log("Filtered records (tonnage >= 1000kg):");
validTonnageRecords.forEach(record => {
    console.log(`ID: ${record.id}, Dealer: ${record.dealerName}, Produce: ${record.produceType}, Tonnage: ${record.tonnageInKgs}kg`);
});
console.log(`Total records meeting requirement: ${validTonnageRecords.length}`);

// 4. Use .reduce() to calculate totals
console.log("\n=== Calculating Totals with .reduce() ===");

let totalTonnageProcured = procurementRecords.reduce((accumulator, record) => {
    return accumulator + record.tonnageInKgs;
}, 0);

let totalCostProcured = procurementRecords.reduce((accumulator, record) => {
    return accumulator + record.costInUgx;
}, 0);

console.log(`Total tonnage procured across all records: ${totalTonnageProcured} kg`);
console.log(`Total cost across all records: ${totalCostProcured} UGX`);

//Part B
console.log("\n PART B \n");


// 5. Function to get unique dealers using Set
function getUniqueDealers(records) {
    // Create a Set to store unique dealer names
    let dealerSet = new Set();
    
    // Add all dealer names to the Set
    records.forEach(record => {
        dealerSet.add(record.dealerName);
    });
    
    // Convert Set back to array and return
    return Array.from(dealerSet);
}

// Call the function and log results
let uniqueDealers = getUniqueDealers(procurementRecords);
console.log("Unique dealers:");
uniqueDealers.forEach((dealer, index) => {
    console.log(`${index + 1}. ${dealer}`);
});
console.log(`Total unique dealers: ${uniqueDealers.length}`);

// 6. Create Set of authorized roles and authorization checker function
console.log("\n=== Authorization Check with Set ===");

let authorizedRoles = new Set();
authorizedRoles.add('Manager');
authorizedRoles.add('Director');

function isAuthorizedForProcurement(userRole) {
    return authorizedRoles.has(userRole);
}

// Test the function with different roles
console.log("Testing authorization:");
console.log(`Manager: ${isAuthorizedForProcurement('Manager')}`);
console.log(`Director: ${isAuthorizedForProcurement('Director')}`);
console.log(`Sales Agent: ${isAuthorizedForProcurement('Sales Agent')}`);
console.log(`Clerk: ${isAuthorizedForProcurement('Clerk')}`);


//Part C
console.log("\n PART C \n");



// 7. Create Map with price list
let kglPriceList = new Map();
kglPriceList.set('Beans', 5500);
kglPriceList.set('Grain Maize', 4800);
kglPriceList.set('Cow peas', 6000);
kglPriceList.set('G-nuts', 7200);
kglPriceList.set('Soybeans', 5800);

console.log("KGL Price List created with", kglPriceList.size, "produce types");

// 8. Function to calculate sale total using Map
function calculateSaleTotal(produceName, tonnageInKgs) {
    // Try to get price from the Map
    let pricePerKg = kglPriceList.get(produceName);
    
    // Check if produce exists in the Map
    if (pricePerKg === undefined) {
        return "Price not found";
    }
    
    // Calculate and return total
    return pricePerKg * tonnageInKgs;
}

// Test with multiple produce types
console.log("\n=== Testing Sale Calculations ===");
console.log("Beans (1200kg):", calculateSaleTotal('Beans', 1200), "UGX");
console.log("Grain Maize (1500kg):", calculateSaleTotal('Grain Maize', 1500), "UGX");
console.log("G-nuts (900kg):", calculateSaleTotal('G-nuts', 900), "UGX");
console.log("Unknown Produce (1000kg):", calculateSaleTotal('Unknown Produce', 1000));

// 9. Iterate over Map and find highest price
console.log("\n=== Price List Overview ===");

// Iterate over Map entries
for (let [produceName, price] of kglPriceList) {
    console.log(`Produce: ${produceName}, Price per Kg: ${price} UGX`);
}

// Calculate highest price using reduce on Map values
let highestPrice = Array.from(kglPriceList.values()).reduce((max, currentPrice) => {
    return currentPrice > max ? currentPrice : max;
}, 0);

console.log(`\nHighest price in the Map: ${highestPrice} UGX`);

