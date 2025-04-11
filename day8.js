const message = "I can do it";

fucntion sum(a, b) {
    const result = a + b;
    return result;
}

function mul(a, b) {
    const result = a * b;
    return result;
}
function calc(a, b) {
    return (sum(a, b) + mul(a,b))/2;
}

function getResult(a, b) {
    return calc(a, b);
}

getResult(8, 5);

🔷Global Execution Context (GEC)
    Creation Phase:
        message → uninitialized
        sum → function memory allocated
        mul → function memory allocated
        calc → function memory allocated
        getResult → function memory allocated

    Execution Phase:
        message = "I can do it"
        getResult(8, 5) is invoked

    🔷Function Execution Context (FEC) for getResult(8, 5)
        Creation Phase:

        // In the Creation Phase, a const variable is:
        // .hoisted, but
        // .Not initialized, so it is not undefined— it's "uninitialized".
        // If you try to access it before initialization, you'll get a ReferenceError, not undefined.
       
            a → uninitialized
            b → uninitialized
        Execution Phase:
            a = 8
            b = 5
            calc(8, 5) is invoked

            🔷 FEC for calc(8, 5)
                Creation Phase:
                    a → uninitialized
                    b → uninitialized
                Execution Phase:
                    a = 8
                    b = 5
                    sum(8, 5) is invoked

                    🔷 FEC for sum(8, 5)
                        Creation Phase:
                            a → uninitialized
                            b → uninitialized
                            result → uninitialized
                        Execution Phase:
                            a = 8
                            b = 5
                            result = 13
                            return 13
                            Back to calc
                            mul(8, 5) is invoked

                            🔷 FEC for mul(8, 5)

                                Creation Phase:
                                    a → uninitialized
                                    b → uninitialized
                                    result → uninitialized

                                Execution Phase:
                                    a = 8
                                    b = 5
                                    result = 40
                                    return 40
                                    Back to calc

        

                    MEMORY
                -----------------
        Stack                       Heap
    -----------------          ---------------------
    | GEC             |       | Function objects  |
    | getResult(8,5)  |  -->  | sum()             |
    | calc(8,5)       |       | mul()             |
    | sum(8,5)        |       | calc()            |
    | mul(8,5)        |       | getResult()       |
    -----------------         ---------------------