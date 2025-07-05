import React from 'react';

function Skills() {
  return (
    <section id="skills" style={{ padding: '2rem 1rem', maxWidth: '900px', margin: '0 auto' }}>
      <style>{`
        .skills-section {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 1rem;
          margin-top: 1.5rem;
        }

        .skills-box {
          background-color:rgb(46, 45, 45);
          border-radius: 10px;
          padding: 1rem;
          text-align: center;
          font-size: 16px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.1);
          transition: transform 0.3s ease;
        }

        .skills-box:hover {
          transform: translateY(-5px);
        }

        .skills-box i {
          font-size: 24px;
          margin-bottom: 0.5rem;
          display: block;
        }
      `}</style>

      <h2 style={{ textAlign: 'center', fontSize: '2rem' }}>Skills</h2>

      <h3 style={{ marginTop: '1.5rem' }}>💻 Technical Skills</h3>
      <div className="skills-section">
        <div className="skills-box">
          <i className="fab fa-python"></i>
          Python
        </div>
        <div className="skills-box">
          <i className="fas fa-coffee"></i>
          Java
        </div>
        <div className="skills-box">
          <i className="fas fa-network-wired"></i>
          Data Structures & Algorithms (DSA)
        </div>
        <div className="skills-box">
          <i className="fab fa-js-square"></i>
          JavaScript
        </div>
        <div className="skills-box">
          <i className="fab fa-react"></i>
          React.js
        </div>
        <div className="skills-box">
          <i className="fas fa-code"></i>
          PHP
        </div>
        <div className="skills-box">
          <i className="fas fa-database"></i>
          MySQL
        </div>
        <div className="skills-box">
          <i className="fas fa-brain"></i>
          Machine Learning
        </div>
        <div className="skills-box">
          <i className="fas fa-robot"></i>
          OpenCV
        </div>
        <div className="skills-box">
          <i className="fab fa-github"></i>
          Git & GitHub
        </div>
      </div>

      <h3 style={{ marginTop: '2rem' }}>🧠 Soft Skills</h3>
      <div className="skills-section">
        <div className="skills-box">
          <i className="fas fa-users"></i>
          Leadership
        </div>
        <div className="skills-box">
          <i className="fas fa-comments"></i>
          Communication
        </div>
        <div className="skills-box">
          <i className="fas fa-lightbulb"></i>
          Problem Solving
        </div>
        <div className="skills-box">
          <i className="fas fa-tasks"></i>
          Time Management
        </div>
        <div className="skills-box">
          <i className="fas fa-handshake"></i>
          Team Collaboration
        </div>
      </div>
    </section>
  );
}

export default Skills;
