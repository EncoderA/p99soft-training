// This example demonstrates:
// 1. Event loop order
// 2. Promise microtask queue
// 3. async/await behavior

console.log("1. Script Start");

// A function that returns a Promise
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("2. Data fetched");
    }, 1000); // runs after 1 second (macrotask)
  });
}

// Async function using await
async function getData() {
  console.log("3. Inside async function");

  // 'await' pauses here, but does NOT block the whole program
  const data = await fetchData();

  console.log(data); // runs after promise resolves
}

// Calling async function
getData();

// A Promise (microtask)
Promise.resolve().then(() => {
  console.log("4. Promise resolved");
});

// A setTimeout (macrotask)
setTimeout(() => {
  console.log("5. setTimeout executed");
}, 0);

console.log("6. Script End");
