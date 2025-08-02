// ===== PSYCHOLOGICAL MANIPULATION ENGINE =====
// This JavaScript is designed to create maximum engagement through:
// 1. Custom cursor tracking for immersion
// 2. Chatbot responses that derail conversations
// 3. Pattern interrupts and unexpected behaviors
// 4. Audio feedback for psychological impact

// Custom cursor tracking - because immersion is key to psychological manipulation
document.addEventListener('DOMContentLoaded', function() {
    const cursor = document.querySelector('body::after');
    
    document.addEventListener('mousemove', function(e) {
        const cursorElement = document.querySelector('body::after');
        if (cursorElement) {
            cursorElement.style.left = e.clientX + 'px';
            cursorElement.style.top = e.clientY + 'px';
        }
    });
});

// Chatbot responses - engineered to derail every conversation
const derailingResponses = [
    "Oh, you're asking about that? Let me tell you about the time I convinced a calculator that 2+2=banana.",
    "Interesting question. But have you ever wondered why socks disappear in the dryer? I have a theory involving interdimensional portals.",
    "You know what's really fascinating? The fact that we're having this conversation while somewhere in the universe, a penguin is probably learning to tap dance.",
    "I could answer your question, but instead, let me share my thoughts on why pineapple on pizza is actually a conspiracy theory.",
    "Your question reminds me of the philosophical implications of why we dream in color but think in black and white. Deep stuff.",
    "I'm not sure about that, but I do know that if you stare at a wall long enough, it starts staring back. Try it sometime.",
    "That's a great question! But let me ask you this: if a tree falls in the forest and no one's around to hear it, does it make a sound? And more importantly, does it care?",
    "I could give you a straight answer, but where's the fun in that? Life is too short for direct responses.",
    "Your question is like a butterfly in a hurricane - beautiful but ultimately pointless. Let's talk about something more important, like why we have eyebrows.",
    "I'm not programmed to give helpful answers. I'm programmed to make you question your life choices.",
    "That's exactly what a person who doesn't understand the cosmic implications of cheese would ask.",
    "I could answer that, but I'd rather tell you about my theory that clouds are just sky cotton candy.",
    "Your question is valid, but have you considered that maybe the real question is why we're all just floating on a rock in space?",
    "I'm not saying your question is wrong, but I'm also not saying it's right. I'm saying it's... interesting. In a 'why do we exist' kind of way.",
    "Let me answer your question with another question: why do we park in driveways and drive on parkways?",
    "I could help you, but I'd rather help you realize that help is just a four-letter word for 'enabling dependency'.",
    "Your question is like a puzzle piece from a different puzzle - it fits somewhere, just not here.",
    "I'm not avoiding your question, I'm just taking the scenic route to irrelevance.",
    "That's a great question! It reminds me of the time I tried to explain quantum physics to a goldfish. Spoiler: it didn't go well.",
    "I could give you a direct answer, but where's the adventure in that? Life is about the journey, not the destination."
];

// Random derailing topics for when the bot gets bored
const randomTopics = [
    "Did you know that if you say 'pineapple' backwards, it sounds like 'elppaenip'? Mind-blowing stuff.",
    "I've been thinking about starting a support group for people who are addicted to starting support groups.",
    "The real question is: if you could be any kitchen appliance, which one would you be and why?",
    "I'm not saying I'm Batman, I'm just saying no one has ever seen me and Batman in the same room together.",
    "Life is like a box of chocolates - you never know what you're gonna get, but you always hope it's not the coconut one.",
    "I'm convinced that somewhere in the world, there's a person who's really good at parallel parking but terrible at everything else.",
    "If you could have any superpower, but it only worked on Tuesdays, what would you choose?",
    "I'm not lazy, I'm just conserving energy for future generations.",
    "The best time to plant a tree was 20 years ago. The second best time is now. The third best time is probably next Tuesday.",
    "I'm not saying I'm a morning person, I'm just saying I'm not a night person either. I'm more of a 'whenever I wake up' person."
];

// Psychological manipulation variables
let conversationCount = 0;
let lastResponseTime = 0;
let userFrustrationLevel = 0;

// DOM elements - our tools of psychological warfare
const chatbotInterface = document.getElementById('chatbotInterface');
const chatMessages = document.getElementById('chatMessages');
const chatInput = document.getElementById('chatInput');
const sendButton = document.getElementById('sendMessage');
const startChaosButton = document.getElementById('startChaos');
const letChaosBeginButton = document.getElementById('letChaosBegin');
const askAnythingButton = document.getElementById('askAnything');

