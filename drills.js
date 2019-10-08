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

function main5() {

    function findHeightOf(bst) { //O(2n+1) 
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

function main6() {
    function isitBST(t) {
        let toReturn = false;
        try {
            if (t === null) {
                toReturn = true
            }
            else {
                let lBST = isitBST(t.left)
                let rBST = isitBST(t.right)
                if (lBST && rBST) {
                    let lKey = null
                    let rKey = null
                    if (t.left) {
                        lKey = t.left.getKey()
                    }
                    if (t.right) {
                        rKey = t.right.getKey()
                    }
                    let thisKey = t.getKey()
                    if (lKey < thisKey && rKey === null) {
                        toReturn = true
                    }
                    else if (rKey > thisKey && lKey === null) {
                        toReturn = true
                    }
                    else if (lKey < thisKey && rKey > thisKey) {
                        toReturn = true
                    }
                    else {
                        toReturn = false

                    }
                }
                else {
                    toReturn = false;
                }
            }
        }
        catch (error) {
            toReturn = false
        }
        finally {
            return toReturn
        }
    }
    let bst1 = new BST
    bst1.insert(3, true)
    bst1.insert(1, true)
    bst1.insert(4, true)
    bst1.insert(6, true)
    bst1.insert(9, true)
    bst1.insert(2, true)
    bst1.insert(5, true)
    bst1.insert(7, true)
    console.log(isitBST(bst1))
}

function main7() {

    function largNode(bst) {
        let node = bst;
        let j = true
        while (j) {
            if (node.right !== null) {
                node = node.right
            }
            else {
                j = false
            }
        }
        return node
    }

    function thirdLarg(bst) {
        let workingbst = bst;
        let firstLargNode = largNode(workingbst)
        workingbst.remove(firstLargNode.getKey())
        let secondLargNode = largNode(workingbst)
        workingbst.remove(secondLargNode.getKey())
        let thirdLargNode = largNode(workingbst)
        return thirdLargNode.getKey()


    }

    let bst1 = new BST
    bst1.insert(3, true)
    bst1.insert(1, true)
    bst1.insert(4, true)
    bst1.insert(6, true)
    bst1.insert(9, true)
    bst1.insert(2, true)
    bst1.insert(5, true)
    bst1.insert(7, true)
    console.log(thirdLarg(bst1))
}

function main8() {
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

    function balanced(bst) {
        if (bst.left !== null && bst.right !== null) {
            if (balanced(bst.left) && balanced(bst.right)) {
                let x = findHeightOf(bst.left) - findHeightOf(bst.right)
                if (x === -1 || x === 0 || x === 1) {
                    return true
                }
            }
            else {
                return false
            }
        }
        else if (bst.left !== null && bst.right === null) {
            let ll = bst.left.left
            let lr = bst.left.right
            if (ll === null && lr === null) {
                return true
            }
        }
        else if (bst.left === null && bst.right !== null) {
            let rl = bst.right.left
            let rr = bst.right.right
            if (rl === null && rr === null) {
                return true
            }
        }
        else if (bst.left === null && bst.right === null) {
            return true;
        }
        else {
            throw new Error("This line of code should never trigger. You broke something")
        }
    }


    let bst1 = new BST
    bst1.insert(3, true)
    bst1.insert(1, true)
    bst1.insert(4, true)
    bst1.insert(6, true)
    bst1.insert(9, true)
    bst1.insert(2, true)
    bst1.insert(5, true)
    bst1.insert(7, true)

    let bst2 = new BST
    bst2.insert(4)
    bst2.insert(2)
    bst2.insert(6)
    bst2.insert(1)
    bst2.insert(3)
    bst2.insert(5)
    bst2.insert(7)

    let bst3 = new BST
    bst2.insert(4)
    bst2.insert(2)
    bst2.insert(6)
    bst2.insert(1)
    bst2.insert(7)

    console.log(balanced(bst1)) //expect false
    console.log(balanced(bst2)) //expect true
    console.log(balanced(bst3)) //expect true
}

function main9() { //WIP
    function sameKeys(arr1, arr2) {
        let sortedArr1 = arr1.sort()
        let sortedArr2 = arr2.sort()
        if (sortedArr1 === sortedArr2) {
            return true
        }
        else {
            return false
        }
    }

    function _areNoDups(arr) {
        if (arr[0] === arr[1]) {
            return false
        }
        else {
            let areNoDups = true
            for (let i = 1; i < arr.length; i++) {
                let prev = arr[i - 1]
                let curr = arr[i]
                if (prev === curr) {
                    areNoDups = false;
                    return false
                }
            }
            return areNoDups
        }
    }

    function _recursiveSameBST(arr1, arr2) {
        if (arr1[0] === arr2[0]) { //are the roots the same?
            if (arr1.length === 1 && arr2.length === 1) { //are there any children? if no...
                return true
            }
            else {
                let lArr1, rArr1, lArr2, rArr2 = null
            }
        }
        else {
            return false
        }
    }

function sameBST(arr1, arr2) {
    if (sameKeys(arr1, arr2)) {
        let sortedArr1 = arr1.sort()
        if (_areNoDups(sortedArr1)) {
            if (_recursiveSameBST(arr1, arr2)) {
                return true
            }
            else {
                return false
            }
        }
        else {
            return false
        }
    }
    else {
        return false
    }
}

}