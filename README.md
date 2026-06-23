

<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Padmaja</title>

    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
  <style>
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* 
body {
    font-family: 'Poppins', sans-serif;
    overflow: hidden;
} */

html {
    scroll-behavior: smooth;
}

body {
    font-family: 'Poppins', sans-serif;
    background: #0f172a;
    color: #fff;
}

section {
    scroll-margin-top: 90px;
}

/* HERO SECTION */
.hero {
    position: relative;
    width: 100%;
    height: 100vh;
    background:
        linear-gradient(rgba(0, 0, 0, .45), rgba(0, 0, 0, .45)),
        url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1920') center center/cover no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    overflow: hidden;
}

/* BACKGROUND STARS */
.stars {
    position: absolute;
    inset: 0;
    overflow: hidden;
}

.bg-star {
    position: absolute;
    color: white;
    font-size: 10px;
    animation: twinkle 3s infinite ease-in-out;
    opacity: .3;
}

@keyframes twinkle {

    0%,
    100% {
        opacity: .2;
        transform: scale(1);
    }

    50% {
        opacity: 1;
        transform: scale(1.5);
    }
}

/* CONTENT */
.hero-content {
    position: relative;
    z-index: 10;
    color: white;
    padding: 20px;
}

/* PROFILE IMAGE */
.profile-container {
    display: inline-block;
    perspective: 1000px;
    position: relative;
}

.profile-container::before {
    content: '';
    position: absolute;
    inset: -10px;
    border-radius: 50%;
    background:
        radial-gradient(rgba(255, 255, 255, .4),
            transparent 70%);
    filter: blur(15px);
    z-index: -1;
}

.profile-img {
    width: 220px;
    height: 220px;
    border-radius: 50%;
    object-fit: cover;
    border: 5px solid rgba(255, 255, 255, .9);

    box-shadow:
        0 15px 40px rgba(0, 0, 0, .4),
        0 0 25px rgba(255, 255, 255, .4);

    transition: transform .15s ease-out;
    transform-style: preserve-3d;
}

/* SHINE EFFECT */
.profile-container::after {
    content: '';
    position: absolute;
    top: -20%;
    left: -150%;
    width: 60%;
    height: 160%;
    background: linear-gradient(120deg,
            transparent,
            rgba(255, 255, 255, .8),
            transparent);
    transform: rotate(25deg);
    animation: shine 5s infinite linear;
}

@keyframes shine {
    from {
        left: -150%;
    }

    to {
        left: 250%;
    }
}

/* TEXT */
.hero-content h1 {
    font-size: 4rem;
    margin-top: 25px;
    text-shadow: 0 5px 15px rgba(0, 0, 0, .5);
}

.hero-content p {
    margin-top: 15px;
    font-size: 1.2rem;
    max-width: 700px;
    line-height: 1.8;
}

/* BUTTON */
.hero-btn {
    margin-top: 25px;
    padding: 14px 35px;
    border: none;
    border-radius: 50px;
    background: white;
    color: #111;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: .3s;
}

.hero-btn:hover {
    transform: translateY(-5px);
}

/* CURSOR STARS */
.star {
    position: absolute;
    color: white;
    font-size: 14px;
    pointer-events: none;
    z-index: 999;

    text-shadow:
        0 0 5px #fff,
        0 0 10px #fff,
        0 0 20px gold;

    animation: starMove 1.2s linear forwards;
}

@keyframes starMove {
    0% {
        opacity: 1;
        transform: translate(0, 0) scale(1);
    }

    100% {
        opacity: 0;
        transform:
            translate(calc(var(--x) * 1px),
                calc(var(--y) * 1px)) scale(0);
    }
}

/* MOBILE */
@media(max-width:768px) {

    .profile-img {
        width: 160px;
        height: 160px;
    }

    .hero-content h1 {
        font-size: 2.3rem;
    }

    .hero-content p {
        font-size: 1rem;
    }

}


/* ==========================
   ABOUT SECTION
========================== */

.about-section {
    padding: 100px 8%;
    background: #0f172a;
    color: #fff;
}

.about-container {
    max-width: 1200px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 60px;
    flex-wrap: wrap;
}

.about-image {
    flex: 1;
    min-width: 300px;
    text-align: center;
}

.about-image img {
    width: 350px;
    max-width: 100%;
    border-radius: 25px;

    box-shadow:
        0 20px 40px rgba(0, 0, 0, .4),
        0 0 30px rgba(255, 255, 255, .1);

    transition: .4s;
}

.about-image img:hover {
    transform: scale(1.05);
}

.about-content {
    flex: 1;
    min-width: 300px;
}

.section-tag {
    color: #38bdf8;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
}

