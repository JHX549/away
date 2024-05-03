// Event listener for changing opacity of menubox
    window.addEventListener('scroll', function() {
        var menubox = document.getElementById('menubox');
        console.log('Menubox element:', menubox);
        var scrollPosition = window.scrollY;
        var maxOpacityScroll = 1000; // Adjust this value to change when the menu appears fully
        var opacity = scrollPosition / maxOpacityScroll;
        opacity = Math.min(1, opacity); // Ensure opacity is not greater than 1
        menubox.style.opacity = opacity.toFixed(2); // Limit opacity to two decimal places for smoother transition
    });