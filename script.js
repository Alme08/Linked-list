function Node(value = null, nextNode = null) {
  this.value = value;
  this.nextNode = nextNode;
}

function LinkedList(head = null) {
  return {
    head,
    append(value) {
      if (head === null) this.head = new Node(value);
      else {
        let tmp = this.head;
        while (tmp.nextNode != null) tmp = tmp.nextNode;

        tmp.nextNode = new Node(value);
      }
    },
    prepend(value) {
      this.head = new Node(value, this.head);
    },
    size() {
      let tmp = this.head;
      let count = 0;
      while (tmp != null) {
        count += 1;
        tmp = tmp.nextNode;
      }
      return count;
    },
    headList() {
      return this.head;
    },
    tail() {
      let tmp = this.head;
      while (tmp.nextNode != null) tmp = tmp.nextNode;
      return tmp;
    },
    at(index) {
      let tmp = this.head;
      for (let i = 1; i < index; i += 1) {
        tmp = tmp.nextNode;
      }
      return tmp;
    },
    pop() {
      let cur = this.head;
      let prev = null;
      while (cur.nextNode != null) {
        prev = cur;
        cur = cur.nextNode;
      }
      prev.nextNode = null;
    },
    contains(value) {
      let tmp = this.head;
      while (tmp != null) {
        if (tmp.value === value) return true;
        tmp = tmp.nextNode;
      }
      return false;
    },
    find(value) {
      let tmp = this.head;
      let index = 1;
      while (tmp != null) {
        if (tmp.value === value) return index;
        tmp = tmp.nextNode;
        index += 1;
      }
      return null;
    },
    toString() {
      if (this.head === null) return 'null';
      let tmp = this.head;
      let str = '';
      while (tmp != null) {
        str += ` ( ${tmp.value} ) ->`;
        tmp = tmp.nextNode;
      }
      str += ' null';
      return str;
    },
    insertAt(value, index) {
      if (index === 1) {
        this.head = new Node(value, this.head);
        return;
      }
      let cur = this.head;
      let prev = null;
      let i = 1;
      while (cur != null && index > i) {
        prev = cur;
        cur = cur.nextNode;
        i += 1;
      }
      prev.nextNode = new Node(value, cur);
    },
    removeAt(index) {
      if (this.head === null) return 'cannot delete';
      if (index === 1) {
        this.head = this.head.nextNode;
        return null;
      }
      let cur = this.head;
      let prev = null;
      for (let i = 1; i < index && cur != null; i += 1) {
        prev = cur;
        cur = cur.nextNode;
      }
      if (cur === null) return 'cannot delete';
      prev.nextNode = cur.nextNode;
      return null;
    },
  };
}

const node1 = new Node(5);
const node2 = new Node(9);
node1.nextNode = node2;

const list = new LinkedList(node1);
// list.append(10);
list.prepend(10);
// list.pop();
// list.insertAt(3, 2);
// list.removeAt(1);

console.log(list.toString());
