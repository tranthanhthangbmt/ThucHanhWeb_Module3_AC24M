document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.comparison-container');
    const slider = document.querySelector('.slider-line');
    const handle = document.querySelector('.slider-handle');
    const imageAfter = document.querySelector('.image-after');

    if (!container || !slider || !handle || !imageAfter) return;

    let isDragging = false;

    // Mouse Events
    handle.addEventListener('mousedown', () => isDragging = true);
    document.addEventListener('mouseup', () => isDragging = false);
    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        moveSlider(e.clientX);
    });

    // Touch Events
    handle.addEventListener('touchstart', () => isDragging = true);
    document.addEventListener('touchend', () => isDragging = false);
    document.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        moveSlider(e.touches[0].clientX);
    });

    // Click on container to jump
    container.addEventListener('click', (e) => {
        moveSlider(e.clientX);
    });

    function moveSlider(clientX) {
        const rect = container.getBoundingClientRect();
        let x = clientX - rect.left;

        // Boundary checks
        if (x < 0) x = 0;
        if (x > rect.width) x = rect.width;

        const percentage = (x / rect.width) * 100;

        slider.style.left = percentage + '%';
        handle.style.left = percentage + '%';
        imageAfter.style.width = percentage + '%';
    }
});
