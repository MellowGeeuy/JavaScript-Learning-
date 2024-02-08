//method push,pop,shift,unshift


const data = [10,20,30];

//push.method : add member to data
data.push(99,'A','B');
console.log(data); // output : [ 10, 20, 30, 99, 'A', 'B' ]

data.push(99,'A','B',['Dog','Cat']);
console.log(data); // output : [ 10, 20, 30, 99, 'A', 'B', 99, 'A', 'B', [ 'Dog', 'Cat' ] ]

//pop.medthod : delete last member in data
data.pop(); // delete [ 'Dog', 'Cat' ]
console.log(data); // output :  [10,20,30,99,'A','B', 99,'A','B']  

//shift.method : delete first member in data 
data.shift(); //delete 10
console.log(data) // output : [20,30,99,'A','B', 99,'A','B']


//unshift.method : add first member on data 
data.unshift(999); // add 999 
console.log(data) // output : [999,20,30,99,'A','B', 99,'A','B']