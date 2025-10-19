









// document.addEventListener('DOMContentLoaded', () => {
//   const bgColor = localStorage.getItem('bgColor');
//   const fontColor = localStorage.getItem('fontColor');
//   const fontSize = localStorage.getItem('fontSize');

//   if (bgColor) {
//     document.body.style.backgroundColor = bgColor;
//     document.getElementById('bgColor').value = bgColor;
//   }
//   if (fontColor) {
//     document.body.style.color = fontColor;
//     document.getElementById('fontColor').value = fontColor;
//   }
//   if (fontSize) {
//     document.body.style.fontSize = getFontSizeValue(fontSize);
//     document.getElementById('fontSize').value = fontSize;
//   }
// });

// function getFontSizeValue(size) {
//   switch (size) {
//     case 'small': return '12px';
//     case 'medium': return '16px';
//     case 'large': return '24px';
//     default: return '16px';
//   }
// }


// document.getElementById('saveBtn').addEventListener('click', () => {
//   const bgColor = document.getElementById('bgColor').value;
//   const fontColor = document.getElementById('fontColor').value;
//   const fontSize = document.getElementById('fontSize').value;

//   localStorage.setItem('bgColor', bgColor);
//   localStorage.setItem('fontColor', fontColor);
//   localStorage.setItem('fontSize', fontSize);

//   document.body.style.backgroundColor = bgColor;
//   document.body.style.color = fontColor;
//   document.body.style.fontSize = getFontSizeValue(fontSize);
// });


// document.getElementById('resetBtn').addEventListener('click', () => {
//   localStorage.removeItem('bgColor');
//   localStorage.removeItem('fontColor');
//   localStorage.removeItem('fontSize');

//   document.body.style.backgroundColor = '';
//   document.body.style.color = '';
//   document.body.style.fontSize = '';

//   document.getElementById('bgColor').value = '#000000';
//   document.getElementById('fontColor').value = '#000000';
//   document.getElementById('fontSize').value = 'medium';
// });


// // ต้องทำให้ได้