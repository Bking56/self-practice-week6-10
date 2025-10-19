// main.js

document.body.style.backgroundColor = "skyblue";
document.body.style.fontSize = "18px";

// 1. **การประกาศตัวแปร:** แก้ไขการสะกด 'botton' เป็น 'button' และดึง Element ที่จำเป็น
// ใช้ querySelectorAll เพื่อดึงรายการอาหารทั้งหมดมาเก็บไว้ตั้งแต่แรก
const allListItems = document.querySelectorAll('.menu li'); 
const buttonMeat = document.getElementById('meat');
const buttonVegan = document.getElementById('vegan');
const buttonSoup = document.getElementById('soup');
const buttonAppetizer = document.getElementById('appetizer'); // แก้ ID เป็นตัวเล็กตาม HTML
const buttonAll = document.getElementById('all');
const buttonReset = document.getElementById('reset');

// 2. **ฟังก์ชันหลักสำหรับแสดงเมนูทั้งหมด (Show All / Reset)**
const showAll = () => {
    allListItems.forEach(item => {
        item.style.display = 'list-item'; // สั่งให้แสดงรายการอาหารทั้งหมด
    });
    console.log("Menu Reset: Showing All Items.");
};

// 3. **ฟังก์ชันหลักสำหรับกรองเมนู (Filter)**
// การกรองที่ถูกต้องคือ: ซ่อนทุกอย่าง --> แล้วแสดงเฉพาะรายการที่ต้องการ
const filterMenu = (filterId) => {
    allListItems.forEach(item => {
        item.style.display = 'none'; // ซ่อนรายการทั้งหมดไว้ก่อนเสมอ

        // ก. กรองตามประเภทเนื้อ (meat หรือ vegan) โดยดูจาก class
        if (filterId === 'meat' || filterId === 'vegan') {
            if (item.classList.contains(filterId)) {
                item.style.display = 'list-item';
            }
        } 
        // ข. กรองตามส่วนของเมนู (soup หรือ appetizer) โดยดูจาก ID ของ <ul> แม่
        else if (filterId === 'soup' || filterId === 'appetizer') {
            const parentUl = item.closest('ul');
            if (parentUl && parentUl.id === filterId) {
                item.style.display = 'list-item';
            }
        }
    });
    console.log(`Filtered to: ${filterId.toUpperCase()}`);
};


// 4. **ผูก Event Listener กับปุ่มต่างๆ**

// ปุ่ม MEAT: แสดงเฉพาะเนื้อ
buttonMeat.addEventListener('click', () => {
    filterMenu('meat');
});

// ปุ่ม VEGAN: แสดงเฉพาะมังสวิรัติ
buttonVegan.addEventListener('click', () => {
    filterMenu('vegan');
});

// ปุ่ม SOUP: แสดงเฉพาะซุป
buttonSoup.addEventListener('click', () => {
    filterMenu('soup');
});

// ปุ่ม APPETIZER: แสดงเฉพาะอาหารเรียกน้ำย่อย
buttonAppetizer.addEventListener('click', () => {
    filterMenu('appetizer');
});

// ปุ่ม ALL: แสดงทั้งหมด (ใช้ฟังก์ชัน showAll)
buttonAll.addEventListener('click', () => {
    showAll();
});

// ปุ่ม RESET: แสดงทั้งหมด (ใช้ฟังก์ชัน showAll)
buttonReset.addEventListener('click', () => {
    showAll();
});


















// // main.js

// // ตั้งค่าสีพื้นหลังและขนาดตัวอักษร
// document.body.style.backgroundColor = "skyblue";
// document.body.style.fontSize = "18px";

// // เลือกรายการอาหารทั้งหมดในเมนู (ทุก <li>)
// const allListItems = document.querySelectorAll('.menu li');

// /**
//  * ฟังก์ชันหลักในการกรองเมนู
//  * filterId คือค่า ID ของปุ่มที่ถูกคลิก (เช่น 'meat', 'soup', 'reset')
//  */
// function filterMenu(filterId) {
    
//     // 1. ถ้าเป็นปุ่ม 'all' หรือ 'reset' ให้แสดงรายการทั้งหมด
//     if (filterId === 'all' || filterId === 'reset') {
//         allListItems.forEach(item => {
//             item.style.display = 'list-item';
//         });
//         alert("แสดงเมนูทั้งหมดแล้ว!");
//         return; // หยุดการทำงานของฟังก์ชัน
//     }

//     allListItems.forEach(item => {
//         item.style.display = 'none'; // ซ่อนรายการทั้งหมดไว้ก่อน
        
//         // ก. กรองตามประเภทเนื้อ (meat หรือ vegan) โดยดูจาก class ของ <li>
//         if (filterId === 'meat' || filterId === 'vegan') {
//             if (item.classList.contains(filterId)) {
//                 item.style.display = 'list-item'; // ถ้าตรงกัน ให้แสดง
//             }
//         } 
        
//         // ข. กรองตามส่วนของเมนู (soup หรือ appetizer) โดยดูจาก ID ของ <ul> แม่
//         else if (filterId === 'soup' || filterId === 'appetizer') {
//             const parentUl = item.closest('ul'); // หา <ul> แม่ที่ใกล้ที่สุด
//             if (parentUl && parentUl.id === filterId) {
//                 item.style.display = 'list-item'; // ถ้า ID แม่ตรงกัน ให้แสดง
//             }
//         }
//     });

