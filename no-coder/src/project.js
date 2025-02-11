import React, { useState, useRef } from 'react';
import './project.css';
import SignatureCanvas from 'react-signature-canvas';

function Project() {
  const [isCreatingProject, setIsCreatingProject] = useState(false);
  const [projects, setProjects] = useState([
    {
      title: 'Project Title 1',
      description: 'Description of project 1.',
      handler: 'Project Handler 1',
      customer: 'Customer 1',
      startDate: '2024-01-01',
      dueDate: '2024-02-01',
      amount: 1000,
      paymentType: 'Fixed',
      progress: 70,
      showDetails: false,
      clientSignature: '',
      freelancerSignature: ''
    },
  ]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    handler: '',
    customer: '',
    startDate: '',
    dueDate: '',
    amount: '',
    paymentType: '',
  });
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  const clientSignatureRef = useRef({});
  const freelancerSignatureRef = useRef({});

  // Predefined terms and conditions
  const termsText = [
    "1. Payment will be made upon completion of the project.",
    "2. The client can request up to two revisions after the project submission.",
    "3. The freelancer agrees to complete the project by the specified due date.",
    "4. The client will provide necessary resources and information for project completion.",
    "5. The freelancer retains the right to display the project in their portfolio.",
    "6. Both parties agree to maintain confidentiality of project-related data.",
    "7. Any disputes arising from this contract will be resolved through negotiation.",
    "8. The freelancer is responsible for delivering high-quality work as per the agreed specifications."
  ];

  const toggleCreateProject = () => {
    setIsCreatingProject(!isCreatingProject);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!termsAccepted) {
      alert("Please accept the terms and conditions to proceed.");
      return;
    }

    const clientSignature = clientSignatureRef.current.getTrimmedCanvas().toDataURL('image/png');
    const freelancerSignature = freelancerSignatureRef.current.getTrimmedCanvas().toDataURL('image/png');

    setProjects([
      ...projects,
      {
        ...formData,
        progress: 0,
        showDetails: false,
        clientSignature,
        freelancerSignature
      },
    ]);
    setFormData({
      title: '',
      description: '',
      handler: '',
      customer: '',
      startDate: '',
      dueDate: '',
      amount: '',
      paymentType: '',
    });
    setTermsAccepted(false);
    toggleCreateProject();
  };

  const toggleProjectDetails = (index) => {
    const updatedProjects = [...projects];
    updatedProjects[index].showDetails = !updatedProjects[index].showDetails;
    setProjects(updatedProjects);
  };

  return (
    <div className="container">
      <h1>Projects</h1>
      <button onClick={toggleCreateProject}>Create New Project</button>

      {isCreatingProject && (
        <div className="create-project">
          <h2>Create New Project</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Project Title"
              required
            />
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              placeholder="Project Description"
              required
            />
            <input
              type="text"
              name="handler"
              value={formData.handler}
              onChange={handleChange}
              placeholder="Handler Name"
              required
            />
            <input
              type="text"
              name="customer"
              value={formData.customer}
              onChange={handleChange}
              placeholder="Customer Name"
              required
            />
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              required
            />
            <input
              type="date"
              name="dueDate"
              value={formData.dueDate}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              placeholder="Amount"
              required
            />
            <input
              type="text"
              name="paymentType"
              value={formData.paymentType}
              onChange={handleChange}
              placeholder="Payment Type"
              required
            />

            <div className="terms">
              <input
                type="checkbox"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
                required
              />
              I accept the <span onClick={() => setShowTerms(!showTerms)} className="terms-link">terms and conditions</span>.
            </div>

            {showTerms && (
              <div className="terms-text">
                <h3>Terms and Conditions</h3>
                <ul>
                  {termsText.map((term, index) => (
                    <li key={index}>{term}</li>
                  ))}
                </ul>
              </div>
            )}

            <h3>Client Signature</h3>
            <SignatureCanvas
              ref={clientSignatureRef}
              penColor="black"
              canvasProps={{ className: 'signature-canvas' }}
            />

            <h3>Freelancer Signature</h3>
            <SignatureCanvas
              ref={freelancerSignatureRef}
              penColor="black"
              canvasProps={{ className: 'signature-canvas' }}
            />

            <button type="submit">Submit Project</button>
          </form>
        </div>
      )}

      <div className="projects">
        <h2>Existing Projects</h2>
        {projects.map((project, index) => (
          <div className="project" onClick={() => toggleProjectDetails(index)} key={index}>
            <h3>{project.title}</h3>
            {project.showDetails && (
              <div className="details">
                <p><strong>Description:</strong> {project.description}</p>
                <p><strong>Handler:</strong> {project.handler}</p>
                <p><strong>Customer:</strong> {project.customer}</p>
                <p><strong>Start Date:</strong> {project.startDate}</p>
                <p><strong>Due Date:</strong> {project.dueDate}</p>
                <p><strong>Amount:</strong> ${project.amount}</p>
                <h3>Client Signature:</h3>
                <img src={project.clientSignature} alt="Client Signature" className="signature-preview" />
                <h3>Freelancer Signature:</h3>
                <img src={project.freelancerSignature} alt="Freelancer Signature" className="signature-preview" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
