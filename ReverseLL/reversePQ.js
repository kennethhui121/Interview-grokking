class Node {
    constructor(value, next=null){
      this.value = value;
      this.next = next;
    }
}    

function reversePQ(head, p, q){
    let curr = head, prev = null
    while(p-1 > 0){
        prev = curr
        curr = curr.next
        p--
    }

    
}