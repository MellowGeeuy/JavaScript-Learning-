// ใช้ในการส่งค่า Parameter เข้าไปทำงานใน Function โดยไม่จำกัดจำนวนโดยใช้เครื่องหมาย ... 


let tessummation = (x,y,z) => {
    return x+y+z;
}


// console.log(summation(50,100,200));


//Rest Parameter

let summation = (...numberArr) => {
    let  total = 0;
    // for...of
    for(let number of numberArr) total += number; // 0+500 after + 1000
    return total;
    
}


console.log(summation(500,1000));
console.log(summation(500,1000,2000));