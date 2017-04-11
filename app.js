class BinarySearchTree {
    constructor(key=null, value=null, parent=null) {
        this.key = key;
        this.value = value;
        this.parent = parent;
        this.left = null;
        this.right = null;
    }

    insert(key, value) {
        if (this.key == null) {
            this.key = key;
            this.value = value;
        }
        else if (key < this.key) {
            if (this.left == null) {
                this.left = new BinarySearchTree(key, value, this);
            }
            else {
                this.left.insert(key, value);
            }
        }
        else {
            if (this.right == null) {
                this.right = new BinarySearchTree(key, value, this);
            }
            else {
                this.right.insert(key, value);
            }
        }
    }
        get(key) {
        if (this.key == key) {
            return this.value;
        }
        else if (key < this.key && this.left) {
            return this.left.get(key);
        }
        else if (key > this.key && this.right) {
            return this.right.get(key);
        }
        else {
            throw new Error('Key Error');
        }
    }
        remove(key) {
        if (this.key == key) {
            if (this.left && this.right) {
                const successor = this.right._findMin();
                this.key = successor.key;
                this.value = successor.value;
                successor.remove(successor.key);
            }
            else if (this.left) {
                this._replaceWith(this.left);
            }
            else if (this.right) {
                this._replaceWith(this.right);
            }
            else {
                this._replaceWith(null);
            }
        }
        else if (key < this.key && this.left) {
            this.left.remove(key);
        }
        else if (key > this.key && this.right) {
            this.right.remove(key);
        }
        else {
            throw new Error('Key Error');
        }
    }
        _replaceWith(node) {
        if (this.parent) {
            if (this == this.parent.left) {
                this.parent.left = node;
            }
            else if (this == this.parent.right) {
                this.parent.right = node;
            }

            if (node) {
                node.parent = this.parent;
            }
        }
        else {
            if (node) {
                this.key = node.key;
                this.value = node.value;
                this.left = node.left;
                this.right = node.right;
            }
            else {
                this.key = null;
                this.value = null;
                this.left = null;
                this.right = null;
            }
        }
    }

        _findMin() {
            if (!this.left) {
                return this;
            }
            returnthis.left._findMin();
        }

}

const bst = new BinarySearchTree();
bst.insert(1);
bst.insert(2);
bst.insert(4);
bst.insert(3);
bst.insert(9);
bst.insert(8);
bst.insert(11);
bst.insert(15);
bst.insert(13);
bst.insert(12);
bst.insert(20);
bst.insert(22);
console.log(bst)


function binary(node) {

  if(node.right.key > node.key) {
    console.log(node.right.key, node.key)
    return true;
  }
  // if(node.left.key < node.key) {
  //   console.log(node.left.key, node.key)
  //   return true;
  // }
  if(binary(node.right)) {

    return true;
  }
  return false;

}
console.log(binary(bst));

function binary(node) {
  if(node) {

    binary(node.left)
    console.log(node.key)
    binary(node.right)
  }
}
binary(bst); // traversal

function maxNode(node){
   if(!node){
     return 0;
  }
  if(node.right){
     return maxNode(node.right)
  }
  return node.key;
}
console.log(maxNode(bst), "this is the max value")

// max node

// nodes from head node, to smallest child node.
//

// check height of BST.
function height(bst) {
 if(bst) {
   return 1 + Math.max(height(bst.left), height(bst.right))

 }
 else return 0;
}
// console.log(height(bst));





//binary tree you can only chain 2 children, left and right
// check root against left side making sure its lower. Right side is
// is higher than the root.
