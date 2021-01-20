//classes are needed to create advanced data structures and allow us to not keep 
//making the same code. 

class Student {
    constructor (firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }
}

let bob = new Student("bob", "bobereen")


//######################################################
    //singly linked list
/* 
    a singly linked list is a data structure that contains a head, tail, and length

    the points in memory are called nodes and they only have a value and point to the next node 

    the linked list can be thought of a train car connected to other train cars ... a single train car can be seen 
    as a node. 

    there are no indexes in singly linked list. 

    a singly linked list talks about a single connection between each node. this means the link only goes in one direction

    [2] -> [4] -> [34] -> [15]
    head                  tail

    comparison to arrays 

    linked list 
    no indexes 
    connected with nodes 
    random access is not allowed (cannot access points not head or tail but has to step through the linked list)


    arrays
    indexes for each in order
    insertion and deletion can be expensive 
    can quickly access any point in the array. 
    
    */

//    linked lists are just a collection of nodes ... A node class is needed first 


//holds a value -> val
//holds a refrence to next node -> next
class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

//define a linked list class with no params for constructor 

class singlyLinkedList {
    constructor(){
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    push(val){
        let newNode = new Node(val);
        if (!this.head){
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length += 1;
        return this
    }

    pop(){
        if (this.length === 0){
            return undefined
        }

        if (this.length === 1){
            let head = this.head
            this.head = null;
            this.tail = null;
            this.length = 0;
            return head;
        }

        let current = this.head;
        let pre = current;

        for(let i = 1; i < this.length; i++){
            pre = current;
            current = current.next;
        }

        this.tail = pre;
        pre.next = null;
        this.length -= 1;
        return current;
    }

    shift (){
        if (this.length === 0) return undefined;

        if (this.length === 1){
            let head = this.head;
            this.head = null;
            this.tail = null;
            this.length -= 1
            return head;
        }

        let pre = this.head;
        this.head = this.head.next;
        pre.next = null;
        this.length -= 1;
        return pre;
    }

    unshift(val){
        let newNode = new Node(val);

        newNode.next = this.head;
        this.head = newNode;

        if (this.length === 0){
            this.tail = newNode;
        }
        
        this.length++;

        return this;
    }

    get(pos){
        if (pos < 0 || pos >= this.length) return null;
        let current = this.head;
        for (let i = 0; i < this.length; i++){
            current = current.next;
        }

        return current;
    }

    set(pos, val){
        let current = this.get(pos);
        if (!current) return false;
        current.val = val;
        return true;
    }

    insert(pos, val){
        let current = this.get(pos-1);
        if (!current) return false;
        if(pos === 0){
            this.unshift(val);
            return true;
        }
        else if (pos === this.length-1){
            this.push(val);
            return true;
        }
        let newNode = new Node(val)
        newNode.next = current.next;
        current.next = newNode;
        return true;
    }

    reverse(){
        let current = this.head;
        this.tail = this.head;
        this.head = current;

        let pre = null;
        let next;

        for (let i = 0; i < this.length; i++){
            next = current.next;
            current.next = pre;

            pre = current;
            current = next;
        }

        return this;
    }
}

//########################################################
// doubly linked list -> has a pointer forward and a new pointer backwards

/* 
the first thing that has to be done is change the node to include a prev

*/

class doublyNode {
    constructor(val){
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class doublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        let s = new doublyNode(val);

        if (this.length === 0){
            this.head = s;
            this.tail = s;
            this.length++;
            return this;
        }

        s.prev = this.tail;
        this.tail.next = s;
        this.tail = s;
        this.length++;
        return this;
    }

    pop(){

        let newTail = this.tail.prev;

        if (length ===0) return undefined;

        if (length === 1) {
            this.head = null;
            this.tail = null;
        }

        newTail.next = null;
        this.tail.prev = null;

        let popped = this.tail;
        this.tail = newTail;

        this.length--;
        return popped;
    }

    shift(){
        let shifted = this.head;

        if (length === 0 ) return undefined;

        if (length === 1){
            this.head = null;
            this.tail = null;
            return shifted;
        }

        let newHead = shifted.next;
        newHead.prev = null;
        shifted.next = null;
        this.head = newHead;
        this.length--;
        return shifted;
    }

    unshift(val){
        let s = new doublyNode(val);

        if (length === 0){
            this.head = s;
            this.tail = s;
            this.length++;
            return this;
        }

        let oldHead = this.head;

        oldHead.prev = s;
        s.next = oldHead;
        this.head = s;
        this.length++;

        return this;
    }

    get(loc){
        if (loc >= this.length || loc < 0) return undefined;
        if(loc > Math.floor(this.length/2)){
            let target = this.tail;
            for(let i = 0; i < ((this.length-1) - pos); i++ ){
                target = this.tail.prev;
            }

            return target.val;
        }

        let target = this.head;
        for(let i = 0; i < this.length; i++ ){
            target = this.tail.next;
        }

        return target;
    }

    set(val, pos){
        target = this.get(pos);
        if (!!target) target.val = val; return true;
        
        return false;
    }
}

//##############################################################
//stacks is a collection of data that follows the rules last in first out. 


