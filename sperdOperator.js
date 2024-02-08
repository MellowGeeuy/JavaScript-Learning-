// ใช้ในการกระจายสมาชิก Array ออกม่ใช้งานโดยการเติมเครื่องหมาย ... หน้าตัวแปร Array

const newArr = [100,200,300];
const data = [10,20,...newArr]; // ...vaeible 


//  สามารถใช้ Push method ได้
const newNum = [99,999];

data.push(...newNum); // output: [10, 20, 100, 200,300, 99,999]






console.log(data); // output: [10,20,100,200,300]
console.log(data); // output: [ 10, 20, 100, 200, 300, [ 99, 999 ] ] after .push(newNum)
console.log(data.length) // นับจำนวนที่อยู๋ใน Array 
