
// Add Front 

class SLLNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }
     // constructor, other methods, removed for brevity
     addFront(value) {
        var newNode = new SLLNode(value);
        newNode.next = this.head;
        this.head = newNode;
        return this.head;
    	
    }

    removeFront() {
        if (this.head == null) {
            return this.head;
        }
        var removeNode = this.head; 
        this.head = removeNode.next; 
        removeNode.next = null;
        return this.head;
    }

    front() {
        if (this.head == null) {
            return null;
        }
        else {
            return this.head.value;
        }
    }
 }
var newSLL = new SLL();
// newSLL.addFront(9);
// newSLL.addFront(6);
// newSLL.addFront(3);
// console.log(newSLL);
// newSLL.removeFront();
// console.log(newSLL);

newSLL.front()
console.log(newSLL);
newSLL.addFront(18);
newSLL.addFront(9)
console.log(newSLL);
newSLL.removeFront();
newSLL.removeFront();
newSLL.front()
console.log(newSLL);




