import React, { useState } from 'react';
import './matching.css';

const AIMatching = () => {
  const [projectType, setProjectType] = useState('');
  const [budget, setBudget] = useState('');
  const [skill, setSkill] = useState('');
  const [results, setResults] = useState([]);

  // Sample freelancers for demonstration
  const freelancers = [
    { name: 'John Doe', skill: 'Web Development', projects: 'Built multiple e-commerce websites', rating: 4.8 },
    { name: 'Jane Smith', skill: 'Graphic Design', projects: 'Created logos and branding for various clients', rating: 4.6 },
    { name: 'Mike Johnson', skill: 'Content Writing', projects: 'Wrote articles for leading tech blogs', rating: 4.7 },
    { name: 'Emily Davis', skill: 'Digital Marketing', projects: 'Ran successful campaigns for startups', rating: 4.9 }
  ];

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Filter freelancers based on selected skill
    const matches = freelancers.filter(
      (freelancer) =>
        freelancer.skill.toLowerCase() === skill.toLowerCase()
    );

    setResults(matches);
  };

  return (
    <div className="ai-matching-container">
    
      <div className="container">
        <h1>AI Matching</h1>
        <form onSubmit={handleSubmit}>
          {/* Project Type */}
          <div className="question">
            <p>What type of project are you looking for?</p>
            <input
              type="text"
              value={projectType}
              onChange={(e) => setProjectType(e.target.value)}
              required
            />
          </div>

          {/* Budget */}
          <div className="question">
            <p>What is your budget range?</p>
            <input
              type="text"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              required
            />
          </div>

          {/* Skills */}
          <div className="question">
            <p>Select the required skills:</p>
            <select
              value={skill}
              onChange={(e) => setSkill(e.target.value)}
              required
            >
              <option value="">Select a skill</option>
              <option value="Web Development">Web Development</option>
              <option value="Graphic Design">Graphic Design</option>
              <option value="Content Writing">Content Writing</option>
              <option value="Digital Marketing">Digital Marketing</option>
            </select>
          </div>

          <button type="submit">Find Matches</button>
        </form>

        {/* Results */}
        <div className="results">
          {results.length > 0 ? (
            results.map((freelancer, index) => (
              <p key={index}>
                {freelancer.name} - {freelancer.projects} (Rating: {freelancer.rating})
              </p>
            ))
          ) : (
            <p>No freelancers found matching your criteria.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIMatching;
