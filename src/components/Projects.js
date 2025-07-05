import React from 'react';

function Projects() {
  return (
    <section id="projects" style={{ padding: '2rem 1rem', maxWidth: '900px', margin: '0 auto' }}>
      <style>{`
        .custom-link {
          color: #f1c40f;
          text-decoration: none;
          font-weight: bold;
        }

        .custom-link:visited {
          color: #2ecc71;
        }

        .custom-link:hover {
          text-decoration: underline;
        }

        .project {
          margin-bottom: 2rem;
          padding: 1rem;
          border: 1px solid #ccc;
          border-radius: 12px;
          background-color:rgb(29, 27, 27);
        }

        .project h3 {
          margin-bottom: 0.5rem;
        }

        .project p {
          font-size: 16px;
          line-height: 1.5;
        }
      `}</style>

      <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '2rem' }}>Projects</h2>

      <div className="project">
        <h3>🎯 Sports Event Management System</h3>
        <p>
          A dynamic web-based platform built using <strong>PHP, MySQL, and JavaScript</strong>, designed to simplify the organization of college sports events. 
          The system facilitates smooth <strong>event registration</strong>, <strong>admin control</strong>, and real-time <strong>participant tracking</strong>. 
          It includes role-based access for admins and participants and features intuitive dashboards for event insights.
        </p>
        <a
          href="https://sportsregis.free.nf"
          target="_blank"
          rel="noopener noreferrer"
          className="custom-link"
        >
          🔗 Click Here To See Live Project
        </a>
      </div>

      <div className="project">
        <h3>🤖 Bollywood Lookalike Detection</h3>
        <p>
          A fun and engaging AI-powered application built using <strong>Python, OpenCV, and scikit-learn</strong>. This system captures facial features from user-uploaded images and compares them to a dataset of Bollywood celebrities using facial recognition algorithms. 
          It showcases the application of <strong>machine learning in computer vision</strong> with an intuitive and user-friendly interface.
        </p>
      </div>

      <div className="project">
        <h3>🌐 Personal Portfolio Website</h3>
        <p>
          A fully responsive personal portfolio website built using <strong>React and CSS</strong>, designed to showcase skills, education, and project work. 
          The website includes sections like About, Projects, Resume, and Contact, and is deployed on <strong>GitHub Pages</strong> for global access.
        </p>
      </div>
    </section>
  );
}

export default Projects;
