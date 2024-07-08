start
middle
end of the list
empty lists


Push:
- make the new node
- get the curr tail value
- set the curr tail next value to the new node
- set the new nodes next = null
- set the tail to the new node


Pop:
- find the node that has a next = to the curr tail
- save the current tail value
- make that node the current tail
- return current tail
