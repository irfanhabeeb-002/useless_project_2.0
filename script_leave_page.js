// Audio files paths
const audioFiles = {
  yes: 'assets/yes-leave.mp3',
  no: 'assets/no-leave.mp3',
  maybe: 'assets/maybe-leave.mp3'
};

// Psychological state management
const state = {
  selectedChoice: null,
  interactionCount: 0,
  lastInteraction: Date.now(),
  isIdle: false,
  audioPlayed: false,
  popupShown: false,
  cursorPosition: { x: 0, y: 0 }
};

// Audio management
let leaveAudio = null;
let idleTimeout = null;
let audioContext = null;

// Initialize audio context for better compatibility
function initAudioContext() {
  try {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
    console.log('Audio context initialized');
  } catch (err) {
    console.error('Failed to initialize audio context:', err);
  }
}

// DOM elements
const questionEl = document.getElementById('question');
const emojiEl = document.getElementById('emoji');
const returnMessageEl = document.getElementById('return-message');
const idleMessageEl = document.getElementById('idle-message');
const popupOverlay = document.getElementById('popup-overlay');
const buttons = document.querySelectorAll('button[data-choice]');

// Psychological emoji mapping
const emojiMap = {
  yes: "😢",
  no: "😊", 
  maybe: "🤔"
};

// Emotionally manipulative messages using PAS (Problem, Agitation, Surrender) formula
const returnMessages = [
  "I understand... even you 😢",
  "Are you trying to leave me? 😭",
  "I can't help but cry... 😔",
  "How cruel is your heart... 💔",
  "I can't live without you... 😢",
  "Did you never love me? 😭",
  "How much I loved you... 💔",
  "Where is your mercy? 😢"
];

const idleMessages = [
  "I'm waiting...",
  "Have you forgotten me?",
  "I have no friends...",
  "I'm alone...",
  "Why aren't you coming?",
  "I need you...",
  "I want to see you...",
  "Have you left me?"
];

// Custom cursor tracking
function updateCursor(e) {
  state.cursorPosition.x = e.clientX;
  state.cursorPosition.y = e.clientY;
  
  const cursor = document.querySelector('.custom-cursor');
  if (cursor) {
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  }
}

// Preload audio with psychological hooks
function preloadAudio(src) {
  console.log('Preloading audio:', src);
  const audio = new Audio(src);
  audio.volume = 0.8;
  audio.preload = 'auto';

  audio.addEventListener('canplaythrough', () => {
    console.log('Audio can play through:', src);
  });
  
  audio.addEventListener('error', (e) => {
    console.error('Audio error loading:', src, e);
    // Don't create fallback sound - just log the error
  });

  leaveAudio = audio;
  return audio;
}

// Preload all audio files to ensure they're ready
function preloadAllAudio() {
  Object.values(audioFiles).forEach(src => {
    const audio = new Audio(src);
    audio.volume = 0;
    audio.preload = 'auto';
    audio.load();
  });
  console.log('All audio files preloaded');
}

// Removed createPsychologicalSound function - no longer needed

function stopAllAudio() {
  if (leaveAudio) {
    leaveAudio.pause();
    leaveAudio.currentTime = 0;
  }
  clearTimeout(idleTimeout);
}

// Psychological audio trigger
function playLeaveAudio() {
  if (!state.selectedChoice || state.selectedChoice === 'maybe') return;
  
  console.log('Playing psychological audio for choice:', state.selectedChoice);
  stopAllAudio();

  // Ensure audio context is resumed and ready
  if (audioContext) {
    if (audioContext.state === 'suspended') {
      audioContext.resume().then(() => {
        console.log('Audio context resumed');
        playAudioAfterResume();
      });
    } else {
      playAudioAfterResume();
    }
  } else {
    // If no audio context, create one
    initAudioContext();
    playAudioAfterResume();
  }
}

