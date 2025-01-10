const text_top = "새로운 한림"; // 타이핑할 문구
const text_bottom = "대학의 미래를 열다"; // 타이핑할 문구
let index = 0;
let speed = 100; // 글자 타이핑 속도 (밀리초 단위)

const test = `<img class="mainText_Top_quote" src="./asset/MainIndex//mainQuotes.png" />`+"새로운 한림"


const mainText_Top = document.querySelector(".mainText_Top")
function typeWriter() {
  if (index < text_top.length) {
    mainText_Top.textContent += text_top.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();