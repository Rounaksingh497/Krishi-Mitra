const westBengalLocations = {
    "Kolkata": ["Behala", "Garden Reach", "Tollygunge", "Jadavpur", "Kasba", "Tiljala", "Topsia", "Ballygunge", "Alipore", "Park Circus", "Dum Dum", "Kestopur", "Rajarhat", "Salt Lake"],
    "North 24 Parganas": ["Barasat", "Basirhat", "Bongaon", "Habra", "Barrackpore", "Madhyamgram", "Bidhannagar", "Ashoknagar", "Gaighata", "Deganga", "Swarupnagar", "Hingalganj", "Sandeshkhali", "Minakhan", "Haroa", "Amdanga", "Bagdah", "Baduria"],
    "South 24 Parganas": ["Diamond Harbour", "Kakdwip", "Canning", "Sonarpur", "Baruipur", "Jaynagar", "Mathurapur", "Kultali", "Patharpratima", "Namkhana", "Sagar", "Bishnupur", "Magrahat", "Mandirbazar", "Falta", "Bhangar", "Budge Budge"],
    "Howrah": ["Bally", "Uluberia", "Domjur", "Sankrail", "Shibpur", "Bagnan", "Amta", "Jagatballavpur", "Panchla", "Udaynarayanpur", "Shyampur"],
    "Hooghly": ["Chinsurah", "Serampore", "Arambagh", "Chandannagar", "Konnagar", "Rishra", "Champdani", "Baidyabati", "Tarakeswar", "Pandua", "Dhaniakhali", "Polba", "Goghat", "Khanakul", "Haripal", "Singur", "Jangipara"],
    "Nadia": ["Krishnanagar", "Ranaghat", "Kalyani", "Santipur", "Chakdaha", "Nabadwip", "Tehatta", "Karimpur", "Haringhata", "Hanskhali", "Chapra", "Nakashipara", "Kaliganj", "Birnagar"],
    "Murshidabad": ["Berhampore", "Jiaganj", "Lalgola", "Domkal", "Kandi", "Beldanga", "Nabagram", "Bhagwangola", "Raninagar", "Suti", "Samserganj", "Sagardighi", "Khargram", "Burwan", "Hariharpara", "Farakka"],
    "Birbhum": ["Suri", "Bolpur", "Rampurhat", "Nalhati", "Sainthia", "Dubrajpur", "Khoyrasol", "Mayureswar", "Murarai", "Labpur", "Nanoor", "Md Bazar", "Rajnagar", "Illambazar"],
    "Purba Bardhaman": ["Bardhaman Sadar", "Kalna", "Katwa", "Memari", "Jamalpur", "Khandaghosh", "Raina", "Bhatar", "Galsi", "Ausgram", "Manteswar", "Purbasthali"],
    "Paschim Bardhaman": ["Asansol", "Durgapur", "Raniganj", "Kulti", "Jamuria", "Salanpur", "Barabani", "Pandabeswar", "Faridpur", "Andal"],
    "Bankura": ["Bankura Sadar", "Bishnupur", "Khatra", "Sonamukhi", "Ranibandh", "Raipur", "Mejia", "Onda", "Indpur", "Taldangra", "Simlapal", "Chhatna", "Gangajalghati"],
    "Purulia": ["Purulia Sadar", "Raghunathpur", "Jhalda", "Manbazar", "Kashipur", "Bandwan", "Balarampur", "Barabazar", "Bagmundi", "Hura", "Joypur", "Para", "Santuri"],
    "Malda": ["English Bazar", "Old Malda", "Chanchal", "Harishchandrapur", "Bamangola", "Gazole", "Habibpur", "Kaliachak", "Manikchak", "Ratua"],
    "Uttar Dinajpur": ["Raiganj", "Islampur", "Kaliaganj", "Chopra", "Chakulia", "Goalpokhar", "Hemtabad", "Itahar", "Karandighi"],
    "Dakshin Dinajpur": ["Balurghat", "Gangarampur", "Kushmandi", "Tapan", "Hili", "Bansihari", "Kumarganj", "Harirampur"],
    "Jalpaiguri": ["Jalpaiguri Sadar", "Maynaguri", "Dhupguri", "Rajganj", "Mal", "Nagrakata", "Matiali", "Banarhat"],
    "Darjeeling": ["Darjeeling Sadar", "Kurseong", "Kalimpong", "Mirik", "Sukhiapokhri", "Rangli Rangliot", "Jorebunglow", "Phansidewa", "Naxalbari", "Matigara"],
    "Alipurduar": ["Alipurduar Sadar", "Falakata", "Madarihat", "Kumargram", "Kalchini", "Sadar Block I", "Sadar Block II"],
    "Cooch Behar": ["Cooch Behar Sadar", "Mathabhanga", "Tufanganj", "Dinhata", "Sitalkuchi", "Sitai", "Mekliganj", "Haldibari"],
    "Paschim Medinipur": ["Kharagpur", "Ghatal", "Medinipur Sadar", "Garbeta", "Daspur", "Chandrakona", "Keshpur", "Sabang", "Pingla", "Debra", "Salboni"],
    "Purba Medinipur": ["Tamluk", "Contai", "Haldia", "Egra", "Mahishadal", "Nandakumar", "Bhupatinagar", "Khejuri", "Ramnagar", "Patashpur", "Panskura"],
    "Jhargram": ["Jhargram Sadar", "Gopiballavpur", "Nayagram", "Binpur", "Sankrail", "Jamboni", "Manikpara"],
    "Kalimpong": ["Kalimpong Sadar", "Gorubathan", "Kalimpong II", "Pedong"]
};
let villageCoordinates =
    JSON.parse(
        localStorage.getItem("villageCoordinates")
    ) || {};
