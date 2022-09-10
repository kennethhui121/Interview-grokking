class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
}

function minBST(root){
    if(!root) return 0;
    let result = 1;
    let q = [root]
    if(!root.left || !root.right) return result
    while(q.length){
        let size = q.length;
        console.log(JSON.stringify(q))
        for(let i =0; i<size; i++){
            let node = q.shift();
            if(!node.left && !node.right) return result;
            else{
                if(node.left) q.push(node.left)
                if(node.right) q.push(node.right)
            }
        }
        result++
    }

    return result
}

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Tree Minimum Depth: ${minBST(root)}`);
root.left.left = new TreeNode(9);
root.right.left.left = new TreeNode(11);
console.log(`Tree Minimum Depth: ${minBST(root)}`);