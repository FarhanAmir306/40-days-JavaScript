
try {
    let r = p + 50;
    console.log(r);
} catch (error) {
    console.log("An error occurred:", error.name);
}


function processPayment (amount){
    try {
        
        if(amount < 0 ||  amount > 1000){
            throw new Error("Invalid amount");	
        }
        console.log("Payment processed:", amount);

    } catch (error) {
        console.error("Error processing payment:", error.message);
    }
}

processPayment(500); // Valid amount


function CustomError(name, message) {
    this.name = name;
    this.message = message || "Default Message";
}


function User (age){
    try {
        if(age < 18 || age > 100){
            throw new CustomError("Invalid Age", "Age must be between 18 and 100");
        }
        console.log("User age is valid:", age);
    } catch (error) {
        console.error("Error:", error.name, "-", error.message);
    }
}

User(25); // Invalid age




function a (){
    console.log(this);
}
a()
