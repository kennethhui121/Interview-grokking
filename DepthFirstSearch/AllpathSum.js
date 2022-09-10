class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null; 
    }
  };
  
  
  const find_paths = function(root, sum) {
    // TODO: Write your code here
    let allPaths = [], currPath = [];
    function helper(currNode, sum, currPath, allPaths){
        if(currNode === null){
          return
        }  
        currPath.push(currNode.value);
        if(currNode.value === sum && currNode.left === null && currNode.right === null){
            allPaths.push(currPath)
        }else{
            helper(currNode.left, sum - currNode.value, currPath, allPaths)
            helper(currNode.right, sum - currNode.value, currPath, allPaths)
        }
        currPath.pop()
    }
    helper(root,sum, currPath, allPaths)
    return allPaths
  };

  var root = new TreeNode(12)
  root.left = new TreeNode(7)
  root.right = new TreeNode(1)
  root.left.left = new TreeNode(4)
  root.right.left = new TreeNode(10)
  root.right.right = new TreeNode(5)
  sum = 23
  console.log(`Tree paths with sum: ${sum}: ${find_paths(root, sum)}`)
  