document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.mainSection');
    let currentSection = 0;
  
    const scrollToSection = (index) => {
      sections[index].scrollIntoView({ behavior: 'smooth' });
    };
  
    const handleWheel = (event) => {
      if (event.deltaY > 0 && currentSection < sections.length - 1) {
        currentSection++;
      } else if (event.deltaY < 0 && currentSection > 0) {
        currentSection--;
      }
      scrollToSection(currentSection);
    };
  
    document.querySelector('.mainIndex-1').addEventListener('wheel', handleWheel);
  });
  