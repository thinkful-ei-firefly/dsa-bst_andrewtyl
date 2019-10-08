const BST = require('./bst')

function main3() {

    const bst1 = new BST
    bst1.insert(3, true)
    bst1.insert(1, true)
    bst1.insert(4, true)
    bst1.insert(6, true)
    bst1.insert(9, true)
    bst1.insert(2, true)
    bst1.insert(5, true)
    bst1.insert(7, true)
    console.log(bst1)

    
    const bst2 = new BST
    bst2.insert('E', true)
    bst2.insert('A', true)
    bst2.insert('S', true)
    bst2.insert('Y', true)
    bst2.insert('Q', true)
    bst2.insert('U', true)
    bst2.insert('E', true)
    bst2.insert('S', true)
    bst2.insert('T', true)
    bst2.insert('I', true)
    bst2.insert('O', true)
    bst2.insert('N', true)
    console.log(bst2)
}

function main4() {

    function findHeightOf(bst) {
        let height = 0
        if (bst !== null) {
            height++
            lheight = findHeightOf(bst.left)
            rheight = findHeightOf(bst.right)
            if (lheight > rheight) {
                height = height + lheight
            }
            else if (rheight > lheight) {
                height = height + rheight
            }
            else if (lheight === rheight) {
                height = height + lheight
            }
            else {
                throw new Error('This line of code should never trigger. You broke something.')
            }
        }
        return height;
    }

    const bst1 = new BST
    bst1.insert(3, true)
    bst1.insert(1, true)
    bst1.insert(4, true)
    bst1.insert(6, true)
    bst1.insert(9, true)
    bst1.insert(2, true)
    bst1.insert(5, true)
    bst1.insert(7, true)
    console.log(findHeightOf(bst1))

}

main4()