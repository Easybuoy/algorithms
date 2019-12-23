function removeKthLinkedListNode(head, k) {
    let currentNode = head
    let length = 1
    while (currentNode.next !== null) {
        length++;
        currentNode = currentNode.next
    }
     
    let newCurrentNode = head

    let diff = length - k
    let newLength = 1
    while (newCurrentNode.next !== null) {
        if (diff == 0) {
            newCurrentNode = newCurrentNode.next
            return newCurrentNode
        }
        if (newLength == diff) {
            newCurrentNode.next = newCurrentNode.next.next
        } else {
            newCurrentNode = newCurrentNode.next
        }
        newLength++;
    }   
    return head
}