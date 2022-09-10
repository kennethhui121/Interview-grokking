class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
}

const avg = (root) =>{
    let result = [];
    let q = [root]
    while(q.length){
        let temp = 0;
        let size = q.length
        for(let i=0; i<size; i++){
            let node = q.shift()
            temp += node.val;
            if(node.left) q.push(node.left)
            if(node.right) q.push(node.right)
        }
        result.push(temp/size)
    }
    return result
}

var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(9)
root.left.right = new TreeNode(2)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)

console.log(`Level averages are: ${avg(root)}`)
