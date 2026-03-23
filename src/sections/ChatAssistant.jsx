import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ChatAssistant() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "assistant",
      text: "Hello! I'm your currency exchange assistant. I can help you with exchange rates, currency conversions, and answer questions about foreign exchange. Try asking me something like 'Convert 100 USD to EUR' or 'What's the exchange rate for GBP?'",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [input, setInput] = useState("");
  const chatContainerRef = useRef(null);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      type: "user",
      text: input,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages([...messages, userMessage]);
    setInput("");
  };

  return (
    <section className="bg-gray-50/50">
      <div className="w-full">

        <div className="bg-white border-t border-gray-100 flex flex-col h-[600px]">
          {/* Chat Header */}
          <div className="bg-blue-600 px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div>
                <h3 className="text-white font-bold tracking-wide">Currency Exchange Assistant</h3>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-blue-100 text-xs font-semibold uppercase tracking-widest">Online</span>
                </div>
              </div>
            </div>
          </div>

          {/* Messages Area */}
          <div 
            ref={chatContainerRef}
            className="flex-1 overflow-y-auto space-y-4 bg-gray-50/30 p-4"
          >
            <AnimatePresence initial={false}>
              {messages.map((m) => (
                <motion.div
                  key={m.id}
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className={`flex ${m.type === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div 
                    className={`max-w-[85%] md:max-w-[70%] p-5 rounded-3xl shadow-sm relative ${
                      m.type === "user" 
                        ? "bg-blue-600 text-white rounded-tr-none" 
                        : "bg-white text-gray-800 rounded-tl-none border border-gray-100"
                    }`}
                  >
                    <p className="text-sm md:text-base leading-relaxed font-medium">
                      {m.text}
                    </p>
                    <span 
                      className={`text-[10px] absolute bottom-2 ${
                        m.type === "user" ? "left-4 text-blue-200" : "right-4 text-gray-400"
                      } font-bold`}
                    >
                      {m.time}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Input Area */}
          <form onSubmit={handleSend} className="bg-white border-t border-gray-100 flex items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me about your currency rate exchanges..."
              className="flex-1 bg-gray-50 border-none px-6 py-6 text-gray-800 focus:ring-0 outline-none transition-all placeholder:text-gray-400 font-medium"
            />
            <button 
              type="submit"
              disabled={!input.trim()}
              className="bg-blue-600 text-white p-6 hover:bg-blue-700 transition-all duration-300 disabled:opacity-50 disabled:bg-gray-300 active:scale-95"
            >
              <svg className="w-6 h-6 rotate-90" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
