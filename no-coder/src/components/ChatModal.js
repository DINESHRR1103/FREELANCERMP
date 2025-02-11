import React, { useState } from 'react';

function ChatModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const handleSend = () => {
        setMessages([...messages, input]);
        setInput('');
    };

    return isOpen ? (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={() => setIsOpen(false)}>&times;</span>
                <h2>Chat with Freelancer</h2>
                <div className="chat-messages">
                    {messages.map((msg, index) => (
                        <div key={index} className="chat-message">{msg}</div>
                    ))}
                </div>
                <input value={input} onChange={(e) => setInput(e.target.value)} />
                <button onClick={handleSend}>Send</button>
            </div>
        </div>
    ) : null;
}

export default ChatModal;
