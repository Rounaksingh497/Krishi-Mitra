const menuBtn = document.getElementById('profile-menu-btn');
const dropdown = document.getElementById('profile-dropdown');
const chevron = document.getElementById('chevron-icon');

menuBtn?.addEventListener('click', (e) => {
  e.stopPropagation();
  const open = !dropdown.classList.contains('hidden');
  dropdown.classList.toggle('hidden', open);
  chevron.classList.toggle('fa-chevron-down', open);
  chevron.classList.toggle('fa-chevron-up', !open);
});

document.addEventListener('click', () => {
  dropdown?.classList.add('hidden');
  chevron?.classList.replace('fa-chevron-up', 'fa-chevron-down');
});

document.addEventListener('DOMContentLoaded', function() {
    
    // ==========================================
    // 1. AUTHENTICATION & PROFILE LOGIC
    // ==========================================
    const token = localStorage.getItem('kisan_token');
    const userStr = localStorage.getItem('kisan_user');

    const signinBtn = document.getElementById('signin-btn');
    const profileSection = document.getElementById('profile-section');
    const welcomeText = document.getElementById('welcome-text');
    const logoutBtn = document.getElementById('logout-btn');

    const profileModal = document.getElementById('profile-modal');
    const editProfileBtn = document.getElementById('edit-profile-btn');
    const closeModalBtn = document.getElementById('close-modal');
    const saveProfileBtn = document.getElementById('save-profile');

    // Only run this if we are on the main page where these buttons exist
    if (signinBtn && profileSection) {
        if (token && userStr) {
            // User is logged in
            const user = JSON.parse(userStr);
            
            // Hide Sign In, Show Profile
            signinBtn.classList.add('hidden');
            profileSection.classList.remove('hidden');
            profileSection.classList.add('flex'); // ensure tailwind flex applies
            
            // Set Header and Dashboard Welcome Text
            if (welcomeText) welcomeText.textContent = `Welcome, ${user.name}`;
            const dashboardWelcome = document.querySelector('h3.font-semibold.text-lg');
            if (dashboardWelcome) dashboardWelcome.textContent = `Welcome back, ${user.name}!`;

            // Logout logic
            if (logoutBtn) {
                logoutBtn.addEventListener('click', () => {
                    localStorage.removeItem('kisan_token');
                    localStorage.removeItem('kisan_user');
                    window.location.reload();
                });
            }

            // Open Modal logic
            if (editProfileBtn && profileModal) {
                editProfileBtn.addEventListener('click', () => {
                    document.getElementById('edit-name').value = user.name;
                    document.getElementById('edit-phone').value = user.phone;
                    profileModal.classList.remove('hidden');
                });
            }

            // Close Modal
            if (closeModalBtn && profileModal) {
                closeModalBtn.addEventListener('click', () => {
                    profileModal.classList.add('hidden');
                });
            }

            // Save Profile logic
            if (saveProfileBtn) {
                saveProfileBtn.addEventListener('click', async () => {
                    const newName = document.getElementById('edit-name').value;
                    const newPhone = document.getElementById('edit-phone').value;

                    try {
                        const response = await fetch('http://localhost:5000/api/profile', {
                            method: 'PUT',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ token, newName, newPhone })
                        });
                        const data = await response.json();
                        
                        if(response.ok) {
                            alert("Profile Updated!");
                            localStorage.setItem('kisan_token', data.token);
                            localStorage.setItem('kisan_user', JSON.stringify(data.user));
                            window.location.reload(); // Refresh to show new name
                        } else {
                            alert(data.error);
                        }
                    } catch(e) {
                        console.error(e);
                        alert("Failed to update profile. Make sure the server is running.");
                    }
                });
            }
        }
    }


    // ==========================================
    // 2. CHAT & AI LOGIC (Untouched from original)
    // ==========================================
    const chatContainer = document.getElementById('chat-container');
    const chatInput = document.getElementById('chat-input');
    const sendBtn = document.getElementById('send-btn');
    const voiceBtn = document.getElementById('voice-btn');
    const langStatus = document.getElementById('lang-status');

    let currentLang = 'hi';
    let recognition = null;
    let isListening = false;

    const languageConfig = {
        'en': { name: 'English', voice: 'en-IN', status: 'Current Language: English' },
        'hi': { name: 'हिंदी',   voice: 'hi-IN', status: 'Current Language: हिंदी' },
        'bn': { name: 'বাংলা',   voice: 'bn-IN', status: 'Current Language: বাংলা' }
    };

    // Language Switcher
    function switchLanguage(lang) {
        currentLang = lang;
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });
        if (langStatus) langStatus.textContent = languageConfig[lang].status;
        if (recognition) initSpeechRecognition();
    }

    function addMessage(text, isUser = false) {
        if (!chatContainer) return;
        const messageDiv = document.createElement('div');
        messageDiv.className = `message flex ${isUser ? 'justify-end' : 'justify-start'}`;
        messageDiv.innerHTML = `
            <div class="${isUser ? 'user-message' : 'ai-message'} max-w-[85%] p-4 shadow-sm">
                <p class="text-gray-800 leading-relaxed">${text}</p>
                <p class="text-[10px] text-gray-500 mt-2 text-right">${new Date().toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'})}</p>
            </div>
        `;
        chatContainer.appendChild(messageDiv);
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }

    // Call Backend Proxy (Key stays safe on server)
    async function getAIResponse(query) {
        if (!chatContainer) return;
        const typingDiv = document.createElement('div');
        typingDiv.id = 'typing';
        typingDiv.className = 'flex justify-start message';
        typingDiv.innerHTML = `<div class="ai-message max-w-[85%] p-4"><p class="text-gray-500 italic">AI सोच रहा है...</p></div>`;
        chatContainer.appendChild(typingDiv);
        chatContainer.scrollTop = chatContainer.scrollHeight;

        try {
            const response = await fetch('http://localhost:5000/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    message: query,
                    language: currentLang
                })
            });

            if (!response.ok) throw new Error("Server error");

            const data = await response.json();
            typingDiv.remove();
            addMessage(data.reply);

        } catch (error) {
            typingDiv.remove();
            addMessage("⚠️ Backend server is not running. Please start the Node.js backend (port 5000).");
        }
    }

    function sendMessage() {
        if (!chatInput) return;
        const message = chatInput.value.trim();
        if (!message) return;
        addMessage(message, true);
        chatInput.value = '';
        getAIResponse(message);
    }

    // Voice Recognition
    function initSpeechRecognition() {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRecognition) {
            if (voiceBtn) voiceBtn.style.display = "none";
            return;
        }

        recognition = new SpeechRecognition();
        recognition.lang = languageConfig[currentLang].voice;
        recognition.interimResults = false;

        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript.trim();
            if (transcript) {
                addMessage(transcript, true);
                getAIResponse(transcript);
            }
        };

        recognition.onerror = () => stopListening();
        recognition.onend = () => stopListening();
    }

    function toggleListening() {
        if (!recognition) return alert("Voice input not supported in this browser.");
        isListening ? stopListening() : startListening();
    }

    function startListening() {
        if (!recognition) return;
        recognition.start();
        isListening = true;
        if (voiceBtn) voiceBtn.classList.add('listening');
    }

    function stopListening() {
        if (recognition) recognition.stop();
        isListening = false;
        if (voiceBtn) voiceBtn.classList.remove('listening');
    }

    // Event Listeners for Chat
    if (sendBtn) sendBtn.addEventListener('click', sendMessage);
    if (chatInput) chatInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') sendMessage(); });
    if (voiceBtn) voiceBtn.addEventListener('click', toggleListening);

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => switchLanguage(btn.dataset.lang));
    });

    // Initialize Language and Chat
    switchLanguage('hi');

    setTimeout(() => {
        if (chatContainer) addMessage("नमस्ते! 🌾 पहले बैकएंड सर्वर शुरू करें, फिर भाषा चुनकर पूछें।");
    }, 600);

    initSpeechRecognition();
});