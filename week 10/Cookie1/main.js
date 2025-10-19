const all = document.querySelector("body");
const background = document.querySelector("#bgColor");
const fColor = document.querySelector("#fontColor");
const fSize = document.querySelector("#fontSize");
// const hadColor = document.querySelector(".hadColor")
// const lab = document.querySelector("label");
const reset = document.querySelector(".btn-reset");
const save = document.querySelector(".btn-save");

// set Default
if (!localStorage.getItem("bgColor")) {
  localStorage.setItem("bgColor", "#ffffff");
}

if (!localStorage.getItem("fontColor")) {
  localStorage.setItem("fontColor", "#000000");
}

if (!localStorage.getItem("fontSize")) {
  localStorage.setItem("fontSize", "20px");
}

// call value
// แสดงผลหน้าเว็บ
all.style.backgroundColor = localStorage.getItem("bgColor");
all.style.color = localStorage.getItem("fontColor");
all.style.fontSize = localStorage.getItem("fontSize");
// ใส่ค่าที่เคยเลือกไว้ในช่อง
background.value = localStorage.getItem("bgColor");
fColor.value = localStorage.getItem("fontColor");
fSize.value = localStorage.getItem("fontSize");

// pressed Save Button
save.addEventListener("click", () => {
  localStorage.setItem("bgColor", background.value);
  localStorage.setItem("fontColor", fColor.value);
  localStorage.setItem("fontSize", fSize.value);

  all.style.backgroundColor = localStorage.getItem("bgColor");
  all.style.color = localStorage.getItem("fontColor");
  all.style.fontSize = localStorage.getItem("fontSize");
});

// pressed Reset Button
reset.addEventListener("click", () => {
    localStorage.setItem("bgColor", "#ffffff");
    localStorage.setItem("fontColor", "#000000");
    localStorage.setItem("fontSize", "14px");

    all.style.background = localStorage.getItem("bgColor");
    all.style.color = localStorage.getItem("fontColor");
    all.style.fontSize = localStorage.getItem("fontSize");
});