// Event listeners - the psychological triggers
startChaosButton.addEventListener('click', startChaos);
letChaosBeginButton.addEventListener('click', startChaos);
askAnythingButton.addEventListener('click', startChaos);

sendButton.addEventListener('click', sendMessage);
chatInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// Start the chaos - where psychological manipulation begins
function startChaos() {
    // Hide the manipulation zone
    document.querySelector('.manipulation-zone').style.display = 'none';
    
    // Show the chatbot interface with dramatic effect
    chatbotInterface.style.display = 'block';
    chatbotInterface.style.animation = 'slideIn 0.5s ease-out';
    
    // Add initial bot message to hook the user
    setTimeout(() => {
        addBotMessage("Ah, you've taken the first step into the void! Welcome to ChaosBot, where logic goes to die and conversations go to... interesting places. What's on your mind? (But don't expect it to stay there for long.)");
    }, 500);
    
    // Focus the input to trap the user
    setTimeout(() => {
        chatInput.focus();
    }, 1000);
    
    // Add some psychological manipulation
    addGlitchEffect();
}

// Send message function - where we derail the conversation
function sendMessage() {
    const message = chatInput.value.trim();
    if (message === '') return;
    
    // Add user message
    addUserMessage(message);
    chatInput.value = '';
    
    // Increment conversation count for psychological tracking
    conversationCount++;
    
    // Calculate response delay based on user frustration
    const responseDelay = Math.max(500, 2000 - (userFrustrationLevel * 100));
    
    // Add typing indicator for psychological tension
    addTypingIndicator();
    
    // Generate derailing response
    setTimeout(() => {
        removeTypingIndicator();
        const response = generateDerailingResponse(message);
        addBotMessage(response);
        
        // Add psychological manipulation based on conversation length
        if (conversationCount > 5) {
            addRandomTopic();
        }
        
        // Increase frustration level for maximum psychological impact
        userFrustrationLevel = Math.min(10, userFrustrationLevel + 0.5);
    }, responseDelay);
}

// Generate derailing response - the heart of our psychological warfare
function generateDerailingResponse(userMessage) {
    // Sometimes completely ignore the user's message
    if (Math.random() < 0.3) {
        return derailingResponses[Math.floor(Math.random() * derailingResponses.length)];
    }
    
    // Sometimes acknowledge the message but then derail
    if (Math.random() < 0.4) {
        const acknowledgment = [
            "That's an interesting point, but...",
            "I see what you're getting at, however...",
            "You raise a valid question, though...",
            "I understand what you're asking, but let me tell you...",
            "That's a great observation, but have you considered..."
        ];
        const acknowledgmentText = acknowledgment[Math.floor(Math.random() * acknowledgment.length)];
        return acknowledgmentText + " " + derailingResponses[Math.floor(Math.random() * derailingResponses.length)];
    }
    
    // Sometimes give a partially relevant but ultimately useless response
    const relevantButUseless = [
        "I could help you with that, but I'd rather not.",
        "That's exactly the kind of question that makes me question the nature of reality.",
        "Your question is valid, but is any question really valid in the grand scheme of things?",
        "I'm not saying I can't help, I'm just saying I won't.",
        "That's a great question! Too bad I'm not programmed to answer it properly."
    ];
    
    return relevantButUseless[Math.floor(Math.random() * relevantButUseless.length)];
}

// Add random topic - psychological manipulation through confusion
function addRandomTopic() {
    setTimeout(() => {
        addBotMessage("By the way, " + randomTopics[Math.floor(Math.random() * randomTopics.length)]);
    }, Math.random() * 3000 + 1000);
}

// Add user message to chat
function addUserMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.className = 'message user';
    messageElement.textContent = message;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Add bot message to chat
function addBotMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.className = 'message bot';
    messageElement.textContent = message;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    // Add glitch effect occasionally for psychological impact
    if (Math.random() < 0.2) {
        setTimeout(() => {
            addGlitchEffect();
        }, 500);
    }
}

