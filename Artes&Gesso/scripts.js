document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.sanca-btn, .quarto-btn');

    buttons.forEach((button) => {
        const section = button.closest('.services-gallery');
        const images = section ? section.querySelectorAll('.portfolio-image') : [];

        if (!section || images.length === 0) {
            return;
        }

        const updateGalleryState = (shouldShow) => {
            button.dataset.show = String(shouldShow);
            button.setAttribute('aria-expanded', String(shouldShow));

            images.forEach((image) => {
                image.classList.toggle('hidden', !shouldShow);
            });
        };

        button.addEventListener('click', () => {
            const isOpen = button.dataset.show === 'true';
            const nextState = !isOpen;

            updateGalleryState(nextState);

            if (nextState) {
                const videoStrip = document.querySelector('.video-strip');
                if (videoStrip) {
                    videoStrip.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });
});
