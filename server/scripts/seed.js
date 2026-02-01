const fs = require('fs');

// seed.js


// Sample data to seed
const sampleData = [
    { id: 1, name: 'Alice', age: 30 },
    { id: 2, name: 'Bob', age: 25 },
    { id: 3, name: 'Charlie', age: 35 }
];

// Function to seed data to a JSON file
function seedData() {
    fs.writeFile('data.json', JSON.stringify(sampleData, null, 2), (err) => {
        if (err) {
            console.error('Error writing to file', err);
        } else {
            console.log('Data seeded successfully!');
        }
    });
}

// Execute the seed function
seedData();