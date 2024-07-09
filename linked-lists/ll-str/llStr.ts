/** IndexError: raised when index not found. */

class IndexError extends Error {
}

/**
 * NodeStr: node for a singly-linked list of string.
 *
 * - val
 * - next: next NodeStr or null
 */

class NodeStr {
  val: string;
  next: NodeStr | null;

  constructor(val: string) {
    this.val = val;
    this.next = null;
  }
}

/**
 * Linked list of numbers.
 */

class LLStr {
  head: NodeStr | null;
  tail: NodeStr | null;
  length: number;

  constructor(vals: string[] = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (const val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val: string): void {

    const newNode = new NodeStr(val);

    //if list is not empty
    if(this.tail !== null){
      this.tail.next = newNode;
    }

    //if list is empty
    if(this.head === null){
      this.head = newNode;
    }

    this.tail = newNode;
    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val: string): void {
    const newNode = new NodeStr(val);

    newNode.next = this.head

    if (this.head === null) this.tail = newNode;

    this.head = newNode;
    this.length++;
  }

  /** pop(): return & remove last item.
   *
   * Throws IndexError on empty list.
   **/

  pop(): string {

    //if empty list
    if(this.head === null){
      throw new IndexError();
    }

    let poppedVal: string = '';

    //if only 1 node in the list
    if(this.head === this.tail){
      poppedVal = this.head.val;

      this.head = null;
      this.tail = null;

    }

    //if more than 1 node in the list
    if(this.tail !== null){
      const currTail = this.tail;

      let currNode: NodeStr | null = this.head;

      while(currNode !== null){

        if(currNode.next === currTail){
          this.tail = currNode;
          this.length--;
          return currTail.val;
        }
        currNode = currNode.next;
      }
       poppedVal =  currTail.val;
    }

    this.length--;
    return poppedVal;
  }

  /** shift(): return & remove first item.
   *
   * Throws IndexError on empty list.
   **/

  shift(): string {

    if (this.head === null) throw new IndexError();

    // first node in list
    const currNode = this.head;

    // if there is only one node in list at the start
    if (currNode.next === null) {
      this.head = null;
      this.tail = null;
    }

    this.head = currNode.next;

    this.length--;
    return currNode.val;
  }

  /** getAt(idx): get val at idx.
   *
   * Throws IndexError if not found.
   **/

  getAt(idx: number): string {
    // if head is 0, traverse the list

    if(idx > this.length - 1 || idx < 0){
      throw new IndexError();
    }

    let count: number = 0;
    let currNode = this.head;

    while (count < idx && currNode !== null) {
      currNode = currNode.next;
      count++;
    }

    // NOTE: safer to assert here because we've defined the bounds earlier
    // COOL: can use the `as` operator to tell TS what the data type will be
    return currNode!.val;
  }

  /** setAt(idx, val): set val at idx to val.
   *
   * Throws IndexError if not found.
   **/

  setAt(idx: number, val: string): void {

    if (idx < 0 || idx > this.length - 1 || (this.head === null && idx > 0)) {
      throw new IndexError();
    }

    let currNode = this.head!;
    for (let currPlace: number = 0; currPlace <= idx; currPlace++) {
      if (currPlace === idx) {
        currNode.val = val;
        break;
      }
      currNode = currNode.next!;
    }
  }

  /** insertAt(idx, val): add node w/val before idx.
   *
   * Throws IndexError if not found.
   **/

  insertAt(idx: number, val: string): void {

    if (idx < 0 || idx > this.length) {
      throw new IndexError();
    }

    const newNode = new NodeStr(val);

    if(this.head === null){
      this.head = newNode;
      this.tail = newNode;
    }

    let currNode = this.head!; // b
    let prevNode = currNode; //a

    let currPlace = 0; // 1

    while(currPlace < idx){ //[a, b]
      console.log({prevNode, currNode, currPlace, idx});
      prevNode = currNode;
      currNode = currNode.next!; //val at index 1
      currPlace++;
      console.log({prevNode, currNode, currPlace});
    }

    if(currPlace === 0){
      this.head = newNode;
    }

    if(currPlace === this.length){
      this.tail = newNode;
    }

    prevNode.next = newNode;
    newNode.next = currNode;
    console.log({newNode});

    this.length++;

  }

  /** removeAt(idx): return & remove item at idx,
   *
   * Throws IndexError if not found.
   **/

  removeAt(idx: number): string {
    return "x";
  }

  /** toArray (useful for tests!) */

  toArray(): string[] {
    const out = [];
    let current = this.head;

    while (current) {
      out.push(current.val);
      current = current.next;
    }

    return out;
  }
}


export {
  IndexError,
  LLStr,
  NodeStr,
};