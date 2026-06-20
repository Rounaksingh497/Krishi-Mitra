// Global language configuration and state
let currentLang = 'hi';

const translations = {
    en: {
        "title": "KISAN-SATHI - AI Farming Assistant",
        "app-name": "KISAN-SATHI",
        "nav-dashboard": "Dashboard",
        "nav-advisory": "Advisories",
        "nav-ai": "AI Chat",
        "nav-market": "Market",
        "hero-title": "KISAN-SATHI - Your AI Farming Companion",
        "hero-subtitle": "Personalized crop advice, weather alerts & market prices",
        "hero-button": "Talk to AI",
        "ai-title": "AI Farming Expert",
        "dashboard-title": "Farmer Dashboard",
        "welcome-user": "Welcome back, User!",
        "last-login": "Last login: Today at 9:42 AM",
        "card-crop": "Crop Recommendation",
        "card-weather": "Weather Forecast",
        "card-market": "Market Prices",
        "hero-motivation": "Cultivating the future, empowering the hands that feed our nation.",
        "adv-main-title": "Agricultural Advisories & Schemes",
        "adv-alerts-title": "Latest Alerts & Tips",
        "adv-schemes-title": "Govt Support & Schemes",
        "badge-weather": "Weather Alert",
        "badge-pest": "Pest Warning",
        "badge-govt": "Govt Advisory",
        "badge-state": "State Govt",
        "badge-central": "Central Govt",
        "link-details": "Apply/Details",
        "alert1-title": "Pre-Monsoon Irrigation Advisory",
        "alert1-desc": "Heavy to moderate rainfall is expected in Southern Bengal over the next 48 hours. Farmers are advised to postpone irrigation and fertilizer application to prevent nutrient runoff.",
        "alert2-title": "Fall Armyworm Detection",
        "alert2-desc": "Cases of Fall Armyworm detected in Maize crops. Monitor crops closely. If detected, spray Emamectin Benzoate 5% SG (0.4g/liter) or Spinetoram 11.7% SC (0.5ml/liter) in clear weather.",
        "alert3-title": "Kharif Seed Treatment",
        "alert3-desc": "Dept of Agriculture advises treating paddy seeds with Trichoderma viride (5g/kg seed) before nursery sowing to prevent soil-borne diseases. Procure seeds only from certified dealers.",
        "scheme1-desc": "Assured income up to ₹10,000 per year per acre. In case of a farmer's untimely death (18-60 years), family receives a one-time grant of ₹2 Lakh.",
        "scheme2-desc": "Financial benefit of ₹6,000 per year transferred directly into the bank accounts of farmer families across the country in three equal installments.",
        "scheme3-desc": "100% premium paid by State Govt for crop insurance (except Sugarcane & Potato). Protects against yield loss due to natural calamities, pests, and diseases.",
        "scheme4-desc": "Adequate and timely credit support under a single window at highly subsidized interest rates for cultivation, machinery, and post-harvest expenses."
    },
    hi: {
        "title": "किसान-साथी - AI कृषि सहायक",
        "app-name": "किसान-साथी",
        "nav-dashboard": "डैशबोर्ड",
        "nav-advisory": "सलाह",
        "nav-ai": "AI चैट",
        "nav-market": "बाजार",
        "hero-title": "किसान साथी - आपका AI कृषि साथी",
        "hero-subtitle": "व्यक्तिगत फसल सलाह, मौसम अलर्ट और बाजार भाव",
        "hero-button": "AI से बात करें",
        "ai-title": "AI कृषि विशेषज्ञ",
        "dashboard-title": "किसान डैशबोर्ड",
        "welcome-user": "स्वागत है, उपयोगकर्ता!",
        "last-login": "पिछली लॉग इन: आज सुबह 9:42 बजे",
        "card-crop": "फसल की सिफारिश",
        "card-weather": "मौसम का पूर्वानुमान",
        "card-market": "बाजार भाव",
        "hero-motivation": "भविष्य को संवारना, हमारे राष्ट्र का पेट भरने वाले हाथों को सशक्त बनाना",
        "adv-main-title": "कृषि सलाह और सरकारी योजनाएं",
        "adv-alerts-title": "नवीनतम अलर्ट और सुझाव",
        "adv-schemes-title": "सरकारी सहायता और योजनाएं",
        "badge-weather": "मौसम अलर्ट",
        "badge-pest": "कीट चेतावनी",
        "badge-govt": "सरकारी सलाह",
        "badge-state": "राज्य सरकार",
        "badge-central": "केंद्र सरकार",
        "link-details": "आवेदन/विवरण",
        "alert1-title": "मानसून-पूर्व सिंचाई सलाह",
        "alert1-desc": "अगले 48 घंटों में दक्षिण बंगाल में भारी से मध्यम वर्षा होने की संभावना है। किसानों को सलाह दी जाती है कि वे पोषक तत्वों के बहाव को रोकने के लिए सिंचाई और उर्वरक का उपयोग टाल दें।",
        "alert2-title": "फॉल आर्मीवॉर्म का प्रकोप",
        "alert2-desc": "मक्के की फसलों में फॉल आर्मीवॉर्म के मामले पाए गए हैं। फसलों की बारीकी से निगरानी करें। यदि दिखाई दे, तो साफ मौसम में इमामेक्टिन बेंजोएट 5% SG (0.4 ग्राम/लीटर) या स्पिनेटोरम 11.7% SC (0.5 मिली/लीटर) का छिड़काव करें।",
        "alert3-title": "खरीफ बीज उपचार",
        "alert3-desc": "कृषि विभाग नर्सरी बुवाई से पहले मिट्टी जनित बीमारियों को रोकने के लिए धान के बीजों को ट्राइकोडेर्मा विरिडी (5 ग्राम/किग्रा बीज) से उपचारित करने की सलाह देता है। बीज केवल प्रमाणित डीलरों से ही खरीदें।",
        "scheme1-desc": "प्रति वर्ष प्रति एकड़ ₹10,000 तक की सुनिश्चित आय। किसान की असामयिक मृत्यु (18-60 वर्ष) के मामले में, परिवार को ₹2 लाख का एकमुश्त अनुदान मिलता है।",
        "scheme2-desc": "देश भर के किसान परिवारों के बैंक खातों में तीन समान किस्तों में सीधे ट्रांसफर किए जाने वाले प्रति वर्ष ₹6,000 का वित्तीय लाभ।",
        "scheme3-desc": "फसल बीमा के लिए राज्य सरकार द्वारा 100% प्रीमियम का भुगतान (गन्ना और आलू को छोड़कर)। प्राकृतिक आपदाओं, कीटों और बीमारियों के कारण होने वाले नुकसान से बचाता है।",
        "scheme4-desc": "खेती, मशीनरी और कटाई के बाद के खर्चों के लिए अत्यधिक रियायती ब्याज दरों पर सिंगल विंडो के तहत पर्याप्त और समय पर ऋण सहायता।"
    },
    bn: {
        "title": "কিষাণ সাথী - AI কৃষি সহায়ক",
        "app-name": "কিষাণ সাথী",
        "nav-dashboard": "ড্যাশবোর্ড",
        "nav-advisory": "পরামর্শ",
        "nav-ai": "AI চ্যাট",
        "nav-market": "বাজার",
        "hero-title": "কিষাণ সাথী - আপনার AI কৃষি সঙ্গী",
        "hero-subtitle": "ব্যক্তিগত ফসল পরামর্শ, আবহাওয়া সতর্কতা এবং বাজার মূল্য",
        "hero-button": "AI এর সাথে কথা বলুন",
        "ai-title": "AI কৃষি বিশেষজ্ঞ",
        "dashboard-title": "কৃষক ড্যাশবোর্ড",
        "welcome-user": "স্বাগত, ব্যবহারকারী!",
        "last-login": "শেষ লগইন: আজ সকাল ৯:৪২ মিনিটে",
        "card-crop": "ফসল নির্বাচন পরামর্শ",
        "card-weather": "আবহাওয়ার পূর্বাভাস",
        "card-market": "বাজার দর",
        "hero-motivation": "ভবিষ্যৎকে গড়ে তোলা, আমাদের দেশের অন্নদাতাদের (যাঁরা আমাদের অন্ন জোগান) ক্ষমতায়ন করা।",
        "adv-main-title": "কৃষি পরামর্শ ও সরকারি প্রকল্প",
        "adv-alerts-title": "সর্বশেষ সতর্কতা ও পরামর্শ",
        "adv-schemes-title": "সরকারি সহায়তা ও প্রকল্প",
        "badge-weather": "আবহাওয়া সতর্কতা",
        "badge-pest": "কীটপতঙ্গ সতর্কতা",
        "badge-govt": "সরকারি পরামর্শ",
        "badge-state": "রাজ্য সরকার",
        "badge-central": "কেন্দ্রীয় সরকার",
        "link-details": "আবেদন/বিস্তারিত",
        "alert1-title": "প্রাক-বর্ষা সেচ পরামর্শ",
        "alert1-desc": "আগামী ৪৮ ঘণ্টার মধ্যে দক্ষিণ বঙ্গে ভারী থেকে মাঝারি বৃষ্টিপাতের সম্ভাবনা রয়েছে। সার ও পুষ্টি উপাদান ধুয়ে যাওয়া রোধ করতে কৃষকদের সেচ ও সার প্রয়োগ স্থগিত রাখার পরামর্শ দেওয়া হচ্ছে।",
        "alert2-title": "ফল আর্মিওয়ার্মের আক্রমণ",
        "alert2-desc": "ভুট্টা ফসলে ফল আর্মিওয়ার্মের উপস্থিতি সনাক্ত হয়েছে। ফসল নিবিড়ভাবে পর্যবেক্ষণ করুন। আক্রমণ দেখা দিলে পরিষ্কার আবহাওয়ায় ইমামেকটিন বেনজোয়েট ৫% এসজি (০.৪ গ্রাম/লিটার) অথবা স্পিনেটোরাম ১১.৭% এসসি (০.৫ মিলি/লিটার) স্প্রে করুন।",
        "alert3-title": "খরিফ বীজ শোধন",
        "alert3-desc": "কৃষি দপ্তর থেকে মাটির রোগজীবাণু রোধ করার জন্য নার্সারিতে বপনের আগে ধানের বীজ ট্রাইকোডার্মা ভিরিডি (৫ গ্রাম/কেজি বীজ) দিয়ে শোধন করার পরামর্শ দেওয়া হচ্ছে। শুধুমাত্র শংসাপত্রপ্রাপ্ত ডিলারদের থেকেই বীজ সংগ্রহ করুন।",
        "scheme1-desc": "প্রতি একর জমিতে বছরে সর্বোচ্চ ১০,০০০ টাকা পর্যন্ত নিশ্চিত আয়। ১৮-৬০ বছর বয়সের মধ্যে কোনো কৃষকের অকাল মৃত্যু হলে পরিবার এককালীন ২ লক্ষ টাকা আর্থিক অনুদান পাবে।",
        "scheme2-desc": "সারা দেশের কৃষক পরিবারগুলির ব্যাঙ্ক অ্যাকাউন্টে সরাসরি তিনটি সমান kiস্তিতে বছরে মোট ৬,০০০ টাকা আর্থিক সহায়তা প্রদান করা হয়।",
        "scheme3-desc": "ফসলের বীমার জন্য রাজ্য সরকার ১০০% প্রিমিয়াম প্রদান করে (আখ ও আলু ব্যতীত)। প্রাকৃতিক দুর্যোগ, কীটপতঙ্গ এবং রোগের কারণে ফসলের ক্ষতি থেকে সুরক্ষা দেয়।",
        "scheme4-desc": "চাষাবাদ, কৃষি যন্ত্রপাতি ক্রয় এবং ফসল কাটার পরবর্তী খরচের জন্য অত্যন্ত কম সুদে একটি একক জানালার মাধ্যমে পর্যাপ্ত ও সময়োপযোগী ঋণ সহায়তা।"
    }
};