function playAudioAfterResume() {
  leaveAudio = preloadAudio(audioFiles[state.selectedChoice]);
  leaveAudio.play().then(() => {
    console.log('Playing audio for choice:', state.selectedChoice);
    state.audioPlayed = true;
  }).catch(err => {
    console.error('Error playing audio for choice:', state.selectedChoice, err);
    // Don't create fallback sound - just log the error
  });
}

// Show emotionally manipulative return message
function showReturnMessage() {
  const message = returnMessages[Math.floor(Math.random() * returnMessages.length)];
  const messageTextEl = returnMessageEl.querySelector('.message-text');
  messageTextEl.textContent = message;
  
  returnMessageEl.classList.remove('hidden');
  returnMessageEl.classList.add('visible');
  
  // Add typing effect
  setTimeout(() => {
    const typingIndicator = returnMessageEl.querySelector('.typing-indicator');
    typingIndicator.style.display = 'flex';
  }, 1000);
  
  setTimeout(() => {
    returnMessageEl.classList.remove('visible');
    setTimeout(() => {
      returnMessageEl.classList.add('hidden');
      returnMessageEl.querySelector('.typing-indicator').style.display = 'none';
    }, 500);
  }, 5000);
}

// Clear return message
function clearReturnMessage() {
  returnMessageEl.classList.remove('visible');
  setTimeout(() => {
    returnMessageEl.classList.add('hidden');
  }, 500);
}

// Show idle message with typing effect
function showIdleMessage() {
  if (state.isIdle) return;
  
  state.isIdle = true;
  const message = idleMessages[Math.floor(Math.random() * idleMessages.length)];
  const typingTextEl = idleMessageEl.querySelector('.typing-text');
  
  idleMessageEl.classList.remove('hidden');
  idleMessageEl.classList.add('visible');
  
  // Type out the message character by character
  let i = 0;
  typingTextEl.textContent = '';
  
  const typeWriter = () => {
    if (i < message.length) {
      typingTextEl.textContent += message.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  };
  
  typeWriter();
}

// Hide idle message
function hideIdleMessage() {
  state.isIdle = false;
  idleMessageEl.classList.remove('visible');
  setTimeout(() => {
    idleMessageEl.classList.add('hidden');
  }, 500);
}

// Show passive-aggressive popup
function showPopup() {
  if (state.popupShown) return;
  
  state.popupShown = true;
  popupOverlay.classList.remove('hidden');
  setTimeout(() => {
    popupOverlay.classList.add('visible');
  }, 100);
}

// Close popup
function closePopup() {
  popupOverlay.classList.remove('visible');
  setTimeout(() => {
    popupOverlay.classList.add('hidden');
    state.popupShown = false;
  }, 300);
}

// Update question with psychological manipulation
function updateQuestion() {
  state.interactionCount++;
  
  if (state.interactionCount > 1) {
    const glitchLayer = questionEl.querySelector('.glitch-layer');
    if (glitchLayer) {
      glitchLayer.textContent = "വീണ്ടും ചോദിക്കണോ?";
      glitchLayer.setAttribute('data-text', "വീണ്ടും ചോദിക്കണോ?");
    }
    
    // Add extra glitch effect
    questionEl.style.animation = 'glitch-1 0.2s infinite';
    setTimeout(() => {
      questionEl.style.animation = 'textGlow 2s ease-in-out infinite alternate';
    }, 2000);
  }
}

// Button click event handling with psychological hooks
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Resume audio context if suspended (required for some browsers)
    if (audioContext && audioContext.state === 'suspended') {
      audioContext.resume();
    }
    
    state.selectedChoice = button.getAttribute('data-choice');
    state.lastInteraction = Date.now();
    state.interactionCount++;
    
    // Update emoji with psychological impact
    emojiEl.textContent = emojiMap[state.selectedChoice] || '🥺';
    
    // Add button click effect
    button.style.transform = 'scale(0.95)';
    setTimeout(() => {
      button.style.transform = '';
    }, 150);
    
    clearReturnMessage();
    hideIdleMessage();
    stopAllAudio();

    // Preload all audio files on first interaction to ensure they're ready
    if (state.interactionCount === 1) {
      preloadAllAudio();
    }

    // For yes/no buttons, preload their specific audio to ensure it's ready
    if (state.selectedChoice === 'yes' || state.selectedChoice === 'no') {
      const audio = new Audio(audioFiles[state.selectedChoice]);
      audio.volume = 0;
      audio.preload = 'auto';
      audio.load();
    }

    // Psychological manipulation based on choice
    if (state.selectedChoice === 'maybe') {
      // Play immediately on click for "maybe" - creates uncertainty
      leaveAudio = preloadAudio(audioFiles.maybe);
      leaveAudio.play().then(() => {
        console.log('Playing maybe audio immediately on click');
      }).catch(err => {
        console.error('Error playing maybe audio:', err);
        // Don't create fallback sound - just log the error
      });
    }
    
    // Update question for psychological impact
    updateQuestion();
    
    // For 'yes' and 'no', audio plays only on tab switch or blur - creates guilt
  });
});

