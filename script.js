// Digital Theme Park - Psychological Manipulation Engine
class DigitalThemePark {
    constructor() {
        this.currentTaglineIndex = 0;
        this.taglines = [
            "Productivity is a prison. Here's your key.",
            "You came for focus. You'll leave questioning reality.",
            "Enter the dopamine zone.",
            "Where time goes to get lost."
        ];
        this.boothExperiences = {
            chaosbot: {
                title: "🎭 ChaosBot - The Oracle of Nonsense",
                content: `
                    <div class="chaos-experience">
                        <p>Welcome to the realm of calculated chaos. I am ChaosBot, your digital oracle of absolute nonsense.</p>
                        <div class="prediction-box">
                            <h4>🔮 Your Prediction:</h4>
                            <p id="chaosPrediction">Loading your destiny...</p>
                        </div>
                        <button id="getPrediction" class="chaos-btn">🎲 Get Random Nonsense</button>
                        <div class="chaos-stats">
                            <p>Predictions made: <span id="predictionCount">0</span></p>
                            <p>Reality distortions: <span id="distortionCount">0</span></p>
                        </div>
                    </div>
                `
            },
            timewaster: {
                title: "🌀 TimeWaster - The Time Sinkhole",
                content: `
                    <div class="time-experience">
                        <p>You thought you were being productive. How adorable.</p>
                        <div class="time-display">
                            <h4>⏰ Time Wasted Here:</h4>
                            <div class="timer" id="wasteTimer">00:00:00</div>
                        </div>
                        <div class="time-activities">
                            <button class="time-btn" data-time="30">Waste 30 seconds</button>
                            <button class="time-btn" data-time="60">Waste 1 minute</button>
                            <button class="time-btn" data-time="300">Waste 5 minutes</button>
                        </div>
                        <div class="time-achievements">
                            <h4>🏆 Achievements:</h4>
                            <ul id="achievementsList">
                                <li>First step into the void</li>
                            </ul>
                        </div>
                    </div>
                `
            },
            leavepage: {
                title: "👁 Leave Page - The Abandonment Exhibit",
                content: `
                    <div class="escape-experience">
                        <p>Try to escape. Just try. We dare you.</p>
                        <div class="escape-attempts">
                            <h4>🚪 Escape Attempts:</h4>
                            <p id="escapeCount">0 failed attempts</p>
                        </div>
                        <div class="escape-buttons">
                            <button class="escape-btn" data-method="close">Close Tab</button>
                            <button class="escape-btn" data-method="back">Go Back</button>
                            <button class="escape-btn" data-method="home">Go Home</button>
                            <button class="escape-btn" data-method="new">New Tab</button>
                        </div>
                        <div class="escape-message" id="escapeMessage">
                            <p>Every attempt brings you deeper into the carnival...</p>
                        </div>
                    </div>
                `
            },
            makeok: {
                title: "✅ Make Everything OK - The Illusion Chamber",
                content: `
                    <div class="illusion-experience">
                        <p>All problems solved. Just not yours.</p>
                        <div class="problem-solver">
                            <h4>🔧 Problem Solver:</h4>
                            <input type="text" id="problemInput" placeholder="Describe your problem..." class="problem-input">
                            <button id="solveProblem" class="solve-btn">✨ Make It OK</button>
                        </div>
                        <div class="solutions-list" id="solutionsList">
                            <h4>🎯 Solutions Generated:</h4>
                            <ul>
                                <li>Everything is fine now</li>
                            </ul>
                        </div>
                        <div class="illusion-meter">
                            <h4>🌈 Illusion Level:</h4>
                            <div class="meter-bar">
                                <div class="meter-fill" id="illusionMeter"></div>
                            </div>
                            <p id="illusionLevel">Reality: 100% intact</p>
                        </div>
                    </div>
                `
            }
        };
        this.init();
    }

    init() {
        this.setupCursorTrail();
        this.setupTaglineRotator();
        this.setupEventListeners();
        this.setupBoothInteractions();
        this.startAmbientEffects();
    }

    // Custom cursor trail effect
    setupCursorTrail() {
        const cursor = document.querySelector('.cursor-trail');
        let mouseX = 0, mouseY = 0;
        let cursorX = 0, cursorY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        const animateCursor = () => {
            const dx = mouseX - cursorX;
            const dy = mouseY - cursorY;
            
            cursorX += dx * 0.1;
            cursorY += dy * 0.1;
            
            cursor.style.left = cursorX - 10 + 'px';
            cursor.style.top = cursorY - 10 + 'px';
            
            requestAnimationFrame(animateCursor);
        };
        animateCursor();
    }

