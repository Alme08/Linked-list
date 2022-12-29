# Linked-list

A linked list is a linear collection of data elements called nodes that “point” to the next node by means of a pointer.

Each node holds a single element of data and a link or pointer to the next node in the list.

A head node is the first node in the list, a tail node is the last node in the list. Below is a basic representation of a linked list:

[ NODE(head) ] -> [ NODE ] -> [ NODE(tail) ] -> null

In this assignment, I learn to create a linked list with functions that allow me to:

- append(value) adds a new node containing value to the end of the list
- prepend(value) adds a new node containing value to the start of the list
- size returns the total number of nodes in the list
- head returns the first node in the list
- tail returns the last node in the list
- at(index) returns the node at the given index
- pop removes the last element from the list
- contains(value) returns true if the passed in value is in the list and otherwise returns false.
- find(value) returns the index of the node containing value, or null if not found.
- toString represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
- insertAt(value, index) that inserts a new node with the provided value at the given index.
- removeAt(index) that removes the node at the given index.
