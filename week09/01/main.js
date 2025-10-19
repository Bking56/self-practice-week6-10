const ButtonCreate = document.getElementById('submit')
const Inputuser=document.getElementById('username')
const inputEmail = document.getElementById('email')
const inputPAss=document.getElementById('password')
const inputrepass =document.getElementById('confirm-password')
const pAlert =document.querySelector('p')
let inputUser =''
let inputemail=''
let inputpAss=''
let inputrrepass=''
  Inputuser.addEventListener('input',(e) => {
     inputUser = e.target.value
    })
   inputEmail.addEventListener('input',(e)=>{
    inputemail=e.target.value
   })
   inputPAss.addEventListener('input',(e)=>{
    inputpAss=e.target.value
   })
   inputrepass.addEventListener('input',(e)=>{
    inputrrepass=e.target.value
   })
ButtonCreate.addEventListener('click',(e)=>{
    e.preventDefault()
  if (!inputUser) return  console.log("Empty1");
  if(!inputemail)  return console.log("Empty2");
  if(!inputpAss) return console.log("Empty3");
  if(!inputrrepass) return console.log("Empty4");
  if (inputpAss===inputrrepass) {
    pAlert.textContent = "ถูกต้อง"
    pAlert.style.backgroundColor = 'green'
    
  }else{
    pAlert.textContent ="ผิดจ้า"
    pAlert.style.background ='red'
    
  }

  
})





// const ButtonCreate = document.getElementById('submit');
// const Inputuser = document.getElementById('username');
// const inputEmail = document.getElementById('email');
// const inputPAss = document.getElementById('password');
// const inputrepass = document.getElementById('confirm-password');
// const pAlert = document.querySelector('p'); // เลือก <p> สำหรับแสดงข้อความแจ้งเตือน

// // ตัวแปรสำหรับเก็บค่าที่ผู้ใช้ป้อนเข้ามา
// let inputUser = '';
// let inputemail = '';
// let inputpAss = '';
// let inputrrepass = '';

// // 1. เพิ่ม Event Listener 'input' เพื่อดึงค่าทันทีที่ผู้ใช้พิมพ์
// Inputuser.addEventListener('input', (e) => {
//     inputUser = e.target.value;
// });

// inputEmail.addEventListener('input', (e) => {
//     inputemail = e.target.value;
// });

// inputPAss.addEventListener('input', (e) => {
//     inputpAss = e.target.value;
// });

// inputrepass.addEventListener('input', (e) => {
//     inputrrepass = e.target.value;
// });

// // 2. จัดการเมื่อคลิกปุ่ม 'Create Account'
// ButtonCreate.addEventListener('click', (e) => {
//     e.preventDefault(); // หยุดพฤติกรรมเริ่มต้นของฟอร์ม (ไม่ให้หน้าเว็บโหลดซ้ำ)

//     // ล้างข้อความแจ้งเตือนเก่า
//     pAlert.textContent = '';
//     pAlert.style.backgroundColor = 'transparent';
//     pAlert.style.color = 'red'; // กำหนดสีเริ่มต้นสำหรับข้อผิดพลาด

//     // ตรวจสอบช่องว่าง (Empty Check)
//     if (inputUser.trim() === '') {
//         pAlert.textContent = "Empty1: กรุณากรอกชื่อผู้ใช้";
//         return; // หยุดการทำงานถ้ามีช่องว่าง
//     }
//     if (inputemail.trim() === '') {
//         pAlert.textContent = "Empty2: กรุณากรอกอีเมล";
//         return;
//     }
//     if (inputpAss.trim() === '') {
//         pAlert.textContent = "Empty3: กรุณากรอกรหัสผ่าน";
//         return;
//     }
//     if (inputrrepass.trim() === '') {
//         pAlert.textContent = "Empty4: กรุณายืนยันรหัสผ่าน";
//         return;
//     }

//     // 3. จุดที่ต้องแก้ไข: การเปรียบเทียบรหัสผ่าน
//     // ต้องเปรียบเทียบตัวแปรที่เก็บค่า string (inputpAss กับ inputrrepass)
//     if (inputpAss === inputrrepass) {
//         // แก้ไข: pAlert.pAlert('ถูกต้อง') เป็น pAlert.textContent = 'ลงทะเบียนสำเร็จ!'
//         pAlert.textContent = 'ลงทะเบียนสำเร็จ! รหัสผ่านตรงกัน';
//         pAlert.style.backgroundColor = 'lightgreen';
//         pAlert.style.color = 'darkgreen';
//     } else {
//         pAlert.textContent = 'รหัสผ่านไม่ตรงกัน โปรดตรวจสอบอีกครั้ง';
//         pAlert.style.backgroundColor = 'salmon';
//         pAlert.style.color = 'white';
//     }
// });





























// const form = document.getElementsByTagName('form')
// const submitButton = document.getElementById('submit')
// const password = document.getElementById('password')
// const confirm = document.getElementById('confirm-password')
// const pAlert = document.getElementsByTagName('p')
// let currentPassword;
// let currentConfirmPassword;

// password.addEventListener('input', (e) => {
//     currentPassword = e.target.value
//     console.log(currentPassword);
    
// })

// confirm.addEventListener('input', (e) => {
//     currentConfirmPassword = e.target.value
//     console.log(currentConfirmPassword);
    
// })

// form[0].addEventListener('submit',(e) => {
//     e.preventDefault()
//     if (currentPassword !== currentConfirmPassword) {
//         pAlert[0].innerHTML = "Error password not contain"
//         pAlert[0].style.backgroundColor = 'red'
        
//     } else {
//         pAlert[0].innerHTML = "Create account successfully"
//         pAlert[0].style.backgroundColor = 'green'
    
//     }  
// })







