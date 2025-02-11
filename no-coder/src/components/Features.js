import React from 'react';

function Features() {
    return (
        <div className="features">
            <div className="feature">
                <a href="aimatching.html">
                    <img src="https://img.icons8.com/ios-filled/80/3498db/artificial-intelligence.png" alt="AI Matching" />
                    <h3>AI Matching</h3>
                    <p>Connect with the right freelancer based on your project needs and budget.</p>
                </a>
            </div>
            <div className="feature">
                <a href="messages.html">
                    <img src="https://img.icons8.com/ios-filled/80/e74c3c/chat.png" alt="Live Chat" />
                    <h3>Live Chat</h3>
                    <p>Communicate directly with freelancers to clarify project requirements.</p>
                </a>
            </div>
            <div className="feature">
                <a href="budget.html">
                    <img src="https://img.icons8.com/ios-filled/80/2ecc71/budget.png" alt="Budget Control" />
                    <h3>Budget Control</h3>
                    <p>Post your project and receive bids from freelancers within your budget.</p>
                </a>
            </div>
        </div>
    );
}

export default Features;