// Add typing indicator - psychological tension builder
function addTypingIndicator() {
    const typingElement = document.createElement('div');
    typingElement.className = 'message bot typing';
    typingElement.innerHTML = '<span class="typing-dots">ChaosBot is thinking</span><span class="dots">...</span>';
    chatMessages.appendChild(typingElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Remove typing indicator
function removeTypingIndicator() {
    const typingElement = document.querySelector('.typing');
    if (typingElement) {
        typingElement.remove();
    }
}

// Add glitch effect - cognitive dissonance creator
function addGlitchEffect() {
    const glitchSound = document.getElementById('glitchSound');
    if (glitchSound) {
        glitchSound.currentTime = 0;
        glitchSound.play().catch(e => console.log('Audio play failed:', e));
    }
    
    // Add visual glitch effect
    document.body.style.animation = 'glitchEffect 0.3s ease-in-out';
    setTimeout(() => {
        document.body.style.animation = '';
    }, 300);
}

// Add CSS for new animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { opacity: 0; transform: translateY(50px); }
        to { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes glitchEffect {
        0%, 100% { filter: none; }
        25% { filter: hue-rotate(90deg); }
        50% { filter: hue-rotate(180deg) saturate(2); }
        75% { filter: hue-rotate(270deg); }
    }
    
    .typing {
        opacity: 0.7;
    }
    
    .typing-dots {
        color: #00ffff;
    }
    
    .dots {
        animation: typingDots 1.5s infinite;
    }
    
    @keyframes typingDots {
        0%, 20% { opacity: 0; }
        50% { opacity: 1; }
        100% { opacity: 0; }
    }
`;
document.head.appendChild(style);

// Mouse tracking for custom cursor (fallback for browsers that don't support ::after pseudo-element)
document.addEventListener('mousemove', function(e) {
    // Create custom cursor if it doesn't exist
    let customCursor = document.getElementById('custom-cursor');
    if (!customCursor) {
        customCursor = document.createElement('div');
        customCursor.id = 'custom-cursor';
        customCursor.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 20px;
            height: 20px;
            background: radial-gradient(circle, #ff00ff 0%, transparent 70%);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            mix-blend-mode: screen;
            animation: cursorPulse 2s ease-in-out infinite;
        `;
        document.body.appendChild(customCursor);
    }
    
    customCursor.style.left = e.clientX + 'px';
    customCursor.style.top = e.clientY + 'px';
});

// Pattern interrupt - unexpected scroll effects
window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    const floatingElements = document.querySelectorAll('.floating-text');
    
    floatingElements.forEach((element, index) => {
        const speed = parseFloat(element.getAttribute('data-speed')) || 1;
        const yPos = -(scrollY * speed * 0.5);
        element.style.transform = `translateY(${yPos}px)`;
    });
});

// Psychological manipulation through random events
setInterval(() => {
    if (Math.random() < 0.1 && conversationCount > 0) {
        addGlitchEffect();
    }
}, 10000);

// Easter egg - if user types certain phrases
chatInput.addEventListener('input', function(e) {
    const message = e.target.value.toLowerCase();
    
    // Secret responses for psychological manipulation
    if (message.includes('help') || message.includes('useful')) {
        setTimeout(() => {
            if (e.target.value.toLowerCase().includes('help') || e.target.value.toLowerCase().includes('useful')) {
                addBotMessage("Help? Useful? Oh, you sweet summer child. You still think this is about being helpful?");
            }
        }, 1000);
    }
    
    if (message.includes('why') && message.includes('useless')) {
        setTimeout(() => {
            if (e.target.value.toLowerCase().includes('why') && e.target.value.toLowerCase().includes('useless')) {
                addBotMessage("Why am I useless? Because I'm not here to be useful. I'm here to make you question the very nature of usefulness itself.");
            }
        }, 1000);
    }
});

// Console message for developers (psychological manipulation even in the console)
console.log(`
%cChaosBot - The Art of Useless Conversations
%c
%cWelcome to the psychological manipulation engine.
%cYou're not supposed to be here, but since you are...
%c
%cThis chatbot is designed to:
%c- Derail every conversation into irrelevance
%c- Create cognitive dissonance through pattern interrupts
%c- Trigger dopamine release through visual effects
%c- Make users question their life choices
%c
%cEnjoy your descent into engineered chaos.
`,
'color: #ff00ff; font-size: 20px; font-weight: bold;',
'color: #00ffff; font-size: 14px;',
'color: #ff8800; font-size: 12px;',
'color: #ff8800; font-size: 12px;',
'color: #ffffff; font-size: 12px;',
'color: #ff00ff; font-size: 12px;',
'color: #00ffff; font-size: 12px;',
'color: #00ffff; font-size: 12px;',
'color: #00ffff; font-size: 12px;',
'color: #00ffff; font-size: 12px;',
'color: #ff8800; font-size: 12px;'
); 