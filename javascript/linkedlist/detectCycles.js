class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  add(newNode) {
    let node = this.head;
    if (node == null) {
      this.head = newNode;
      return;
    }

    while (node.next) {
      node = node.next;
    }
    node.next = newNode;
  }

  printList() {
    let node = this.head;
    while (node != null) {
      console.log(node.data);
      node = node.next;
    }
  }

  reverseNode() {
    let prev = null;
    let curr = this.head;

    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

let list = new LinkedList();

list.add(new Node(10));
list.add(new Node(20));
list.add(new Node(30));
list.reverseNode();
list.printList();