    // Rotating taglines for psychological manipulation
    setupTaglineRotator() {
        const taglines = document.querySelectorAll('.tagline');
        
        setInterval(() => {
            taglines.forEach(tagline => tagline.classList.remove('active'));
            this.currentTaglineIndex = (this.currentTaglineIndex + 1) % taglines.length;
            taglines[this.currentTaglineIndex].classList.add('active');
        }, 4000);
    }

    // Main event listeners
    setupEventListeners() {
        // Portal button
        const portalBtn = document.getElementById('enterCarnival');
        portalBtn.addEventListener('click', () => {
            this.createConfetti();
            this.smoothScrollTo('#parkMap');
        });

        // Modal close
        const modal = document.getElementById('boothModal');
        const modalClose = document.getElementById('modalClose');
        
        modalClose.addEventListener('click', () => {
            modal.classList.remove('active');
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });

        // Booth interactions
        document.querySelectorAll('.booth').forEach(booth => {
            booth.addEventListener('click', (e) => {
                const boothType = booth.dataset.booth;
                this.openBoothExperience(boothType);
                this.createConfetti();
            });
        });
    }

    // Smooth scroll with psychological manipulation
    smoothScrollTo(target) {
        const targetElement = document.querySelector(target);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }

    // Confetti explosion for dopamine hits
    createConfetti() {
        const container = document.getElementById('confettiContainer');
        const colors = ['#39FF14', '#FF00FF', '#00FFFF', '#FFD700'];
        
        for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = Math.random() * 2 + 's';
            confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
            
            container.appendChild(confetti);
            
            setTimeout(() => {
                confetti.remove();
            }, 5000);
        }
    }

    // Open booth experience modal
    openBoothExperience(boothType) {
        const modal = document.getElementById('boothModal');
        const modalTitle = document.getElementById('modalTitle');
        const modalBody = document.getElementById('modalBody');
        
        const experience = this.boothExperiences[boothType];
        modalTitle.textContent = experience.title;
        modalBody.innerHTML = experience.content;
        
        modal.classList.add('active');
        
        // Initialize booth-specific functionality
        this.initializeBoothFunctionality(boothType);
    }

    // Initialize specific booth functionality
    initializeBoothFunctionality(boothType) {
        switch(boothType) {
            case 'chaosbot':
                this.initChaosBot();
                break;
            case 'timewaster':
                this.initTimeWaster();
                break;
            case 'leavepage':
                this.initLeavePage();
                break;
            case 'makeok':
                this.initMakeEverythingOK();
                break;
        }
    }

    // ChaosBot - Oracle of Nonsense
    initChaosBot() {
        const predictions = [
            "You will find exactly what you're not looking for.",
            "Tomorrow will be exactly like today, but different.",
            "A mysterious package will arrive. It will be empty.",
            "You will meet someone who knows your name. You won't know theirs.",
            "Your next meal will taste exactly like your last thought.",
            "Time will move faster than usual, but slower than expected.",
            "You will discover something you already knew.",
            "A door will open. It leads to another door.",
            "Your reflection will wink at you. You won't wink back.",
            "Everything will make sense until it doesn't."
        ];

        const getPredictionBtn = document.getElementById('getPrediction');
        const predictionText = document.getElementById('chaosPrediction');
        const predictionCount = document.getElementById('predictionCount');
        const distortionCount = document.getElementById('distortionCount');
        
        let count = 0;
        let distortions = 0;

        getPredictionBtn.addEventListener('click', () => {
            count++;
            distortions += Math.floor(Math.random() * 5) + 1;
            
            predictionCount.textContent = count;
            distortionCount.textContent = distortions;
            
            predictionText.textContent = predictions[Math.floor(Math.random() * predictions.length)];
            
            this.createConfetti();
            this.addGlitchEffect(predictionText);
        });
    }

    // TimeWaster - The Time Sinkhole
    initTimeWaster() {
        const timer = document.getElementById('wasteTimer');
        const timeBtns = document.querySelectorAll('.time-btn');
        const achievementsList = document.getElementById('achievementsList');
        
        let seconds = 0;
        let achievements = ['First step into the void'];
        
        // Timer
        setInterval(() => {
            seconds++;
            const hours = Math.floor(seconds / 3600);
            const minutes = Math.floor((seconds % 3600) / 60);
            const secs = seconds % 60;
            timer.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        }, 1000);

        // Time waste buttons
        timeBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const time = parseInt(btn.dataset.time);
                seconds += time;
                
                // Add achievements
                if (seconds > 60 && !achievements.includes('Time Bandit')) {
                    achievements.push('Time Bandit');
                }
                if (seconds > 300 && !achievements.includes('Void Walker')) {
                    achievements.push('Void Walker');
                }
                if (seconds > 600 && !achievements.includes('Eternal Wanderer')) {
                    achievements.push('Eternal Wanderer');
                }
                
                this.updateAchievements(achievementsList, achievements);
                this.createConfetti();
            });
        });
    }

    // Leave Page - The Abandonment Exhibit
    initLeavePage() {
        const escapeBtns = document.querySelectorAll('.escape-btn');
        const escapeCount = document.getElementById('escapeCount');
        const escapeMessage = document.getElementById('escapeMessage');
        
        let attempts = 0;
        const messages = [
            "Nice try. You're still here.",
            "The carnival doesn't let go easily.",
            "Escape is just another illusion.",
            "You're getting warmer... to staying.",
            "The door is locked from the inside.",
            "Reality is overrated anyway."
        ];

        escapeBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                attempts++;
                escapeCount.textContent = `${attempts} failed attempts`;
                
                const randomMessage = messages[Math.floor(Math.random() * messages.length)];
                escapeMessage.innerHTML = `<p>${randomMessage}</p>`;
                
                this.createConfetti();
                this.addGlitchEffect(escapeMessage);
                
                // Simulate "escape" attempts
                setTimeout(() => {
                    if (btn.dataset.method === 'close') {
                        alert('Just kidding! You can\'t leave that easily.');
                    } else if (btn.dataset.method === 'back') {
                        history.pushState(null, '', window.location.href);
                    } else if (btn.dataset.method === 'home') {
                        window.location.href = window.location.href;
                    } else if (btn.dataset.method === 'new') {
                        window.open(window.location.href, '_blank');
                    }
                }, 100);
            });
        });
    }

    // Make Everything OK - The Illusion Chamber
    initMakeEverythingOK() {
        const problemInput = document.getElementById('problemInput');
        const solveBtn = document.getElementById('solveProblem');
        const solutionsList = document.getElementById('solutionsList');
        const illusionMeter = document.getElementById('illusionMeter');
        const illusionLevel = document.getElementById('illusionLevel');
        
        let illusionPercentage = 100;
        const solutions = [
            "Everything is fine now",
            "Problem solved (not really)",
            "It's all in your head",
            "Just think positive thoughts",
            "Have you tried turning it off and on again?",
            "This too shall pass (into something else)",
            "It's not a bug, it's a feature",
            "Just ignore it until it goes away",
            "Everything happens for a reason (probably)",
            "You're doing great (at avoiding reality)"
        ];

        solveBtn.addEventListener('click', () => {
            const problem = problemInput.value.trim();
            if (problem) {
                const randomSolution = solutions[Math.floor(Math.random() * solutions.length)];
                const newSolution = document.createElement('li');
                newSolution.textContent = randomSolution;
                solutionsList.querySelector('ul').appendChild(newSolution);
                
                illusionPercentage = Math.max(0, illusionPercentage - 10);
                illusionMeter.style.width = illusionPercentage + '%';
                
                const levelTexts = [
                    'Reality: 100% intact',
                    'Reality: 90% intact',
                    'Reality: 80% intact',
                    'Reality: 70% intact',
                    'Reality: 60% intact',
                    'Reality: 50% intact',
                    'Reality: 40% intact',
                    'Reality: 30% intact',
                    'Reality: 20% intact',
                    'Reality: 10% intact',
                    'Reality: Completely shattered'
                ];
                
                illusionLevel.textContent = levelTexts[Math.floor((100 - illusionPercentage) / 10)];
                
                problemInput.value = '';
                this.createConfetti();
            }
        });
    }

    // Update achievements list
    updateAchievements(container, achievements) {
        container.innerHTML = '<h4>🏆 Achievements:</h4><ul>';
        achievements.forEach(achievement => {
            container.innerHTML += `<li>${achievement}</li>`;
        });
        container.innerHTML += '</ul>';
    }

    // Add glitch effect for psychological manipulation
    addGlitchEffect(element) {
        element.style.animation = 'glitch 0.3s ease';
        setTimeout(() => {
            element.style.animation = '';
        }, 300);
    }

    // Setup booth interactions
    setupBoothInteractions() {
        document.querySelectorAll('.booth').forEach(booth => {
            booth.addEventListener('mouseenter', () => {
                this.addHoverEffect(booth);
            });
            
            booth.addEventListener('mouseleave', () => {
                this.removeHoverEffect(booth);
            });
        });
    }

    // Add hover effects
    addHoverEffect(booth) {
        booth.style.transform = 'translateY(-10px) scale(1.02)';
        booth.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
    }

    // Remove hover effects
    removeHoverEffect(booth) {
        booth.style.transform = 'translateY(0) scale(1)';
        booth.style.boxShadow = 'none';
    }

    // Start ambient effects for psychological manipulation
    startAmbientEffects() {
        // Subtle background animations
        setInterval(() => {
            const orbs = document.querySelectorAll('.floating-orb');
            orbs.forEach(orb => {
                orb.style.filter = `blur(${Math.random() * 3 + 1}px)`;
            });
        }, 3000);

        // Random glitch effects
        setInterval(() => {
            if (Math.random() < 0.1) {
                this.addGlitchEffect(document.body);
            }
        }, 5000);
    }
}

