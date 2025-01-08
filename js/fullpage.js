let currentSection = 0; // 현재 섹션 인덱스
let subSectionIndex = 0; // section1에서의 하위 스크롤 상태
const sections = document.querySelectorAll('.section');
const sectionHeights = Array.from(sections).map((section) => section.offsetHeight);
const totalSections = sections.length;

// 스크롤 이벤트 핸들러
function handleScroll(event) {
  if (event.deltaY > 0) {
    // 아래로 스크롤
    if (currentSection === 0 && subSectionIndex < 1) {
      // section1의 하위 스크롤
      subSectionIndex++;
    } else if (currentSection < totalSections - 1 && subSectionIndex === 0) {
      // 다음 섹션으로 이동
      currentSection++;
    }
  } else {
    // 위로 스크롤
    if (currentSection === 0 && subSectionIndex > 0) {
      // section1의 하위 스크롤
      subSectionIndex--;
    } else if (currentSection > 0) {
      // 이전 섹션으로 이동
      currentSection--;
      subSectionIndex = currentSection === 0 ? 1 : 0; // section1으로 돌아오면 하위 스크롤 마지막 위치로
    }
  }
  updateSection();
}

// 섹션 이동 함수
function updateSection() {
  let scrollOffset = 0;

  for (let i = 0; i < currentSection; i++) {
    scrollOffset += sectionHeights[i];
  }

  // section1의 하위 스크롤 처리
  if (currentSection === 0) {
    scrollOffset += subSectionIndex * window.innerHeight;
  }

  document.body.style.transform = `translateY(-${scrollOffset}px)`;
}

// 스크롤 이벤트 리스너 추가
window.addEventListener('wheel', handleScroll);

// 초기 상태 설정
updateSection();