//     // แจ้งเตือนเมื่อกรองเสร็จ
//     alert(`แสดงเฉพาะเมนู: ${filterId.toUpperCase()}`);
// }

// // 3. ผูก Event Listeners เข้ากับปุ่มทั้งหมด (ใช้การวนซ้ำเพื่อโค้ดที่สั้นลง)
// const buttonIds = ['meat', 'vegan', 'soup', 'appetizer', 'all', 'reset'];

// buttonIds.forEach(id => {
//     const button = document.getElementById(id);
    
//     if (button) { // ตรวจสอบว่าปุ่มนั้นมีอยู่จริง
//         button.addEventListener('click', () => {
//             filterMenu(id); // เรียกฟังก์ชันกรองโดยส่ง ID ของปุ่มที่ถูกคลิกไป
//         });
//     }
// });














// document.body.style.backgroundColor="skyblue"
// document.body.style.fontSize="18px"

// const bottonMeat = document.getElementById("meat")
// const elementMeats = document.getElementsByClassName('meat')
// const elementVegan = document.getElementsByClassName('vegan')
// const bottonVegan =document.getElementById('vegan')
// const elementSoup =document.getElementsByClassName('soup')
// const bottonSoup = document.getElementById('soup')
// const elementAppetizer =document.getElementsByClassName('Appetizer')
// const bottonAppetizer =document.getElementById('Appetizer')
// const elementAll =document.getElementsByClassName('all')
// const bottonAll=document.getElementById('all')
// const bottonReset=document.getElementById('reset')
// const divMenu = document.getElementsByClassName('menu')
// bottonMeat.addEventListener('click', () => {
//     for (let i = 0; i < elementMeats.length; i++) {
//         console.log(elementMeats[i]);
//         elementMeats[i].style.display = 'none'
//     }
// })
// bottonAll.addEventListener('click',()=>{

// })
// bottonReset.addEventListener('click', () => {
//     reset()
// })

// const reset = () => {
//     for (let i = 0; i < elementMeats.length; i++) {
//         elementMeats[i].style.display = ''
//     }
// }

// bottonVegan.addEventListener('click',()=>{
      

// })























// // main.js (ปรับปรุงจากรูปภาพ)

// // 1. แก้ไขการสะกด 'botton' เป็น 'button'

// // // หากคุณต้องการให้ปุ่ม soup ทำงาน:
// // buttonMenuSoup.addEventListener('click', () => {
// //     filterMenu('soup');
// //     alert("แสดงเฉพาะเมนูซุป");
// // });
// //  * main.js
// //  */

// // // 1. การแก้ไข/อัปเดต Element ที่มีอยู่
// // // ----------------------------------------------------

// // // 1.1 เปลี่ยนชื่อร้าน
// // const title = document.querySelector('h3');
// // title.textContent = 'SIT Restaurant: New Menu Items!';
// // title.style.color = 'navy'; // เพิ่มสีให้กับหัวข้อ

// // // 1.2 แก้ไขเมนู "TunaSandwich" เป็น "ClubSandwich" และเปลี่ยน Class เป็น 'new'
// // const tunaSandwich = document.querySelector('#appetizer li:nth-child(3)');
// // if (tunaSandwich) {
// //     tunaSandwich.textContent = 'Club Sandwich'; // แก้ไขเนื้อหา
// //     tunaSandwich.classList.remove('meat'); // ลบคลาสเก่า
// //     tunaSandwich.classList.add('new'); // เพิ่มคลาสใหม่
// // }

// // // 1.3 เปลี่ยนข้อความท้ายสุดให้เป็นตัวหนา
// // const thankYouMsg = document.querySelector('p');
// // thankYouMsg.style.fontWeight = 'bold';


// // // 2. การลบ Element
// // // ----------------------------------------------------

// // // ลบเมนู "SpicyBacon-CornSoup" ออกจากรายการซุป (มันคือลูกคนแรกของ ul#soup)
// // const spicySoup = document.querySelector('#soup li:first-child');
// // if (spicySoup) {
// //     spicySoup.remove();
// // }


// // // 3. การเพิ่ม Element ใหม่
// // // ----------------------------------------------------

// // // 3.1 เพิ่มเมนู 'Garlic Bread' ลงใน Appetizer
// // const appetizerList = document.getElementById('appetizer');

// // const garlicBread = document.createElement('li');
// // garlicBread.textContent = 'Garlic Bread';
// // garlicBread.classList.add('vegan');

// // // ใช้ appendChild เพื่อเพิ่มเป็นลูกคนสุดท้าย
// // appetizerList.appendChild(garlicBread);


// // // 3.2 เพิ่มเมนูซุปใหม่ 'Tom Yum Goong' ลงในรายการซุป (โดยแทรกเป็นอันดับที่สอง)
// // const soupList = document.getElementById('soup');
// // const tomYumSoup = document.createElement('li');
// // tomYumSoup.textContent = 'Tom Yum Goong';
// // tomYumSoup.classList.add('meat', 'spicy');

// // // เลือกโหนดอ้างอิง: ตอนนี้ VegetableSoup เป็นลูกคนแรก หลังจากลบ SpicyBacon-CornSoup ไป
// // // เราต้องการให้ Tom Yum Goong แทรกก่อน BeefSoup (ลูกคนถัดไป)
// // const refNode = soupList.querySelector('li:nth-child(2)'); // BeefSoup คือลูกคนที่ 2 ตอนนี้

// // // ใช้ insertBefore(newNode, referenceNode)
// // soupList.insertBefore(tomYumSoup, refNode);