import React, { useState, useEffect } from 'react';
import './message.css';

function Message() {
  const [currentChat, setCurrentChat] = useState('past');
  const [currentContact, setCurrentContact] = useState('');
  const [contacts, setContacts] = useState([]);
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');

  const pastChats = {
    Alice: [
      { sender: 'You', text: 'How is the project going?' },
      { sender: 'Alice', text: 'Everything is on track!' }
    ],
    Bob: [
      { sender: 'You', text: 'Are we still on schedule?' },
      { sender: 'Bob', text: 'Yes, we are.' }
    ]
  };

  const liveChats = {
    Charlie: [],
    Diana: []
  };

  const chatData = currentChat === 'past' ? pastChats : liveChats;

  useEffect(() => {
    loadContacts(chatData);
  }, [currentChat]);

  const loadContacts = (data) => {
    setContacts(Object.keys(data));
  };

  const loadMessages = (contact) => {
    setCurrentContact(contact);
    setMessages(chatData[contact] || []);
  };

  const sendMessage = () => {
    if (messageInput.trim() === '') return;

    const newMessage = { sender: 'You', text: messageInput };
    const updatedChats = { ...chatData, [currentContact]: [...messages, newMessage] };

    if (currentChat === 'past') {
      pastChats[currentContact] = updatedChats[currentContact];
    } else {
      liveChats[currentContact] = updatedChats[currentContact];
    }

    setMessages(updatedChats[currentContact]);
    setMessageInput('');
  };

  const goBackToContacts = () => {
    setCurrentContact('');
    loadContacts(chatData);
  };

  return (
    <div className="app">
    

      {/* Main Container */}


        {/* Chat Section */}
        <div className="chat-section">
          <h3>{currentContact ? `${currentContact}'s Chat` : currentChat === 'past' ? 'Past Project Chats' : 'Live Chats'}</h3>
          
          {!currentContact ? (
            <div className="contact-list">
              {contacts.map(contact => (
                <div
                  key={contact}
                  className="contact"
                  onClick={() => loadMessages(contact)}
                >
                  {contact}
                </div>
              ))}
            </div>
          ) : (
            <>
              <div className="messages">
                <div className="back-button" onClick={goBackToContacts}>
                  ← Back to Contacts
                </div>
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`message ${message.sender === 'You' ? 'sent' : 'received'}`}
                  >
                    {message.sender}: {message.text}
                  </div>
                ))}
              </div>
              <div className="chat-input">
                <input
                  type="text"
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  placeholder="Type your message..."
                />
                <button onClick={sendMessage}>Send</button>
              </div>
            </>
          )}
        </div>
      </div>

  );
}

export default Message;