const languageConfig = {
    'en': { name: 'English', voice: 'en-IN', status: 'Current Language: English' },
    'hi': { name: 'हिंदी', voice: 'hi-IN', status: 'Current Language: हिंदी' },
    'bn': { name: 'বাংলা', voice: 'bn-IN', status: 'Current Language: বাংলা' }
};

// Unified Global Language Switcher
function switchAppLanguage(lang) {
    currentLang = lang;
    window.currentLang = lang;

    // Update active button state globally
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Translate DOM elements mapped with data-translate
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    // Update status bar if it exists
    const langStatus = document.getElementById('lang-status');
    if (langStatus && languageConfig[lang]) {
        langStatus.textContent = languageConfig[lang].status;
    }
}

// Locations Data
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

let villageCoordinates = JSON.parse(localStorage.getItem("villageCoordinates")) || {};

function initLocationSelectors() {
    const districtSelect = document.getElementById("district-select");
    const villageSelect = document.getElementById("village-select");

    if (!districtSelect || !villageSelect) return;

    // Populate districts cleanly
    Object.keys(westBengalLocations).sort().forEach(district => {
        const opt = document.createElement("option");
        opt.value = district;
        opt.textContent = district;
        districtSelect.appendChild(opt);
    });

    // District Change
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

    // Geocoding and weather pipeline
    villageSelect.addEventListener("change", async () => {
        const village = villageSelect.value;
        const district = districtSelect.value;

        if (!village) return;

        try {
            // Check cache
            if (villageCoordinates[village]) {
                const coords = villageCoordinates[village];
                console.log("Using cached coordinates:", village, coords);
                await getWeather(coords.lat, coords.lon, village);
                return;
            }

            // Fetch new coordinates
            const searchQuery = `${village}, ${district}, West Bengal, India`;
            const geoUrl = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(searchQuery)}&format=json&limit=1`;
            const response = await fetch(geoUrl);
            const data = await response.json();

            if (!data.length) {
                alert(`Location not found: ${village}`);
                return;
            }

            const lat = parseFloat(data[0].lat);
            const lon = parseFloat(data[0].lon);

            // Save cache
            villageCoordinates[village] = { lat, lon };
            localStorage.setItem("villageCoordinates", JSON.stringify(villageCoordinates));

            await getWeather(lat, lon, village);

        } catch (error) {
            console.error("Village Weather Error:", error);
        }
    });
}

// Profile dropdown controls
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

// App initialization on DOM load
document.addEventListener('DOMContentLoaded', function () {
    getGPSWeather();

    document.getElementById("gps-btn")?.addEventListener("click", getGPSWeather);

    // Profile DOM Setup
    const token = localStorage.getItem('kisan_token');
    const userStr = localStorage.getItem('kisan_user');
    const signinBtn = document.getElementById('signin-btn');
    const profileSection = document.getElementById('profile-section');
    const welcomeText = document.getElementById('welcome-text');
    const logoutBtn = document.getElementById('logout-btn');
    
    // Edit Profile Modal Elements
    const profileModal = document.getElementById('profile-modal');
    const editProfileBtn = document.getElementById('edit-profile-btn');
    const closeModalBtn = document.getElementById('close-modal');
    const saveProfileBtn = document.getElementById('save-profile');

    if (signinBtn && profileSection) {
        if (token && userStr) {
            const user = JSON.parse(userStr);

            signinBtn.classList.add('hidden');
            profileSection.classList.remove('hidden');
            profileSection.classList.add('flex');

            if (welcomeText) welcomeText.textContent = `Welcome, ${user.name}`;
            const dashboardWelcome = document.querySelector('h3.font-semibold.text-lg');
            if (dashboardWelcome) dashboardWelcome.textContent = `Welcome back, ${user.name}!`;

            logoutBtn?.addEventListener('click', () => {
                localStorage.removeItem('kisan_token');
                localStorage.removeItem('kisan_user');
                window.location.reload();
            });

            editProfileBtn?.addEventListener('click', () => {
                document.getElementById('edit-name').value = user.name;
                document.getElementById('edit-phone').value = user.phone;
                profileModal.classList.remove('hidden');
                document.getElementById('profile-dropdown').classList.add('hidden'); // Close dropdown
            });

            closeModalBtn?.addEventListener('click', () => {
                profileModal.classList.add('hidden');
            });

            saveProfileBtn?.addEventListener('click', async () => {
                const newName = document.getElementById('edit-name').value;
                const newPhone = document.getElementById('edit-phone').value;

                try {
                    const response = await fetch('http://localhost:5000/api/profile', {
                        method: 'PUT',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ token, newName, newPhone })
                    });
                    const data = await response.json();

                    if (response.ok) {
                        alert("Profile Updated!");
                        localStorage.setItem('kisan_token', data.token);
                        localStorage.setItem('kisan_user', JSON.stringify(data.user));
                        window.location.reload();
                    } else {
                        alert(data.error || "Failed to update profile.");
                    }
                } catch (e) {
                    console.error(e);
                    alert("Failed to update profile. Make sure the server is running.");
                }
            });
        }
    }

    // Settings Modal Logic
    const settingsBtn = document.getElementById('settings-btn');
    const settingsModal = document.getElementById('settings-modal');
    const closeSettingsBtn = document.getElementById('close-settings-modal');
    const saveSettingsBtn = document.getElementById('save-settings-btn');

    if (settingsBtn && settingsModal) {
        settingsBtn.addEventListener('click', () => {
            settingsModal.classList.remove('hidden');
            document.getElementById('profile-dropdown').classList.add('hidden'); // Close dropdown
        });

        closeSettingsBtn.addEventListener('click', () => {
            settingsModal.classList.add('hidden');
        });

        saveSettingsBtn.addEventListener('click', () => {
            alert("Settings saved successfully!");
            settingsModal.classList.add('hidden');
        });
    }

    // Chat Logic
    const chatContainer = document.getElementById('chat-container');
    const chatInput = document.getElementById('chat-input');
    const sendBtn = document.getElementById('send-btn');
    const voiceBtn = document.getElementById('voice-btn');

    let recognition = null;
    let isListening = false;

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
                body: JSON.stringify({ message: query, language: currentLang })
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
        recognition.lang = languageConfig[currentLang].voice; // dynamic language refresh
        recognition.start();
        isListening = true;
        voiceBtn?.classList.add('listening');
    }

    function stopListening() {
        if (recognition) recognition.stop();
        isListening = false;
        voiceBtn?.classList.remove('listening');
    }

    sendBtn?.addEventListener('click', sendMessage);
    chatInput?.addEventListener('keypress', (e) => { if (e.key === 'Enter') sendMessage(); });
    voiceBtn?.addEventListener('click', toggleListening);

    // Event listeners connect directly to global translator
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            switchAppLanguage(btn.dataset.lang);
        });
    });

    switchAppLanguage('hi');
    initLocationSelectors();
    document.getElementById("crop-btn")?.addEventListener("click", getCropRecommendation);

    setTimeout(() => {
        if (chatContainer) addMessage("नमस्ते! 🌾 पहले बैकएंड सर्वर शुरू करें, फिर भाषा चुनकर पूछें।");
    }, 600);

    initSpeechRecognition();
});

const WEATHER_API = "https://api.open-meteo.com/v1/forecast";

async function getWeather(lat, lon, locationName) {
    const url = `${WEATHER_API}?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,surface_pressure,cloud_cover&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,precipitation_probability_max,uv_index_max,sunrise,sunset&timezone=auto&forecast_days=7`;
    
    const response = await fetch(url);
    const data = await response.json();

    document.getElementById("weather-location").textContent = `${locationName} (${lat.toFixed(4)}, ${lon.toFixed(4)})`;
    document.getElementById("weather-temp").textContent = `${data.current.temperature_2m}°C`;
    document.getElementById("humidity").textContent = `${data.current.relative_humidity_2m}%`;
    document.getElementById("wind-speed").textContent = `${data.current.wind_speed_10m} km/h`;
    document.getElementById("rain-chance").textContent = `${data.daily.precipitation_probability_max[0]}%`;
    document.getElementById("uv-index").textContent = data.daily.uv_index_max[0];
    document.getElementById("weather-updated").textContent = `Updated: ${new Date().toLocaleString()}`;

    let alertBox = document.getElementById("weather-alert-box");
    let alertEl = document.getElementById("weather-alert");
    
    if(alertBox && alertEl) {
        let alertText = "";
        if (data.daily.precipitation_probability_max[0] >= 70) {
            alertText = "🌧 Heavy rain expected. Avoid fertilizer spraying.";
        } else if (data.current.wind_speed_10m > 25) {
            alertText = "🌬 Strong winds expected. Protect crops and structures.";
        }

        if (alertText !== "") {
            alertBox.classList.remove("hidden");
            alertEl.textContent = alertText;
        } else {
            alertBox.classList.add("hidden");
        }
    }

    const forecastContainer = document.getElementById("forecast-container");
    if (!forecastContainer) return;
    forecastContainer.innerHTML = "";

    for (let i = 0; i < 7; i++) {
        const date = new Date(data.daily.time[i]);
        const day = date.toLocaleDateString("en-IN", { weekday: "short" });

        forecastContainer.innerHTML += `
            <div class="border rounded-lg p-3 text-center">
                <h4 class="font-semibold">${day}</h4>
                <p class="text-red-500">${data.daily.temperature_2m_max[i]}°C</p>
                <p class="text-blue-500">${data.daily.temperature_2m_min[i]}°C</p>
                <p class="text-sm">🌧 ${data.daily.precipitation_probability_max[i]}%</p>
                <p class="text-sm">☀️ UV ${data.daily.uv_index_max[i]}</p>
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
            await getWeather(lat, lon, "Current Location");
        },
        (err) => console.error(err),
        { enableHighAccuracy: true }
    );
}

