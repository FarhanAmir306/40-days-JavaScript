
// 1. answer write to Notion app


// 2. What is the problem here? Fix it to log the correct name and explain the fix
const user = {
    name: "tapaScript",
    greet: function () {
      console.log(`Hello, ${this.name}`);
    },
  };
  
  user.greet();


  const obj = {
    name: "Tom",
    greet: function () {
      console.log(`Hello, ${this.name}!`);
    },
  };
  
  const greetFn = obj.greet;
//   greetFn(); // Output: Hello, undefined! (or throws an error in strict mode)
// correct way explicit binding
greetFn.call(obj); // Output: Hello, Tom!



// 4. What is the problem with the following code? Why isn't it logging the name correctly?

const user = {
    name: "Alex",
    greet: function () {
      const inner= ()=> {
        console.log(`Hello, ${this.name}!`);
      }
      inner();
    },
  };
  
  user.greet(); // Output: Hello, undefined! (or throws an error in strict mode)


// 6. Can you attach the car1's describe() method to car2 object? Give all possible solutions that you can think of

  const car1 = {
    brand: "Audi",
    model: "A8",
    describe: function () {
      console.log(`This car is a ${this.brand} ${this.model}.`);
    },
  };
  const car2 = {
    brand: "BMW",
    model: "X1",
  };
car1.describe.call(car2); // Output: This car is a BMW X1.

  🚀 Summary Table:
  ----------------------------------
        Method	                    Description
  car2.describe = car1.describe	  Reuse the function directly
  car1.describe.call(car2)	      Immediate call with custom this
  car1.describe.apply(car2)	      Same as call but with array args
  bind(car2)	                  Creates a bound function
  Object.assign / spread	      Copies method into car2