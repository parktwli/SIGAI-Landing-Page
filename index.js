// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { motion } from 'framer-motion';
import { MagicUI } from 'magicui';

const App = () => {
  return (
    <div>
      <header>
        <nav className="nav">
          <ul>
            <li><a href="#" className="nav-link">Home</a></li>
            <li><a href="#" className="nav-link">About</a></li>
            <li><a href="#" className="nav-link">Contact</a></li>
          </ul>
          <div className="logo">
            <img src="sigai-logo.png" alt="SIGAI Logo" />
          </div>
        </nav>
      </header>
      <main>
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="hero"
        >
          <div className="hero-content">
            <h1>Welcome to SIGAI</h1>
            <p>A brief introduction to SIGAI, a community of researchers and engineers working together to advance the field of Artificial Intelligence.</p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="btn btn-primary"
            >
              Learn More
            </motion.button>
          </div>
          <div className="hero-image">
            <img src="hero-image.jpg" alt="Hero Image" />
          </div>
        </motion.section>
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="features"
        >
          <h2>Features</h2>
          <ul>
            <li>
              <i className="fas fa-robot" />
              <h3>Research and Development</h3>
              <p>Collaborate with experts in AI research and development to advance the field.</p>
            </li>
            <li>
              <i className="fas fa-code" />
              <h3>Open-Source Projects</h3>
              <p>Contribute to open-source projects and build innovative AI solutions.</p>
            </li>
            <li>
              <i className="fas fa-users" />
              <h3>Community Engagement</h3>
              <p>Join a community of like-minded individuals passionate about AI and its applications.</p>
            </li>
          </ul>
        </motion.section>
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="call-to-action"
        >
          <h2>Get Started</h2>
          <p>Join the SIGAI community today and start contributing to the advancement of Artificial Intelligence.</p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="btn btn-primary"
          >
            Sign Up
          </motion.button>
        </motion.section>
      </main>
      <footer>
        <p>&copy; 2024 SIGAI</p>
        <ul>
          <li>
            <a href="#" className="social-link">
              <i className="fab fa-twitter" />
            </a>
          </li>
          <li>
            <a href="#" className="social-link">
              <i className="fab fa-linkedin" />
            </a>
          </li>
          <li>
            <a href="#" className="social-link">
              <i className="fab fa-github" />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
const hero = document.querySelector('.hero');

hero.addEventListener('mouseover', () => {
  hero.style.backgroundPosition = '100% 100%';
});

hero.addEventListener('mouseout', () => {
  hero.style.backgroundPosition = '0% 100%';
});