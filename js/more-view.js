// more view Button
document.getElementById('moreViewBtn').addEventListener('click', function() {
    console.log("클릭")
    const imgWrap = document.querySelector('.mainIndexRight_imgWrapper');
    const newImgWrap = document.querySelector('.mainIndexRight_imgWrap');

    const clonedImgWrap = newImgWrap.cloneNode(true);
    imgWrap.appendChild(clonedImgWrap);

});