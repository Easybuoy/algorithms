/** Class representing a Queue.
 * @constructor
 */

class Queue {
  constructor() {
    this._storage = {};
    this._length = 0;
    this._headIndex = 0;
  }
  /*
   * Enqueues a new value at the end of the queue
   * @param {*} value the value to enqueue
   */
  enqueue(value) {
    const lastIndex = this._length + this._headIndex;
    this._storage[lastIndex] = value;
    this._length++;
  }

  /*
   * Dequeues the value from the beginning of the queue and returns it
   * @return {*} the first and oldest value in the queue
   */
  dequeue() {
    if (this._length <= 0) {
      throw new Error("Stack is empty");
      return;
    }

    const firstItem = this._storage[this._headIndex];
    delete this._storage[this._headIndex];
    this._length--;
    this._headIndex++;
    return firstItem;
  }
  /*
   * Returns the value at the beginning of the queue without removing it from the queue
   * @return {*} the first and oldest value in the queue
   */
  peek() {
    if (this._length > 0) {
        return this._storage[this._headIndex ];
      }
  }
}

const queuue = new Queue();

queuue.enqueue("one");
queuue.enqueue("two");
console.log(queuue.dequeue());
console.log(queuue.dequeue());
queuue.enqueue("three");
console.log(queuue.peek())
console.log(queuue);
