// const fs = require("fs").promises;
const fs = require("fs");

// async function ReadFile() {
//     try {
//         const data = await fs.readFile('data.txt', 'utf-8');
//         console.log(data);
//     } catch(err) {
//         console.error(err);
//     }
// }

// ReadFile();

console.log("Hello form aysnc")

fs.readFile('data.txt', 'utf-8', (err, data) => {
    if(err) throw err;
    console.log(data, "Async Data");
});

console.log("Hello form aysnc dsfsdf")

const SyncData = fs.readFileSync('data.txt', 'utf-8');

console.log(SyncData, "Sync data");

console.log("hello")