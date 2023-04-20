/*
const nemo = ['nemo']
const largeArray = new Array(100000).fill('nemo')

const findNemo = array => {
  let t0 = performance.now()
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') console.log('Found Nemo!')
  }
  let t1 = performance.now()
  console.log(`I found Nemo in ${t1 - t0} ms`)
}

// findNemo(largeArray) // O(n) -- 'O of n' or 'linear time'

const leaves = [0, 1, 2, 3, 4, 5]
const printLeaves = array => console.log(array[0])
printLeaves(leaves) // O(1) -- 'O of 1' or 'constant time'

// What is the Big O of the below function? (Hint, you may want to go line by line)
function anotherFunChallenge(input) {
  let a = 5 // 1
  let b = 10 // 1
  let c = 50 // 1

  for (let i = 0; i < input; i++) {
    let x = i + 1 // n
    let y = i + 2 // n
    let z = i + 3 // n
  }

  for (let j = 0; j < input; j++) {
    let p = j * 2 // n
    let q = j * 2 // n
  }

  let whoAmI = "I don't know" // 1
}
// 4 + 5n

const boxes = ['a', 'b', 'c', 'd', 'e']

const printPairs = array => {
  array.forEach(el1 => {
    array.forEach(el2 => {
      console.log(el1, el2)
    })
  })
}
printPairs(boxes)
// O(n*n) => O(n^2)

function printAllNumbersThenAllPairSums(numbers) {
  console.log('these are the numbers:')
  numbers.forEach(function (number) {
    console.log(number)
  })

  console.log('and these are their sums:')
  numbers.forEach(function (firstNumber) {
    numbers.forEach(function (secondNumber) {
      console.log(firstNumber + secondNumber)
    })
  })
}

printAllNumbersThenAllPairSums([1, 2, 3, 4, 5]) // O(n + n^2) => O(n^2)

const array1 = ['a', 'b', 'c', 'x']
const array2 = ['z', 'y', 'x']

// const matchOrNot = (arr1, arr2) => {
//   array1.forEach(letter1 =>
//     array2.forEach(letter2 => {
//       if (letter1 === letter2) console.log(true)
//     })
//   )
//   console.log(false)
// }
// matchOrNot(array1, array2)

const matchOrNot = (collection1, collection2) => {
  for (let i = 0; i < collection1.length; i++) {
    for (let j = 0; j < collection2.length; j++) {
      if (collection1[i] === collection2[j]) {
        console.log('true')
        return true
      }
    }
  }
  console.log('false')
  return false
}

// O(a*b)
matchOrNot(array1, array2)

const array1 = ['a', 'b', 'c', 'x']
const array2 = ['z', 'y', 'x']

const matchOrNot = (arr1, arr2) => {
  // Create an object with array1 keys and true values
  let obj = {}
  for (let i = 0; i < arr1.length; i++) {
    if (!obj[arr1[i]]) {
      const item = arr1[i]
      obj[item] = true
    }
  }
  // Check if the the object has any value equal to array2 elements
  for (let j = 0; j < arr2.length; j++) {
    if (obj[arr2[j]]) {
      console.log('true')
      return true
    }
  }
  console.log('false')
  return false
}

// O(a+b)

matchOrNot(array1, array2)

const matchOrNot2 = (arr1, arr2) => {
  return arr1.some(item => arr2.includes(item))
}

console.log(matchOrNot2(array1, array2))

const string = 'Hi My name is Eduard'

const reverseString1 = str => str.split('').reverse().join('')

const reverseString2 = str => {
  if (!str || str.length <= 1 || typeof str != 'string') return 'Invalid input'

  let newString = ''
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i]
  }
  return newString
}

console.log(reverseString1(string))
console.log(reverseString2(string))

// const mergeSortedArrays = (arr1, arr2) => {
//   if (arr1.length === 0) return arr2
//   if (arr2.length === 0) return arr1
//   if (Array.isArray(arr1) && Array.isArray(arr2))
//     return arr1.concat(arr2).sort((a, b) => a - b)
// }

const mergeSortedArrays = (arr1, arr2) => {
  const mergedArray = []
  let arr1FirstItem = arr1[0]
  let arr2FirstItem = arr2[0]
  let i = 1
  let j = 1

  if (arr1.length === 0) return arr2
  if (arr2.length === 0) return arr1

  while (arr1FirstItem || arr2FirstItem) {
    if (arr2FirstItem === undefined || arr1FirstItem < arr2FirstItem) {
      mergedArray.push(arr1FirstItem)
      arr1FirstItem = arr1[i]
      i++
    } else {
      mergedArray.push(arr2FirstItem)
      arr2FirstItem = arr2[j]
      j++
    }
  }
  return mergedArray
}

console.log(mergeSortedArrays([0, 3, 4, 31], [3, 4, 6, 30]))

class HashTable {
  constructor(size){
    this.data = new Array(size);
  }

  set (key, value) {
    const setKey = key
    const setValue = value
  }

  get (key) {
    return value
  }

  _hash(key) {
    let hash = 0;
    for (let i =0; i < key.length; i++){
        hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000)
myHashTable.get('grapes')
myHashTable.set('apples', 9)
myHashTable.get('apples')

//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

// function firstRecurringCharacter(input) {
//   for (let i = 0; i < input.length; i++) {
//     for (let j = i + 1; j < input.length; j++) {
//       if (input[i] === input[j]) {
//         return `found ${input[i]}`
//       }
//     }
//   }
// }

function firstRecurringCharacter2(input) {
  let map = {}
  for (let i = 0; i < input.length; i++) {
    if (map[input[i]] !== undefined) {
      return input[i]
    } else {
      map[input[i]] = true
    }
  }
  return undefined
}

console.log(firstRecurringCharacter2([2,1,1,2,3,5,1,2,4]))

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2

// Create a singly linked list
const myLinkedListExample = {
  head: {
    value: 10,
    next: {
      value: 15,
      next: {
        value: 20,
        next: null,
      },
    },
  },
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    }
    this.tail = this.head
    this.length = 1
  }
  //
  traverseToIndex(index) {
    let counter = 0
    let currentNode = this.head
    while (counter !== index) {
      currentNode = currentNode.next
      counter++
    }
    return currentNode
  }
  //
  append(value) {
    const newNode = {
      value: value,
      next: null,
    }
    this.tail.next = newNode
    this.tail = newNode
    this.length++
    return this
  }
  //
  insert(index, value) {
    if (index >= this.length) {
      return this.append(value)
    }
    const newNode = {
      value: value,
      next: null,
    }
    const leaderNode = this.traverseToIndex(index - 1)
    const holdingPointer = leaderNode.next
    leaderNode.next = newNode
    newNode.next = holdingPointer
    this.length++
    return this
  }
  //
  prepend(value) {
    const newNode = {
      value: value,
      next: null,
    }
    newNode.next = this.head
    this.head = newNode
    this.length++
    return this
  }
  //
  remove(index) {
    const leaderNode = this.traverseToIndex(index - 1)
    const unwantedNode = leaderNode.next
    leaderNode.next = unwantedNode.next
    this.length--
    return this
  }
  //
  print() {
    const array = []
    let currentNode = this.head
    while (currentNode !== null) {
      array.push(currentNode.value)
      currentNode = currentNode.next
    }
    return array
  }
  //
  reverse() {
    let first = this.head
    this.tail = this.head
    let second = first.next
    while (second) {
      let temp = second.next
      second.next = first
      first = second
      second = temp
    }
    this.head.next = null
    this.head = first
    return this
  }
}

const myLinkedList = new LinkedList(10)
myLinkedList.append(15)
myLinkedList.append(20)
myLinkedList.prepend(5)
myLinkedList.insert(200, 12)
myLinkedList.insert(2, 39)
myLinkedList.remove(2)
myLinkedList.remove(2)
myLinkedList.reverse()
console.log(myLinkedList.print())
console.log(myLinkedList)

// Create a doubly linked list
const myLinkedListExample = {
  head: {
    value: 10,
    next: {
      value: 15,
      next: {
        value: 20,
        next: null,
      },
    },
  },
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null
    }
    this.tail = this.head
    this.length = 1
  }
  //
  traverseToIndex(index) {
    let counter = 0
    let currentNode = this.head
    while (counter !== index) {
      currentNode = currentNode.next
      counter++
    }
    return currentNode
  }
//
  append(value) {
    const newNode = {
      value: value,
      next: null,
      prev: null
    }
newNode.prev = this.tail
    this.tail.next = newNode
    this.tail = newNode
    this.length++
    return this
  }
//
  insert(index, value) {
    if (index >= this.length) {
      return this.append(value)
    }
    const newNode = {
      value: value,
      next: null,
      prev: null
    }
    const leaderNode = this.traverseToIndex(index - 1)
    const followingNode = leaderNode.next
    leaderNode.next = newNode
    newNode.prev = leaderNode
    newNode.next = followingNode
    followingNode.prev = newNode
    this.length++
    return this
  }
//
  prepend(value) {
    const newNode = {
      value: value,
      next: null,
      prev: null
    }
    newNode.next = this.head
    this.head.prev = newNode
    this.head = newNode
    this.length++
    return this
  }
//
  remove(index) {
    const leaderNode = this.traverseToIndex(index - 1)
    const unwantedNode = leaderNode.next
    leaderNode.next = unwantedNode.next
    const followingNode = unwantedNode.next
    followingNode.prev = leaderNode
    this.length--
    return this
  }
//
  print() {
    const array = []
    let currentNode = this.head
    while (currentNode !== null) {
      array.push(currentNode.value)
      currentNode = currentNode.next
    }
    return array
  }
}

const myLinkedList = new LinkedList(10)
myLinkedList.append(15)
myLinkedList.append(20)
myLinkedList.prepend(5)
myLinkedList.insert(2, 39)
myLinkedList.remove(2)
console.log(myLinkedList.print())
console.log(myLinkedList)

// Stacked list based on linked list
class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class StackBasedOnLinkedList {
  constructor() {
    this.top = null
    this.bottom = null
    this.length = 0
  }

  peek() {
    return this.top
  }

  push(value) {
    const newNode = new Node(value)
    if (this.length === 0) {
      this.top = newNode
      this.bottom = newNode
    } else {
      const holdingPointer = this.top
      this.top = newNode
      this.top.next = holdingPointer
    }
    this.length++
    return this
  }

  pop() {
    if (!this.top) {
      return null
    }
    if (this.top === this.bottom) {
      this.bottom = null
    }
    this.top = this.top.next
    this.length--
    return this
  }
}

const myStackBasedOnLinkedList = new StackBasedOnLinkedList()
myStackBasedOnLinkedList.push('google')
myStackBasedOnLinkedList.push('youtube')
myStackBasedOnLinkedList.push('udemy')
console.log(myStackBasedOnLinkedList.pop())
console.log(myStackBasedOnLinkedList.peek())

// Stacked list based on array
class StackBasedOnArray {
  constructor() {
    this.array = []
    }

  peek() {
    return this.array[this.array.length-1]
  }

  push(value) {
    this.array.push(value)
    return this
  }

  pop() {
    this.array.pop()
    return this
  }
}

const myStackBasedOnArray = new StackBasedOnArray()
myStackBasedOnArray.push('google')
myStackBasedOnArray.push('youtube')
myStackBasedOnArray.push('udemy')
console.log(myStackBasedOnArray.pop())
console.log(myStackBasedOnArray.peek())

// Queue list
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(){
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first
  }

  enqueue(value){
    const newNode = new Node(value)
    if (this.length === 0) {
      this.first = newNode
      this.last = newNode
    } else {
      this.last.next = newNode
      this.last = newNode
    }
    this.length++
    return this
  }

  dequeue(){
    if (!this.first) {
      return null
    }
    if (this.first === this.last) {
      this.last = null
    }
    this.first = this.first.next
    this.length--
  }
}

const myQueue = new Queue();

myQueue.enqueue('joy')
myQueue.enqueue('matt')
myQueue.enqueue('pavel')
myQueue.enqueue('samir')
myQueue.dequeue()
myQueue.dequeue()
myQueue.dequeue()
myQueue.dequeue()
console.log(myQueue)

// Queue list based on stack
class QueueBasedOnStackList {
  constructor() {
    this.array = []
    }

  peek() {
    return this.array[0]
  }

  queue(value) {
    this.array.push(value)
    return this
  }

  dequeue() {
    this.array.shift()
    return this
  }
}

const myQueueBasedOnStackList = new QueueBasedOnStackList()
myQueueBasedOnStackList.queue('joy')
myQueueBasedOnStackList.queue('matt')
myQueueBasedOnStackList.queue('pavel')
myQueueBasedOnStackList.queue('samir')
myQueueBasedOnStackList.dequeue()
console.log(myQueueBasedOnStackList.peek())
console.log(myQueueBasedOnStackList)

class CrazyQueue {
  constructor() {
    this.first = []
    this.last = []
  }

  enqueue(value) {
    const length = this.first.length
    for (let i = 0; i < length; i++) {
      this.last.push(this.first.pop())
    }
    this.last.push(value)
    return this
  }

  dequeue() {
    const length = this.last.length
    for (let i = 0; i < length; i++) {
      this.first.push(this.last.pop())
    }
    this.first.pop()
    return this
  }

  peek() {
    if (this.last.length > 0) {
      return this.last[0]
    }
    return this.first[this.first.length - 1]
  }
}

const myQueue = new CrazyQueue()
myQueue.enqueue('Joy')
myQueue.enqueue('Matt')
myQueue.enqueue('Pavel')
console.log(myQueue.peek())
console.log(myQueue)
myQueue.dequeue()
myQueue.dequeue()
// myQueue.dequeue()
myQueue.peek()

// Binary tree
class Node {
  constructor(value) {
    this.left = null
    this.right = null
    this.value = value
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }
  insert(value) {
    const newNode = new Node(value)
    if (this.root === null) {
      this.root = newNode
    } else {
      let currentNode = this.root
      while (true) {
        if (value < currentNode.value) {
          //Left
          if (!currentNode.left) {
            currentNode.left = newNode
            return this
          }
          currentNode = currentNode.left
        } else {
          //Right
          if (!currentNode.right) {
            currentNode.right = newNode
            return this
          }
          currentNode = currentNode.right
        }
      }
    }
  }
  lookup(value) {
    if (!this.root) {
      return false
    }
    let currentNode = this.root
    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left
      } else if (value > currentNode.value) {
        currentNode = currentNode.right
      } else if (currentNode.value === value) {
        return currentNode
      }
    }
    return null
  }
  remove(value) {
    if (!this.root) {
      return false
    }
    let currentNode = this.root
    let parentNode = null
    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode
        currentNode = currentNode.left
      } else if (value > currentNode.value) {
        parentNode = currentNode
        currentNode = currentNode.right
      } else if (currentNode.value === value) {
        //We have a match, get to work!

        //Option 1: No right child:
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left
          } else {
            //if parent > current value, make current left child a child of parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left

              //if parent < current value, make left child a right child of parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left
            }
          }

          //Option 2: Right child which doesnt have a left child
        } else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left
          if (parentNode === null) {
            this.root = currentNode.right
          } else {
            //if parent > current, make right child of the left the parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right

              //if parent < current, make right child a right child of the parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right
            }
          }

          //Option 3: Right child that has a left child
        } else {
          //find the Right child's left most child
          let leftmost = currentNode.right.left
          let leftmostParent = currentNode.right
          while (leftmost.left !== null) {
            leftmostParent = leftmost
            leftmost = leftmost.left
          }

          //Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right
          leftmost.left = currentNode.left
          leftmost.right = currentNode.right

          if (parentNode === null) {
            this.root = leftmost
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftmost
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = leftmost
            }
          }
        }
        return true
      }
    }
  }
}

const tree = new BinarySearchTree()
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
tree.remove(170)
console.log(tree)

//     9
//  4     20
//1  6  15  170

// Undirected, unweighted, cyclic graph
class Graph {
  constructor() {
    this.numberOfNodes = 0
    this.adjacentList = {}
  }
  //
  addVertex(node) {
    this.adjacentList[node] = []
    this.numberOfNodes++
  }
  //
  addEdge(node1, node2) {
    this.adjacentList[node1].push(node2)
    this.adjacentList[node2].push(node1)
  }
  //
  showConnections() {
    const allNodes = Object.keys(this.adjacentList)
    for (let node of allNodes) {
      let nodeConnections = this.adjacentList[node]
      let connections = ''
      let vertex
      for (vertex of nodeConnections) {
        connections += vertex + ' '
      }
      console.log(node + '-->' + connections)
    }
  }
}

const myGraph = new Graph()
myGraph.addVertex('0')
myGraph.addVertex('1')
myGraph.addVertex('2')
myGraph.addVertex('3')
myGraph.addVertex('4')
myGraph.addVertex('5')
myGraph.addVertex('6')
myGraph.addEdge('3', '1')
myGraph.addEdge('3', '4')
myGraph.addEdge('4', '2')
myGraph.addEdge('4', '5')
myGraph.addEdge('1', '2')
myGraph.addEdge('1', '0')
myGraph.addEdge('0', '2')
myGraph.addEdge('6', '5')

myGraph.showConnections()
//Answer:
// 0-->1 2
// 1-->3 2 0
// 2-->4 1 0
// 3-->1 4
// 4-->3 2 5
// 5-->4 6
// 6-->5

// Basic recursion function
let counter = 0
function inception() {
  if (counter > 3) {
    return 'done'
  }
  counter++
  return inception()
}
console.log(inception())

function findFactorialRecursive(number) {
  if (number <= 2) {
    return number
  }
  return number * findFactorialRecursive(number - 1)
}
console.log(findFactorialRecursive(5))

function findFactorialIterative(number) {
  let answer = 1
  if (number === 2) {
    answer = 2
    return answer
  }
  for (let index = 2; index <= number; index++) {
    answer = answer * index
  }
  return answer
}

console.log(findFactorialIterative(5))

function fibonacciRecursive(number) {
  if (number < 2) {
    return number
  }
  return fibonacciRecursive(number - 1) + fibonacciRecursive(number - 2)
  // answer = 0, 1, 1, 2, 3, 5, 8
}
console.log(fibonacciRecursive(7))

function fibonacciIterative(number) {
  let array = [0, 1]
  for (let index = 2; index < number + 1; index++) {
    array.push(array[index - 1] + array[index - 2])
  }
  return array[number]
}
console.log(fibonacciIterative(8))

//Implement a function that reverses a string using iteration...and then recursion!
function reverseStringIterative(str) {
  let newString = ''
  for (let index = str.length - 1; index >= 0; index--) {
    newString += str[index]
  }
  return newString
}

// console.log(reverseStringIterative('yoyo mastery'))
//should return: 'yretsam oyoy'

function reverseStringRecursive(str) {
  // let lastLetter = str[str.length - 1]
  // if ((lastLetter = 0)) return
  return reverseStringRecursive(str[str.length--])
}

// console.log(reverseStringRecursive('yoyo mastery'))

function reverseString(str) {
  // Base case: if the string is empty or has only one character, return the string
  if (str.length < 2) {
    return str
  }
  // Recursive case: reverse the substring starting from the second character and concatenate the first character to it
  return reverseString(str.slice(1)) + str[0]
}

console.log(reverseString('yoyo mastery'))

const items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic', value: 13 },
  { name: 'Zeros', value: 37 },
]

// sort by value
// console.log(items.sort((a, b) => a.value - b.value))

// sort by name
console.log(
  items.sort((a, b) => {
    const nameA = a.name.toUpperCase() // ignore upper and lowercase
    const nameB = b.name.toUpperCase() // ignore upper and lowercase
    if (nameA < nameB) {
      return -1
    }
    if (nameA > nameB) {
      return 1
    }

    // names must be equal
    return 0
  })
)

// Bubble sort algorithm - compares two consecutive items and puts (bubbles) the highr one after the smaller one
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = temp
      }
    }
  }
}

bubbleSort(numbers)
console.log(numbers)

// Selection sort - it loops through all items, finds the smaller one each time and moves it to the start of the array
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]

function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    // Set current index as minimum
    let minIndex = i
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        // Update minimum if current is lower that what we had previously
        minIndex = j
      }
    }
    // Update the current and minimum
    // let temp = array[i]
    // array[i] = array[minIndex]
    // array[minIndex] = temp
    // Same thing as above, but easier
    ;[array[i], array[minIndex]] = [array[minIndex], array[i]]
  }
  return array
}

selectionSort(numbers)
console.log(numbers)

// Insertion sort
const numbers = [99, 6, 44, 1, 5, 63, 87, 283, 4, 0]

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    for (let j = i; j > 0; j--) {
      if (array[j] < array[j - 1]) {
        ;[array[j], array[j - 1]] = [array[j - 1], array[j]]
      } else {
        break
      }
    }
  }
  return array
}

insertionSort(numbers)
console.log(numbers)

// Merge sort
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]

function mergeSort(array) {
  if (array.length === 1) {
    return array
  }
  // Split Array into right and left
  const middleIndex = Math.floor(array.length / 2)
  const left = array.slice(0, middleIndex)
  const right = array.slice(middleIndex)

  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
  const output = []
  let leftIndex = 0
  let rightIndex = 0

  while (leftIndex < left.length && rightIndex < right.length) {
    const leftElement = left[leftIndex]
    const rightElement = right[rightIndex]
    if (leftElement < rightElement) {
      output.push(leftElement)
      leftIndex++
    } else {
      output.push(rightElement)
      rightIndex++
    }
  }
  return [...output, ...left.slice(leftIndex), ...right.slice(rightIndex)]
}

const answer = mergeSort(numbers)
console.log(answer)

// Quick sort
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]

function quickSort(array) {
  if (array.length <= 1) {
    return array
  }

  const pivot = array[array.length - 1]
  const leftArray = []
  const rightArray = []
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < pivot) {
      leftArray.push(array[i])
    } else {
      rightArray.push(array[i])
    }
  }

  return [...quickSort(leftArray), pivot, ...quickSort(rightArray)]
}

console.log(quickSort(numbers))

// Which search algorithm is best for which scenario?
//#1 - Sort 10 schools around your house by distance: insertion
//#2 - eBay sorts listings by the current Bid amount: radix or counting
//#3 - Sport scores on ESPN: quick sort
//#4 - Massive database (can't fit all into memory) needs to sort through past year's user data: merge sort
//#5 - Almost sorted Udemy review data needs to update and add 2 new reviews: insertion
//#6 - Temperature Records for the past 50 years in Canada: quick sort
//#7 - Large user name database needs to be sorted. Data is very random: merge sort
//#8 - You want to teach sorting for the first time: bubble sort

// Is BFS (Breadth First Search/ Traversal) or DFS (Depth First Search/ Traversal) better for below scenarios?
//If you know a solution is not far from the root of the tree: BFS
//If the tree is very deep and solutions are rare: BFS (DFS would take too long)
//If the tree is very wide: DFS (BFS would take too much memory)
//If solutions are frequent but located deep in the tree: DFS
//Determining whether a path exists between two nodes: DFS
//Finding the shortest path: BFS

// Binary tree
class Node {
  constructor(value) {
    this.left = null
    this.right = null
    this.value = value
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }
  insert(value) {
    const newNode = new Node(value)
    if (this.root === null) {
      this.root = newNode
    } else {
      let currentNode = this.root
      while (true) {
        if (value < currentNode.value) {
          //Left
          if (!currentNode.left) {
            currentNode.left = newNode
            return this
          }
          currentNode = currentNode.left
        } else {
          //Right
          if (!currentNode.right) {
            currentNode.right = newNode
            return this
          }
          currentNode = currentNode.right
        }
      }
    }
  }
  lookup(value) {
    if (!this.root) {
      return false
    }
    let currentNode = this.root
    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left
      } else if (value > currentNode.value) {
        currentNode = currentNode.right
      } else if (currentNode.value === value) {
        return currentNode
      }
    }
    return null
  }
  remove(value) {
    if (!this.root) {
      return false
    }
    let currentNode = this.root
    let parentNode = null
    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode
        currentNode = currentNode.left
      } else if (value > currentNode.value) {
        parentNode = currentNode
        currentNode = currentNode.right
      } else if (currentNode.value === value) {
        //We have a match, get to work!

        //Option 1: No right child:
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left
          } else {
            //if parent > current value, make current left child a child of parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left

              //if parent < current value, make left child a right child of parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left
            }
          }

          //Option 2: Right child which doesnt have a left child
        } else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left
          if (parentNode === null) {
            this.root = currentNode.right
          } else {
            //if parent > current, make right child of the left the parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right

              //if parent < current, make right child a right child of the parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right
            }
          }

          //Option 3: Right child that has a left child
        } else {
          //find the Right child's left most child
          let leftmost = currentNode.right.left
          let leftmostParent = currentNode.right
          while (leftmost.left !== null) {
            leftmostParent = leftmost
            leftmost = leftmost.left
          }

          //Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right
          leftmost.left = currentNode.left
          leftmost.right = currentNode.right

          if (parentNode === null) {
            this.root = leftmost
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftmost
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = leftmost
            }
          }
        }
        return true
      }
    }
  }
  breadthFirstSearch() {
    let currentNode = this.root
    let queue = []
    let list = []
    queue.push(currentNode)
    while (queue.length > 0) {
      currentNode = queue.shift()
      list.push(currentNode.value)
      if (currentNode.left) {
        queue.push(currentNode.left)
      }
      if (currentNode.right) {
        queue.push(currentNode.right)
      }
    }
    return list
  }

  depthFirstSearchInOrder() {
    return traverseInOrder(this.root, [])
  }

  depthFirstSearchPreOrder() {
    return traversePreOrder(this.root, [])
  }

  depthFirstSearchPostOrder() {
    return traversePostOrder(this.root, [])
  }
}

function traverseInOrder(node, list) {
  if (node.left) {
    traverseInOrder(node.left, list)
  }
  list.push(node.value)
  if (node.right) {
    traverseInOrder(node.right, list)
  }
  return list
}

function traversePreOrder(node, list) {
  list.push(node.value)
  if (node.left) {
    traversePreOrder(node.left, list)
  }
  if (node.right) {
    traversePreOrder(node.right, list)
  }
  return list
}

function traversePostOrder(node, list) {
  if (node.left) {
    traversePostOrder(node.left, list)
  }
  if (node.right) {
    traversePostOrder(node.right, list)
  }
  list.push(node.value)
  return list
}

//     9
//  4     20
//1  6  15  170

const tree = new BinarySearchTree()
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
console.log(tree.breadthFirstSearch()) //[9, 4, 20, 1, 6, 15, 170]
console.log(tree.depthFirstSearchInOrder()) //[1, 4, 6, 9, 15, 20, 170]
console.log(tree.depthFirstSearchPreOrder()) //[9, 4, 1, 6, 20, 15, 170]
console.log(tree.depthFirstSearchPostOrder()) //[1, 6, 4, 15, 170, 20, 9]
console.log(tree)

// Memoization
function memoizedAddTo100() {
  const cache = {}
  return function (number) {
    if (cache[number]) {
      console.log('memoized')
      return cache[number]
    } else {
      console.log('not memoized')
      cache[number] = number + 100
    }
  }
}
const memoized = memoizedAddTo100()

console.log(memoized(5)) // 'not memoized'
console.log(memoized(5)) // 'memoized'
console.log(memoized(10)) // 'not memoized'

let calculation = 0
const fibonacci = number => {
  calculation++
  if (number < 2) return number
  return fibonacci(number - 1) + fibonacci(number - 2)
}

fibonacci(30)
console.log(calculation)

function fibonacciMaster() {
  let cache = {}
  return function fibonacci(number) {
    if (cache[number]) {
      return cache[number]
    } else {
      if (number < 2) {
        return number
      } else {
        cache[number] = fibonacci(number - 1) + fibonacci(number - 2)
        return cache[number]
      }
    }
  }
}

const fibonacciMemoized = fibonacciMaster()
console.log(fibonacciMemoized(10))

// Exercises
const prices1 = [7, 1, 5, 3, 6, 4]
const prices2 = [7, 6, 4, 3, 1]

const maxProfit = function (prices) {
  const profitArray = []
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      const profit = prices[j] - prices[i]
      profitArray.push(profit)
    }
  }
  const maxProfit = Math.max(...profitArray)
  return maxProfit > 0 ? maxProfit : 0
}
console.log(maxProfit(prices1))

const nums1 = [1, 2, 3, 1]
const nums2 = [2, 7, 9, 3, 1]

function robHouses(nums) {
  let odd = 0
  let even = 0
  for (let i = 0; i < nums.length; i++) {
    if (i % 2 != 0) {
      odd += nums[i]
    } else {
      even += nums[i]
    }
  }
  return odd >= even ? odd : even
}

console.log(robHouses(nums1))

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
}

console.log(twoSum([3, 3], 6))

var isPalindrome = function (x) {
  const array = String(x).split('')
  let reversedX = []
  for (let i = array.length - 1; i >= 0; i--) {
    reversedX.push(array[i])
  }
  return x === Number(reversedX.join('')) ? true : false
}

console.log(isPalindrome(1))

const symbols = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
}

var romanToInt = function (s) {
  let sum = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'I' && s[i + 1] === 'V') {
      sum += 4
      i++
    } else if (s[i] === 'I' && s[i + 1] === 'X') {
      sum += 9
      i++
    } else if (s[i] === 'X' && s[i + 1] === 'L') {
      sum += 40
      i++
    } else if (s[i] === 'X' && s[i + 1] === 'C') {
      sum += 90
      i++
    } else if (s[i] === 'C' && s[i + 1] === 'D') {
      sum += 400
      i++
    } else if (s[i] === 'C' && s[i + 1] === 'M') {
      sum += 900
      i++
    } else {
      sum += symbols[s[i]]
    }
  }
  return sum
}

console.log(romanToInt('MCMXCIV'))

var longestCommonPrefix = function (strs) {
  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[0][i] !== strs[j][i]) {
        return strs[0].slice(0, i)
      }
    }
  }
}

console.log(longestCommonPrefix(['']))

var isValid = function (s) {
  const input = []
  const symbols = {
    '(': ')',
    '[': ']',
    '{': '}',
  }
  for (let i = 0; i <= s.length; i++) {
    if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
      input.push(s[i])
    } else if (s[i] !== symbols[input.pop()]) {
      return false
    }
  }
  return input.length ? false : true
}

console.log(isValid('[()]'))

const list1 = [1, 2, 4]
const list2 = [1, 3, 4]


function ListNode (val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var mergeTwoLists = function(list1, list2) {
    let tempNode = new ListNode(0, null)
    let currentNode = tempNode

    while (list1 && list2) {
      if (list1.val < list2.val) {
        currentNode.next = list1
        list1 = list1.next
      } else {
        currentNode.next = list2
        list2 = list2.next
      }
      currentNode = currentNode.next
    }
    currentNode.next = list1 || list2

    return tempNode.next
};

console.log(mergeTwoLists(list1, list2))

const nums1 = [1, 2, 3]

var permute = function (nums) {
  let result = []

  const dfs = (i, nums) => {
    if (i === nums.length) {
      result.push(nums.slice())
      return
    }
  }

  for (let j = i; j < nums.length; j++) {
    ;[nums[i], nums[j]] = [nums[j], nums[i]]
    dfs(i + 1, nums)[(nums[i], nums[j])] = [nums[j], nums[i]]
  }

  dfs(0, nums)
  return result
}

console.log(permute(nums1))

const haystack = 'youarenotsadbutsad'
const needle = 'sad'

var strStr = function (haystack, needle) {
  for (let i = 0; i < needle.length; i++) {
    // console.log(needle[i])
    for (let j = 0; j < haystack.length; j++) {
      // console.log(haystack[j])
      if (needle[i] === haystack[j]) {
        console.log(needle[i])
        return j
      }
      // else if () {
      //   return -1
      // }
    }
  }
}

console.log(strStr(haystack, needle))

const nums1 = [2, 14, 18, 22, 22]
const nums2 = [1, 2, 3, 4]
const nums3 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]

var containsDuplicate = function (nums) {
    const mySet = new Set(nums)
    return nums.length !== mySet.size ? true : false
}

console.log(containsDuplicate(nums1))

const s1 = 'anagram'
const t1 = 'nagaaram'

var isAnagram = function (s, t) {
  const orderedSString = s.split('').sort().join('')
  const orderedTString = t.split('').sort().join('')

  return orderedSString === orderedTString
}

console.log(isAnagram(s1, t1))

const strs1 = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat']
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

var groupAnagrams = function (strs) {
  const obj = {}
  // for (let i = 0; i < strs.length; i++) {
  //   const string = strs[i].split('').sort().join('')
  //   console.log(string)
  //   if (!obj[string]) {
  //     obj[string] = [strs[i]]
  //   } else {
  //     obj[string].push(strs[i])
  //   }
  // }
  for (const string of strs) {
    const sorted = string.split('').sort().join('')
    if (!obj[sorted]) {
      obj[sorted] = [string]
    } else {
      obj[sorted].push(string)
    }
  }
  return Object.values(obj)
}

console.log(groupAnagrams(strs1))
*/

const nums1 = [5, 1, 1, 1, 2, 2, 3]
const k1 = 2

var topKFrequent = function (nums, k) {
  const freqMap = new Map()
  const result = []

  for (const num of nums) {
    freqMap.set(num, freqMap.get(num) + 1 || 1)
  }
  for (const [key, value] of freqMap) {
    result.push([key, value])
  }
  result.sort((a, b) => b[1] - a[1])
  console.log(result)
  // return result.slice(0, k)
  console.log(result.slice(0, k).map(n => n[0]))
}

console.log(topKFrequent(nums1, k1))
