

// 스크롤 이벤트 핸들러
window.addEventListener('scroll', () => {

    const scrollImg = document.querySelector('.scrolling_img');
    const visionText = document.querySelector('.v_sec_text');

    // 스크롤된 픽셀 값을 가져옴
    const scrollY = window.scrollY;

    // 이미지의 새 크기를 계산 (최소 100px, 최대 400px 사이)
    const newWidth = Math.min(100, Math.max(40, 40 + scrollY * 0.1));

    // 이미지의 크기 업데이트
    scrollImg.style.width = `${newWidth}%`;



    
    const scrollingImg = document.querySelector('.scrolling_img_Wrap');
    const vSecText = document.querySelector('.v_sec_text');
    // 이미지 위치 계산 (스크롤 위치에 따라 이미지가 텍스트 영역에 겹침)
    const imgOffset = Math.min(scrollY, viewportHeight);

    // 이미지의 위치와 텍스트 색상 반전
    scrollingImg.style.top = `${imgOffset}px`;

    // 텍스트 색상 반전
    const opacity = Math.min(1, (scrollY / viewportHeight));
    vSecText.style.color = opacity > 0.5 ? 'white' : '#121212';  // 반전된 색상

    

    
});

