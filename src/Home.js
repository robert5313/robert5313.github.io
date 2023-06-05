import React from 'react'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import profile from "./assets/images/jfirst.jpg";

const Home = () => {
  return (
    <>
        <box className="box">
        <Card.Img className="card-img" variant="top" src={profile} />
        
        <Card.Body>
         <Card.Title className="title">I'M John Doe</Card.Title>
          <Card.Text className="text">Learning</Card.Text>

          <box className="details">
            <h4 className="head-h4">Opportunities to learn and grow</h4>
            <ul>
            <li><a href="https://www.react.org/">React</a></li>
            <li><a href="https://www.w3schools.com" >w3schools</a></li>
            
            
            </ul>


            <p>
              Blogging is a great way to express yourself and share your
              thoughts and ideas with the world. It can be an inspiring and
              rewarding experience, but it can also be a lot of work.
            </p>
          </box>
        
        </Card.Body>
        <div className="list-group-flush">
          <ListGroup className="success-title">
          <ListGroup.Item className="first">For Success</ListGroup.Item>
          <ul>
          <li>Opportunities to learn and grow</li>
          <li>Asafeandcomfortableworkingenvironment</li>
          <li>Opportunities to collaborate with other developers</li>
          </ul>
          </ListGroup>
        
        <Card.Body>
          <Card.Link to="#">Card Link</Card.Link>
          <Card.Link to="#">Another Link</Card.Link>
        </Card.Body>
        </div>
      </box>

      <Card>
        <Card.Header as="h5">Featured</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>


      <div className="card">
        <h4>My Experience with Python</h4>
        <img src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80" alt="A laptop picture" />

      <p>
        I have been working with Python for over 5 years now. It has become one
        of my favorite scripting languages to use in my projects. It is a
        versatile language that can be used to create simple scripts or complex
        web applications. It has a wide range of libraries and frameworks that
        make it easy to use. I have created projects ranging from simple scripts
        to complex web applications using Python.
      </p>
      </div>
      <div>
        <h3>Developer path way</h3>
        <img src="https://images.unsplash.com/photo-1566837945700-30057527ade0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"  alt="An image of developer portal"/>
      </div>
    </>
  )
}

export default Home