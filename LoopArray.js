// For Loop 
// ForEach 
// ForOf

const data = [10,20,30,40,50];

//For Loop 

for(let i = 0;i < data.length; i++){
    console.log(`ลำดับที่ ${i} = ${data[i]}`);
}

//output
// ลำดับที่ 0 = 10
// ลำดับที่ 1 = 20
// ลำดับที่ 2 = 30
// ลำดับที่ 3 = 40
// ลำดับที่ 4 = 50



// ForEach

let sum = 0;
data.forEach(e => {
    sum+=e
    console.log(`ผลบวกของแต่ละ element = ${sum}`);
});

//output 
// ผลบวกของแต่ละ element = 10
// ผลบวกของแต่ละ element = 30
// ผลบวกของแต่ละ element = 60
// ผลบวกของแต่ละ element = 100
// ผลบวกของแต่ละ element = 150



//ForOf 

for(const element of data){
    console.log(`สมาชิก Array Data  = ${element}`)
}
//output 
// สมาชิก Array Data  = 10
// สมาชิก Array Data  = 20
// สมาชิก Array Data  = 30
// สมาชิก Array Data  = 40
// สมาชิก Array Data  = 50