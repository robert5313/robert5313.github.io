import React from 'react'

const About = () => {

  return (
    <div className='about'>

{/* 
      <p>Our mission is to provide the best services to our clients</p>
      <h4>Our vision</h4>
      <p>Our vision is to be the best in the world</p>

      <h4>Our values</h4>
      <p>Our values are honesty, integrity and hard work</p>

      <h4>Our team</h4>
      <p>Our team is made up of the best people in the world</p>

      <h4>Our team manager</h4>
      <p>Our manager is rinked among the best in the world</p> */}

      <ul>
      <h1>About Us</h1>
      <p>Our mission is to provide the best services to our clients</p>
      <h4>Our Mission</h4>
      <p>Our mission is to be the best in the web development,<br></br> data science and machine learning</p>
      <h4>Our Vision</h4>
      <p>Our vision is to be the best in the world</p>
      <h4>Our team members</h4>
        <li>Joel Doe</li>
        <icon src="fa fa-user"></icon>
        <p>Director</p>
        <li>John Doe</li>
        <p>Manager</p>
        <li>James Doe</li>
        <p>Team Lead</p>
        <li>James Doe</li>
        <p>Lead</p>
      </ul>
      <img src='https://images.unsplash.com/photo-1542546068979-b6affb46ea8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' alt='picture '/>
      
      <ul>
        <h5>My name is Jane Doe</h5>
        <h5>Skills</h5>
        <li>Data science</li>
        <progress id="file" value="60" max="100"> 60% </progress>
        <li>Web development</li>
        <progress id="file" value="72" max="100"> 72% </progress>
        <li>Data analytics</li>
        <progress id="file" value="50" max="100"> 50% </progress>
        <li>Machine learning</li>
        <progress id="file" value="59" max="100"> 59% </progress>
        <li>Airtificial intelligence</li>
        <progress id="file" value="69" max="100"> 69% </progress>
      
      <p>I am a developer, web developer and a designer.<br></br>
        welcome to my website
      </p>

      <a href="path/to/cv.pdf" download="filename.pdf">Download CV</a>
</ul>
</div>
  )
}

export default About