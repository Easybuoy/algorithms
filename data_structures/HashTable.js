/** Class representing a Hash Table */

class HashTable {
  constructor() {
    this._storage = [];
  }
  /*
   * Inserts a new key-value pair
   * @param {string} key - the key associated with the value
   * @param {*} value - the value to insert
   */
  insert(key, value) {
    this._storage[key] = value;
  }
  /*
   * Deletes a key-value pair
   * @param {string} key - the key associated with the value
   * @return {*} value - the deleted value
   */
  remove(key) {
    const valueToBeDeleted = this._storage[key];
    delete this._storage[key];
    return valueToBeDeleted;
  }
  /*
   * Returns the value associated with a key
   * @param {string} key - the key to search for
   * @return {*} - the value associated with the key
   */
  retrieve(key) {
    return this._storage[key];
  }
  /*
   * Hashes string value into an integer that can be mapped to an array index
   * @param {string} str - the string to be hashed
   * @param {number} n - the size of the storage array
   * @return {number} - an integer between 0 and n
   */
  _hash(str, n) {
    let sum = 0;
    for (let i = 0; i < str.length; i++) sum += str.charCodeAt(i) * 3;

    return sum % n;
  }
}

const hashTable = new HashTable()
hashTable.insert('one', 1)
hashTable.insert('two', 2)
hashTable.insert('three', 3)
hashTable.remove('three')
console.log(hashTable)