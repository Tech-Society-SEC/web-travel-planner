import React, { useState, useRef, useEffect } from "react";
import "./SmartPlanner.css";

const SmartPlanner = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  // Auto scroll chat
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    // Simulate AI typing delay
    setIsTyping(true);
    setTimeout(() => {
      const aiResponse = generateAIResponse(input);
      const aiMsg = { sender: "ai", text: aiResponse };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 1000);
  };

  // Generate simulated plan text
  const generateAIResponse = (inputText) => {
    return `Here’s a 3-day plan for your trip to ${inputText} 🌍

🗓️ Day 1: Arrival, explore local cafes & night market  
🗓️ Day 2: Adventure activities & city tour  
🗓️ Day 3: Relaxation, shopping & departure  

Would you like me to save this plan for download or copy?`;
  };

  const handleDownload = () => {
    const text = messages.map((m) => `${m.sender}: ${m.text}`).join("\n\n");
    const blob = new Blob([text], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "travel_plan.txt";
    link.click();
  };

  const handleCopy = () => {
    const text = messages.map((m) => `${m.sender}: ${m.text}`).join("\n\n");
    navigator.clipboard.writeText(text);
    alert("Plan copied to clipboard!");
  };

  return (
    <div className="planner-container">
      <div className="chat-section">
        <div className="chat-box">
          {messages.map((msg, index) => (
            <div key={index} className={`msg ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
          {isTyping && <div className="typing">Smart Planner is typing...</div>}
          <div ref={chatEndRef}></div>
        </div>

        <div className="input-area">
          <input
            type="text"
            placeholder="Ask me to plan your trip..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>

      <div className="actions-section">
        <h2>Smart Planner ✈️</h2>
        <p>Your personal AI travel assistant</p>
        <button onClick={handleDownload}>Download Plan</button>
        <button onClick={handleCopy}>Copy Plan</button>
      </div>
    </div>
  );
};

export default SmartPlanner;
