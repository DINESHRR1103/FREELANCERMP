import React from 'react';
import './about.css';

function About() {
  return (
    <div className="about-container">
    

      <div className="about-content">
        <h1>About Us</h1>
        <p>
          Welcome to our Freelancer Marketplace, where we connect talented freelancers with clients seeking their skills.
          Our platform is dedicated to empowering individuals to find work, collaborate, and achieve great projects together.
        </p>
        <h2>Our Mission</h2>
        <p>
          Our mission is to provide a seamless experience for freelancers and clients to collaborate on meaningful projects.
          We believe in the power of remote work and strive to create opportunities for freelancers around the world.
        </p>

        <h2>Meet Our Team</h2>
        <div className="team">
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="John Doe" />
            <h3>DINESH R R </h3>
            <p>Founder & CEO</p>
          </div>
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Jane Smith" />
            <h3>INDHUJA D</h3>
            <p>Head of Operations</p>
          </div>
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Michael Brown" />
            <h3>DINU</h3>
            <p>Lead Developer</p>
          </div>
        </div>

        <h2>Our Values</h2>
        <ul>
          <li>Integrity: We believe in honest and transparent interactions.</li>
          <li>Innovation: We strive to provide cutting-edge solutions.</li>
          <li>Collaboration: Together, we can achieve great things.</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
