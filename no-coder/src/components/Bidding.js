import React from 'react';

function Bidding() {
    return (
        <div className="bidding">
            <h2>Live Bidding</h2>
            {['Web Development Project', 'Graphic Design Project'].map((jobTitle, index) => (
                <div className="job" key={index}>
                    <h3>{jobTitle}</h3>
                    <div className="bid-box">
                        <input type="text" className="bid-input" placeholder="Enter your bid" />
                        <button>Submit Bid</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Bidding;
