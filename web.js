document.addEventListener('DOMContentLoaded', function() {
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
        langStatus.textContent = languageConfig[lang].status;
        if (recognition) initSpeechRecognition();
    }

    function addMessage(text, isUser = false) {
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
            voiceBtn.style.display = "none";
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
        recognition.start();
        isListening = true;
        voiceBtn.classList.add('listening');
    }

    function stopListening() {
        if (recognition) recognition.stop();
        isListening = false;
        voiceBtn.classList.remove('listening');
    }

    // Event Listeners
    sendBtn.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') sendMessage(); });
    voiceBtn.addEventListener('click', toggleListening);

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => switchLanguage(btn.dataset.lang));
    });

    // Initialize
    switchLanguage('hi');

    setTimeout(() => {
        addMessage("नमस्ते! 🌾 पहले बैकएंड सर्वर शुरू करें, फिर भाषा चुनकर पूछें।");
    }, 600);

    initSpeechRecognition();
});