import React from 'react';

function Home() {
  return (
    <section style={{ textAlign: 'center' }}>
      <img src="/profile.jpg" alt="Profile" className="profile-img" />
      <h1>Hello, I'm <span style={{ color: '#f1c40f' }}>Dishank Arya</span> 👋</h1>
      <p style={{ fontSize: '18px', marginTop: '10px' }}>
        A passionate Computer Science Engineering undergraduate skilled in full-stack web development, AI/ML, and software engineering. I thrive on solving real-world problems through code and constantly exploring new technologies.
      </p>
      <a className="resume-btn" href="/Dishank_Arya_Resume.pdf" download>
        <i className="fas fa-download"></i> Download Resume
      </a>
    </section>
  );
}

export default Home;
