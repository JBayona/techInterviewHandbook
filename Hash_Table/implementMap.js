/*
Implement data structure “Map” storing pairs of integers (key, value) and define following member functions in O(1) runtime:
void insert(key, value), void delete(key), int get(key), int getRandomKey().
*/

class Map {
  constructor() {
    this.map = {};
    this.arr = [];
    this.len = 0;
  }
  // In order to have constant time in deletion and Random key, we need to sacrifice memory
  // to keep another data structure with the elements we are inserting
  // So when we remove elements, we just swap between elements
  insert(key, value) {
    const index = this.len;
    this.map[key] = [value, index];
    this.arr[index] = value;
    this.len++;
  }
  get(key) {
    return this.map[key][0]; // Only return the value
  }
  deleteKey(key) {
    // First "remove" from the array by making a swap
    let index = this.map[key][1]; // Get index
    // swap the index with the latest element
    this.arr[index] = this.arr[this.arr.length - 1];
    this.arr[this.arr.length - 1] = this.map[key][0];
    this.len--;

    // Remove from the map
    delete this.map[key];
    // Update the index of the swapped array
    this.map[this.arr[index]][1] = index;
  }
  getRandomKey() {
    // Random number from 0 to this.len exclusive
    let index = Math.floor(Math.random() * this.len);
    return this.arr[index];
  }
}

const map = new Map();
map.insert(1,1);
map.insert(2,2);
map.insert(3,3);
map.insert(4,4);
console.log(map);
console.log(map.getRandomKey());
console.log(map.getRandomKey());
console.log(map.getRandomKey());
map.deleteKey(3);
console.log(map);
console.log(map.getRandomKey());
console.log(map.getRandomKey());
console.log(map.getRandomKey());