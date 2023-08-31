/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.previous = null;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  // printing out value of each node - we set the head to currentNode and then do a while loop over them to log each value and move to the next
  traverse() {
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.val);
      currentNode = currentNode.next;
    }
  }

  // want to find a specific value based on a given arg
  find(val) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.val === val) return true;
      currentNode = currentNode.next;
    }
    return false;
  }


  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.previous = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.previous = null;
      newNode.next = this.head
      this.head.previous = newNode;
      this.head = newNode;
    }
    this.length++;
  }

  /** pop(): return & remove last item. */
  pop() {
    // error if empty list - should check first!
    if(!this.head) {
      throw new Error('LinkedList is empty')
    }

    let popValue;

    if(this.head === this.tail){
      popValue = this.head.val;
      this.head = null;
      this.tail = null;
    } else {
      popValue = this.tail.val;
      this.tail = this.tail.previous
      this.tail.next = null;
    }
    this.length--;
    console.log(popValue)
    return popValue;
  }

  /** shift(): return & remove first item. */

  shift() {
    if(!this.head) {
      throw new Error('LinkedList is empty')
    }

    let shiftValue;

    if (this.head === this.tail) {
      shiftValue = this.head.val;
      this.head = null;
      this.tail = null;
    } else {
      shiftValue = this.head.val;
      this.head = this.head.next;
      this.head.previous = null;
    }
    this.length--;
    console.log(shiftValue);
    return shiftValue;
  }

  /** getAt(idx): get val at idx. */
  getAt(idx) {
    if (idx < 0 || idx >= this.length) {
      throw new Error("Index Invalid");
    }

    let getValue;

    if(idx === 0) {
      getValue = this.head;
      
    } else {
      let previousNode = null;
      let currentNode = this.head;
      let currentIndex = 0;

      while(currentIndex < idx) {
        previousNode = currentNode;
        currentNode = currentNode.next;
        currentIndex++;
      }
      getValue = currentNode;
    }

    console.log(getValue.val)
    return getValue.val
  
  }

  /** setAt(idx, val): set val at idx to val */
  setAt(idx, val) {
    let updatedVal = val;

    if(idx < 0 || idx >= this.length) {
      throw new Error('Invalid Index')
    } else {
      let previousNode = null;
      let currentNode = this.head;
      let currentIndex = 0;
    

      while (currentIndex < idx) {
        previousNode = currentNode;
        currentNode = currentNode.next;
        currentIndex++;
      }
      currentNode.val = updatedVal;
    }
    console.log(updatedVal)
    return updatedVal
  }

  /** insertAt(idx, val): add node w/val before idx. */
  insertAt(idx, val) {
    const newNode = new Node(val);

    // throw an error if the index is less than 0 or greater than list size
    if(idx < 0 || idx >= this.length) {
      throw new Error('Please enter a valid index')
    } else {
      // if there is not a head - this newNode is both head and tail
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        let previousNode = null 
        let currentNode = this.head;
        let currentIndex = 0;

        while(currentIndex < idx) {
          previousNode = currentNode;
          currentNode = currentNode.next;
          currentIndex++;
        }
        newNode.next = currentNode;
        previousNode.next = newNode;
      }
      this.length++;
    }
  }

  /** removeAt(idx): return & remove item at idx, */
  removeAt(idx) {
    if (idx < 0 || idx >= this.length) {
      throw new Error("Index Invalid");
    }

    let removeNode;
    if(idx === 0) {
      removeNode = this.head;
      this.head = this.head.next
    } else {
      let previousNode = null;
      let currentNode = this.head;
      let currentIndex = 0;

      while(currentIndex < idx) {
        previousNode = currentNode;
        currentNode = currentNode.next;
        currentIndex++;
      }
      removeNode = currentNode;
      previousNode.next = currentNode.next;
    }
    this.length--;
    console.log(removeNode.val)
    return removeNode.val
  }

  /** average(): return an average of all values in the list */
  average() {
    if(!this.head) {
      return 0;
    }

    let count = 0;
    let sum = 0;
    let average = 0.0;
    let current = this.head

    while (current !== null) {
      count++;
      sum += current.val;
      current = current.next;
    }
    average = sum/count;
    return average;
  }
}

// LL of 2 nodes
const morningRoutine = new LinkedList(vals=['Stretch','make bed']);

// LL of 3 nodes
morningRoutine.push('brush teeth');
console.log('push()')
console.log(morningRoutine.head);
console.log(morningRoutine.head.next);
console.log(morningRoutine.head.next.next);
console.log(morningRoutine.head.next.next.next);

//LL of 4 nodes
morningRoutine.unshift("Turn off alarm");
console.log("unshift()");
console.log(morningRoutine.head);
console.log(morningRoutine.head.next);
console.log(morningRoutine.head.next.next);
console.log(morningRoutine.head.next.next.next);
console.log(morningRoutine.head.next.next.next.next);

// //return last node
// morningRoutine.pop();
// console.log("pop()");
// console.log(morningRoutine.head)
// console.log(morningRoutine.head.next);
// console.log(morningRoutine.head.next.next);
// console.log(morningRoutine.head.next.next.next);

// //return first node
// morningRoutine.shift();
// console.log('shift()');
// console.log(morningRoutine.head)
// console.log(morningRoutine.head.next);
// console.log(morningRoutine.head.next.next);

// // get a value at a given index
// morningRoutine.getAt(3)
// console.log('getAt()');
// console.log(morningRoutine.head);
// console.log(morningRoutine.head.next);
// console.log(morningRoutine.head.next.next);
// console.log(morningRoutine.head.next.next.next);
// console.log(morningRoutine.head.next.next.next.next);

// // set a value at a given index
// morningRoutine.setAt(2, "pick up laundry")
// console.log('setAt()')
// console.log(morningRoutine.head);
// console.log(morningRoutine.head.next);
// console.log(morningRoutine.head.next.next);
// console.log(morningRoutine.head.next.next.next);
// console.log(morningRoutine.head.next.next.next.next);


// // insert val at right before a specified index
// console.log('insertAt()')
// morningRoutine.insertAt(2, 'shower')
// console.log(morningRoutine.head);
// console.log(morningRoutine.head.next);
// console.log(morningRoutine.head.next.next);
// console.log(morningRoutine.head.next.next.next);
// console.log(morningRoutine.head.next.next.next.next);
// console.log(morningRoutine.head.next.next.next.next.next);

// // remove value at given index
// console.log('removeAt()')
// morningRoutine.removeAt(2)
// console.log(morningRoutine.head);
// console.log(morningRoutine.head.next);
// console.log(morningRoutine.head.next.next);
// console.log(morningRoutine.head.next.next.next);

// console.log('average()')
// const getAverage = new LinkedList((vals = [46,4,27,9, 100,6,1,13]));
// console.log(getAverage)
// console.log(getAverage.average())


// module.exports = LinkedList;
