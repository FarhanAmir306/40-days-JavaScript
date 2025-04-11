
test();

var test = function() {
  console.log('I am being tested');
}

// var is hoisted with value undefined.
// ekhane error howar karon holo ekhane var test creatation phase e undefined 
// but function ta execution phase e undefined hoyeche.
// tai ekhane test function ta undefined hoyeche.


console.log('name is ', name); // ekhane name undefined hobe, karon name ta creation phase e undefined hoyeche.
var name = "tom"; //  In creation phase → x = undefined
name = 'tom';
console.log('name is ', name);

console.log('name is ', name); // let and const creatation phase e  uninitialized thake
// tai ekhane reference error dekhabe.
// let name = "tom"; // In creation phase → name = uninitialized
let name = "tom";
name = 'tom';
console.log('name is ', name);

console.log('name is ', name); // let and const creatation phase e  uninitialized thake
// tai ekhane reference error dekhabe.
// const name = "tom"; // In creation phase → name = uninitialized
const name = "tom";
//name = 'tom';
console.log('name is ', name);



// Temporal Dead Zone(TDZ)

// TDZ = an area where you can not access a variable until it is initialized

// ReferenceError


    // === name variable's TDZ started here
    //
    //console.log(name); // RerenceError
    //
    console.log(address); // RerenceError
    let address = "bangalore";
    //
    let name = "tapaScript" // === name variable's TDZ ends here
    console.log(name);
    //
    //