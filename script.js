document.addEventListener('DOMContentLoaded', () => {
    
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <span class="close">&times;</span>
        <button class="prev" aria-label="Предыдущее фото">&#10094;</button>
        <img src="" alt="Большое фото">
        <button class="next" aria-label="Следующее фото">&#10095;</button>
    `;
    document.body.appendChild(lightbox);

    const lightboxImg = lightbox.querySelector('img');
    const closeBtn = lightbox.querySelector('.close');
    const prevBtn = lightbox.querySelector('.prev');
    const nextBtn = lightbox.querySelector('.next');

    const galleryImages = Array.from(document.querySelectorAll('.gallery-item img'));
    let currentIndex = 0;

    function showImage(index) {
        currentIndex = (index + galleryImages.length) % galleryImages.length;
        const largeSrc = galleryImages[currentIndex].getAttribute('data-large');
        lightboxImg.src = largeSrc;
        lightbox.style.display = 'flex';
    }

    galleryImages.forEach((img, i) => {
        img.addEventListener('click', () => {
            showImage(i);
        });
    });

    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
        lightboxImg.src = '';
    });

    lightbox.addEventListener('click', e => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
            lightboxImg.src = '';
        }
    });

    prevBtn.addEventListener('click', e => {
        e.stopPropagation();
        showImage(currentIndex - 1);
    });

    nextBtn.addEventListener('click', e => {
        e.stopPropagation();
        showImage(currentIndex + 1);
    });

});