//multi line string : สามารถทำวงานกับข้อความยาวๆได้ โดยการขึ้นบรรทัดใหม่แล้วไม่มีข้อผิดพลาดเกิดขึ้น โดยใช้ `
// Interpolation : สมารถแทรกตัวแปรลงในพื้นที่ String ได้โดยใช้ ${ชื่อตัวแปร} ร่วมกับ `

const name = 'GUY'
const address = `ชื่อลูกค้า : ${name} ที่อยู๋ 555/111 ถนนเฮอา 
จังหวัดอุอิ เบอร์ตืดต่อ : 012-345-6789`;

console.log(address);
