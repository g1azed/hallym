const carousel = document.querySelector('.carouselTop');
const items = document.querySelectorAll('.carouselTop_Cell');
let isMouseDown = false;
let startX, scrollLeft;
let currentIndex = 0;  // 현재 슬라이드 인덱스

// 슬라이드 이동 함수
function moveToNext() {
    // currentIndex를 증가시키고, 슬라이드를 이동시킴
    currentIndex++;
    
    // 마지막 슬라이드인 경우 첫 번째 슬라이드로 돌아감
    if (currentIndex === items.length) {
        currentIndex = 0;
    }

    // translateX를 이용해 슬라이드 이동
    const translateXValue = -100 * currentIndex;
    carousel.style.transform = `translateX(${translateXValue}%)`;
}

// 드래그 기능
carousel.addEventListener('mousedown', (e) => {
    isMouseDown = true;
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
});

carousel.addEventListener('mouseleave', () => {
    isMouseDown = false;
});

carousel.addEventListener('mouseup', () => {
    isMouseDown = false;
});

carousel.addEventListener('mousemove', (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 2; // 드래그 속도 조절
    carousel.scrollLeft = scrollLeft - walk;
});

// 자동 슬라이드 (무한 루프)
setInterval(() => {
    moveToNext();
}, 3000); // 3초마다 슬라이드 이동

// 초기 상태 설정
carousel.style.transform = 'translateX(0%)';