import { useState } from "react";
import Card from "./UI/Card";
import styles from "./Chatbot.module.css";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! I am your assistant. Ask me anything." },
  ]);
  const [input, setInput] = useState("");

  const getBotResponse = (question) => {
    const q = question.toLowerCase();

    if (q.includes("add")) {
      return "Click 'Add New Blog' button in the header to create a new blog.";
    }

    if (q.includes("edit")) {
      return "Press the Edit button on the blog you want to modify.";
    }

    if (q.includes("delete")) {
      return "Click the Delete button below the blog to remove it.";
    }

    if (q.includes("hello") || q.includes("hi")) {
      return "Hello! How can I help you today?";
    }

    return "Sorry, I didn't understand. Try asking about add, edit, or delete blogs.";
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    const botMessage = { sender: "bot", text: getBotResponse(input) };

    setMessages((prev) => [...prev, userMessage, botMessage]);
    setInput("");
  };

  return (
    <Card className={styles.chatbot}>
      <h3>Chat Assistant</h3>

      <div
        style={{
          height: "200px",
          overflowY: "auto",
          border: "1px solid #ccc",
          padding: "10px",
        }}
      >
        {messages.map((msg, index) => (
          <p
            key={index}
            style={{ textAlign: msg.sender === "user" ? "right" : "left" }}
          >
            <strong>{msg.sender === "user" ? "You" : "Bot"}:</strong> {msg.text}
          </p>
        ))}
      </div>

      <input
        type="text"
        placeholder="Ask something..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={sendMessage}>Send</button>
    </Card>
  );
};

export default Chatbot;
