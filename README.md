# Linked List
Singly Linked List implemented with JavaScript

## Features
* `append(value)` adds a new node with `value` to the end of the list.
* `prepend(value)` adds a new node with `value` to the start of the list.
* `size()` returns the total number of nodes in the list.
* `head()` returns the value of the first node in the list.
* `tail()` returns the value of last node in the list.
* `at(index)` returns the value of the node at `index`. Raises a `RangeError` if `index` is bigger than `size`.
* `pop()` removes the last node from the list.
* `contains(value)` returns `true` if `value` is in the list.
* `find(value)` returns the index of the node containing `value`, or `null` if not found.
* `toString()` returns string represenation of the list in the following format: ( value ) -> ( value ) -> ( value ) -> null.
* `insertAt(value, index)` inserts a new node with `value` at `index`. Raises a `RangeError` if `index` is bigger than `size`.
* `removeAt(index)` removes the node at `index`. Raises a `RangeError` if `index` is bigger than `size`.
* `clone()` returns a deep copy of the list.