import logo from './logo.svg';
import './App.css';
import collegeLogo from './images/MSU.png';
import education from './images/education.png';
import work from './images/work.png';

function App() {
  return (
    <div>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;1,400&display=swap"
          rel="stylesheet"
        />
        {/* You don't need to import style.css here, React will handle it */}
      </head>
      <body>
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="clouds"></div>
        <div className="title">
          <h1>Shafkat Kabir</h1>
          <h2>Aspiring Software Engineer</h2>
        </div>

        <div className="content">
          <h3>About</h3>
          <h2>An Introduction to Shafkat Kabir.</h2>
          <div className='introduction'>
            <p>
              Hello! I'm Shafkat Kabir, an aspiring software engineer passionate
              about coding and technology. I love to solve problems and create
              innovative solutions. This is a brief introduction about myself.
              Feel free to explore more about my journey below.
            </p>
          </div>
          <h3>Education</h3>
          <h2>My Academic Journey.</h2>
          <div className="timeline-wrap">
            <div className="timeline-block">
              <div className="timeline-header">
                
                <h2><img src={collegeLogo} alt="College Logo"/>Michigan State University</h2>
                <p>Expected Graduation: May 2024</p>
              </div>
              <img src={education} alt="Separator" className="separator-img" />
              <div className="timeline-content">
                <h2>Bachelor of Science</h2>
                <p>Major: Computer Science</p>
                <p>GPA: 3.77</p>
                <p>Relevant Classes: Class 1, Class 2, Class 3</p>
              </div>
            </div>
          </div>
          <h3>Experience</h3>
          <h2>My Professional Career So Far.</h2>
          <div className="timeline-wrap">
            <div className="timeline-block">
              <div className="timeline-header">
                <h2>Rocket Mortgage</h2>
                <p>Summer 2023</p>
              </div>
              <img src={work} alt="Separator" className="separator-img" />
              <div className="timeline-content">
                <h2>Software Engineer Intern</h2>
                <p>Job Description</p>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
