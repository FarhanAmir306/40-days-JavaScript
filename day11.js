

function outer(){
    let a = 0; // local variable

    return {
        "increment":function(){
            a++;
            console.log("increment",a); // 11
        },
        "decrement":function (){
            a--;
            console.log("decrement",a); // 9
        },
        "resetValue":function (){
            a = 0;
            console.log("getValue",a); // 10
        }

    }
}

const counter = outer(); // closure
counter.increment();
counter.increment(); 
counter.decrement();
counter.resetValue(); // 0



// 5. What happens if a closure references an object?
// The object is garbage collected immediately
// The object remains in memory as long as the closure exists
// The object is automatically cloned
// None of the Above.


✅ "The object remains in memory as long as the closure exists."

Why?
A closure in JavaScript allows an inner function to access variables from its outer (enclosing) function, even after the outer function has finished executing.

If a closure references an object, the JavaScript engine keeps that object in memory (prevents garbage collection) as long as the closure exists.

This is because the closure maintains a reference to the object, meaning it cannot be garbage-collected.

Once all closures referencing the object are gone, the object becomes eligible for garbage collection.

Explanation with a Diagram

Example Code:
javascript
Copy

function outerFunction() {
    const bigObject = { data: "Very large object 🏢" }; // Object in memory
    return function innerFunction() {
        console.log(bigObject.data); // Closure references `bigObject`
    };
}

const closure = outerFunction(); // `bigObject` stays in memory
closure(); // Output: "Very large object 🏢"

// Later, if we remove the closure:
closure = null; // Now `bigObject` can be garbage collected
Memory Behavior:
When outerFunction runs:

bigObject is created in memory.

innerFunction is returned and keeps a reference to bigObject.

After outerFunction finishes:

Normally, bigObject would be garbage-collected.

But, since innerFunction (the closure) still references it, it stays in memory.

When the closure is no longer needed (e.g., set to null):

The reference is broken.

Now, bigObject can be garbage-collected.

Visual Representation (Memory Flow)
Copy
┌───────────────────────┐       ┌───────────────────────┐
│      outerFunction    │       │        Heap           │
│                       │       │                       │
│   bigObject───────┐   │       │   ┌───────────────┐   │
│                   │   │       │   │  { data: ... } │   │
│   return innerFunction│───────┼──▶│  (bigObject)  │   │
└───────────────────────┘       │   └───────────────┘   │
                                │                       │
┌───────────────────────┐       │                       │
│      closure          │       │                       │
│ (innerFunction)       │───────┘                       │
└───────────────────────┘
As long as closure exists, bigObject stays in memory.

If closure = null, the reference is lost, and bigObject can be garbage-collected.

Key Takeaways
✔ Closures prevent garbage collection of referenced objects.
✔ This is useful for maintaining state but can lead to memory leaks if not managed properly.
✔ To free memory, remove closures (e.g., set them to null).

Would you like a real-world example of how this affects performance? 😊