// method spice : (ตำแหน่งที่่จะลบ , จำนวนที่จะลบ , ข้อมูบที่ต้องการแทรกเข้าไป)
// method slice : (ตำแหน่งเริ่มต้น , ตำแหน่งสุดท้าย-1)

const data = [10,20,30,40,50];
console.log(data) // [ 10, 20, 30, 40, 50 ]

// if i want delete 20, 30 ,40 in data

//splice.method 
// data.splice(1,3,'A'); // start index 1 to 3 (20 , 30 , 40) and add A to index1
// console.log(data) // [ 10, 'A', 50 ]

//slice.method 
const Ldata = data.slice(1,3); // ไม่ไปแก้ข้อมูลเก่า
console.log(Ldata); // [20,30]