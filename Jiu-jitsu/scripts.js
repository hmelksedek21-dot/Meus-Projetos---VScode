function initPageEffects() {
    const animatedElements = document.querySelectorAll('.hero-content, .page-content, .card, footer, .container, h1, h2, p, table');

    const observer = new IntersectionObserver((entries, animationObserver) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            entry.target.classList.add('is-visible');
            animationObserver.unobserve(entry.target);
        });
    }, { threshold: 0.12 });

    animatedElements.forEach((element) => {
        element.classList.remove('reveal', 'is-visible');
        element.classList.add('reveal');
        observer.observe(element);
    });
}

function initSwup() {
    if (typeof Swup === 'undefined') {
        return null;
    }

    const swup = new Swup({
        containers: ['#swup'],
        animateHistoryBrowsing: true,
        cache: true,
        linkSelector: 'a[href]:not([target="_blank"]):not([href^="#"]):not([data-no-swup])'
    });

    swup.on('contentReplaced', () => {
        document.body.classList.remove('page-exit');
        document.body.classList.add('page-enter');
        initPageEffects();
    });

    return swup;
}

document.addEventListener('DOMContentLoaded', () => {
    initSwup();
    initPageEffects();

    const modalityItems = document.querySelectorAll('.modality-item');

    const setModalityState = (selectedItem) => {
        modalityItems.forEach((item) => {
            const content = item.querySelector('.modality-content');
            const image = item.querySelector('.modality-image');
            const button = item.querySelector('.modality-toggle');
            const isSelected = item === selectedItem;

            item.classList.toggle('active', isSelected);

            if (content) {
                content.style.display = 'block';
            }

            if (image) {
                image.style.display = isSelected ? 'block' : 'none';
            }

            if (button) {
                button.setAttribute('aria-expanded', String(isSelected));
            }
        });
    };

    const activeItem = document.querySelector('.modality-item.active') || modalityItems[0];
    if (activeItem) {
        setModalityState(activeItem);
    }

    modalityItems.forEach((item) => {
        const button = item.querySelector('.modality-toggle');

        if (button) {
            button.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                setModalityState(isActive ? null : item);
            });
        }
    });
});