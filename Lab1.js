class Queue {
    constructor() {
        this.q = []; //this. makes it accessible to become a class level variable. can be accessed by all methods. '.' makes the variable public. 
    }
// get the current number of elements in the queue
//Getter function
     length() {
        return this.q.length
    };
//Get all the elements 
    get queue() {
        return this.q;
    }
// Boolean function: returns true if the queue is empty, false otherwise 
    isEmpty() {
        return 0 == this.q.length;
    };
//adds new element to the end of the quue
    enqueue(newItem) {
        this.q.push(newItem)
    };
//enqueue using set
    set newItem(newItem){
        this.q.push(newItem)
    };

//Boolean function: returns true if an item is found (first occurence); false otherwise
    inQueue(item) {
        let i = 0;
        let isFound = false;
        while (i < this.q.length && !isFound) {
            if (this.q[i] === item) { //three equals stands for a strict comparison. e.g. we want number 1 and only 1 must be only in data form
                isFound = true;
            } else
                i++;
        }
        return (isFound);
    }
// pop an item from the queue
    dequeue() {
        if (0 != this.q.length) {
            let c = this.q[0]; //as part of dequeuing we want to know part of which value we are removing from the queue. saves a copy of the variable c before removing the item.
            this.q.shift(); //want to remove from the first item of the array. cannot access after this 
            return c
        }
    };

    //Task 1: Adding a function that removes all elements in the queue
    removeElements(){
        // this.q = []; //reassigning the object to an empty array
        for (let i=0; i <= this.q.length; i++){
            this.dequeue()
        }
    };

    //Task 2: Add elements
    addElements(elements){
        //this.q = this.q.concat(elements);
        for (let i=0; i <= elements.length-1; i++){
            this.q.push(elements[i]);}
    }

    //add all odd numbers between 0 and N to the queue (TUTE)
    // addOdd(n){
    //     let i = 0;
    //     while(i<n){
    //         if(i%2 ===1){
    //             this.enqueue(i);
    //         }
    //         i++;
    //     }
    //     return n;

    // }

    //Task 3: Dequeuing n number of elements and rejecting invalid inputs
    dequeueLimits(n){
        if(n > this.q.length )
            return console.log("Invalid input. Please try again.");

            while(n > 0){
                this.q.pop();
                n--;
            }
    }    
    //Task 4: printing contents of the array along with their position 
        printContent(){
            let output = "";
            for (let i=0; i < this.q.length; i++){
                    output += i + " -> " + this.q[i] + "\n";
                }
                return output;

        }

    
        
        

};

let queue = new Queue(); //()passes things to the constructor
queue.enqueue(10);
queue.enqueue(20);
console.log(queue.length());
console.log("Queue: " + queue.q);
queue.dequeue();
queue.enqueue(33);
console.log(queue.q);
console.log(queue.inQueue(33));
console.log(queue.inQueue(88));
console.log("Before removing elements: " + queue.q); //TEST 1: elements before remove Elements method
queue.removeElements();
console.log("After removing elements: " + queue.q); //TEST 2: elements after removeElements method
queue.addElements([13,33,96]);
console.log(queue.q);
console.log("Before dequeue: " + queue.q);
queue.dequeueLimits(3);
console.log("After dequeuing: " + queue.q);
queue.addElements([12,24,36,48]);
console.log(queue.printContent());

queue.newItem =  55;
console.log(queue.q);