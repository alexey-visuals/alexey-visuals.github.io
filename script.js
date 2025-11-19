document.addEventListener('DOMContentLoaded', () => {
    
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <span class="close">&times;</span>
        <img src="" alt="Большое фото">
    `;
    document.body.appendChild(lightbox);

    const lightboxImg = lightbox.querySelector('img');
    const closeBtn = lightbox.querySelector('.close');

    document.querySelectorAll('.gallery-item img').forEach(img => {
        img.addEventListener('click', () => {
            lightboxImg.src = img.src.replace('/800/600', '/1600/1200'); // более крупная версия
            lightbox.style.display = 'flex';
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

});