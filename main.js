const Binary = require('./BinarySearchTree');

function findDepth(tree){
    if(!tree){
        return 0;
    }else{
        let leftDepth = findDepth(tree.left);
        let rightDepth = findDepth(tree.right);
        if(leftDepth > rightDepth){
            return leftDepth+1
        }else{
            return rightDepth+1
        }
    }
}

function isValidBST(node, min = null, max = null) {
    if (!node) 
        return true;
    
    if (max !== null && node.data >= max) {
      return false;
    }
    
    if (min !== null && node.data <= min) {
      return false;
    }
    
    return isValidBST(node.left, min, node.data) && isValidBST(node.right, node.val, max);
}

const sampleTree = new Binary();

sampleTree.insert(10);
sampleTree.insert(5);
sampleTree.insert(6);
sampleTree.insert(1);
sampleTree.insert(11);
sampleTree.insert(16);
sampleTree.insert(15);


console.log(findDepth(sampleTree));
console.log(isValidBST(sampleTree));