const selectIcon = document.querySelector(".map_select");
const hoverImg = document.querySelector(".map_hover_img");

// popup active
const asideBtn = document.getElementsByClassName("aside_btn");
const iconClick = document.querySelector(".map_hover_wrap");

const popupBox = document.querySelector(".popup_wrap");

const asideBtnLength = asideBtn.length;

selectIcon.addEventListener("mouseover", () => {
    // console.log("오버ㅏ")
    if(hoverImg.classList.contains('hide')){
        hoverImg.classList.remove('hide')
        // console.log("생겻당")
    }else{
        hoverImg.classList.add('hide')
        // console.log("사라졋당")
    }
})
selectIcon.addEventListener("mouseleave", () => {
    // console.log("오버")
    if(hoverImg.classList.contains('hide')){
        hoverImg.classList.remove('hide')
        // console.log("생겻당")
    }else{
        hoverImg.classList.add('hide')
        // console.log("사라졋당")
    }
})

iconClick.addEventListener("click", () => {
    popupBox.classList.toggle('none');
})

popupBox.addEventListener("click", () => {
    popupBox.classList.toggle('none');
})


// 로딩 시 초기화 (기본 스타일 설정)
window.onload = function () {
    for (let i = 0; i < asideBtnLength; i++) {
        asideBtn[i].style.backgroundColor = "#ffffff"; // 기본 배경색
        asideBtn[i].style.color = "#121212";           // 기본 텍스트 색
    }
};

for (let i = 0; i < asideBtnLength; i++) {
    asideBtn[i].addEventListener("click", function () {
        // 클릭된 버튼의 현재 상태를 확인 (getComputedStyle로 실제 색상 확인)
        const computedStyle = window.getComputedStyle(this);
        const isActive =
            computedStyle.backgroundColor === "rgb(28, 114, 242)" && 
            computedStyle.color === "rgb(255, 255, 255)";

        // 모든 버튼 초기화
        for (let j = 0; j < asideBtnLength; j++) {
            asideBtn[j].style.backgroundColor = "#ffffff"; // 기본 배경색
            asideBtn[j].style.color = "#121212";           // 기본 텍스트 색
        }

        // 클릭된 버튼 상태를 토글
        if (!isActive) {
            this.style.backgroundColor = "#1C72F2"; // 원하는 배경색
            this.style.color = "white";          // 원하는 텍스트 색
        } else {
            this.style.backgroundColor = "#ffffff"; // 기본 배경색으로 복원
            this.style.color = "#121212";           // 기본 텍스트 색으로 복원
        }

        // 팝업 토글
        popupBox.classList.toggle('none');
        console.log("클릭");
    });
}