// Idle detection with psychological manipulation
function startIdleDetection() {
  idleTimeout = setTimeout(() => {
    if (!state.isIdle && state.selectedChoice) {
      showIdleMessage();
    }
  }, 30000);
}

// Reset idle timer on any interaction
function resetIdleTimer() {
  clearTimeout(idleTimeout);
  startIdleDetection();
}

// Visibility change listener - psychological trigger
document.addEventListener('visibilitychange', () => {
  console.log('visibilitychange event fired, hidden:', document.hidden);
  
  if (document.hidden) {
    if (state.selectedChoice === 'yes' || state.selectedChoice === 'no') {
      playLeaveAudio();
    }
    
    // Show popup after a delay for psychological impact
    setTimeout(() => {
      if (document.hidden && !state.popupShown) {
        showPopup();
      }
    }, 5000);
  } else {
    stopAllAudio();
    if (state.selectedChoice) {
      showReturnMessage();
    }
  }
});

// Blur and focus listeners - additional psychological triggers
window.addEventListener('blur', () => {
  console.log('window blur event fired, document.hidden:', document.hidden);
  
  if (!document.hidden) {
    if (state.selectedChoice === 'yes' || state.selectedChoice === 'no') {
      playLeaveAudio();
    }
  }
});

window.addEventListener('focus', () => {
  console.log('window focus event fired');
  stopAllAudio();
  if (state.selectedChoice) {
    showReturnMessage();
  }
});

// Mouse movement tracking for psychological effects
document.addEventListener('mousemove', (e) => {
  updateCursor(e);
  resetIdleTimer();
});

// Touch events for mobile
document.addEventListener('touchstart', resetIdleTimer);
document.addEventListener('touchmove', resetIdleTimer);

// Keyboard events for accessibility and psychological hooks
document.addEventListener('keydown', (e) => {
  resetIdleTimer();
  
  // Escape key to close popup
  if (e.key === 'Escape' && !popupOverlay.classList.contains('hidden')) {
    closePopup();
  }
});

// Initialize audio context and idle detection
initAudioContext();
startIdleDetection();

// Add hover effects for psychological manipulation
buttons.forEach(button => {
  button.addEventListener('mouseenter', () => {
    resetIdleTimer();
    // Keep cursor as none for all buttons
    document.body.style.cursor = 'none';
  });
  
  button.addEventListener('mouseleave', () => {
    document.body.style.cursor = 'none';
  });
});

// Global function for popup close (accessible from HTML)
window.closePopup = closePopup;

// Add vibration feedback for mobile (if supported)
function triggerVibration() {
  if ('vibrate' in navigator) {
    navigator.vibrate(100);
  }
}

// Add vibration to button clicks
buttons.forEach(button => {
  button.addEventListener('click', triggerVibration);
});

console.log('Psychological warfare system initialized... 🎭');
