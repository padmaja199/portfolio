/* ==========================
 BACKGROUND TWINKLING STARS
========================== */

const starsContainer = document.getElementById('stars');

for (let i = 0; i < 120; i++) {

    const star = document.createElement('span');

    star.classList.add('bg-star');

    star.innerHTML = '✦';

    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';

    star.style.fontSize =
        (Math.random() * 8 + 5) + 'px';

    star.style.animationDelay =
        Math.random() * 5 + 's';

    starsContainer.appendChild(star);
}


/* ==========================
   CURSOR STAR TRAIL
========================== */

const hero = document.getElementById('home');

hero.addEventListener('mousemove', (e) => {

    const symbols = ['✦', '✧', '★', '✶'];

    for (let i = 0; i < 2; i++) {

        const star = document.createElement('span');

        star.classList.add('star');

        star.innerHTML =
            symbols[Math.floor(
                Math.random() * symbols.length)];

        star.style.left = e.pageX + 'px';
        star.style.top = e.pageY + 'px';

        star.style.setProperty(
            '--x',
            Math.random() * 100 - 50
        );

        star.style.setProperty(
            '--y',
            Math.random() * 100 - 50
        );

        document.body.appendChild(star);

        setTimeout(() => {
            star.remove();
        }, 1200);
    }

});


/* ==========================
   3D IMAGE TILT EFFECT
========================== */

const profile =
    document.querySelector('.profile-img');

profile.addEventListener('mousemove', (e) => {

    const rect =
        profile.getBoundingClientRect();

    const x =
        e.clientX - rect.left;

    const y =
        e.clientY - rect.top;

    const centerX =
        rect.width / 2;

    const centerY =
        rect.height / 2;

    const rotateY =
        ((x - centerX) / centerX) * 18;

    const rotateX =
        ((centerY - y) / centerY) * 18;

    profile.style.transform =
        `
    rotateX(${rotateX}deg)
    rotateY(${rotateY}deg)
    scale(1.08)
    `;
});

profile.addEventListener('mouseleave', () => {

    profile.style.transform =
        'rotateX(0deg) rotateY(0deg) scale(1)';
});