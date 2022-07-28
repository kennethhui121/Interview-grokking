class Node{
    constructor(value, next=null){
        this.value = value;
        this.next = next
    }
}

const findMiddle = (head) =>{
    let fast = head, slow = head;
    while(fast != null && fast.next != null){
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow
}

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node (4);
head.next.next.next.next = new Node(5)

head.next.next.next.next.next = new Node(6)
console.log(`the middle node is ${findMiddle(head).value}`)
head.next.next.next.next.next.next = new Node(7)

//console.log(`the middle node is ${findMiddle(head).value}`)