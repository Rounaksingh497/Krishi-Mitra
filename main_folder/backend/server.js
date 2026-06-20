const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken'); 
const fs = require('fs'); // 🟢 NEW: File System module to save data
const path = require('path'); // 🟢 NEW: Path module

dotenv.config();
//console.log("Diagnostic Key Check:", process.env.GROQ_API_KEY);
const app = express();
app.use(cors());
app.use(express.json());

const SECRET_KEY = "kisansathi_super_secret_key"; 
const USERS_FILE = path.join(__dirname, 'users.json'); // 🟢 NEW: Path to our database file

// 🛠 HELPER FUNCTIONS TO READ AND WRITE DATA
function readUsers() {
    if (!fs.existsSync(USERS_FILE)) {
        return []; // If the file doesn't exist yet, return an empty array
    }
    const data = fs.readFileSync(USERS_FILE);
    return JSON.parse(data);
}

function saveUsers(users) {
    fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
}


// ✅ Test Route
app.get('/', (req, res) => {
    res.send(`
        <h1>✅ KISAN-SATHI Backend Server is Running!</h1>
        <p>User database is now permanent.</p>
    `);
});

// --- MAIN CHAT API ROUTE (Untouched) ---
app.post('/api/chat', async (req, res) => {
    try {
        const { message, language = 'hi' } = req.body;

        if (!message) {
            return res.status(400).json({ reply: "Please send a message." });
        }

        const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "llama-3.3-70b-versatile",
                messages: [
                    {
                        role: "system",
                        content: `You are KISAN-SATHI, a helpful AI farming assistant. Always respond in ${language === 'en' ? 'English' : language === 'bn' ? 'Bengali' : 'Hindi'}. Use simple, practical language.`
                    },
                    { role: "user", content: message }
                ],
                temperature: 0.7,
                max_tokens: 700
            })
        });

        const data = await response.json();

if (!response.ok || !data.choices) {
  console.error("Groq API error:", data);
  return res.status(500).json({ 
    error: data.error?.message || "Groq API returned unexpected response" 
  });
}

res.json({ reply: data.choices[0].message.content });

    } catch (error) {
        console.error(error);
        res.status(500).json({ reply: "AI सेवा में समस्या है। कृपया बाद में प्रयास करें।" });
    }
});

// --- SIGNUP ROUTE ---
app.post('/api/signup', (req, res) => {
    const { name, phone, password } = req.body;
    let users = readUsers(); // Get current users from file
    
    // Check if user already exists
    if (users.find(u => u.phone === phone)) {
        return res.status(400).json({ error: "Phone number already registered!" });
    }
    
    // Save new user
    const newUser = { id: Date.now(), name, phone, password };
    users.push(newUser);
    saveUsers(users); // Save updated list back to file
    
    res.json({ message: "Signup successful! You can now log in." });
});

// --- LOGIN ROUTE ---
app.post('/api/login', (req, res) => {
    const { phone, password } = req.body;
    let users = readUsers(); // Get current users from file
    
    // Find user
    const user = users.find(u => u.phone === phone && u.password === password);
    if (!user) {
        return res.status(400).json({ error: "Invalid phone number or password!" });
    }
    
    // Create an authentication token
    const token = jwt.sign({ id: user.id, name: user.name, phone: user.phone }, SECRET_KEY);
    
    res.json({ 
        message: "Login successful!", 
        token: token, 
        user: { name: user.name, phone: user.phone } 
    });
});

// --- UPDATE PROFILE ROUTE ---
app.put('/api/profile', (req, res) => {
    const { token, newName, newPhone, newPassword } = req.body;
    let users = readUsers(); // Get current users from file
    
    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        const userIndex = users.findIndex(u => u.id === decoded.id);
        
        if (userIndex > -1) {
            // Update details if provided
            if (newName) users[userIndex].name = newName;
            if (newPhone) users[userIndex].phone = newPhone;
            if (newPassword) users[userIndex].password = newPassword;
            
            saveUsers(users); // Save updated details back to file
            
            const updatedToken = jwt.sign({ 
                id: users[userIndex].id, 
                name: users[userIndex].name, 
                phone: users[userIndex].phone 
            }, SECRET_KEY);

            res.json({ message: "Profile updated successfully!", token: updatedToken, user: users[userIndex] });
        } else {
            res.status(404).json({ error: "User not found" });
        }
    } catch (error) {
        res.status(401).json({ error: "Unauthorized. Please log in again." });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`✅ KISAN-SATHI Backend Server is running on http://localhost:${PORT}`);
});