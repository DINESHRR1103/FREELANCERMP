import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Features from './components/Features';
import Bidding from './components/Bidding';
import FreelancerProfiles from './components/FreelancerProfiles';
import ChatModal from './components/ChatModal';
import ChatButton from './components/ChatButton';
import './homepage.css';

function home() {
    return (
        <div className="App">
            <Navbar />
            <Header />
            <Features />
            <Bidding />
            <FreelancerProfiles />
            <ChatModal />
            <ChatButton />
        </div>
    );
}

export default home;
