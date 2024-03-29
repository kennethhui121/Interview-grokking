class Node {
    constructor(value, next = null) {
      this.value = value;
      this.next = next;
    }
  }
  
  
  function is_palindromic_linked_list(head) {
    if(head == null || head.next == null) return true
    let slow = head, fast = head;
    while(fast != null && fast.next != null){
      slow = slow.next;
      fast = fast.next.next;
    }
    
    headSecondHalf = reverse(slow);
    copyHeadSecondHalf = headSecondHalf;

    while ((head !== null && headSecondHalf !== null)) {
        if(head.value !== headSecondHalf.value){
            break;
        }
        head = head.next;
        headSecondHalf = headSecondHalf.next;
    }

    reverse(copyHeadSecondHalf);

    if (head === null || headSecondHalf === null) { // if both halves match
        return true;
    }
    
      return false;
}

function reverse(head) {
    let prev = null;
    while (head !== null) {
      next = head.next;
      head.next = prev;
      prev = head;
      head = next;
    }
    return prev;
  }
  
  const head = new Node(2);
  head.next = new Node(4);
  head.next.next = new Node(6);
  head.next.next.next = new Node(4);
  head.next.next.next.next = new Node(2);
  
  console.log(`Is palindrome: ${is_palindromic_linked_list(head)}`);
  
  head.next.next.next.next.next = new Node(2);
  console.log(`Is palindrome: ${is_palindromic_linked_list(head)}`);