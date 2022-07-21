import React from 'react'
import Card from 'react-bootstrap/Card'
import selfie from './selfie.jpg'

function GithubCard(){
    return (
        <div className="pic">
            <Card style={{ width: "20rem" }}>
                <Card.Img variant="top" src={selfie} />
                <Card.Body>
                    <Card.Title>Spencer Krull</Card.Title>
                    <Card.Text>Musician and software developer in training</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default GithubCard