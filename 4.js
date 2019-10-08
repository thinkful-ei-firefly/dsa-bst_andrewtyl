function tree(t){
    if(!t){
        return 0;
    }
    return tree(t.left) + t.value + tree(t.right)
}

//If no t, returns 0.
//Else, it will return a line with a tree of it's left child, it's own value, and it's right child's tree and becomes a recursive function until it hits the bottom of the tree branches. Though, they will all be in a single line, which could be confusing visually as there is no way to tell which level the branches are supposed to be. Though it would return every single value in the tree.