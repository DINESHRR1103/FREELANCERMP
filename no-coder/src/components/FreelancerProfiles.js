import React from 'react';

const freelancers = [
    { name: 'John Doe', profession: 'Web Developer', description: '5 years experience in creating responsive, SEO-optimized websites.' },
    { name: 'Jane Smith', profession: 'Graphic Designer', description: 'Specialized in branding, logo design, and print media.' },
    { name: 'Mike Johnson', profession: 'Content Writer', description: 'Expert in SEO and content marketing strategies.' },
    { name: 'Emily Davis', profession: 'Mobile App Developer', description: 'Creating user-friendly mobile applications.' },
    { name: 'Sarah Wilson', profession: 'Digital Marketing Expert', description: 'Helping brands increase their online presence.' }
];

function FreelancerProfiles() {
    return (
        <div className="freelancers">
            <h2>Freelancer Showcase</h2>
            <div className="profile-grid">
                {freelancers.map((freelancer, index) => (
                    <div className="profile-card" key={index}>
                        <div className="card-content">
                            <div className="profile-front">
                                <h3>{freelancer.name}</h3>
                                <p>{freelancer.profession}</p>
                            </div>
                            <div className="profile-back">
                                <p>{freelancer.description}</p>
                                <button>Contact</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FreelancerProfiles;
