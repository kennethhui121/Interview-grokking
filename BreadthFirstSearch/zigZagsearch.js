class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null; 
    }
};

function zigzag(root){
    let result = [];
    let q = [root];
    while(q.length){
        let i = 0
        let size = q.length;
        let temp = [];
        for(let i = 0; i<size; i++){
            let node = q.shift()
            temp.push(node.value);
            if(node.left) q.push(node.left)
            if(node.right) q.push(node.right)
        }
        (i%2 === 0) ? result.push(temp) : result.push(temp.reverse());
        i++
    }
    return result
}

var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(9)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
root.right.left.left = new TreeNode(20)
root.right.left.right = new TreeNode(17)
console.log(`Zigzag traversal: ${zigzag(root)}`)
  