function initLocationSelectors() {
    const districtSelect = document.getElementById("district-select");
    const villageSelect = document.getElementById("village-select");

    if (!districtSelect || !villageSelect) return;

    // Populate districts, sorted alphabetically
    Object.keys(westBengalLocations).sort().forEach(district => {
        const opt = document.createElement("option");
        opt.value = district;
        opt.textContent = district;
        districtSelect.appendChild(opt);
    });

    districtSelect.addEventListener("change", () => {
        const selectedDistrict = districtSelect.value;
        villageSelect.innerHTML = "";

        if (!selectedDistrict) {
            villageSelect.disabled = true;
            villageSelect.innerHTML = '<option value="">Select district first</option>';
            return;
        }

        villageSelect.disabled = false;
        villageSelect.innerHTML = '<option value="">Select village/block</option>';

        westBengalLocations[selectedDistrict].forEach(village => {
            const opt = document.createElement("option");
            opt.value = village;
            opt.textContent = village;
            villageSelect.appendChild(opt);
        });
    });
    districtSelect.addEventListener("change", () => {
        const selectedDistrict = districtSelect.value;
        villageSelect.innerHTML = "";

        if (!selectedDistrict) {
            villageSelect.disabled = true;
            villageSelect.innerHTML =
                '<option value="">Select district first</option>';
            return;
        }

        villageSelect.disabled = false;
        villageSelect.innerHTML =
            '<option value="">Select village/block</option>';

        westBengalLocations[selectedDistrict].forEach(village => {
            const opt = document.createElement("option");
            opt.value = village;
            opt.textContent = village;
            villageSelect.appendChild(opt);
        });
    });


    // ADD THIS HERE 👇

    villageSelect.addEventListener("change", async () => {

        const village = villageSelect.value;
        const district = districtSelect.value;

        if (!village) return;

        try {

            // ======================
            // CHECK CACHE FIRST
            // ======================

            if (villageCoordinates[village]) {

                const coords =
                    villageCoordinates[village];

                console.log(
                    "Using cached coordinates:",
                    village,
                    coords
                );

                await getWeather(
                    coords.lat,
                    coords.lon,
                    village
                );

                return;
            }

            // ======================
            // GET COORDINATES
            // ======================

            const searchQuery =
                `${village}, ${district}, West Bengal, India`;

            const geoUrl =
                `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(searchQuery)}&format=json&limit=1`;

            const response =
                await fetch(geoUrl);

            const data =
                await response.json();

            console.log(data);

            if (!data.length) {

                alert(
                    `Location not found: ${village}`
                );

                return;
            }

            const lat =
                parseFloat(data[0].lat);

            const lon =
                parseFloat(data[0].lon);

            console.log(
                "Fetched Coordinates:",
                lat,
                lon
            );

            // ======================
            // SAVE IN CACHE
            // ======================

            villageCoordinates[village] = {
                lat,
                lon
            };

            localStorage.setItem(
                "villageCoordinates",
                JSON.stringify(
                    villageCoordinates
                )
            );

            // ======================
            // LOAD WEATHER
            // ======================

            await getWeather(
                lat,
                lon,
                village
            );

        } catch (error) {

            console.error(
                "Village Weather Error:",
                error
            );
        }
    });

} // end initLocationSelectors()

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

