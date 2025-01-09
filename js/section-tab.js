// const sectionTab = document.querySelector('.tab-scroll-up');

// const sectiontab_Height = sectionTab.offsetHeight;
// let prevScrollpos = window.scrollY;

// window.addEventListener('scroll', () => {
//     const currentScrollpos = window.scrollY;
//     const isDown = sectionTab.classList.contains('tab-scroll-down');
//     const isScrollingDown = currentScrollpos > prevScrollpos;

//     if(isScrollingDown && isDown ){
//         sectionTab.classList.remove('.tab-scroll-down')
//     }else if(!isScrollingDown && isDown && currentScrollpos > sectionTab_Height){
//         sectionTab.classList.add('.tab-scroll-down')
//     }else if(currentScrollpos <= sectiontab_Height && !isDown){
//         sectionTab.classList.add('.tab-scroll-down')
//     }

//     prevScrollpos = currentScrollpos;
// })



// let lastScroll = document.documentElement.scrollTop || 0
// document.addEventListener('scroll', function(){

//     let scrollTop = document.documentElement.scrollTop

//     if(scrollTop > lastScroll) {
//         sectionTab.classList.add('.tab-scroll-down')
//     } else {
//         sectionTab.classList.remove('.tab-scroll-down')
//     }
//     lastScroll = scrollTop
// })



$(window).bind('wheel', function(event){

    const sectionTab = document.querySelector('.mainIndex_snsNav');

    if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
        // scroll up
        sectionTab.classList.add('.tab-scroll-down')
    }
    else {
        // scroll down
        sectionTab.classList.remove('.tab-scroll-down')
    }
});
