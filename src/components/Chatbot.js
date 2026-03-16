import { useState } from "react";
import Card from "./UI/Card";
import styles from "./Chatbot.module.css";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);
console.log(process.env.REACT_APP_GEMINI_API_KEY);

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! I am your assistant. Ask me anything." },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    try {
      const model = genAI.getGenerativeModel({
        model: "gemini-2.5-flash",
      });

      const prompt = `
You are an AI assistant inside a React blog website.

Your job is to help users use the blog application.

The website allows users to:
- Add a blog with title, image URL, and description
- Edit an existing blog
- Delete a blog
- View all blogs

Guidelines:
- Give clear step-by-step instructions when helping users.
- Keep responses short and helpful.
- If the question is unrelated to the blog website, politely say that you only assist with this blog application.

User question:
${input}
`;

      const result = await model.generateContent(prompt);
      //   const result = await model.generateContent(input);

      const text = result.response.text();

      setMessages((prev) => [...prev, { sender: "bot", text }]);
    } catch (error) {
      console.error(error);
    }

    setInput("");
  };

  return (
    <Card className={styles.chatbot}>
      <h3>Chat Assistant</h3>

      <div className={styles.messages}>
        {messages.map((msg, index) => (
          <p
            key={index}
            style={{ textAlign: msg.sender === "user" ? "right" : "left" }}
          >
            <strong>{msg.sender === "user" ? "You" : "Bot"}:</strong> {msg.text}
          </p>
        ))}
      </div>

      <div className={styles.inputArea}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask something..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </Card>
  );
};

export default Chatbot;
