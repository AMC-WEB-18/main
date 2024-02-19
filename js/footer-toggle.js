document.addEventListener("DOMContentLoaded", function() {
    var footer = document.getElementById("pageFooter");
    var lastScrollTop = 0;
    var timeout;

    function hideFooter() {
        footer.style.transform = "translateY(100%)";
    }

    function showFooter() {
        footer.style.transform = "translateY(0)";
    }

    function onScroll() {
        clearTimeout(timeout);

        timeout = setTimeout(function() {
            var scrollTop = window.scrollY || document.documentElement.scrollTop;

            if (scrollTop > lastScrollTop) {
                hideFooter();
            } else {
                showFooter();
            }

            lastScrollTop = scrollTop;
        }, 200);
    }

    window.addEventListener("scroll", onScroll);

    // Hide footer initially
    hideFooter();
});
