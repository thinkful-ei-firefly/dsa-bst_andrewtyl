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

main3()