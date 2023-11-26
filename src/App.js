import './App.css';
import collegeLogo from './images/MSU.png';
import education from './images/education.png';
import work from './images/work.png';
import data from './data/experience.json';

function App() {
  return (
    <div>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;1,400&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
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

        <div className="about-container">
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
        </div>
        <div className='education'>
          <h3>Education</h3>
          <h2>My Academic Journey.</h2>
          <div className="timeline-wrap">
            <div className="timeline-block">
              <div className="timeline-header">
                <h2>Michigan State University</h2>
                <p>Expected Graduation: May 2024</p>
              </div>
              <div className="timeline-ico">
                <img src={education} alt="Separator" />
              </div>
              <div className="timeline-content">
                <h2>Bachelor of Science</h2>
                <p>Major: Computer Science</p>
                <p>GPA: 3.77</p>
                <p>Major GPA: 3.81</p>
              </div>
            </div>
          </div>
        </div>
        <div className='experience'>
          <h3>Experience</h3>
          <h2>My Professional Career.</h2>
          <div className="timeline-wrap">
            {data.map((item) => (
              <div className="timeline-block">
                <div className="timeline-header">
                  <h2>{item.company}</h2>
                  <p>{item.dates}</p>
                </div>
                <div className='timeline-ico'>
                  <img src={work} alt="Separator" />
                </div>
                <div className="timeline-content">
                  <h2>{item.title}</h2>
                  {item.description.map((i) => (
                    <li>{i}</li>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div class="skills-container">
          <div className="skills">
            <h3>Skills</h3>
            <h2>My Skills As A Developer.</h2>
            <div className='skills-left'>
              <h4>Technical Skills</h4>
              <ul>
                <li>
                  <span class="skill-name">C++</span>
                  <div>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                  </div>
                </li>
                <li>
                  <span class="skill-name">Python</span>
                  <div>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                  </div>
                </li>
                <li>
                  <span class="skill-name">C#/.NET</span>
                  <div>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                  </div>
                </li>
                <li>
                  <span class="skill-name">JavaScript</span>
                  <div>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                  </div>
                </li>
                <li>
                  <span class="skill-name">C</span>
                  <div>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                  </div>
                </li>
                <li>
                  <span class="skill-name">React.JS</span>
                  <div>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                  </div>
                </li>
                <li>
                  <span class="skill-name">Angular</span>
                  <div>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                  </div>
                </li>
                <li>
                  <span class="skill-name">HTML/CSS</span>
                  <div>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                  </div>
                </li>
                <li>
                  <span class="skill-name">GIT</span>
                  <div>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                  </div>
                </li>
                <li>
                  <span class="skill-name">MySQL</span>
                  <div>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                  </div>
                </li>
              </ul>
            </div>
            <div className='skills-right'>
              <h4>Services/Tools</h4>
              <ul>
                <li>
                  <span class="skill-name">AWS</span>
                  <div>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                  </div>
                </li>
                <li>
                  <span class="skill-name">Google Cloud</span>
                  <div>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                  </div>
                </li>
                <li>
                  <span class="skill-name">Linux</span>
                  <div>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                  </div>
                </li>
                <li>
                  <span class="skill-name">Hugging Face</span>
                  <div>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                  </div>
                </li>
                <li>
                  <span class="skill-name">Docker</span>
                  <div>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                  </div>
                </li>
                <li>
                  <span class="skill-name">Terraform</span>
                  <div>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </body>
    </div>
  );
}

export default App;
