import React, { useState, useEffect, useRef } from 'react';
import { FaRobot, FaTimes, FaPaperPlane, FaCommentDots, FaSignOutAlt, FaSyncAlt } from 'react-icons/fa';
import './Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! I'm Krishna's AI Assistant. How can I help you today? 👋", isBot: true }
  ]);
  const [input, setInput] = useState('');
  const [showModal, setShowModal] = useState(false);
  const chatBodyRef = useRef(null);

  useEffect(() => {
    // Force modal to show on every page load
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const portfolioData = {
    skills: ["React", "Node.js", "Express", "MongoDB", "Java", "C", "HTML5", "CSS3", "JavaScript", "Bootstrap", "C++", "DSA", "JQuery", "Tailwind", "MUI", "Rest APIs", "PostgreSQL"],
    experience: [
      { role: "Full Stack Developer", company: "CUBIKSOFT TECHNOLOGIES", period: "2024-2025" },
      { role: "ReactJs Developer", company: "CodSoft", period: "2024" },
      { role: "Full Stack Developer", company: "Bharat", period: "2024" },
      { role: "Web Developer", company: "Corizo", period: "2023-2024" },
      { role: "Java Developer", company: "InternPe", period: "2022-2023" }
    ],
    internship: ["Full Stack Developer at CUBIKSOFT TECHNOLOGIES", "ReactJs Developer at CodSoft", "FullStack Developer at Bharat", "Web Developer at Corizo", "Java Developer at InternPe", "Web Developer at InternPe"],
    Tools: ["Postman", "MongoDbAtlas", "GitHub", "Git", "VS Code", "SqlServer", "Jira"],
    projects: ["Agro-Shopping", "Expense Tracker", "Nexus-Inventory", "Velvet Venture", "Flowly", "Lumen AI Pro", "Stratum-Ticketing System"],
    education: ["UG:B.E in Electronics and Communication Engineering(Karpagam college Of Engineering,coimbatore)", "12th Grade(Sri Jayam matriculation school,Tiruvannamalai)", "10th Grade(Sri Lourdu Matha matriculation school,Tiruvannamalai)"],
    Percentage: ["UG:75.67%", "12th Grade:89.97%", "10th Grade:82%"],
    location: "Tiruvannamalai,India",
    contact: "[EMAIL_ADDRESS]",
    LinkedIn: "www.linkedin.com/in/krishnarajr25",
    GitHub: "https://github.com/KRISHNARAJ225"
  };

  const handleSend = (text) => {
    if (!text.trim()) return;

    const newMessages = [...messages, { text, isBot: false }];
    setMessages(newMessages);
    setInput('');
    setIsTyping(true);

    // Process AI response
    setTimeout(() => {
      let response = "I'm not sure about that. Try asking about Krishna's skills, experience, or projects!";
      const query = text.toLowerCase();

      if (query.includes('skill')) {
        response = `Krishna is highly skilled in: ${portfolioData.skills.join(', ')}.`;
      } else if (query.includes('tool')) {
        response = `Krishna uses professional tools like: ${portfolioData.Tools.join(', ')}.`;
      } else if (query.includes('internship')) {
        response = `Krishna has completed several internships: ${portfolioData.internship.join('; ')}.`;
      } else if (query.includes('experience') || query.includes('work')) {
        const exp = portfolioData.experience.map(e => `${e.role} at ${e.company} (${e.period})`).join(', ');
        response = `Krishna has extensive professional experience: ${exp}.`;
      } else if (query.includes('project')) {
        response = `Check out these featured projects: ${portfolioData.projects.join(', ')}. They showcase his expertise in Full Stack development!`;
      } else if (query.includes('education') || query.includes('study') || query.includes('college') || query.includes('school')) {
        response = `Krishna's academic background includes: ${portfolioData.education.join(' | ')}. He achieved: ${portfolioData.Percentage.join(', ')}.`;
      } else if (query.includes('percentage') || query.includes('mark') || query.includes('grade')) {
        response = `Krishna has a strong academic record: ${portfolioData.Percentage.join(', ')}.`;
      } else if (query.includes('contact') || query.includes('hire') || query.includes('reach')) {
        response = `You can reach Krishna via email at ${portfolioData.contact}, or through the Contact form below.`;
      } else if (query.includes('linkedin')) {
        response = `Connect with Krishna on LinkedIn: ${portfolioData.LinkedIn}`;
      } else if (query.includes('github')) {
        response = `Explore Krishna's code on GitHub: ${portfolioData.GitHub}`;
      } else if (query.includes('who') || query.includes('about')) {
        response = `Krishna Raj R is a passionate Software Developer from ${portfolioData.location}, specializing in the MERN stack and Java development.`;
      } else if (query.includes('location') || query.includes('where')) {
        response = `Krishna is located in ${portfolioData.location}.`;
      } else if (query.includes('thank') || query.includes('bye')) {
        response = "You're very welcome! It was a pleasure chatting with you. Have a great day! 😊";
      }

      setMessages([...newMessages, { text: response, isBot: true }]);
      setIsTyping(false);
    }, 1200);
  };

  const handleRefresh = () => {
    setMessages([{ text: "Hello! I'm Krishna's AI Assistant. How can I help you today? 👋", isBot: true }]);
  };

  const endConversation = () => {
    setMessages([...messages, { text: "Thank you for visiting! Krishna will be happy to connect with you. Have a professional and wonderful day! 🙏", isBot: true }]);
    setTimeout(() => setIsOpen(false), 3000);
  };

  return (
    <>
      {/* Initial Greeting Modal */}
      {showModal && !isOpen && (
        <div className="chat-modal">
          <div className="chat-modal-content">
            <button className="close-modal" onClick={() => setShowModal(false)}><FaTimes /></button>
            <div className="chat-modal-body">
              <div className="bot-pulse">
                <FaRobot className="modal-icon" />
              </div>
              <h3>Welcome!</h3>
              <p>I'm here to help you explore Krishna's portfolio. Want to chat?</p>
              <button className="chat-now-btn" onClick={() => { setIsOpen(true); setShowModal(false); }}>Start Conversation</button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <div className={`chatbot-btn ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaCommentDots />}
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <div className="header-info">
              <FaRobot />
              <span>Krishna AI</span>
              <span className="status-dot"></span>
            </div>
            <div className="header-actions">
              <button className="refresh-chat-btn" onClick={handleRefresh} title="Refresh Conversation">
                <FaSyncAlt />
              </button>
              <button className="end-chat-btn" onClick={endConversation} title="End Conversation">
                <FaSignOutAlt />
              </button>
            </div>
          </div>
          <div className="chat-body" ref={chatBodyRef}>
            {messages.map((msg, i) => (
              <div key={i} className={`chat-message ${msg.isBot ? 'bot' : 'user'}`}>
                {msg.text}
              </div>
            ))}
            {isTyping && (
              <div className="chat-message bot typing">
                <span></span><span></span><span></span>
              </div>
            )}
          </div>
          <div className="chat-footer">
            <input
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend(input)}
            />
            <button onClick={() => handleSend(input)} aria-label="Send"><FaPaperPlane /></button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