.about-content h2 {
    font-size: 3rem;
    margin: 15px 0 25px;
}

.about-content p {
    color: #cbd5e1;
    font-size: 1.05rem;
    line-height: 1.9;
    margin-bottom: 20px;
}

.about-btn {
    display: inline-block;
    margin-top: 10px;
    padding: 14px 35px;
    background: #38bdf8;
    color: #fff;
    text-decoration: none;
    border-radius: 50px;
    font-weight: 600;
    transition: .3s;
}

.about-btn:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(56, 189, 248, .4);
}

/* MOBILE */

@media(max-width:768px) {

    .about-container {
        flex-direction: column;
        text-align: center;
    }

    .about-content h2 {
        font-size: 2.3rem;
    }

}

/* ===== NAVBAR ===== */

.navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 18px 8%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    background: rgba(15, 23, 42, .85);
    backdrop-filter: blur(10px);

    z-index: 1000;
}

.logo {
    font-size: 28px;
    font-weight: 700;
}

.nav-links {
    display: flex;
    gap: 30px;
    list-style: none;
}

.nav-links a {
    text-decoration: none;
    color: #fff;
    transition: .3s;
    font-weight: 500;
}

.nav-links a:hover {
    color: #38bdf8;
}

/* ===== SKILLS ===== */

.skills-section {
    padding: 100px 8%;
    background: #111827;
    color: #fff;
}

.section-header {
    text-align: center;
    margin-bottom: 60px;
}

.section-header .section-tag {
    color: #38bdf8;
    font-weight: 600;
    letter-spacing: 2px;
}

.section-header h2 {
    font-size: 3rem;
    margin: 15px 0;
}

.section-header p {
    color: #cbd5e1;
}

.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 25px;
}

.skill-card {
    background: #1e293b;
    padding: 30px;
    border-radius: 20px;
    transition: .4s;
    border: 1px solid rgba(255, 255, 255, .05);
}

.skill-card:hover {
    transform: translateY(-10px);
    border-color: #38bdf8;
    box-shadow: 0 15px 35px rgba(56, 189, 248, .15);
}

.skill-card h3 {
    color: #38bdf8;
    margin-bottom: 10px;
}

.skill-card p {
    color: #cbd5e1;
    line-height: 1.7;
}

/* ==========================
   EXPERIENCE SECTION
========================== */

.experience-section {
    padding: 100px 8%;
    background: #0f172a;
    color: #fff;
}

.timeline {
    max-width: 900px;
    margin: 60px auto 0;
    position: relative;
}

.timeline::before {
    content: '';
    position: absolute;
    left: 20px;
    top: 0;
    width: 3px;
    height: 100%;
    background: #38bdf8;
}

.timeline-item {
    position: relative;
    padding-left: 70px;
    margin-bottom: 40px;
}

.timeline-item::before {
    content: '';
    position: absolute;
    left: 11px;
    top: 8px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #38bdf8;
    box-shadow: 0 0 15px #38bdf8;
}

.timeline-content {
    background: #1e293b;
    padding: 30px;
    border-radius: 20px;
    transition: .3s;
}

.timeline-content:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(56, 189, 248, .15);
}

.year {
    display: inline-block;
    color: #38bdf8;
    font-weight: 600;
    margin-bottom: 10px;
}

.timeline-content h3 {
    margin-bottom: 15px;
}

.timeline-content p {
    color: #cbd5e1;
    line-height: 1.8;
}

/* MOBILE */

@media(max-width:768px) {

    .timeline::before {
        left: 10px;
    }

    .timeline-item {
        padding-left: 40px;
    }

    .timeline-item::before {
        left: 1px;
    }

}

/* ===== CONTACT ===== */

.contact {
    padding: 100px 8%;
}

.contact h2 {
    text-align: center;
    margin-bottom: 40px;
    font-size: 3rem;
}

.contact-form {
    max-width: 700px;
    margin: auto;
}

.contact-form input,
.contact-form textarea {
    width: 100%;
    padding: 15px;
    margin-bottom: 15px;
    border: none;
    border-radius: 10px;
    background: #1e293b;
    color: #fff;
}

.contact-form button {
    padding: 15px 35px;
    border: none;
    border-radius: 50px;
    background: #38bdf8;
    color: #fff;
    cursor: pointer;
}

/* ===== FOOTER ===== */

footer {
    padding: 20px;
    text-align: center;
    background: #111827;
}

/* ===== MOBILE ===== */

