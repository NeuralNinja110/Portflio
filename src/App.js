import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <nav className="navbar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#achievements">Achievements</a></li>
          <li><a href="#certifications">Certifications</a></li>
          <li><a href="#skills">Skills</a></li>
        </ul>
      </nav>

      <header id="home" className="header">
        <h1>Rahul Ashok</h1>
        <p className="contact-info">
          <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer">GitHub</a> | 
          <a href="https://www.linkedin.com/in/your-linkedin-username" target="_blank" rel="noopener noreferrer">LinkedIn</a> | 
          <a href="mailto:abcrahul111@gmail.com">abcrahul111@gmail.com</a> | 
          +91-6382038170
        </p>
      </header>

      <main>
        <section id="education" className="section">
          <h2>Education</h2>
          <div className="education-item">
            <strong>Indian Institute of Technology Madras, Chennai</strong>
            <p>Bachelor of Science in Data Science and Application</p>
            <p>January 2023 - Present | CGPA: 8.00* | Batch of 2027</p>
          </div>
          <div className="education-item">
            <strong>Vellore Institute of Technology, Chennai</strong>
            <p>Bachelor of Technology in Computer Science Engineering</p>
            <p>Specialisation in Artificial Intelligence and Machine Learning</p>
            <p>August 2022 - Present | CGPA: 8.66* | Batch of 2026</p>
          </div>
          <div className="education-item">
            <strong>SBOA School and Junior College, Chennai</strong>
            <p>Grade 10: 92% | Grade 12: 90%</p>
            <p>July 2022</p>
          </div>
        </section>

        <section id="experience" className="section">
          <h2>Experience</h2>
          <div className="experience-item">
            <strong>Project Intern - FLSmidth VIT Chennai</strong>
            <p>June 2023 – Present</p>
            <ul>
              <li>Gained hands-on experience in industrial projects, focusing on image processing and 3D photogrammetry.</li>
              <li>Developed skills in team collaboration and management while working with tools such as Meshroom, PyMeshLab, CV2, and Vision Transformers.</li>
            </ul>
          </div>
          <div className="experience-item">
            <strong>Competitive Programmer - Microsoft Innovations Club VITC</strong>
            <p>April 2023 – Present</p>
            <ul>
              <li>Gained competitive programming experience on platforms like Leetcode, CodeChef, and Codeforces, engaging in collaborative learning and knowledge sharing.</li>
              <li>Developed hands-on skills in generative AI and machine learning using Azure through Microsoft Learn.</li>
            </ul>
          </div>
        </section>

        <section id="projects" className="section">
          <h2>Projects</h2>
          <div className="project-item">
            <strong>Smart Bike Jacket</strong>
            <p>Developed the Smart Bike Jacket with LED arrows and joystick control for night-time bikers to indicate direction using Arduino.</p>
            <p>Integrated an SOS system sending live location texts to contacts via a custom Android app, using MIT App Inventor, connected over Bluetooth with Arduino board.</p>
          </div>
          <div className="project-item">
            <strong>Facial-Emotion based Song Recommendation System</strong>
            <p>Developed a facial emotion-based song recommendation web app using Spotify API, random forest classification, and OpenCV 2.</p>
            <p>The system recognizes real-time facial expressions and recommends mood-matching songs from Spotify, enhancing the user's listening experience.</p>
          </div>
          <div className="project-item">
            <strong>Multilingual Speech to Speech Generation and Translation App</strong>
            <p>Developed a speech-to-speech translation and text generation app using Ollama's OpenAI Whisper model, Google's text-to-speech modules, Google's Gemini, and PyTorch.</p>
            <p>Built the app in 36 hours, featuring translation and text generation in multiple languages, using Streamlit for the front end and hosted online.</p>
          </div>
          <div className="project-item">
            <strong>Vehicle Insurance Management System</strong>
            <p>Developed a vehicle management system with a MySQL database and a Streamlit front-end, featuring forms for vehicle registration, policy management, and owner switching.</p>
            <p>Conducted a thorough study and created ER diagrams to systematically design and implement the solution.</p>
          </div>
        </section>

        <section id="achievements" className="section">
          <h2>Achievements</h2>
          <ul>
            <li>Finalist of IEEE YESIST 2024 - March 2024</li>
            <li>Finalists at K-Factorial Hackathon, College of Engineering Guindy - February 2024</li>
            <li>2nd Runner Up at Datathon, VIT Chennai - January 2024</li>
            <li>Track winners at PEC Hacks, Panimalar Engineering College, Chennai - January 2024</li>
            <li>Runner Up at DataQuest Hackathon, VIT Chennai - September 2023</li>
          </ul>
        </section>

        <section id="certifications" className="section">
          <h2>Certifications</h2>
          <ul>
            <li>Supervised Machine Learning: Regression and Classification - Stanford University & Deep Learning AI</li>
            <li>Microsoft Azure AI-900 - Microsoft</li>
            <li>Entrepreneurship Essentials - NPTEL</li>
          </ul>
        </section>

        <section id="skills" className="section">
          <h2>Skills</h2>
          <h3>Technical Skills</h3>
          <p>Machine Learning, Data Science and Analytics, Image Processing, Cloud Computing, Web Development, Photogrammetry, Generative AI.</p>
          <h3>Non-Technical Skills</h3>
          <p>Team Collaboration, Problem-Solving, Time Management</p>
          <h3>Web Development</h3>
          <p>HTML, CSS, JavaScript, React, Streamlit, Gradio</p>
          <h3>Database Management System</h3>
          <p>MySQL, PostgreSQL, Pinecone, MongoDB</p>
          <h3>Machine Learning</h3>
          <p>Pandas and Numpy, Scikit, TensorFlow, Vertex AI, Seaborn & Matplotlib</p>
          <h3>Languages</h3>
          <p>Java, Python, C & C++, R</p>
          <h3>Cloud Platforms</h3>
          <p>Azure, Google Cloud Platform</p>
          <h3>Platforms</h3>
          <p>Kaggle, Leetcode, Codechef, Microsoft Learn, Google Cloud Skill</p>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2024 Rahul Ashok. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
