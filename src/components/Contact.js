import React from 'react';

function Contact() {
  return (
    <section id="contact" style={{ padding: '2rem 1rem', textAlign: 'center' }}>
      <style>{`
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          max-width: 500px;
          margin: 0 auto 2rem;
        }

        .contact-form input,
        .contact-form textarea {
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 8px;
          font-size: 16px;
        }

        .contact-form button {
          background-color: #f1c40f;
          color: #000;
          padding: 10px;
          border: none;
          border-radius: 8px;
          font-weight: bold;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .contact-form button:hover {
          background-color: #d4ac0d;
        }

        a.custom-link {
          color: #f1c40f;
          text-decoration: none;
          font-weight: bold;
        }

        a.custom-link:visited {
          color: green;
        }

        a.custom-link:hover {
          text-decoration: underline;
        }

        footer {
          margin-top: 2rem;
          font-size: 14px;
          color: #777;
        }
      `}</style>

      <h2>Contact</h2>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea rows="4" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>

      <p>
        Or email me at:{' '}
        <a href="mailto:dish.arya7@gmail.com" className="custom-link">
          dish.arya7@gmail.com
        </a>
      </p>

      <p>
        <a
          href="https://linkedin.com/in/dishank-arya"
          target="_blank"
          rel="noopener noreferrer"
          className="custom-link"
        >
          <i className="fab fa-linkedin"></i> LinkedIn
        </a>{' '}
        |{' '}
        <a
          href="https://github.com/DishArya"
          target="_blank"
          rel="noopener noreferrer"
          className="custom-link"
        >
          <i className="fab fa-github"></i> GitHub
        </a>
      </p>

      <footer>© 2025 Dishank Arya | Built with 💙 React</footer>
    </section>
  );
}

export default Contact;