function getCropRecommendation() {
    const district = document.getElementById("district-select").value;
    const village = document.getElementById("village-select").value;
    const soil = document.getElementById("soil-select").value;
    const season = document.getElementById("season-select").value;
    const resultBox = document.getElementById("crop-result");

    if (!district || !village) {
        alert("Please select district and village");
        return;
    }

    let crops = [];

    if (season.includes("Kharif")) {
        if (soil === "Alluvial soil") crops = ["Paddy", "Jute", "Maize"];
        else if (soil === "Red soil") crops = ["Groundnut", "Maize", "Millets"];
        else if (soil === "Laterite soil") crops = ["Pulses", "Groundnut", "Cashew"];
        else crops = ["Paddy", "Maize"];
    } else if (season.includes("Rabi")) {
        if (soil === "Alluvial soil") crops = ["Wheat", "Mustard", "Potato"];
        else if (soil === "Red soil") crops = ["Gram", "Mustard"];
        else crops = ["Wheat", "Vegetables"];
    } else {
        crops = ["Watermelon", "Cucumber", "Vegetables"];
    }

    if(resultBox) {
        resultBox.classList.remove("hidden");
        resultBox.innerHTML = `
            <h4 class="font-bold text-green-700 mb-2">Recommended Crops</h4>
            <p><strong>${district}</strong> / <strong>${village}</strong></p>
            <p class="mt-2">🌱 ${crops.join(", ")}</p>
        `;
    }
}

