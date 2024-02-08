//Destucturing (การสลายโครงสร้าง) 
// คือการกำหนดค่าที่อยู่ภายใน Array or Object ให้กับตัวแปรโดยใช้วิธีจับคู่ตัวแปรกับค่าใน Array or Object เช่น


// Array 
// const colors = ['red','green','blue']; 

// const red = colors[0]; // output : red
// const green= colors[1]; // output : green
// const blue = colors[2]; // output : blue

// Destructuring 

// const [red,green,blue] = colors; // Destucturing
// console.log(colors) // output : [ 'red', 'green', 'blue' ]


// Object 
const product = {
    productName : 'computer',
    price : '30000',
    stock : 10
}

// เรียกใช้แบบปกติ
const name = product.productName;
console.log(name) // output : computer

// Destructuring Object 
// const {propoties:variable} = object
const {productName:n,price:p,stock:s} = product; 
console.log(n,p,s); // output : computer 30000 10

