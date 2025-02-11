import React, { useState, useEffect } from 'react';
import './account.css';
function Account() {
  const [profileImage, setProfileImage] = useState('default-profile.jpg');

  // Function to preview the uploaded image
  const previewImage = (event) => {
    const reader = new FileReader();
    reader.onload = () => setProfileImage(reader.result);
    reader.readAsDataURL(event.target.files[0]);
  };

  // Function to handle contacting project handlers
  const contactHandler = (handler) => {
    alert(`Contacting ${handler}...`);
    window.location.href = '/messages';
  };

  // Function to handle settings buttons
  const openSettings = (setting) => {
    alert(`${setting} feature is under construction!`);
  };

  // Animate progress bars on page load
  useEffect(() => {
    const progressBars = document.querySelectorAll('.progress');
    progressBars.forEach((progress) => {
      const width = progress.getAttribute('data-width');
      progress.style.width = '0%'; // Start at 0%
      setTimeout(() => {
        progress.style.width = width; // Animate to the desired width
      }, 100);
    });
  }, []);

  return (
    <div className="account-container">
    

      <div className="container">
        <h1>Account Details</h1>

        {/* Profile Photo */}
        <div className="profile-photo">
          <img src={profileImage} alt="Profile" id="profileImage" />
          <input type="file" accept="image/*" onChange={previewImage} />
        </div>

        {/* User Details */}
        <div className="details">
          <h2>User Information</h2>
          <p>Email: user@example.com</p>
          <p>Phone: +1234567890</p>
          <p>Projects Posted: 5</p>
        </div>

        {/* Live Projects */}
        <div className="projects">
          <h2>Live Projects</h2>

          {/* Project 1 */}
          <div className="project">
            <h4>Project Title 1</h4>
            <p>Description of project 1.</p>
            <div className="progress-bar">
              <div className="progress" data-width="70%"></div>
            </div>
            <p>Completion: 70%</p>
            <button onClick={() => contactHandler('Project Handler 1')}>Contact Project Handler</button>
          </div>

          {/* Project 2 */}
          <div className="project">
            <h4>Project Title 2</h4>
            <p>Description of project 2.</p>
            <div className="progress-bar">
              <div className="progress" data-width="50%"></div>
            </div>
            <p>Completion: 50%</p>
            <button onClick={() => contactHandler('Project Handler 2')}>Contact Project Handler</button>
          </div>
        </div>

        {/* Settings Section */}
        <div className="settings">
          <h2>Settings</h2>
          <button onClick={() => openSettings('Change Password')}>Change Password</button>
          <button onClick={() => openSettings('Manage Notifications')}>Manage Notifications</button>
          <button onClick={() => openSettings('Update Personal Information')}>Update Personal Information</button>
          <button onClick={() => openSettings('Manage Payment Methods')}>Manage Payment Methods</button>
          <button onClick={() => openSettings('Privacy Settings')}>Privacy Settings</button>
        </div>
      </div>
    </div>
  );
};
export default Account;