document.addEventListener('DOMContentLoaded', function () {
    getGPSWeather();

    document.getElementById("gps-btn")
        ?.addEventListener("click", getGPSWeather);

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
                        if (!data.results || data.results.length === 0) {
                            alert("Location not found");
                            return;
                        }

                        if (response.ok) {
                            alert("Profile Updated!");
                            localStorage.setItem('kisan_token', data.token);
                            localStorage.setItem('kisan_user', JSON.stringify(data.user));
                            window.location.reload(); // Refresh to show new name
                        } else {
                            alert(data.error);
                        }
                    } catch (e) {
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
        'hi': { name: 'हिंदी', voice: 'hi-IN', status: 'Current Language: हिंदी' },
        'bn': { name: 'বাংলা', voice: 'bn-IN', status: 'Current Language: বাংলা' }
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
                <p class="text-[10px] text-gray-500 mt-2 text-right">${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
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
    initLocationSelectors();
    document.getElementById("crop-btn")
        ?.addEventListener(
            "click",
            getCropRecommendation
        );

    setTimeout(() => {
        if (chatContainer) addMessage("नमस्ते! 🌾 पहले बैकएंड सर्वर शुरू करें, फिर भाषा चुनकर पूछें।");
    }, 600);

    initSpeechRecognition();
});
const WEATHER_API =
    "https://api.open-meteo.com/v1/forecast";

async function getWeather(lat, lon, locationName) {

    const url =
        `${WEATHER_API}?latitude=${lat}&longitude=${lon}
&current=temperature_2m,relative_humidity_2m,wind_speed_10m,surface_pressure,cloud_cover
&daily=temperature_2m_max,temperature_2m_min,
precipitation_sum,
precipitation_probability_max,
uv_index_max,
sunrise,
sunset
&timezone=auto
&forecast_days=7`;
    const response = await fetch(url);
    const data = await response.json();

    document.getElementById("weather-location").textContent =
        `${locationName}
(${lat.toFixed(4)},
${lon.toFixed(4)})`;

    document.getElementById("weather-temp").textContent =
        `${data.current.temperature_2m}°C`;

    document.getElementById("humidity").textContent =
        `${data.current.relative_humidity_2m}%`;

    document.getElementById("wind-speed").textContent =
        `${data.current.wind_speed_10m} km/h`;

    document.getElementById("rain-chance").textContent =
        `${data.daily.precipitation_probability_max[0]}%`;

    document.getElementById("uv-index").textContent =
        data.daily.uv_index_max[0];

    document.getElementById("weather-updated").textContent =
        `Updated: ${new Date().toLocaleString()}`;

    // ======================
    // WEATHER ALERT
    // ======================

    let alertText = "";

    if (data.daily.precipitation_probability_max[0] >= 70) {
        alertText =
            "🌧 Heavy rain expected. Avoid fertilizer spraying.";
    }

    if (data.current.wind_speed_10m > 25) {
        alertText =
            "🌬 Strong winds expected. Protect crops and structures.";
    }

    if (alertText !== "") {
        document.getElementById("weather-alert-box")
            .classList.remove("hidden");

        document.getElementById("weather-alert")
            .textContent = alertText;
    }

    // ======================
    // 7 DAY FORECAST
    // ======================

    const forecastContainer =
        document.getElementById("forecast-container");

    forecastContainer.innerHTML = "";

    for (let i = 0; i < 7; i++) {

        const date =
            new Date(data.daily.time[i]);

        const day =
            date.toLocaleDateString("en-IN", {
                weekday: "short"
            });

        forecastContainer.innerHTML += `
            <div class="border rounded-lg p-3 text-center">
                <h4 class="font-semibold">${day}</h4>

                <p class="text-red-500">
                    ${data.daily.temperature_2m_max[i]}°C
                </p>

                <p class="text-blue-500">
                    ${data.daily.temperature_2m_min[i]}°C
                </p>

                <p class="text-sm">
                    🌧 ${data.daily.precipitation_probability_max[i]}%
                </p>

                <p class="text-sm">
                    ☀️ UV ${data.daily.uv_index_max[i]}
                </p>
            </div>
        `;
    }
}
function getGPSWeather() {

    if (!navigator.geolocation) {
        alert("GPS not supported");
        return;
    }

    navigator.geolocation.getCurrentPosition(
        async (position) => {

            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            console.log("GPS:", lat, lon);

            await getWeather(
                lat,
                lon,
                "Current Location"
            );
        },
        (err) => {
            console.error(err);
        },
        {
            enableHighAccuracy: true
        }
    );
}
function getCropRecommendation() {

    const district =
        document.getElementById("district-select").value;

    const village =
        document.getElementById("village-select").value;

    const soil =
        document.getElementById("soil-select").value;

    const season =
        document.getElementById("season-select").value;

    const resultBox =
        document.getElementById("crop-result");

    if (!district || !village) {

        alert("Please select district and village");

        return;
    }

    let crops = [];

    // Kharif
    if (season.includes("Kharif")) {

        if (soil === "Alluvial soil") {
            crops = ["Paddy", "Jute", "Maize"];
        }

        else if (soil === "Red soil") {
            crops = ["Groundnut", "Maize", "Millets"];
        }

        else if (soil === "Laterite soil") {
            crops = ["Pulses", "Groundnut", "Cashew"];
        }

        else {
            crops = ["Paddy", "Maize"];
        }
    }

    // Rabi
    else if (season.includes("Rabi")) {

        if (soil === "Alluvial soil") {
            crops = ["Wheat", "Mustard", "Potato"];
        }

        else if (soil === "Red soil") {
            crops = ["Gram", "Mustard"];
        }

        else {
            crops = ["Wheat", "Vegetables"];
        }
    }

    // Zaid
    else {

        crops = [
            "Watermelon",
            "Cucumber",
            "Vegetables"
        ];
    }

    resultBox.classList.remove("hidden");

    resultBox.innerHTML = `
        <h4 class="font-bold text-green-700 mb-2">
            Recommended Crops
        </h4>

        <p>
            <strong>${district}</strong> /
            <strong>${village}</strong>
        </p>

        <p class="mt-2">
            🌱 ${crops.join(", ")}
        </p>
    `;
}
document
    .getElementById("load-market-btn")
    ?.addEventListener(
        "click",
        loadMarketPrices
    );

async function loadMarketPrices() {

    const market =
        document.getElementById(
            "market-select"
        ).value;

    const table =
        document.getElementById(
            "market-table"
        );

    table.innerHTML =
        `<tr>
            <td colspan="3">
                Loading...
            </td>
        </tr>`;

    try {

        // Demo Data
        // Replace later with Agmarknet API
        let crops = [];

        if (market === "Kolkata") {

            crops = [
                { crop: "Paddy", price: 2250, trend: "+3%" },
                { crop: "Potato", price: 1800, trend: "+1%" },
                { crop: "Jute", price: 5100, trend: "-2%" },
                { crop: "Maize", price: 2100, trend: "+4%" }
            ];

        }
        else if (market === "Howrah") {

            crops = [
                { crop: "Paddy", price: 2180, trend: "+1%" },
                { crop: "Potato", price: 1750, trend: "-2%" },
                { crop: "Jute", price: 4950, trend: "+2%" },
                { crop: "Maize", price: 2050, trend: "+3%" }
            ];

        }
        else if (market === "Asansol") {

            crops = [
                { crop: "Paddy", price: 2300, trend: "+4%" },
                { crop: "Potato", price: 1700, trend: "-1%" },
                { crop: "Jute", price: 5200, trend: "+1%" },
                { crop: "Maize", price: 2150, trend: "+5%" }
            ];

        }
        else if (market === "Siliguri") {

            crops = [
                { crop: "Paddy", price: 2400, trend: "+2%" },
                { crop: "Potato", price: 1900, trend: "+3%" },
                { crop: "Jute", price: 5400, trend: "+4%" },
                { crop: "Maize", price: 2200, trend: "+1%" }
            ];

        }
        else if (market === "Kharagpur") {

            crops = [
                { crop: "Paddy", price: 2200, trend: "-1%" },
                { crop: "Potato", price: 1850, trend: "+2%" },
                { crop: "Jute", price: 5000, trend: "-3%" },
                { crop: "Maize", price: 2100, trend: "+2%" }
            ];

        }

        table.innerHTML = "";

        crops.forEach(item => {

            const trendColor =
                item.trend.includes("+")
                    ? "text-green-500"
                    : "text-red-500";

            table.innerHTML += `
                <tr class="border-b">
                    <td class="py-2">
                        ${item.crop}
                    </td>

                    <td class="text-right">
                        ₹${item.price}
                    </td>

                    <td class="text-right ${trendColor}">
                        ${item.trend}
                    </td>
                </tr>
            `;
        });

    } catch (error) {

        console.error(error);

        table.innerHTML =
            `<tr>
            <td colspan="3">
                Failed to load data
            </td>
        </tr>`;
    }
}
