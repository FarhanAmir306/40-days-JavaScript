// 1. What will be the output and why?

const user = { name: "Alex", age: undefined };
console.log(user.age ?? "Not provided");
// This code uses the nullish coalescing operator (??).
// If user.age is null or undefined, return "Not provided"; otherwise, return user.age


// 2. What will happen if we try to modify a frozen object?
const obj = Object.freeze({ a: 1 });
obj.a = 2;
console.log(obj.a);


const person = {
    name: "Tapas",
    company: {
      name: "tapaScript",
      location: {
        city: "Bangalore",
        zip: "94107"
      }
    }
};

const { name, company: { location: { city } } } = person;





const studentManagement = {
    students: [
    { 
    name: "John", age: 20, grade: 85 
    },
    { 
    name: "Jane", age: 22, grade: 90
    },
    {
    name: "Jim", age: 21, grade: 75 
    }
    ],
     calculateAverageGrade: function () 
       {
         if (this.students.length === 0) {
            return "No students found.";
          }
            let total = 0;
            let count = 0;
            for (let i = 0; i < this.students.length; i++) {
                total += this.students[i].grade;
                count++;
            }
            return total / count;

       }
   
}

console.log("Average Grade:", studentManagement.calculateAverageGrade());


const bookStore = {
    inventory :{
        "The Alchemist": 5,
        "1984": 2,
        "The Great Gatsby": 0,
        "To Kill a Mockingbird": 3
    },
    checkAvailability:function (bookTitle) {
        if(this.inventory[bookTitle] > 0){
            console.log(`The book "${bookTitle}" is available.`);
        }
        else if(this.inventory[bookTitle] === 0){
            console.log(`The book "${bookTitle}" is out of stock.`);
        }
        else{
            console.log(`The book "${bookTitle}" is not available in the inventory.`);
        }
    },
    restock : function (bookTitle, quantity) {
        if(this.inventory[bookTitle] !== undefined){
            this.inventory[bookTitle] += quantity;
            console.log(`Restocked ${quantity} copies of "${bookTitle}".`);
        }
        else{
            this.inventory[bookTitle] = quantity;
      console.log(`📚 New book "${title}" added to inventory with ${quantity} copies.`);
        }
    }
}
bookStore.checkAvailability("1984");

const persons = { name: "John" };
const newPerson = persons;
newPerson.name = "Doe";
console.log(persons.name);

const users = [
    {
        'name': 'Alex',
        'address': '15th Park Avenue',
        'age': 43
    },
    {
        'name': 'Bob',
        'address': 'Canada',
        'age': 53
    },
    {
        'name': 'Carl',
        'address': 'Bangalore',
        'age': 26
    }
  ];

  for ( let { name, address, age } of users) {
    console.log(`Name: ${name}, Address: ${address}, Age: ${age}`);
  }