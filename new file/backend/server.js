const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Test Route - To check if server is running
app.get('/', (req, res) => {
    res.send(`
        <h1>✅ KISAN-SATHI Backend Server is Running!</h1>
        <p>Server is working properly.</p>
        <p>Go to <strong>http://localhost:5500</strong> (your frontend) to use the AI Chat.</p>
    `);
});

// Main Chat API Route
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
        res.json({ reply: data.choices[0].message.content });

    } catch (error) {
        console.error(error);
        res.status(500).json({ reply: "AI सेवा में समस्या है। कृपया बाद में प्रयास करें।" });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`✅ KISAN-SATHI Backend Server is running on http://localhost:${PORT}`);
});