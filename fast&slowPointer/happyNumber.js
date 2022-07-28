function find_happy_number(num) {
    let slow = num,
        fast = num;
    while (true) {
        slow = makeSquare(slow); // move one step
        fast = makeSquare(find_square_sum(fast)); // move two steps
        if (slow === fast) { // found the cycle
            break;
        }
    }
    return slow === 1; // see if the cycle is stuck on the number '1'
}
function makeSquare(num){
  let sum = 0;
  let total = Array.from(num.toString()).map(Number).map(x => x*x).reduce((a,b) => a+b)
  return total 
//   let split = num.toString();
//   sum += split[0]*split[0] + split[1]*split[1];
//   sum
}

console.log(makeSquare(12))
function find_square_sum(num) {
    let sum = 0;
    while ((num > 0)) {
        digit = num % 10;
        sum += digit * digit;
        num = Math.floor(num / 10);
    }
    return sum;
}
let n = 23;
let dig = n % 10
let add = dig * dig
console.log(dig, Math.floor(n/10))


console.log(find_happy_number(23));
console.log(find_happy_number(12));