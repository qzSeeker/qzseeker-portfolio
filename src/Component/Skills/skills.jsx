import './skills.scss'

const Skills = () => {
  return (
    <>
      <div className="skills">
        <div className="head">
          <h1>Skills</h1>
          <p>
            I'm a skilled front-end developer with a passion for creating
            beautiful and user-friendly websites and web applications. I'm
            proficient in a variety of front-end technologies, including HTML,
            CSS, SCSS, JavaScript, ReactJS, and Bootstrap. I'm also experienced
            in using Git for version control and collaborating with other
            developers.
          </p>
        </div>

        <div className="skills-container">
          <div className="skill skill-1">
            <p>HTML</p>
          </div>
          <div className="skill skill-2">
            <p>CSS</p>
          </div>
          <div className="skill skill-3">
            <p>SCSS</p>
          </div>
          <br />
          <div className="skill skill-4">
            <p>Bootstrap</p>
          </div>
          <div className="skill skill-5">
            <p>JavaScript</p>
          </div>
          <div className="skill skill-6">
            <p>ReactJS</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills
