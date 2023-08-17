//this is my documentation type javascript file where I will write practice things
// Arrow function 
/** 
Certainly! Here are some additional details about arrow functions in JavaScript:

1. Shorter Syntax:
   Arrow functions provide a shorter and more concise syntax compared to normal functions. When the function body consists 
   of a single expression, you can omit the curly braces and the `return` keyword. For example:
   ```javascript

   // Normal function
   const multiply = function(a, b) {
     return a * b;
   };

   // Arrow function
   const multiply = (a, b) => a * b;
   ```

2. Implicit Return:
   As mentioned earlier, arrow functions have implicit return. If the function body has multiple statements or requires 
   more complex logic, you can use curly braces to create a block and explicitly specify the return value. For example:
   ```javascript
   const isEven = (num) => {
     if (num % 2 === 0) {
       return true;
     } else {
       return false;
     }
   };
   ```

3. Lexical `this` Binding:
   Arrow functions do not have their own `this` context. Instead, they inherit the `this` value from the enclosing scope.
    This behavior can be beneficial when dealing with callbacks or nested functions, as it eliminates the need for 
    using `bind`, `call`, or `apply` to maintain the correct `this` context. For example:
   ```javascript
   const obj = {
     name: 'John',
     sayHello: function() {
       setTimeout(() => {
         console.log(`Hello, ${this.name}!`);
       }, 1000);
     }
   };

   obj.sayHello(); // Output: Hello, John!
   ```

4. No Arguments Object:
   Unlike normal functions, arrow functions do not have their own `arguments` object. If you need to access the arguments passed to 
   an arrow function, you can use the rest parameters syntax (`...args`). For example:
   ```javascript
   const sum = (...args) => {
     let total = 0;
     for (let arg of args) {
       total += arg;
     }
     return total;
   };

   sum(1, 2, 3); // Output: 6
   ```

Arrow functions are particularly useful in scenarios where you need concise functions, 
want to preserve the lexical `this` context, or when working with array methods like `map`, `filter`, or `reduce`.
 However, it's worth noting that they may not be suitable for all situations, such as when you need the `this` value to be
  dynamically bound or when creating methods for objects that require access to the object's properties.

*/

/**
 In JavaScript, the Symbol data type was introduced in ECMAScript 6 (ES6) to represent unique and immutable values. Symbols are often used as property keys in objects to ensure the uniqueness of the key and avoid potential name collisions. Here are some key points about symbols:

Creating Symbols:
You can create a symbol using the Symbol() function, which returns a unique symbol value. Here's an example:


const mySymbol = Symbol();


Symbol Description:
You can provide an optional description (a string) as an argument to the Symbol() function to create a symbol with a descriptive name. The description does not affect the uniqueness of the symbol. Here's an example:
const mySymbol = Symbol('My Symbol');
console.log(mySymbol)



Unique Property Keys:
Symbols are primarily used as property keys in objects. Since each symbol is unique, it helps prevent unintentional property name clashes when different parts of the code use the same object. Here's an example:

const mySymbol = Symbol('My Symbol');

const obj = {
  [mySymbol]: 'Value associated with the symbol'
};

console.log(obj[mySymbol]); // Output: Value associated with the symbol

Symbol Iteration:
Symbols can be used to define custom iteration behavior on objects by implementing the iterable protocol. By using the well-known symbol Symbol.iterator, you can define how an object should be iterated. This allows you to control the iteration process when using constructs like for...of loops or the Spread syntax.

Symbols are unique and can't be replicated or modified. They are not visible in regular for...in loops and Object.keys() or Object.getOwnPropertyNames() methods. However, you can use Object.getOwnPropertySymbols() to get an array of all symbols associated with an object.
 */



/**
 
//Object in js

1. Object Literals:
   Object literals are the simplest way to create objects in JavaScript. They allow you to define an object with properties and methods directly within curly braces. Here's an example:

   ```javascript
   // Object literal
   const person = {
     name: 'John',
     age: 30,
     greet: function() {
       console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
     }
   };

   person.greet(); // Output: Hello, my name is John and I'm 30 years old.
   ```

   In the above example, we create an object `person` using an object literal. It has properties (`name` and `age`) and a method (`greet`).

2. Singleton Objects:
   In JavaScript, singleton objects are objects that can only have one instance throughout the code. They are typically implemented using object literals and are useful when you want to ensure that only one instance of an object exists. Here's an example:

   ```javascript
   // Singleton object
   const logger = {
     log: function(message) {
       console.log(`[LOG] ${message}`);
     }
   };

   logger.log('This is a log message.'); // Output: [LOG] This is a log message.
   ```

   In the above example, `logger` is a singleton object with a single instance. It contains a `log` method for logging messages.

3. Constructor Declarations:
   Constructor functions are used to create multiple instances of objects with similar properties and behaviors. They are defined using a regular function and the `new` keyword is used to create new instances. Here's an example:

  
   // Constructor function
   function Person(name, age) {
     this.name = name;
     this.age = age;
     this.greet = function() {
       console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
     };
   }

   // Create instances using the constructor function
   const person1 = new Person('John', 30);
   const person2 = new Person('Jane', 25);

   person1.greet(); // Output: Hello, my name is John and I'm 30 years old.
   person2.greet(); // Output: Hello, my name is Jane and I'm 25 years old.
   ```

   In the above example, `Person` is a constructor function that takes `name` and `age` as parameters and assigns them to the respective properties of the newly created object using the `this` keyword. Instances of `Person` can be created using the `new` keyword.

Constructor functions can also be defined using ES6 class syntax, which provides a more convenient and intuitive way to create objects with shared properties and methods.


 */

 /**
  Object destructuring is a feature in JavaScript that allows you to extract properties from an object and assign them to variables in a more concise and convenient way. It provides a shorthand syntax for accessing and working with object properties. Here's how object destructuring works:

1. Basic Object Destructuring:
   Object destructuring is done by enclosing the desired properties in curly braces `{}` on the left side of an assignment (`=`) operator. The property names must match the object's property names. Here's an example:

   ```javascript
   const person = {
     name: 'John',
     age: 30,
     city: 'New York'
   };

   // Destructuring the object
   const { name, age, city } = person;

   console.log(name); // Output: John
   console.log(age); // Output: 30
   console.log(city); // Output: New York
   ```

   In the above example, the properties `name`, `age`, and `city` are extracted from the `person` object and assigned to variables of the same name.

2. Renaming Variables:
   You can also assign the extracted properties to variables with different names by using the colon (`:`) syntax. Here's an example:

   ```javascript
   const person = {
     name: 'John',
     age: 30,
     city: 'New York'
   };

   // Destructuring with variable renaming
   const { name: personName, age: personAge, city: personCity } = person;

   console.log(personName); // Output: John
   console.log(personAge); // Output: 30
   console.log(personCity); // Output: New York
   ```

   In this case, the properties `name`, `age`, and `city` are assigned to variables `personName`, `personAge`, and `personCity`, respectively.

3. Default Values:
   You can provide default values for variables in case the extracted property is `undefined`. If the property doesn't exist in the object or is `undefined`, the default value will be used. Here's an example:

   ```javascript
   const person = {
     name: 'John',
     age: 30
   };

   // Destructuring with default values
   const { name, age, city = 'Unknown' } = person;

   console.log(name); // Output: John
   console.log(age); // Output: 30
   console.log(city); // Output: Unknown
   ```

   In the above example, the `city` property is not present in the `person` object, so the default value `'Unknown'` is assigned to the variable `city`.

Object destructuring is particularly useful when working with functions that return objects or when extracting specific properties from larger objects. It helps improve code readability and simplifies property access and assignment.
  */

/**
 JSON API:
JSON (JavaScript Object Notation) is a lightweight data interchange format that is widely used for transmitting data between a server and a client. It is human-readable and easy for both humans and machines to parse and generate. JSON APIs, also known as JSON-based APIs, use JSON as the data format for communication.

JSON APIs typically follow a specific structure and provide endpoints to perform operations on the data. They allow clients (such as web applications or mobile apps) to request and receive data from a server in a standardized format.

Here's a simplified example of a JSON API response:

json
Copy code
{
  "id": 1,
  "name": "John",
  "age": 30,
  "email": "john@example.com"
}
In the above example, the JSON represents a user object with properties such as id, name, age, and email.

To work with JSON API responses in JavaScript, you can use techniques like fetch or libraries like axios to make HTTP requests to the API endpoints. Once you receive the JSON response, you can parse it using JSON.parse() to convert it into a JavaScript object. From there, you can access the properties of the object as needed.
 */

/**
 Pehle, hume "callbacks" ki zarurat padi. Jab hum asynchronous tasks ko handle karte the, jaise ki API calls ya file operations, toh hume ek tarika chahiye tha jisse hum task complete hone ka intezaar kar sake. Callbacks ek function hote hain jo task complete hone par invoke hote hain. Yeh hume code ko chalane ke dauran aur dusre tasks ko chalane ke baad kuch kaam karne ki flexibility dete hain.

Lekin callbacks ko use karne se code complex ho jata tha, kyunki humari code ka structure "callback hell" mein convert ho jata tha. Agar hum multiple asynchronous tasks ko execute karna chahte the, toh hume har baar ek naya callback function define karna padta tha. Isse code ki readability aur maintainability par bura asar padta tha.

Tab humare paas "promises" aaye. Promises ek abstraction hai, jisme hum asynchronous task ka outcome represent kar sakte hain. Ek promise object hume ye dikhata hai ki task kya complete hua hai ya nahi. Isse humari code readability aur structure improve hui.

Promises ko use karte hue, hum ab multiple asynchronous tasks ko ek sath handle kar sakte hain. Hum ek chain of promises bana sakte hain, jisme ek promise ke outcome par dusre promise ko chain kar sakte hain. Isse hum "callback hell" se bachte hain aur code ko linear rakh sakte hain. Example ke liye, socho ki hum ek API call kar rahe hain. Promise hume response ya error ko resolve karne ka ek clean tareeka deta hai.

Lekin promises ka use bhi complex ho sakta hai, kyunki hume har baar `.then()` aur `.catch()` functions use karne padte hain. Tabhi "async/await" concept aaya. Async/await ek syntactic sugar hai promises ka, jo humari code readability aur maintainability ko aur bhi badhata hai.

Async/await ka use karke hum asynchronous tasks ko lagtaar execute kar sakte hain, bina promises ke functions ko chain karna padhe. Hum "async" keyword ka use karke function ko asynchronous declare karte hain aur "await" keyword ka use karke task complete hone ka wait karte hain. Isse humari code sequential aur synchronous dikhne lagti hai, jabki behind the scenes asynchronous hi chal rahi hoti hai. Example ke liye, ek file ko read karne ke liye async/await ka use hume ek readable aur straightforward code structure provide karta hai.

Toh, is tarah callbacks se shuru karke humne promises aur phir async/await ka use kiya, jisse humari code readability, maintainability, aur structure badhi. Har concept ne apne samay mein development ko simplify kiya hai, aur asynchronous programming mein flexibility aur control ko enhance kiya hai.



 */

/**
 * Chalo, sabse pehle "callbacks" ka example samjhe. Socho ki hum ek file ko download karna chahte hain. Yeh asynchronous task hai, jisme file ko download hone ka time lag sakta hai. Callbacks ka use karke hum file download complete hone par specific kaam kar sakte hain.

```javascript
function downloadFile(url, callback) {
  // File download logic here
  // ...
  // Download complete
  callback("Download successful");
}

function processFile() {
  console.log("File processing started.");
}

console.log("File download started.");
downloadFile("http://example.com/file.txt", processFile);
```

Is example mein, `downloadFile` function mein hum file ko download karne ka logic likha hai. Jab file download complete ho jata hai, tab hum `callback` function ko invoke karte hain aur usme "Download successful" message pass karte hain. `processFile` function mein hum download complete hone par kuch aur processing karna chahte hain, jaise ki file content ka analysis karna. Is tarah, humne callbacks ka use kiya hai taaki hum file download hone ke baad kuch aur tasks ko execute kar sake.

Lekin, callback ka use karne se code complex ho jata hai, jaise ki multiple callbacks ko chain karna padta hai. Isiliye hum "promises" ka use karte hain. Promises ek abstraction hai, jaha hum task ka outcome represent kar sakte hain. Ek promise object hume batata hai ki task kya complete hua hai ya nahi.

```javascript
function downloadFile(url) {
  return new Promise((resolve, reject) => {
    // File download logic here
    // ...
    // Download complete
    resolve("Download successful");
  });
}

function processFile() {
  console.log("File processing started.");
}

console.log("File download started.");
downloadFile("http://example.com/file.txt")
  .then((message) => {
    console.log(message);
    processFile();
  })
  .catch((error) => {
    console.log("Download failed:", error);
  });
```

Is example mein, `downloadFile` function ab ek promise return karti hai. Jab file download complete hota hai, tab hum `resolve` function ko invoke karte hain aur usme "Download successful" message pass karte hain. Fir hum `.then()` function ka use karte hue promise ke outcome par kuch aur tasks, jaise ki `processFile`, ko chain kar sakte hain. Agar download mein koi error aati hai, toh hum `.catch()` function ka use karke error handling kar sakte hain.

Promises ka use karte hue code ki structure "callback hell" se bachti hai. Lekin promises ko use karna bhi thoda complex ho sakta hai. Tabhi "async/await" aaya, jo promises ka ek suvidha hai.

```javascript
async function downloadAndProcessFile(url) {
  try {
    console.log("File download started.");
    const message = await downloadFile(url);
    console.log(message);
    processFile();
  } catch (error) {
    console.log("Download failed:", error);
  }
}

downloadAndProcessFile("http://example.com/file.txt");
```

Is example mein, humne `downloadAndProcessFile` function ko `async` declare kiya hai. Hum `await` keyword ka use karke `downloadFile` function ka wait karte hain, jab tak download complete nahi ho jata. Fir hum `message` variable mein download outcome

 ko store karte hain aur usko console par print karte hain. Uske baad hum `processFile` function ko execute karte hain. Agar koi error aati hai, toh hum `try-catch` block mein usko handle karte hain.

Is tarah, async/await ka use karne se humari code sequential aur synchronous dikhne lagti hai, jabki behind the scenes asynchronous hi chal rahi hoti hai. Yeh promises ko aur bhi simple aur readable bana deta hai.

Toh, is tarike se callbacks se shuru karke humne promises aur phir async/await ka use kiya hai. Har example mein hum asynchronous tasks ko handle karne ke liye ek aur ek behtar tareeka use kiya hai, jisse code ki readability, maintainability aur structure badhi hai.

 */

/**
 * Callback ki zaroorat isliye padi kyunki jab hum asynchronous tasks ko handle karte the, jaise ki API calls ya file operations, toh hume ek tareeka chahiye tha jisse hum task complete hone ka intezaar kar sake. Asynchronous tasks ko execute karne mein time lag sakta hai, jaise ki API response time ya file download time. Agar hum in tasks ke completion ka wait na karte aur seedhe agle lines of code ko execute karte, toh hume incorrect results mil sakte hain ya unexpected behavior ho sakti hai.

Callbacks hume flexibility dete hain ki hum task complete hone par kya karna chahte hain. Callbacks ek function hote hain, jo task complete hone par invoke hote hain. Isse hum dusre tasks ko chalane ke baad kuch specific kaam kar sakte hain. Callbacks humare code ko non-blocking banate hain, jisse hume parallel tasks ka execution karne ki capability milti hai.

Ab, "callback hell" ke bare mein baat karte hain. Jab hum multiple asynchronous tasks ko execute karte hain, toh hume har baar ek naya callback function define karna padta hai. Isse code ki structure complex ho jati hai. Let's take an example to understand this:

```javascript
function task1(callback) {
  setTimeout(() => {
    console.log("Task 1 complete");
    callback();
  }, 1000);
}

function task2(callback) {
  setTimeout(() => {
    console.log("Task 2 complete");
    callback();
  }, 2000);
}

function task3(callback) {
  setTimeout(() => {
    console.log("Task 3 complete");
    callback();
  }, 1500);
}

console.log("Start");
task1(() => {
  task2(() => {
    task3(() => {
      console.log("All tasks complete");
    });
  });
});
```

Is example mein humne 3 tasks define kiye hain: `task1`, `task2`, aur `task3`. Har task ko execute karne ke liye humne ek callback function pass kiya hai. Callback function, task complete hone par invoke hoga. Humne tasks ko ek chain mein organize kiya hai, jisse har task ka completion ke baad agla task execute ho. Code mein dekho toh, nested callbacks ki wajah se code structure complex ho gayi hai. Har naye task ke liye hume ek aur level of indentation aur callback define karna padta hai. Ye callback hell situation hai, jisse code ki readability, maintainability aur debugging kafi mushkil ho jati hai.

Isiliye, callbacks ka use ho sakta hai lekin complex asynchronous scenarios mein code structure ko complicated bana deta hai. Yahaan aate hain promises aur async/await, jo callback hell situation se bachate hain aur code ki readability aur maintainability ko badhate hain.

 */




/**
 Blocking vs Non blocking code in js
ChatGPT
Blocking and non-blocking code are terms used to describe how JavaScript handles operations that may 
take some time to complete, such as I/O operations, network requests, or file system access.

Blocking Code:
Blocking code refers to synchronous operations in JavaScript, where the program execution is halted 
until the operation is completed. During this time, the entire program remains unresponsive, and no other code can be executed.
Example of blocking code:

javascript
Copy code
function blockingFunction() {
  console.log("Start");
  // Simulating a time-consuming operation with a loop
  for (let i = 0; i < 1000000000; i++) {
    // Some time-consuming task
  }
  console.log("End");
}

console.log("Before blockingFunction");
blockingFunction();
console.log("After blockingFunction");
In the above example, when the blockingFunction is called, it performs a time-consuming loop. During 
this loop, the program is blocked, and "After blockingFunction" will only be logged to the console once the function completes its task.

Non-blocking Code:
Non-blocking code refers to asynchronous operations in JavaScript. Instead of waiting for the operation to complete, 
the program continues to execute the remaining code. Once the operation is finished, a callback function is triggered to handle the result.
Example of non-blocking code using callbacks (traditional approach):

javascript
Copy code
function nonBlockingFunction(callback) {
  console.log("Start");
  // Simulating an asynchronous operation with setTimeout
  setTimeout(function () {
    console.log("Async operation completed");
    callback();
  }, 2000); // Wait for 2000 milliseconds (2 seconds)
}

console.log("Before nonBlockingFunction");
nonBlockingFunction(function () {
  console.log("Inside the callback");
});
console.log("After nonBlockingFunction");
In this example, the nonBlockingFunction simulates an asynchronous operation using setTimeout. The program continues 
execution without waiting for the timeout to complete. After 2 seconds, the callback function is triggered,
 and "Inside the callback" is logged to the console.

Asynchronous programming in JavaScript is essential for tasks that might take time to complete, such as fetching data from APIs, 
reading files, or making database queries. Modern JavaScript uses Promises, async/await, and other techniques to handle asynchronous 
operations more elegantly than using traditional callbacks. These techniques provide a more readable and maintainable way to write 
non-blocking code.
 */