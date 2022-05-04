class Node {
    constructor(data){
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head
    }

    size() {
        let count = 0
        let node = this.head
        while (node){
            count++
            node = node.next
        } 
        return count
    }

    getLast() {
        let lastNode = this.head
        if (lastNode) {
            while (lastNode.next) {
                lastNode = lastNode.next
            }
        }
        return lastNode
    }

    isEmpty() {
        return this.size === 0
    }
}

let nodeA = new Node("A")
let nodeB = new Node("B")
nodeA.next = nodeB

let list = new LinkedList(nodeA)

let nodeC = new Node("C")
nodeB.next = nodeC

console.log(list.size())