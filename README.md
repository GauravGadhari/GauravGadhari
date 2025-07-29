<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gaurav Gadhari - Visionary AI Architect</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: #0a0a0a;
            color: #ffffff;
            overflow-x: hidden;
            scroll-behavior: smooth;
        }

        #three-canvas {
            position: fixed;
            top: 0;
            left: 0;
            z-index: 1;
            pointer-events: none;
        }

        .container {
            position: relative;
            z-index: 2;
            min-height: 100vh;
        }

        /* Hero Section */
        .hero {
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            position: relative;
            background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
        }

        .hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(circle at 30% 30%, rgba(0, 217, 255, 0.1) 0%, transparent 50%),
                        radial-gradient(circle at 70% 70%, rgba(255, 107, 53, 0.1) 0%, transparent 50%);
            animation: pulse 4s ease-in-out infinite alternate;
        }

        @keyframes pulse {
            0% { opacity: 0.5; }
            100% { opacity: 1; }
        }

        .hero-content {
            z-index: 3;
            position: relative;
        }

        .hero h1 {
            font-size: clamp(3rem, 8vw, 8rem);
            font-weight: 900;
            background: linear-gradient(45deg, #00d9ff, #ff6b35, #9333ea);
            background-size: 200% 200%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: gradientShift 3s ease-in-out infinite;
            margin-bottom: 1rem;
            text-shadow: 0 0 50px rgba(0, 217, 255, 0.3);
        }

        @keyframes gradientShift {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
        }

        .hero-subtitle {
            font-size: clamp(1.2rem, 3vw, 2rem);
            margin-bottom: 2rem;
            opacity: 0.9;
            font-weight: 300;
        }

        .typing-text {
            height: 80px;
            font-size: clamp(1rem, 2vw, 1.5rem);
            color: #00d9ff;
            font-weight: 500;
        }

        /* Navigation */
        .nav {
            position: fixed;
            top: 2rem;
            right: 2rem;
            z-index: 1000;
            display: flex;
            gap: 1rem;
        }

        .nav-item {
            padding: 0.8rem 1.5rem;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 50px;
            text-decoration: none;
            color: white;
            font-weight: 500;
            transition: all 0.3s ease;
            cursor: pointer;
        }

        .nav-item:hover {
            background: rgba(0, 217, 255, 0.2);
            transform: translateY(-2px);
            box-shadow: 0 10px 30px rgba(0, 217, 255, 0.3);
        }

        /* Sections */
        .section {
            padding: 8rem 2rem;
            max-width: 1400px;
            margin: 0 auto;
        }

        .section-title {
            font-size: clamp(2.5rem, 5vw, 4rem);
            font-weight: 800;
            text-align: center;
            margin-bottom: 4rem;
            background: linear-gradient(45deg, #00d9ff, #ff6b35);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        /* Tech Stack */
        .tech-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin-top: 3rem;
        }

        .tech-category {
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 20px;
            padding: 2rem;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }

        .tech-category::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(0, 217, 255, 0.1), transparent);
            transition: left 0.6s ease;
        }

        .tech-category:hover::before {
            left: 100%;
        }

        .tech-category:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px rgba(0, 217, 255, 0.2);
        }

        .tech-category h3 {
            font-size: 1.5rem;
            margin-bottom: 1rem;
            color: #00d9ff;
        }

        .tech-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
        }

        .tech-tag {
            padding: 0.5rem 1rem;
            background: rgba(0, 217, 255, 0.1);
            border: 1px solid rgba(0, 217, 255, 0.3);
            border-radius: 25px;
            font-size: 0.9rem;
            transition: all 0.3s ease;
        }

        .tech-tag:hover {
            background: rgba(0, 217, 255, 0.2);
            transform: scale(1.05);
        }

        /* Projects */
        .projects-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
            gap: 3rem;
            margin-top: 3rem;
        }

        .project-card {
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 25px;
            padding: 2.5rem;
            transition: all 0.4s ease;
            position: relative;
            overflow: hidden;
        }

        .project-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(90deg, #00d9ff, #ff6b35, #9333ea);
            background-size: 200% 100%;
            animation: gradientMove 3s linear infinite;
        }

        @keyframes gradientMove {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
        }

        .project-card:hover {
            transform: translateY(-15px) rotateX(5deg);
            box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3);
        }

        .project-title {
            font-size: 1.8rem;
            font-weight: 700;
            margin-bottom: 1rem;
            color: #00d9ff;
        }

        .project-desc {
            font-size: 1.1rem;
            line-height: 1.6;
            margin-bottom: 1.5rem;
            opacity: 0.9;
        }

        .project-tech {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            margin-bottom: 1.5rem;
        }

        .project-link {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.8rem 1.5rem;
            background: linear-gradient(45deg, #00d9ff, #0099cc);
            border: none;
            border-radius: 50px;
            color: white;
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s ease;
        }

        .project-link:hover {
            background: linear-gradient(45deg, #ff6b35, #cc5529);
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(255, 107, 53, 0.3);
        }

        /* Contact */
        .contact-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            margin-top: 3rem;
        }

        .contact-card {
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 20px;
            padding: 2rem;
            text-align: center;
            transition: all 0.3s ease;
            text-decoration: none;
            color: white;
        }

        .contact-card:hover {
            transform: translateY(-10px) scale(1.05);
            box-shadow: 0 20px 40px rgba(0, 217, 255, 0.2);
        }

        .contact-icon {
            font-size: 3rem;
            margin-bottom: 1rem;
        }

        /* Stats */
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 2rem;
            margin-top: 3rem;
        }

        .stat-card {
            background: linear-gradient(135deg, rgba(0, 217, 255, 0.1) 0%, rgba(255, 107, 53, 0.1) 100%);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 20px;
            padding: 2rem;
            text-align: center;
            transition: all 0.3s ease;
        }

        .stat-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 30px rgba(0, 217, 255, 0.2);
        }

        .stat-number {
            font-size: 3rem;
            font-weight: 900;
            color: #00d9ff;
            display: block;
        }

        .stat-label {
            font-size: 1.1rem;
            opacity: 0.8;
            margin-top: 0.5rem;
        }

        /* Interactive Elements */
        .floating-shapes {
            position: absolute;
            width: 100%;
            height: 100%;
            overflow: hidden;
            pointer-events: none;
        }

        .shape {
            position: absolute;
            opacity: 0.1;
            animation: float 6s ease-in-out infinite;
        }

        .shape:nth-child(1) {
            top: 20%;
            left: 10%;
            animation-delay: 0s;
        }

        .shape:nth-child(2) {
            top: 60%;
            right: 10%;
            animation-delay: 2s;
        }

        .shape:nth-child(3) {
            bottom: 20%;
            left: 20%;
            animation-delay: 4s;
        }

        @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
        }

        /* Responsive */
        @media (max-width: 768px) {
            .nav {
                top: 1rem;
                right: 1rem;
                gap: 0.5rem;
            }

            .nav-item {
                padding: 0.6rem 1rem;
                font-size: 0.9rem;
            }

            .section {
                padding: 4rem 1rem;
            }

            .projects-grid {
                grid-template-columns: 1fr;
            }

            .tech-grid {
                grid-template-columns: 1fr;
            }
        }

        /* Smooth scrolling indicators */
        .scroll-indicator {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 4px;
            background: linear-gradient(90deg, #00d9ff, #ff6b35, #9333ea);
            transform-origin: 0%;
            z-index: 1001;
        }
    </style>
</head>
<body>
    <div class="scroll-indicator" id="scrollIndicator"></div>
    <canvas id="three-canvas"></canvas>
    
    <nav class="nav">
        <a href="#home" class="nav-item">Home</a>
        <a href="#about" class="nav-item">About</a>
        <a href="#projects" class="nav-item">Projects</a>
        <a href="#contact" class="nav-item">Contact</a>
    </nav>

    <div class="container">
        <!-- Hero Section -->
        <section id="home" class="hero">
            <div class="floating-shapes">
                <div class="shape" style="width: 100px; height: 100px; background: linear-gradient(45deg, #00d9ff, #0099cc); border-radius: 50%;"></div>
                <div class="shape" style="width: 80px; height: 80px; background: linear-gradient(45deg, #ff6b35, #cc5529); border-radius: 20%;"></div>
                <div class="shape" style="width: 120px; height: 120px; background: linear-gradient(45deg, #9333ea, #7c2d12); clip-path: polygon(50% 0%, 0% 100%, 100% 100%);"></div>
            </div>
            <div class="hero-content">
                <h1>GAURAV GADHARI</h1>
                <p class="hero-subtitle">VISIONARY AI ARCHITECT & FULL-STACK INNOVATOR</p>
                <div class="typing-text" id="typingText"></div>
            </div>
        </section>

        <!-- About Section -->
        <section id="about" class="section">
            <h2 class="section-title">Tech Arsenal</h2>
            
            <div class="stats-grid">
                <div class="stat-card">
                    <span class="stat-number" data-target="50">0</span>
                    <span class="stat-label">Projects Delivered</span>
                </div>
                <div class="stat-card">
                    <span class="stat-number" data-target="1000">0</span>
                    <span class="stat-label">App Downloads</span>
                </div>
                <div class="stat-card">
                    <span class="stat-number" data-target="10">0</span>
                    <span class="stat-label">Technologies Mastered</span>
                </div>
                <div class="stat-card">
                    <span class="stat-number" data-target="24">0</span>
                    <span class="stat-label">Coding Hours/Day</span>
                </div>
            </div>

            <div class="tech-grid">
                <div class="tech-category">
                    <h3>🚀 Frontend Mastery</h3>
                    <div class="tech-tags">
                        <span class="tech-tag">React</span>
                        <span class="tech-tag">Next.js</span>
                        <span class="tech-tag">TypeScript</span>
                        <span class="tech-tag">React Native</span>
                        <span class="tech-tag">Three.js</span>
                        <span class="tech-tag">Tailwind CSS</span>
                    </div>
                </div>
                <div class="tech-category">
                    <h3>⚡ Backend Excellence</h3>
                    <div class="tech-tags">
                        <span class="tech-tag">Node.js</span>
                        <span class="tech-tag">FastAPI</span>
                        <span class="tech-tag">Python</span>
                        <span class="tech-tag">Go</span>
                        <span class="tech-tag">Django</span>
                        <span class="tech-tag">Supabase</span>
                    </div>
                </div>
                <div class="tech-category">
                    <h3>🧠 AI & Machine Learning</h3>
                    <div class="tech-tags">
                        <span class="tech-tag">TensorFlow</span>
                        <span class="tech-tag">Groq API</span>
                        <span class="tech-tag">LLaMA 3</span>
                        <span class="tech-tag">OpenAI</span>
                        <span class="tech-tag">NLP</span>
                        <span class="tech-tag">Deep Learning</span>
                    </div>
                </div>
                <div class="tech-category">
                    <h3>☁️ DevOps & Cloud</h3>
                    <div class="tech-tags">
                        <span class="tech-tag">Docker</span>
                        <span class="tech-tag">Kubernetes</span>
                        <span class="tech-tag">AWS</span>
                        <span class="tech-tag">GCP</span>
                        <span class="tech-tag">CI/CD</span>
                        <span class="tech-tag">Vercel</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- Projects Section -->
        <section id="projects" class="section">
            <h2 class="section-title">Featured Innovations</h2>
            <div class="projects-grid">
                <div class="project-card">
                    <h3 class="project-title">🎯 21 Days Of Habit</h3>
                    <p class="project-desc">Revolutionary habit tracking app with AI-powered insights and beautiful animations. Built with React Native and deployed on Google Play Store.</p>
                    <div class="project-tech">
                        <span class="tech-tag">React Native</span>
                        <span class="tech-tag">TypeScript</span>
                        <span class="tech-tag">Expo</span>
                        <span class="tech-tag">AI Integration</span>
                    </div>
                    <a href="https://play.google.com/store/apps/details?id=com.light_computers.daysofhabbit" class="project-link" target="_blank">
                        🚀 Live on Play Store
                    </a>
                </div>

                <div class="project-card">
                    <h3 class="project-title">🧠 ClipMind</h3>
                    <p class="project-desc">AI-enhanced clipboard ecosystem with semantic understanding and workflow optimization. Powered by Groq API and LLaMA 3.</p>
                    <div class="project-tech">
                        <span class="tech-tag">React Native</span>
                        <span class="tech-tag">Groq API</span>
                        <span class="tech-tag">LLaMA 3</span>
                        <span class="tech-tag">AI/ML</span>
                    </div>
                    <a href="https://play.google.com/store/apps/details?id=com.lightcomputers.clipmind" class="project-link" target="_blank">
                        🧪 Beta Testing
                    </a>
                </div>

                <div class="project-card">
                    <h3 class="project-title">🌿 Daily Rise Wellness</h3>
                    <p class="project-desc">Next-generation e-commerce platform with lightning-fast performance and modern design aesthetics. Built for health & wellness ecosystem.</p>
                    <div class="project-tech">
                        <span class="tech-tag">Next.js</span>
                        <span class="tech-tag">TypeScript</span>
                        <span class="tech-tag">Tailwind CSS</span>
                        <span class="tech-tag">E-commerce</span>
                    </div>
                    <a href="https://daily-rise-wellness.vercel.app/" class="project-link" target="_blank">
                        ✅ Live Demo
                    </a>
                </div>

                <div class="project-card">
                    <h3 class="project-title">🎓 Knowledge Hub</h3>
                    <p class="project-desc">Educational content platform with AI/ML tutorials, React Native guides, and system design patterns. Philosophy: "Knowledge shared is multiplied"</p>
                    <div class="project-tech">
                        <span class="tech-tag">Next.js</span>
                        <span class="tech-tag">MDX</span>
                        <span class="tech-tag">Education</span>
                        <span class="tech-tag">Content Creation</span>
                    </div>
                    <a href="https://gaurav-gadhari.vercel.app/tutorials" class="project-link" target="_blank">
                        📚 Visit Hub
                    </a>
                </div>
            </div>
        </section>

        <!-- Contact Section -->
        <section id="contact" class="section">
            <h2 class="section-title">Connect with the Architect</h2>
            <div class="contact-grid">
                <a href="https://gaurav-gadhari.vercel.app" class="contact-card" target="_blank">
                    <div class="contact-icon">🌐</div>
                    <h3>Portfolio</h3>
                    <p>Explore my digital universe</p>
                </a>
                <a href="mailto:gauravgadhari39@gmail.com" class="contact-card">
                    <div class="contact-icon">📧</div>
                    <h3>Email</h3>
                    <p>Let's build something amazing</p>
                </a>
                <a href="https://www.linkedin.com/in/gaurav-gadhari-579558275/" class="contact-card" target="_blank">
                    <div class="contact-icon">💼</div>
                    <h3>LinkedIn</h3>
                    <p>Professional networking</p>
                </a>
                <a href="https://x.com/AGauravHere" class="contact-card" target="_blank">
                    <div class="contact-icon">🐦</div>
                    <h3>Twitter</h3>
                    <p>Tech thoughts & insights</p>
                </a>
                <a href="https://www.youtube.com/@codewithgaurav37" class="contact-card" target="_blank">
                    <div class="contact-icon">📺</div>
                    <h3>YouTube</h3>
                    <p>Coding tutorials & tips</p>
                </a>
                <a href="https://www.instagram.com/a_gaurav_here/" class="contact-card" target="_blank">
                    <div class="contact-icon">📸</div>
                    <h3>Instagram</h3>
                    <p>Behind the scenes</p>
                </a>
            </div>
        </section>
    </div>

    <script>
        // Three.js Background Animation
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('three-canvas'), alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);

        // Create particles
        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = 1000;
        const posArray = new Float32Array(particlesCount * 3);

        for (let i = 0; i < particlesCount * 3; i++) {
            posArray[i] = (Math.random() - 0.5) * 100;
        }

        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.8,
            color: 0x00d9ff,
            transparent: true,
            opacity: 0.6
        });

        const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particlesMesh);

        camera.position.z = 50;

        // Animation loop
        function animate() {
            requestAnimationFrame(animate);
            particlesMesh.rotation.x += 0.001;
            particlesMesh.rotation.y += 0.002;
            renderer.render(scene, camera);
        }
        animate();

        // Typing Animation
        const typingTexts = [
            "Architecting Tomorrow's Digital Landscape",
            "Building AI-Powered Ecosystems", 
            "Crafting Revolutionary User Experiences",
            "Transforming Ideas into Reality",
            "Leading the Future of Technology"
        ];

        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        const typingElement = document.getElementById('typingText');

        function typeText() {
            const currentText = typingTexts[textIndex];
            
            if (isDeleting) {
                typingElement.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingElement.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
            }

            let typeSpeed = isDeleting ? 50 : 100;

            if (!isDeleting && charIndex === currentText.length) {
                typeSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % typingTexts.length;
                typeSpeed = 500;
            }

            setTimeout(typeText, typeSpeed);
        }

        typeText();

        // Scroll Indicator
        window.addEventListener('scroll', () => {
            const scrollTop = document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrollPercent = (scrollTop / scrollHeight) * 100;
            document.getElementById('scrollIndicator').style.transform = `scaleX(${scrollPercent / 100})`;
        });

        // Smooth scrolling for navigation
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(item.getAttribute('href'));
                target.scrollIntoView({ behavior: 'smooth' });
            });
        });

        // Animated counters
        function animateCounters() {
            const counters = document.querySelectorAll('.stat-number');
            counters.forEach(counter => {
                const target = parseInt(counter.getAttribute('data-target'));
                const increment = target / 100;
                let current = 0;
                
                const timer = setInterval(() => {
                    current += increment;
                    counter.textContent = Math.floor(current);
                    
                    if (current >= target) {
                        counter.textContent = target;
                        clearInterval(timer);
                    }
                }, 20);
            });
        }

        // Intersection Observer for animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target.querySelector('.stat-number')) {
                        animateCounters();
                    }
                }
            });
        });

        document.querySelectorAll('.section').forEach(section => {
            observer.observe(section);
        });

        // Responsive Three.js
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });

        // Interactive hover effects
        document.querySelectorAll('.project-card, .tech-category, .contact-card').forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;
                
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px