@media(max-width:768px) {

    .navbar {
        flex-direction: column;
        gap: 15px;
    }

    .nav-links {
        flex-wrap: wrap;
        justify-content: center;
        gap: 15px;
    }

    .hero-content h1 {
        font-size: 2.5rem;
    }

    .about-container {
        flex-direction: column;
        text-align: center;
    }

    .about-content h2,
    .skills h2,
    .experience h2,
    .contact h2 {
        font-size: 2.2rem;
    }

}

/* ==========================
   EDUCATION SECTION
========================== */

.education-section {
    padding: 100px 8%;
    background: #111827;
    color: #fff;
}

.education-timeline {
    max-width: 1000px;
    margin: 60px auto 0;
    display: grid;
    gap: 30px;
}

.education-card {
    background: #1e293b;
    padding: 30px;
    border-radius: 20px;
    border-left: 4px solid #38bdf8;
    transition: .3s;
}

.education-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(56, 189, 248, .15);
}

.edu-year {
    display: inline-block;
    color: #38bdf8;
    font-weight: 600;
    margin-bottom: 10px;
}

.education-card h3 {
    margin-bottom: 8px;
}

.education-card h4 {
    color: #cbd5e1;
    margin-bottom: 15px;
    font-weight: 500;
}

.education-card p {
    color: #cbd5e1;
    line-height: 1.8;
}
  </style>
</head>

