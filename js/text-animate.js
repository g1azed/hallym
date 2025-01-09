document.addEventListener("DOMContentLoaded", () => {
    const animatedText = document.querySelector(".animated-text");
    
    // 1초 후에 애니메이션 클래스 추가
    setTimeout(() => {
      animatedText.classList.add("active");
    }, 1000); // 1초 대기
  });
  

//   /.text-container {
//     position: relative;
//     width: 100%;
//     height: 100vh;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     overflow: hidden; /* 텍스트가 화면 밖에 있을 때 보이지 않도록 */
//   }
  
//   .animated-text {
//     position: absolute;
//     left: -100%; /* 화면 왼쪽 밖으로 이동 */
//     font-size: 2rem;
//     font-weight: bold;
//     white-space: nowrap; /* 텍스트가 줄 바꿈되지 않도록 */
//     transition: transform 1s ease, opacity 1s ease; /* 부드러운 애니메이션 */
//     opacity: 0; /* 처음에는 투명 */
//   }
  
//   .animated-text.active {
//     transform: translateX(100vw); /* 화면 중심으로 이동 */
//     opacity: 1; /* 완전히 보이도록 설정 */
//   }

//   작동 방식
// 텍스트의 초기 위치를 CSS에서 left: -100%;로 설정하여 화면 왼쪽 밖으로 배치합니다.
// JavaScript로 .active 클래스를 추가하면 transform 속성을 사용하여 텍스트를 제 위치로 이동시킵니다.
// transition 속성을 사용해 부드러운 애니메이션 효과를 줍니다.

// . 다양한 방향 애니메이션
// 텍스트가 다양한 방향(위, 아래, 오른쪽 등)에서 들어오게 하려면 transform 속성을 활용해 방향을 설정할 수 있습니다.
// .animated-text {
//     transform: translateX(-100vw); /* 초기 위치 */
//   }
  
//   .animated-text.active {
//     transform: translateX(0); /* 원래 위치 */
//   }