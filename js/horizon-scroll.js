(function () {
    init();

    var g_containerInViewport;
    function init() {
        setStickyContainersSize();
        bindEvents();
        createIndicatorBars();
    }

    function bindEvents() {
        window.addEventListener("wheel", wheelHandler);
    }

    function setStickyContainersSize() {
        document
            .querySelectorAll(".sticky-container")
            .forEach(function (container) {
                const stikyContainerHeight =
                    container.querySelector(".horizon_container").scrollWidth;
                container.setAttribute(
                    "style",
                    "height: " + stikyContainerHeight + "px"
                );
            });
    }

    // 인디케이터
    function createIndicatorBars() {
        document.querySelectorAll(".sticky-container").forEach((container) => {
            const indicatorBar = container.querySelector(".indicator-bar");
            const progressBar = document.createElement("div");
            progressBar.classList.add("indicator-progress");
            indicatorBar.appendChild(progressBar);
        });
    }

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= 0 &&
            rect.bottom > document.documentElement.clientHeight
        );
    }

    
    function updateIndicator(container) {
        const horizonContainer = container.querySelector(".horizon_container");
        const scrollLeft = horizonContainer.scrollLeft;
        const maxScrollLeft =
            horizonContainer.scrollWidth - horizonContainer.clientWidth;
        const progressPercentage = (scrollLeft / maxScrollLeft) * 100;

        const progressBar = container.querySelector(".indicator-progress");
        progressBar.style.width = progressPercentage + "%";
    }

    function wheelHandler(evt) {
        const containerInViewPort = Array.from(
            document.querySelectorAll(".sticky-container")
        ).filter(function (container) {
            return isElementInViewport(container);
        })[0];

        if (!containerInViewPort) {
            return;
        }

        var isPlaceHolderBelowTop =
            containerInViewPort.offsetTop <
            document.documentElement.scrollTop;
        var isPlaceHolderBelowBottom =
            containerInViewPort.offsetTop +
                containerInViewPort.offsetHeight >
            document.documentElement.scrollTop;
        let g_canScrollHorizontally =
            isPlaceHolderBelowTop && isPlaceHolderBelowBottom;

        if (g_canScrollHorizontally) {
            const horizonContainer =
                containerInViewPort.querySelector(".horizon_container");
            horizonContainer.scrollLeft += evt.deltaY;

            // Update the indicator bar
            updateIndicator(containerInViewPort);
        }
    }
})();