document.getElementById("load-market-btn")?.addEventListener("click", loadMarketPrices);

async function loadMarketPrices() {
    const market = document.getElementById("market-select").value;
    const table = document.getElementById("market-table");
    if (!table) return;

    table.innerHTML = `<tr><td colspan="3">Loading...</td></tr>`;

    try {
        let crops = [];
        if (market === "Kolkata") {
            crops = [
                { crop: "Paddy", price: 2250, trend: "+3%" },
                { crop: "Potato", price: 1800, trend: "+1%" },
                { crop: "Jute", price: 5100, trend: "-2%" },
                { crop: "Maize", price: 2100, trend: "+4%" }
            ];
        } else if (market === "Howrah") {
            crops = [
                { crop: "Paddy", price: 2180, trend: "+1%" },
                { crop: "Potato", price: 1750, trend: "-2%" },
                { crop: "Jute", price: 4950, trend: "+2%" },
                { crop: "Maize", price: 2050, trend: "+3%" }
            ];
        } else if (market === "Asansol") {
            crops = [
                { crop: "Paddy", price: 2300, trend: "+4%" },
                { crop: "Potato", price: 1700, trend: "-1%" },
                { crop: "Jute", price: 5200, trend: "+1%" },
                { crop: "Maize", price: 2150, trend: "+5%" }
            ];
        } else if (market === "Siliguri") {
            crops = [
                { crop: "Paddy", price: 2400, trend: "+2%" },
                { crop: "Potato", price: 1900, trend: "+3%" },
                { crop: "Jute", price: 5400, trend: "+4%" },
                { crop: "Maize", price: 2200, trend: "+1%" }
            ];
        } else if (market === "Kharagpur") {
            crops = [
                { crop: "Paddy", price: 2200, trend: "-1%" },
                { crop: "Potato", price: 1850, trend: "+2%" },
                { crop: "Jute", price: 5000, trend: "-3%" },
                { crop: "Maize", price: 2100, trend: "+2%" }
            ];
        }

        table.innerHTML = "";
        crops.forEach(item => {
            const trendColor = item.trend.includes("+") ? "text-green-500" : "text-red-500";
            table.innerHTML += `
                <tr class="border-b">
                    <td class="py-2">${item.crop}</td>
                    <td class="text-right">₹${item.price}</td>
                    <td class="text-right ${trendColor}">${item.trend}</td>
                </tr>
            `;
        });
    } catch (error) {
        console.error(error);
        table.innerHTML = `<tr><td colspan="3">Failed to load data</td></tr>`;
    }
}