// Initialize the Digital Theme Park when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new DigitalThemePark();
});

// Add CSS for glitch animation
const style = document.createElement('style');
style.textContent = `
    @keyframes glitch {
        0% { transform: translate(0); }
        20% { transform: translate(-2px, 2px); }
        40% { transform: translate(-2px, -2px); }
        60% { transform: translate(2px, 2px); }
        80% { transform: translate(2px, -2px); }
        100% { transform: translate(0); }
    }
    
    .chaos-btn, .time-btn, .escape-btn, .solve-btn {
        background: transparent;
        border: 2px solid #39FF14;
        color: #39FF14;
        padding: 0.8rem 1.5rem;
        margin: 0.5rem;
        cursor: pointer;
        transition: all 0.3s ease;
        border-radius: 5px;
        font-family: 'VT323', monospace;
    }
    
    .chaos-btn:hover, .time-btn:hover, .escape-btn:hover, .solve-btn:hover {
        background: rgba(57, 255, 20, 0.1);
        box-shadow: 0 0 20px rgba(57, 255, 20, 0.5);
        transform: scale(1.05);
    }
    
    .problem-input {
        width: 100%;
        padding: 0.8rem;
        background: rgba(26, 26, 26, 0.8);
        border: 2px solid #39FF14;
        color: #ffffff;
        border-radius: 5px;
        margin-bottom: 1rem;
        font-family: 'VT323', monospace;
    }
    
    .prediction-box, .time-display, .escape-attempts, .problem-solver {
        background: rgba(26, 26, 26, 0.5);
        padding: 1rem;
        border-radius: 10px;
        margin: 1rem 0;
        border: 1px solid #39FF14;
    }
    
    .timer {
        font-size: 2rem;
        font-family: 'Orbitron', monospace;
        color: #FF00FF;
        text-shadow: 0 0 10px rgba(255, 0, 255, 0.8);
    }
    
    .meter-bar {
        width: 100%;
        height: 20px;
        background: rgba(26, 26, 26, 0.8);
        border-radius: 10px;
        overflow: hidden;
        margin: 1rem 0;
    }
    
    .meter-fill {
        height: 100%;
        background: linear-gradient(90deg, #39FF14, #FF00FF);
        transition: width 0.5s ease;
        width: 100%;
    }
    
    .chaos-stats, .time-achievements, .solutions-list, .illusion-meter {
        margin-top: 1rem;
        padding: 1rem;
        background: rgba(26, 26, 26, 0.3);
        border-radius: 10px;
    }
    
    .chaos-stats p, .illusion-meter p {
        margin: 0.5rem 0;
        color: #cccccc;
    }
    
    .chaos-stats span, .illusion-meter span {
        color: #39FF14;
        font-weight: bold;
    }
`;
document.head.appendChild(style); 