<body>

    <!-- NAVBAR -->
    <nav class="navbar">

        <div class="logo">
            Portfolio
        </div>

        <ul class="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>

    </nav>


    <section class="hero" id="home">

        <!-- Background Stars -->
        <div class="stars" id="stars"></div>

        <div class="hero-content">

            <div class="profile-container">
                <!-- Replace with your image -->
                <img src="assets/image/passport_image_chinky.png"
                    class="profile-img"
                    alt="Profile">
            </div>

            <h1>Padmaja Priyadarshini</h1>

            <p>
                Full Stack Developer • Backend Developer • Creative Thinker
                <br>
                Creating beautiful and modern web experiences.
            </p>

            <!-- <button class="hero-btn">
                Explore More
            </button> -->

        </div>

    </section>

    <!-- ABOUT -->
    <section class="about-section" id="about">

        <div class="about-container">

            <div class="about-image">
                <img src="assets/image/passport_image_chinky.png" alt="About Me">
            </div>

            <div class="about-content">

                <span class="section-tag">Who Am I</span>

                <h2>About Me</h2>

                <p>
                    Hello! I'm a passionate Full Stack Developer with experience
                    in creating responsive websites, web applications, and modern
                    digital experiences. I enjoy turning ideas into reality using
                    clean code and innovative solutions.
                </p>

                <p>
                    My expertise includes HTML, CSS, JavaScript, PHP, MySQL,
                    Bootstrap, and modern web technologies. I focus on building
                    user-friendly, scalable, and visually appealing applications
                    that deliver real value.
                </p>

                <p>
                    Beyond coding, I love learning new technologies, solving
                    challenging problems, and continuously improving my skills to
                    stay ahead in the ever-evolving tech world.
                </p>

                <a href="#" class="about-btn">Download Resume</a>

            </div>

        </div>

    </section>


    <section class="education-section" id="education">

        <!-- Education -->
        <div class="section-header">
            <span class="section-tag">ACADEMIC BACKGROUND</span>
            <h2>Education</h2>
            <p>My educational qualifications and academic achievements.</p>
        </div>

        <div class="education-timeline">

            <div class="education-card">
                <span class="edu-year">2021</span>
                <h3>Master in Psychology</h3>
                <h4>Indira Gandhi National Open University (IGNOU)</h4>
                <p>
                    Successfully completed a Master's degree in Psychology,
                    gaining advanced knowledge in human behavior, counseling,
                    research methodologies, and psychological assessment.
                </p>
            </div>

            <div class="education-card">
                <span class="edu-year">2016</span>
                <h3>Bachelor of Arts (B.A.)</h3>
                <h4>Maharshi Women's College</h4>
                <p>
                    Completed undergraduate studies with a strong academic
                    foundation, developing analytical thinking, communication,
                    and problem-solving skills.
                </p>
            </div>

            <div class="education-card">
                <span class="edu-year">2013</span>
                <h3>Intermediate (+2)</h3>
                <h4>Maharshi Women's College</h4>
                <p>
                    Successfully completed higher secondary education,
                    building a solid foundation for higher studies and
                    professional growth.
                </p>
            </div>

            <div class="education-card">
                <span class="edu-year">2011</span>
                <h3>Matriculation (10th)</h3>
                <h4>Railway Colony High School</h4>
                <p>
                    Completed secondary education with a strong academic
                    background and commitment to continuous learning.
                </p>
            </div>

        </div>


    </section>


    <!-- SKILLS -->

    <section class="skills-section" id="skills">

        <div class="section-header">
            <span class="section-tag">MY SKILLS</span>
            <h2>Technical Skills</h2>
            <p>Technologies and tools I use to build modern web applications.</p>
        </div>

        <div class="skills-grid">

            <div class="skill-card">
                <h3>HTML5</h3>
                <p>Semantic and responsive web structures.</p>
            </div>

            <div class="skill-card">
                <h3>CSS3</h3>
                <p>Modern layouts, animations, Flexbox & Grid.</p>
            </div>

            <div class="skill-card">
                <h3>JavaScript</h3>
                <p>Interactive and dynamic user interfaces.</p>
            </div>

            <div class="skill-card">
                <h3>jQuery</h3>
                <p>DOM manipulation and AJAX functionality.</p>
            </div>

            <div class="skill-card">
                <h3>Bootstrap</h3>
                <p>Responsive and mobile-first UI development.</p>
            </div>

            <div class="skill-card">
                <h3>PHP</h3>
                <p>Backend development and server-side scripting.</p>
            </div>

            <div class="skill-card">
                <h3>MySQL</h3>
                <p>Database design, queries and optimization.</p>
            </div>

            <div class="skill-card">
                <h3>AJAX</h3>
                <p>Asynchronous requests without page reloads.</p>
            </div>

            <div class="skill-card">
                <h3>Authentication System</h3>
                <p>Login, Registration, OTP & Password Recovery.</p>
            </div>

            <div class="skill-card">
                <h3>REST APIs</h3>
                <p>API integration and data exchange.</p>
            </div>

            <div class="skill-card">
                <h3>Git & GitHub</h3>
                <p>Version control and project collaboration.</p>
            </div>

            <div class="skill-card">
                <h3>Full Stack Development</h3>
                <p>End-to-end web application development.</p>
            </div>

        </div>

    </section>
    <!-- EXPERIENCE -->


    <section class="experience-section" id="experience">

        <div class="section-header">
            <span class="section-tag">MY JOURNEY</span>
            <h2>Experience</h2>
            <p>Professional experience and technical contributions.</p>
        </div>

        <div class="timeline">

            <div class="timeline-item">
                <div class="timeline-content">

                    <span class="year">2024 - Present</span>

                    <h3>Full Stack Developer</h3>

                    <p>
                        Developed and maintained dynamic web applications using
                        HTML, CSS, JavaScript, PHP, and MySQL. Built responsive
                        user interfaces, optimized database performance, and
                        implemented secure authentication systems including login,
                        registration, OTP verification, and password recovery.
                    </p>

                </div>
            </div>

            <div class="timeline-item">
                <div class="timeline-content">

                    <span class="year">Project Experience</span>

                    <h3>Web Application Development</h3>

                    <p>
                        Designed and developed complete web solutions from frontend
                        to backend. Worked with AJAX, Bootstrap, MySQL databases,
                        form validations, API integration, and user management
                        systems to create scalable and user-friendly applications.
                    </p>

                </div>
            </div>

            <div class="timeline-item">
                <div class="timeline-content">

                    <span class="year">Technical Expertise</span>

                    <h3>Backend Development</h3>

                    <p>
                        Strong experience in backend development using PHP and MySQL,
                        focusing on building secure, scalable, and database-driven web
                        applications. Skilled in designing and managing relational
                        databases, developing authentication and authorization systems,
                        implementing CRUD operations, handling form validations, and
                        integrating AJAX-based functionalities for seamless user
                        experiences.
                    </p>

                    <ul>
                        <li>PHP Application Development</li>
                        <li>MySQL Database Design & Management</li>
                        <li>User Authentication & Authorization</li>
                        <li>Login, Registration & Password Recovery Systems</li>
                        <li>OTP Verification & Session Management</li>
                        <li>CRUD Operations & Data Processing</li>
                        <li>AJAX Integration & Dynamic Content Loading</li>
                        <li>REST API Integration</li>
                        <li>Database Query Optimization</li>
                        <li>Admin Panel & Dashboard Development</li>
                    </ul>

                </div>
            </div>

        </div>

    </section>

    <!-- CONTACT -->
    <section class="contact" id="contact">

        <h2>Contact Me</h2>

        <form class="contact-form">

            <input type="text" placeholder="Your Name">

            <input type="email" placeholder="Your Email">

            <textarea rows="6" placeholder="Your Message"></textarea>

            <button type="submit">
                Send Message
            </button>

        </form>

    </section>

    <footer>
        © 2026 Padmaja Priyadarshini | All Rights Reserved
    </footer>

    <script>
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
});</script>

</body>

</html>
