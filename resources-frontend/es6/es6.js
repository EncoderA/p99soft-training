// This example demonstrates:
// 1. Arrow functions
// 2. Template literals
// 3. Destructuring
// 4. Spread & Rest operators

// An object (user data)
const user = {
  name: "Rahul",
  age: 25,
  city: "Bangalore"
};

// 1️⃣ Destructuring (extract values from object)
const { name, age, city } = user;

// 2️⃣ Arrow function with rest operator
const introduce = (hobby, ...skills) => {
  
  // 3️⃣ Template literals (dynamic string)
  console.log(`Hi, I'm ${name} from ${city}.`);
  console.log(`I'm ${age} years old.`);
  
  console.log(`My hobby is ${hobby}`);
  console.log(`My skills are: ${skills.join(", ")}`);
};

// 4️⃣ Spread operator (expand array into arguments)
const skillsArray = ["JavaScript", "React", "Node.js"];

introduce("Cricket", ...skillsArray);
