function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane", "Doe"];

// Solution 1: Access individual elements
console.log(greeter(user[0])); // Access the first element
console.log(greeter(user[1])); // Access the second element

// Solution 2: Join array elements
console.log(greeter(user.join(" "))); // Join the array elements with a space

//Solution 3: Type Assertion (use with caution)
console.log(greeter(user as unknown as string)); //Use with caution, unsafe!